/**
 * 默认拦截的阿里云播放器统计上报地址片段。
 *
 * 这是根据历史 issue 中用户反馈的 `newplayer/track` 请求整理的兜底规则。
 */
const DEFAULT_TRACKING_PATTERNS: Array<string | RegExp> = [
    'videocloud.cn-hangzhou.log.aliyuncs.com/logstores/newplayer/track'
];

/**
 * 标记统计拦截器是否已经安装。
 *
 * 拦截器会 monkey patch `fetch` 和 `XMLHttpRequest`，同一页面只应安装一次。
 */
let trackingBlockerInstalled = false;

/**
 * 判断 URL 是否命中需要拦截的统计规则。
 *
 * @param url 请求地址。
 * @param patterns 字符串片段或正则列表。
 * @returns 命中任意规则时返回 `true`。
 */
function matchesTrackingUrl(url: string, patterns: Array<string | RegExp>): boolean {
    return patterns.some((pattern) => {
        if (typeof pattern === 'string') return url.includes(pattern);
        return pattern.test(url);
    });
}

/**
 * 安装 Aliplayer 统计请求拦截器。
 *
 * 该方法会拦截命中规则的 `fetch` 和 `XMLHttpRequest` 请求，避免向已知统计地址发送数据。
 * 这是 wrapper 层提供的可选缓解方案，不替代阿里云官方 SDK 的开关能力。由于它会修改全局
 * 网络 API，只有在用户显式设置 `disableTracking` 时才会调用。
 *
 * @param patterns 需要拦截的 URL 片段或正则。不传时使用默认已知统计地址。
 */
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
        /**
         * 当前 XHR 是否命中 vue-aliplayer-v2 的统计拦截规则。
         *
         * 这是内部标记字段，仅用于 `open` 和 `send` 两个 patch 方法之间传递状态。
         */
        __vueAliplayerV2Blocked?: boolean;
    }
}
