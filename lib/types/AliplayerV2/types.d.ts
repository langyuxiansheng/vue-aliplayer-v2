import type { Plugin } from 'vue';
/**
 * 全局插件安装配置。
 *
 * 这些配置会作为组件 props 的默认值使用，适合在 `app.use(VueAliplayerV2, options)` 时
 * 统一声明 SDK 版本、资源地址和公共扩展行为。单个组件仍然可以通过同名 props 覆盖这些默认值。
 */
export interface VueAliplayerV2Options {
    /**
     * 阿里云 Web 播放器 SDK 版本号。
     *
     * 当 `cssLink` 或 `scriptSrc` 未显式传入时，组件会根据该版本号生成官方
     * `apsara-media-box/imp-web-player` 资源地址。
     */
    sdkVersion?: string;
    /**
     * Aliplayer CSS 资源地址。
     *
     * 显式传入后优先级高于 `sdkVersion` 自动生成的地址。
     */
    cssLink?: string;
    /**
     * Aliplayer JS 资源地址。
     *
     * 显式传入后优先级高于 `sdkVersion` 自动生成的地址。
     */
    scriptSrc?: string;
    /**
     * 自定义组件或业务扩展脚本地址列表。
     *
     * 组件会在创建播放器实例前按顺序加载这些脚本，适合接入播放列表、跑马灯、
     * 自定义水印等 Aliplayer 自定义组件。
     */
    componentScripts?: string[];
    /**
     * 是否启用已知 Aliplayer 统计上报拦截。
     *
     * 该能力是 wrapper 层的可选兜底方案，优先建议使用阿里云官方配置项。
     */
    disableTracking?: boolean;
    /**
     * 需要拦截的统计上报 URL 片段或正则。
     *
     * 默认只拦截已知的 `newplayer/track` 地址；传入该字段可扩展业务侧发现的其他上报地址。
     */
    trackingUrlPatterns?: Array<string | RegExp>;
}
/**
 * `<VueAliplayerV2 />` 组件 props。
 *
 * 除了播放器业务配置外，还继承了全局插件配置，使每个组件实例都可以单独覆盖 SDK
 * 版本、资源地址、扩展脚本和统计拦截策略。
 */
export interface AliplayerV2Props extends VueAliplayerV2Options {
    /**
     * 是否根据 `source` 后缀自动推断 `format`。
     *
     * 支持 `mp4`、`m3u8`、`flv`、`mp3`、`rtmp`。当 `options.format` 已设置时，
     * 组件不会覆盖用户显式传入的格式。
     */
    autoFormat?: boolean;
    /**
     * 是否禁止用户拖拽快进。
     *
     * 开启后组件会监听 `timeupdate`，当检测到播放位置向前跳跃超过阈值时回退到上一次位置。
     */
    forbidFastForward?: boolean;
    /**
     * Aliplayer License 配置。
     *
     * 新版阿里云 Web 播放器要求业务域名绑定 License。该字段会合并到最终的
     * Aliplayer 初始化 options 中，优先级高于全局配置，等价于 `options.license`。
     */
    license?: AliplayerLicense | null;
    /**
     * 是否启用 FLV 直播低延迟预设。
     *
     * 当 `options.isLive` 为 `true` 且推断格式为 `flv` 时，组件会默认关闭 FLV stash buffer
     * 并设置较小的初始缓存。用户仍可在 `options` 中显式覆盖这些字段。
     */
    lowLatency?: boolean;
    /**
     * 是否对播放源 URL 执行 `encodeURI`。
     *
     * 用于处理中文文件名、空格等未编码 URL。`data:` 和 `blob:` 地址会被原样保留。
     */
    normalizeSourceUrl?: boolean;
    /**
     * 透传给 Aliplayer 的原始初始化配置。
     *
     * 组件只会补充必要的 `id`、`source`、`license`、`format` 和低延迟默认值，
     * 其他字段全部保持透传。
     */
    options?: AliplayerOptions | null;
    /**
     * 播放源 URL。
     *
     * 存在时优先于 `options.source`。同格式切换时优先调用 `loadByUrl`，跨格式切换时会重建播放器。
     */
    source?: string | null;
}
/**
 * 阿里云 Web 播放器 License 信息。
 */
