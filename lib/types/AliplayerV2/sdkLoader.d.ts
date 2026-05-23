export declare const DEFAULT_SDK_VERSION = "2.37.0";
export declare const DEFAULT_CSS_LINK = "https://g.alicdn.com/apsara-media-box/imp-web-player/2.37.0/skins/default/aliplayer-min.css";
export declare const DEFAULT_SCRIPT_SRC = "https://g.alicdn.com/apsara-media-box/imp-web-player/2.37.0/aliplayer-min.js";
export declare function getCssLinkByVersion(version: string): string;
export declare function getScriptSrcByVersion(version: string): string;
/**
 * Shared SDK loader. It prevents duplicate CSS/JS tags when several player
 * instances mount at the same time or are recreated by route changes.
 */
export declare function loadAliplayerSdk(cssLink: string, scriptSrc: string): Promise<void>;
export declare function loadExtraScripts(scriptUrls?: string[]): Promise<void>;
//# sourceMappingURL=sdkLoader.d.ts.map