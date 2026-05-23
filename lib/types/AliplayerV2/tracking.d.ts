/**
 * 安装 Aliplayer 统计请求拦截器。
 *
 * 该方法会拦截命中规则的 `fetch` 和 `XMLHttpRequest` 请求，避免向已知统计地址发送数据。
 * 这是 wrapper 层提供的可选缓解方案，不替代阿里云官方 SDK 的开关能力。由于它会修改全局
 * 网络 API，只有在用户显式设置 `disableTracking` 时才会调用。
 *
 * @param patterns 需要拦截的 URL 片段或正则。不传时使用默认已知统计地址。
 */
export declare function installTrackingBlocker(patterns?: Array<string | RegExp>): void;
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
//# sourceMappingURL=tracking.d.ts.map