export interface AliplayerLicense {
    /**
     * 申请 License 时绑定的网站域名。
     */
    domain: string;
    /**
     * 阿里云控制台生成的 License Key。
     */
    key: string;
}
/**
 * 当前组件会透传的 Aliplayer 事件名。
 */
export type AliplayerEventName = 'ready' | 'play' | 'pause' | 'canplay' | 'playing' | 'ended' | 'liveStreamStop' | 'onM3u8Retry' | 'hideBar' | 'showBar' | 'waiting' | 'timeupdate' | 'snapshoted' | 'requestFullScreen' | 'cancelFullScreen' | 'error' | 'startSeek' | 'completeSeek';
/**
 * Aliplayer 初始化配置。
 *
 * 这里只声明 wrapper 中常用和文档中重点暴露的字段。阿里云 SDK 的配置项较多，
 * 因此保留索引签名以允许业务侧继续传入官方新增或未显式列出的参数。
 */
export interface AliplayerOptions {
    /**
     * 播放器容器 DOM id。组件内部会自动生成并覆盖该字段。
     */
    id?: string;
    /**
     * 播放源 URL。
     */
    source?: string;
    /**
     * 播放器宽度，例如 `100%` 或 `640px`。
     */
    width?: string;
    /**
     * 是否自动播放。
     */
    autoplay?: boolean;
    /**
     * 是否为直播流。
     */
    isLive?: boolean;
    /**
     * 播放源格式，例如 `mp4`、`m3u8`、`flv`。
     */
    format?: string;
    /**
     * Aliplayer License 配置。
     */
    license?: AliplayerLicense;
    /**
     * 点播视频 ID，用于 VID + PlayAuth 或 STS 播放。
     */
    vid?: string;
    /**
     * 点播播放凭证。
     */
    playauth?: string;
    /**
     * STS 临时 AccessKey ID。
     */
    accessKeyId?: string;
    /**
     * STS 安全令牌。
     */
    securityToken?: string;
    /**
     * STS 临时 AccessKey Secret。
     */
    accessKeySecret?: string;
    /**
     * 媒资所在地域，例如 `cn-shanghai`。
     */
    region?: string;
    /**
     * 播放地址有效时长，单位秒。
     */
    authTimeout?: number;
    /**
     * Aliplayer 自定义组件配置。
     */
    components?: unknown[];
    /**
     * FLV 直播是否启用 stash buffer。
     */
    enableStashBufferForFlv?: boolean;
    /**
     * FLV 初始缓存大小。
     */
    stashInitialSizeForFlv?: number;
    /**
     * RTS SDK 版本号。
     */
    rtsVersion?: string;
    /**
     * 允许传入阿里云播放器官方新增字段或业务侧自定义字段。
     */
    [key: string]: unknown;
}
/**
 * Aliplayer 全屏服务对象。
 */
export interface AliplayerFullscreenService {
    /**
     * 进入全屏。
     */
    requestFullScreen: () => void;
    /**
     * 退出全屏。
     */
    cancelFullScreen: () => void;
    /**
     * 获取当前是否处于全屏状态。
     */
    getIsFullScreen: () => boolean;
}
/**
 * Aliplayer 直播时移服务对象。
 */
export interface AliplayerLiveShiftService {
    /**
     * 设置直播时移的可播放时间范围。
     *
     * @param beginTime 起始时间，通常为 `YYYY/MM/DD HH:mm:ss`。
     * @param endTime 结束时间，通常为 `YYYY/MM/DD HH:mm:ss`。
     */
    setLiveTimeRange: (beginTime: string, endTime: string) => void;
}
/**
 * Aliplayer 播放器实例。
 *
 * 该接口描述组件会调用或暴露的底层 SDK 方法，并非阿里云播放器完整类型定义。
 */
