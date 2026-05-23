export const DEFAULT_SDK_VERSION = '2.37.0';
export const DEFAULT_CSS_LINK = `https://g.alicdn.com/apsara-media-box/imp-web-player/${DEFAULT_SDK_VERSION}/skins/default/aliplayer-min.css`;
export const DEFAULT_SCRIPT_SRC = `https://g.alicdn.com/apsara-media-box/imp-web-player/${DEFAULT_SDK_VERSION}/aliplayer-min.js`;

const scriptLoadPromises = new Map<string, Promise<void>>();

export function getCssLinkByVersion(version: string): string {
    return `https://g.alicdn.com/apsara-media-box/imp-web-player/${version}/skins/default/aliplayer-min.css`;
}

export function getScriptSrcByVersion(version: string): string {
    return `https://g.alicdn.com/apsara-media-box/imp-web-player/${version}/aliplayer-min.js`;
}

function ensureStylesheet(cssLink: string): void {
    if (!cssLink) return;

    const existed = document.querySelector<HTMLLinkElement>(`link[data-vue-aliplayer-v2-css="${cssLink}"]`);
    if (existed) return;

    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = cssLink;
    link.dataset.vueAliplayerV2Css = cssLink;
    document.head.appendChild(link);
}

function ensureScript(scriptSrc: string, globalName?: string): Promise<void> {
    if (!scriptSrc) return Promise.resolve();
    if (globalName && window[globalName]) return Promise.resolve();
    if (scriptLoadPromises.has(scriptSrc)) return scriptLoadPromises.get(scriptSrc) as Promise<void>;

    const existed = document.querySelector<HTMLScriptElement>(`script[data-vue-aliplayer-v2-js="${scriptSrc}"]`);
    if (existed) {
        const loadPromise = new Promise<void>((resolve, reject) => {
            if (existed.dataset.vueAliplayerV2Loaded === 'true') {
                resolve();
                return;
            }
            existed.addEventListener('load', () => {
                existed.dataset.vueAliplayerV2Loaded = 'true';
                resolve();
            }, { once: true });
            existed.addEventListener('error', () => reject(new Error(`Failed to load Aliplayer SDK: ${scriptSrc}`)), { once: true });
        });
        scriptLoadPromises.set(scriptSrc, loadPromise);
        return loadPromise;
    }

    const loadPromise = new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = scriptSrc;
        script.dataset.vueAliplayerV2Js = scriptSrc;
        script.addEventListener('load', () => {
            script.dataset.vueAliplayerV2Loaded = 'true';
            resolve();
        }, { once: true });
        script.addEventListener('error', () => reject(new Error(`Failed to load Aliplayer SDK: ${scriptSrc}`)), { once: true });
        document.documentElement.appendChild(script);
    });

    scriptLoadPromises.set(scriptSrc, loadPromise);
    return loadPromise;
}

/**
 * Shared SDK loader. It prevents duplicate CSS/JS tags when several player
 * instances mount at the same time or are recreated by route changes.
 */
export async function loadAliplayerSdk(cssLink: string, scriptSrc: string): Promise<void> {
    ensureStylesheet(cssLink);
    await ensureScript(scriptSrc, 'Aliplayer');
}

export async function loadExtraScripts(scriptUrls: string[] = []): Promise<void> {
    for (const scriptUrl of scriptUrls) {
        await ensureScript(scriptUrl);
    }
}
