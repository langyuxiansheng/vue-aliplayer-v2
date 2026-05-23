/**
 * 默认阿里云 Web 播放器 SDK 版本。
 *
 * 该版本来自阿里云播放器 SDK 下载页。后续升级默认 SDK 时，只需要同步修改该常量。
 */
export const DEFAULT_SDK_VERSION = '2.37.0';

/**
 * 默认 Aliplayer CSS 地址。
 *
 * 2.16.3 之后阿里云官方资源路径从 `de/prismplayer` 切换到了
 * `apsara-media-box/imp-web-player`，因此这里使用新路径。
 */
export const DEFAULT_CSS_LINK = `https://g.alicdn.com/apsara-media-box/imp-web-player/${DEFAULT_SDK_VERSION}/skins/default/aliplayer-min.css`;

/**
 * 默认 Aliplayer JS 地址。
 */
export const DEFAULT_SCRIPT_SRC = `https://g.alicdn.com/apsara-media-box/imp-web-player/${DEFAULT_SDK_VERSION}/aliplayer-min.js`;

/**
 * 脚本加载 Promise 缓存。
 *
 * 同一个页面可能同时存在多个播放器实例，或者组件在路由切换中频繁挂载卸载。
 * 缓存可以避免重复插入相同的 `<script>` 标签，也避免多个实例并发等待时产生竞态。
 */
const scriptLoadPromises = new Map<string, Promise<void>>();

/**
 * 根据 SDK 版本生成官方 CSS 地址。
 *
 * @param version 阿里云 Web 播放器 SDK 版本号。
 * @returns 官方 `imp-web-player` CSS 资源地址。
 */
export function getCssLinkByVersion(version: string): string {
    return `https://g.alicdn.com/apsara-media-box/imp-web-player/${version}/skins/default/aliplayer-min.css`;
}

/**
 * 根据 SDK 版本生成官方 JS 地址。
 *
 * @param version 阿里云 Web 播放器 SDK 版本号。
 * @returns 官方 `imp-web-player` JS 资源地址。
 */
export function getScriptSrcByVersion(version: string): string {
    return `https://g.alicdn.com/apsara-media-box/imp-web-player/${version}/aliplayer-min.js`;
}

/**
 * 确保页面中已经存在指定 Aliplayer CSS。
 *
 * @param cssLink CSS 资源地址。为空时不做任何操作。
 */
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

/**
 * 确保页面中已经加载指定脚本。
 *
 * @param scriptSrc 脚本资源地址。为空时直接视为加载完成。
 * @param globalName 可选的全局变量名。如果该全局变量已经存在，说明对应脚本已经可用。
 * @returns 脚本加载完成 Promise。
 */
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
 * 加载 Aliplayer SDK 的 CSS 和 JS。
 *
 * 该方法会先插入 CSS，再等待 JS 加载完成。它会复用已有标签和加载 Promise，
 * 因而可以安全地被多个播放器实例同时调用。
 *
 * @param cssLink Aliplayer 样式地址。
 * @param scriptSrc Aliplayer 脚本地址。
 */
export async function loadAliplayerSdk(cssLink: string, scriptSrc: string): Promise<void> {
    ensureStylesheet(cssLink);
    await ensureScript(scriptSrc, 'Aliplayer');
}

/**
 * 按顺序加载额外扩展脚本。
 *
 * 主要用于 Aliplayer 自定义组件，例如播放列表、跑马灯、水印等。顺序加载能保证
 * 后一个脚本可以依赖前一个脚本暴露的全局对象。
 *
 * @param scriptUrls 需要在播放器初始化前加载的脚本地址列表。
 */
export async function loadExtraScripts(scriptUrls: string[] = []): Promise<void> {
    for (const scriptUrl of scriptUrls) {
        await ensureScript(scriptUrl);
    }
}
