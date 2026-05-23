const DEFAULT_TRACKING_PATTERNS: Array<string | RegExp> = [
    'videocloud.cn-hangzhou.log.aliyuncs.com/logstores/newplayer/track'
];

let trackingBlockerInstalled = false;

function matchesTrackingUrl(url: string, patterns: Array<string | RegExp>): boolean {
    return patterns.some((pattern) => {
        if (typeof pattern === 'string') return url.includes(pattern);
        return pattern.test(url);
    });
}

export function installTrackingBlocker(patterns: Array<string | RegExp> = DEFAULT_TRACKING_PATTERNS): void {
    if (trackingBlockerInstalled) return;
    trackingBlockerInstalled = true;

    const originalFetch = window.fetch?.bind(window);
    if (originalFetch) {
        window.fetch = ((input: RequestInfo | URL, init?: RequestInit) => {
            const url = typeof input === 'string' || input instanceof URL ? String(input) : input.url;
            if (matchesTrackingUrl(url, patterns)) {
                return Promise.resolve(new Response(null, { status: 204, statusText: 'No Content' }));
            }
            return originalFetch(input, init);
        }) as typeof window.fetch;
    }

    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function open(method: string, url: string | URL, async?: boolean, username?: string | null, password?: string | null): void {
        this.__vueAliplayerV2Blocked = matchesTrackingUrl(String(url), patterns);
        originalOpen.call(this, method, url, async ?? true, username ?? undefined, password ?? undefined);
    };

    XMLHttpRequest.prototype.send = function send(body?: Document | XMLHttpRequestBodyInit | null): void {
        if (this.__vueAliplayerV2Blocked) {
            return;
        }
        originalSend.call(this, body);
    };
}

declare global {
    interface XMLHttpRequest {
        __vueAliplayerV2Blocked?: boolean;
    }
}
