/**
 * 默认阿里云 Web 播放器 SDK 版本。
 *
 * 该版本来自阿里云播放器 SDK 下载页。后续升级默认 SDK 时，只需要同步修改该常量。
 */
export declare const DEFAULT_SDK_VERSION = "2.37.0";
/**
 * 默认 Aliplayer CSS 地址。
 *
 * 2.16.3 之后阿里云官方资源路径从 `de/prismplayer` 切换到了
 * `apsara-media-box/imp-web-player`，因此这里使用新路径。
 */
export declare const DEFAULT_CSS_LINK = "https://g.alicdn.com/apsara-media-box/imp-web-player/2.37.0/skins/default/aliplayer-min.css";
/**
 * 默认 Aliplayer JS 地址。
 */
export declare const DEFAULT_SCRIPT_SRC = "https://g.alicdn.com/apsara-media-box/imp-web-player/2.37.0/aliplayer-min.js";
/**
 * 根据 SDK 版本生成官方 CSS 地址。
 *
 * @param version 阿里云 Web 播放器 SDK 版本号。
 * @returns 官方 `imp-web-player` CSS 资源地址。
 */
export declare function getCssLinkByVersion(version: string): string;
/**
 * 根据 SDK 版本生成官方 JS 地址。
 *
 * @param version 阿里云 Web 播放器 SDK 版本号。
 * @returns 官方 `imp-web-player` JS 资源地址。
 */
export declare function getScriptSrcByVersion(version: string): string;
/**
 * 加载 Aliplayer SDK 的 CSS 和 JS。
 *
 * 该方法会先插入 CSS，再等待 JS 加载完成。它会复用已有标签和加载 Promise，
 * 因而可以安全地被多个播放器实例同时调用。
 *
 * @param cssLink Aliplayer 样式地址。
 * @param scriptSrc Aliplayer 脚本地址。
 */
export declare function loadAliplayerSdk(cssLink: string, scriptSrc: string): Promise<void>;
/**
 * 按顺序加载额外扩展脚本。
 *
 * 主要用于 Aliplayer 自定义组件，例如播放列表、跑马灯、水印等。顺序加载能保证
 * 后一个脚本可以依赖前一个脚本暴露的全局对象。
 *
 * @param scriptUrls 需要在播放器初始化前加载的脚本地址列表。
 */
export declare function loadExtraScripts(scriptUrls?: string[]): Promise<void>;
//# sourceMappingURL=sdkLoader.d.ts.map