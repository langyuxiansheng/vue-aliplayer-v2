import type { Plugin } from 'vue';

export interface VueAliplayerV2Options {
    sdkVersion?: string;
    cssLink?: string;
    scriptSrc?: string;
    componentScripts?: string[];
    disableTracking?: boolean;
    trackingUrlPatterns?: Array<string | RegExp>;
}

export interface AliplayerV2Props extends VueAliplayerV2Options {
    autoFormat?: boolean;
    forbidFastForward?: boolean;
    license?: AliplayerLicense | null;
    lowLatency?: boolean;
    normalizeSourceUrl?: boolean;
    options?: AliplayerOptions | null;
    source?: string | null;
}

export interface AliplayerLicense {
    domain: string;
    key: string;
}

export type AliplayerEventName =
    | 'ready'
    | 'play'
    | 'pause'
    | 'canplay'
    | 'playing'
    | 'ended'
    | 'liveStreamStop'
    | 'onM3u8Retry'
    | 'hideBar'
    | 'showBar'
    | 'waiting'
    | 'timeupdate'
    | 'snapshoted'
    | 'requestFullScreen'
    | 'cancelFullScreen'
    | 'error'
    | 'startSeek'
    | 'completeSeek';

export interface AliplayerOptions {
    id?: string;
    source?: string;
    width?: string;
    autoplay?: boolean;
    isLive?: boolean;
    format?: string;
    license?: AliplayerLicense;
    vid?: string;
    playauth?: string;
    accessKeyId?: string;
    securityToken?: string;
    accessKeySecret?: string;
    region?: string;
    authTimeout?: number;
    components?: unknown[];
    enableStashBufferForFlv?: boolean;
    stashInitialSizeForFlv?: number;
    rtsVersion?: string;
    [key: string]: unknown;
}

export interface AliplayerFullscreenService {
    requestFullScreen: () => void;
    cancelFullScreen: () => void;
    getIsFullScreen: () => boolean;
}

export interface AliplayerLiveShiftService {
    setLiveTimeRange: (beginTime: string, endTime: string) => void;
}

export interface AliplayerInstance {
    on: (eventName: string, handler: (event?: unknown) => void) => void;
    off?: (eventName: string, handler: (event?: unknown) => void) => void;
    play: () => void;
    pause: () => void;
    replay: () => void;
    seek: (time: number) => void;
    getCurrentTime: () => number;
    getDuration: () => number;
    getVolume: () => number;
    setVolume: (volume: number) => void;
    loadByUrl: (url: string, time?: number) => void;
    replayByVidAndPlayAuth: (vid: string, playauth: string) => void;
    replayByVidAndAuthInfo: (
        vid: string,
        accId: string,
        accSecret: string,
        stsToken: string,
        authInfo: string,
        domainRegion: string
    ) => void;
    setPlayerSize: (width: string, height: string) => void;
    setSpeed: (speed: number) => void;
    setSanpshotProperties: (width: number, height: number, rate: number) => void;
    fullscreenService?: AliplayerFullscreenService;
    getStatus: () => string;
    liveShiftSerivce?: AliplayerLiveShiftService;
    setRotate: (rotate: number) => void;
    getRotate: () => number;
    setImage: (image: string) => void;
    dispose: () => void;
    setCover: (cover: string) => void;
    setProgressMarkers: (markers: unknown[]) => void;
    setPreviewTime: (time: number) => void;
    getPreviewTime: () => number;
    isPreview: () => boolean;
}

export interface VueAliplayerV2Expose {
    getPlayer: () => AliplayerInstance | null;
    init: () => Promise<void>;
    initPlayer: () => void;
    reload: (nextSource?: string) => Promise<void>;
    retry: (nextSource?: string) => Promise<void>;
    play: () => void;
    pause: () => void;
    replay: () => void;
    seek: (time: number) => void;
    getCurrentTime: () => number | undefined;
    getDuration: () => number | undefined;
    getVolume: () => number | undefined;
    setVolume: (volume: number) => void;
    loadByUrl: (url: string, time?: number) => void;
    replayByVidAndPlayAuth: (vid: string, playauth: string) => void;
    replayByVidAndAuthInfo: (
        vid: string,
        accId: string,
        accSecret: string,
        stsToken: string,
        authInfo: string,
        domainRegion: string
    ) => void;
    setPlayerSize: (width: string, height: string) => void;
    setSpeed: (speed: number) => void;
    setSanpshotProperties: (width: number, height: number, rate: number) => void;
    requestFullScreen: () => void;
    cancelFullScreen: () => void;
    getIsFullScreen: () => boolean | undefined;
    getStatus: () => string | undefined;
    setLiveTimeRange: (beginTime: string, endTime: string) => void;
    setRotate: (rotate: number) => void;
    getRotate: () => number | undefined;
    setImage: (image: string) => void;
    dispose: () => void;
    setCover: (cover: string) => void;
    setProgressMarkers: (markers: unknown[]) => void;
    setPreviewTime: (time: number) => void;
    getPreviewTime: () => number | undefined;
    isPreview: () => boolean | undefined;
    off: (eventName: string, handler: (event?: unknown) => void) => void;
}

export type VueAliplayerV2Plugin = Plugin & {
    Player?: unknown;
};

declare global {
    interface Window {
        Aliplayer?: (options: AliplayerOptions) => AliplayerInstance;
        [key: string]: unknown;
    }
}