export interface AliplayerInstance {
    /**
     * 监听底层播放器事件。
     *
     * @param eventName 事件名。
     * @param handler 事件回调。
     */
    on: (eventName: string, handler: (event?: unknown) => void) => void;
    /**
     * 取消监听底层播放器事件。
     *
     * 部分 SDK 版本可能没有该方法，因此这里声明为可选。
     */
    off?: (eventName: string, handler: (event?: unknown) => void) => void;
    /**
     * 播放视频。
     */
    play: () => void;
    /**
     * 暂停视频。
     */
    pause: () => void;
    /**
     * 从头重播视频。
     */
    replay: () => void;
    /**
     * 跳转到指定播放时间。
     *
     * @param time 秒数。
     */
    seek: (time: number) => void;
    /**
     * 获取当前播放时间，单位秒。
     */
    getCurrentTime: () => number;
    /**
     * 获取视频总时长，单位秒。
     */
    getDuration: () => number;
    /**
     * 获取当前音量，范围通常为 0 到 1。
     */
    getVolume: () => number;
    /**
     * 设置音量。
     *
     * @param volume 音量，范围通常为 0 到 1。
     */
    setVolume: (volume: number) => void;
    /**
     * 通过 URL 切换播放源。
     *
     * @param url 新播放地址。
     * @param time 可选起播时间，单位秒。
     */
    loadByUrl: (url: string, time?: number) => void;
    /**
     * 使用 VID + PlayAuth 重新播放。
     */
    replayByVidAndPlayAuth: (vid: string, playauth: string) => void;
    /**
     * 使用 MPS 鉴权信息重新播放。
     */
    replayByVidAndAuthInfo: (vid: string, accId: string, accSecret: string, stsToken: string, authInfo: string, domainRegion: string) => void;
    /**
     * 设置播放器尺寸。
     */
    setPlayerSize: (width: string, height: string) => void;
    /**
     * 设置倍速。
     */
    setSpeed: (speed: number) => void;
    /**
     * 设置截图参数。
     */
    setSanpshotProperties: (width: number, height: number, rate: number) => void;
    /**
     * 全屏服务。
     */
    fullscreenService?: AliplayerFullscreenService;
    /**
     * 获取播放器状态。
     */
    getStatus: () => string;
    /**
     * 直播时移服务。字段名保留阿里云 SDK 原始拼写。
     */
    liveShiftSerivce?: AliplayerLiveShiftService;
    /**
     * 设置视频旋转角度。
     */
    setRotate: (rotate: number) => void;
    /**
     * 获取当前视频旋转角度。
     */
    getRotate: () => number;
    /**
     * 设置视频镜像。
     */
    setImage: (image: string) => void;
    /**
     * 销毁播放器实例并释放底层资源。
     */
    dispose: () => void;
    /**
     * 设置封面图。
     */
    setCover: (cover: string) => void;
    /**
     * 设置进度条打点。
     */
    setProgressMarkers: (markers: unknown[]) => void;
    /**
     * 设置试看时间。
     */
    setPreviewTime: (time: number) => void;
    /**
     * 获取试看时间。
     */
    getPreviewTime: () => number;
    /**
     * 判断当前是否处于试看状态。
     */
    isPreview: () => boolean;
}
/**
 * 通过 Vue `ref` 暴露给业务代码调用的组件方法。
 *
 * 方法名基本保持 1.x 版本和阿里云 SDK 的命名，便于迁移旧项目和查阅官方文档。
 */
