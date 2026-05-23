/**
 * 组件可以从播放地址中推断出的媒体格式。
 *
 * `null` 表示无法可靠判断格式，组件会把格式判断交给 Aliplayer SDK。
 */
export type SourceFormat = 'mp4' | 'm3u8' | 'flv' | 'rtmp' | 'mp3' | null;
/**
 * 从播放地址推断媒体格式。
 *
 * 推断逻辑会忽略 query 和 hash，仅根据协议或路径后缀判断。RTMP 地址优先根据协议识别，
 * 其他格式根据后缀识别。
 *
 * @param source 播放源地址。
 * @returns 推断出的媒体格式；无法判断时返回 `null`。
 */
export declare function inferSourceFormat(source?: string | null): SourceFormat;
/**
 * 标准化播放源 URL。
 *
 * 目前只做 `encodeURI`，用于处理中文文件名、空格等常见未编码地址。`data:` 和 `blob:`
 * 地址不应该被编码，因此会原样返回。若浏览器环境对某些非法 URL 抛错，也会回退到原始地址。
 *
 * @param source 播放源地址。
 * @returns 标准化后的地址；空值保持为空。
 */
export declare function normalizeSource(source?: string | null): string | null;
//# sourceMappingURL=source.d.ts.map