export interface VueAliplayerV2Expose {
    /**
     * 获取底层 Aliplayer 实例。
     */
    getPlayer: () => AliplayerInstance | null;
    /**
     * 加载 SDK 并初始化播放器。
     */
    init: () => Promise<void>;
    /**
     * 使用当前 props/options 立即创建播放器实例。
     */
    initPlayer: () => void;
    /**
     * 局部重载播放器。
     *
     * @param nextSource 可选的新播放地址。同格式地址会优先走底层 `loadByUrl`。
     */
    reload: (nextSource?: string) => Promise<void>;
    /**
     * 播放失败后的业务重试入口。
     *
     * 当前实现与 `reload` 等价，命名上更适合在 `error` 回调中使用。
     */
    retry: (nextSource?: string) => Promise<void>;
    /**
     * 播放视频。
     */
    play: () => void;
    /**
     * 暂停视频。
     */
    pause: () => void;
    /**
     * 从头重播视频。
     */
    replay: () => void;
    /**
     * 跳转到指定播放时间。
     */
    seek: (time: number) => void;
    /**
     * 获取当前播放时间。
     */
    getCurrentTime: () => number | undefined;
    /**
     * 获取视频总时长。
     */
    getDuration: () => number | undefined;
    /**
     * 获取当前音量。
     */
    getVolume: () => number | undefined;
    /**
     * 设置当前音量。
     */
    setVolume: (volume: number) => void;
    /**
     * 通过 URL 切换播放源。
     */
    loadByUrl: (url: string, time?: number) => void;
    /**
     * 使用 VID + PlayAuth 重新播放。
     */
    replayByVidAndPlayAuth: (vid: string, playauth: string) => void;
    /**
     * 使用 MPS 鉴权信息重新播放。
     */
    replayByVidAndAuthInfo: (vid: string, accId: string, accSecret: string, stsToken: string, authInfo: string, domainRegion: string) => void;
    /**
     * 设置播放器尺寸。
     */
    setPlayerSize: (width: string, height: string) => void;
    /**
     * 设置倍速。
     */
    setSpeed: (speed: number) => void;
    /**
     * 设置截图参数。
     */
    setSanpshotProperties: (width: number, height: number, rate: number) => void;
    /**
     * 进入全屏。
     */
    requestFullScreen: () => void;
    /**
     * 退出全屏。
     */
    cancelFullScreen: () => void;
    /**
     * 获取是否处于全屏状态。
     */
    getIsFullScreen: () => boolean | undefined;
    /**
     * 获取播放器状态。
     */
    getStatus: () => string | undefined;
    /**
     * 设置直播时移可播放范围。
     */
    setLiveTimeRange: (beginTime: string, endTime: string) => void;
    /**
     * 设置视频旋转角度。
     */
    setRotate: (rotate: number) => void;
    /**
     * 获取视频旋转角度。
     */
    getRotate: () => number | undefined;
    /**
     * 设置视频镜像。
     */
    setImage: (image: string) => void;
    /**
     * 销毁播放器实例。
     */
    dispose: () => void;
    /**
     * 设置封面图。
     */
    setCover: (cover: string) => void;
    /**
     * 设置进度条打点。
     */
    setProgressMarkers: (markers: unknown[]) => void;
    /**
     * 设置试看时间。
     */
    setPreviewTime: (time: number) => void;
    /**
     * 获取试看时间。
     */
    getPreviewTime: () => number | undefined;
    /**
     * 判断当前是否处于试看状态。
     */
    isPreview: () => boolean | undefined;
    /**
     * 取消监听底层播放器事件。
     */
    off: (eventName: string, handler: (event?: unknown) => void) => void;
}
/**
 * 兼容 Vue 插件安装语义的组件类型。
 */
export type VueAliplayerV2Plugin = Plugin & {
    /**
     * 兼容 1.x 局部注册写法的组件别名。
     */
    Player?: unknown;
};
declare global {
    interface Window {
        Aliplayer?: (options: AliplayerOptions) => AliplayerInstance;
        [key: string]: unknown;
    }
}
//# sourceMappingURL=types.d.ts.map