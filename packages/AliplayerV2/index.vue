<template>
    <div :id="playerId" ref="containerRef" class="vue-aliplayer-v2"></div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import {
    DEFAULT_CSS_LINK,
    DEFAULT_SCRIPT_SRC,
    DEFAULT_SDK_VERSION,
    getCssLinkByVersion,
    getScriptSrcByVersion,
    loadAliplayerSdk,
    loadExtraScripts
} from './sdkLoader';
import { inferSourceFormat, normalizeSource, type SourceFormat } from './source';
import { installTrackingBlocker } from './tracking';
import type {
    AliplayerEventName,
    AliplayerInstance,
    AliplayerOptions,
    AliplayerV2Props,
    VueAliplayerV2Expose
} from './types';

defineOptions({
    name: 'VueAliplayerV2'
});

const props = withDefaults(defineProps<AliplayerV2Props>(), {
    autoFormat: true,
    componentScripts: () => [],
    disableTracking: false,
    forbidFastForward: false,
    license: null,
    lowLatency: false,
    normalizeSourceUrl: true,
    options: null,
    sdkVersion: DEFAULT_SDK_VERSION,
    source: null,
    cssLink: '',
    scriptSrc: '',
    trackingUrlPatterns: () => []
});

const emit = defineEmits<{
    (event: AliplayerEventName, payload?: unknown): void;
    (event: 'sdk-error', error: Error): void;
}>();

/**
 * 当前底层 Aliplayer 实例。
 */
const player = ref<AliplayerInstance | null>(null);
/**
 * 播放器挂载容器。
 */
const containerRef = ref<HTMLDivElement | null>(null);
/**
 * 组件是否已经卸载。
 *
 * SDK 和扩展脚本是异步加载的，卸载标记用于避免脚本加载完成后继续创建播放器。
 */
const isUnmounted = ref(false);
/**
 * 当前播放器实例对应的媒体格式。
 *
 * 用于判断 source 变化时是走 `loadByUrl` 还是重建播放器。
 */
const currentFormat = ref<SourceFormat>(null);
/**
 * 初始化批次令牌。
 *
 * 每次 `init` 都会递增，旧批次异步返回时如果令牌不一致就不会继续创建播放器，
 * 避免快速切换参数造成 stale player。
 */
let initToken = 0;
/**
 * 内部自动生成的播放器容器 id。
 */
const playerId = `player-${Math.random().toString(36).slice(2).toUpperCase()}`;
/**
 * 需要从 Aliplayer 透传到 Vue 组件的事件列表。
 */
const eventNames: AliplayerEventName[] = [
    'ready',
    'play',
    'pause',
    'canplay',
    'playing',
    'ended',
    'liveStreamStop',
    'onM3u8Retry',
    'hideBar',
    'showBar',
    'waiting',
    'timeupdate',
    'snapshoted',
    'requestFullScreen',
    'cancelFullScreen',
    'error',
    'startSeek',
    'completeSeek'
];

/**
 * 实际使用的 CSS 地址。
 */
const resolvedCssLink = computed(() => props.cssLink || (props.sdkVersion ? getCssLinkByVersion(props.sdkVersion) : DEFAULT_CSS_LINK));
/**
 * 实际使用的 JS 地址。
 */
const resolvedScriptSrc = computed(() => props.scriptSrc || (props.sdkVersion ? getScriptSrcByVersion(props.sdkVersion) : DEFAULT_SCRIPT_SRC));
/**
 * 标准化后的播放源。
 */
const normalizedSource = computed(() => props.normalizeSourceUrl ? normalizeSource(props.source) : props.source);
/**
 * 从播放源推断出的格式。
 */
const sourceFormat = computed(() => inferSourceFormat(normalizedSource.value));
/**
 * 最终传给 Aliplayer 的初始化配置。
 *
 * 合并顺序为：组件默认值 -> `props.options` -> `license` prop -> `source` prop -> 内部 id。
 * 这样可以保证容器 id 和显式 source 始终由组件控制，同时仍然保留大部分官方配置项的透传能力。
 */
const mergedOptions = computed<AliplayerOptions>(() => {
    const options: AliplayerOptions = {
        width: '100%',
        autoplay: true,
        ...(props.options || {}),
        ...(props.license ? { license: props.license } : {}),
        ...(normalizedSource.value ? { source: normalizedSource.value } : {}),
        id: playerId
    };

    if (props.autoFormat && sourceFormat.value && !options.format) {
        options.format = sourceFormat.value;
    }

    if (props.lowLatency && options.isLive && sourceFormat.value === 'flv') {
        options.enableStashBufferForFlv = options.enableStashBufferForFlv ?? false;
        options.stashInitialSizeForFlv = options.stashInitialSizeForFlv ?? 128;
    }

    return options;
});

/**
 * 获取底层 Aliplayer 实例。
 *
 * @returns 当前播放器实例；尚未初始化或已销毁时返回 `null`。
 */
function getPlayer(): AliplayerInstance | null {
    return player.value;
}

/**
 * 销毁当前播放器实例。
 *
 * 销毁时同步清空当前格式记录，避免后续 source 切换误判为同格式切换。
 */
function dispose(): void {
    if (!player.value) return;
    player.value.dispose();
    player.value = null;
    currentFormat.value = null;
}

/**
 * 将 Aliplayer 事件转发为 Vue 组件事件。
 *
 * @param target 底层播放器实例。
 */
function bindEvents(target: AliplayerInstance): void {
    eventNames.forEach((eventName) => {
        target.on(eventName, (event?: unknown) => {
            emit(eventName, event);
        });
    });
}

/**
 * 绑定禁止快进逻辑。
 *
 * 该能力通过监听 `timeupdate` 实现：如果当前播放时间比上次记录时间大幅跳跃，
 * 视为用户拖拽快进并回退到上次位置。
 *
 * @param target 底层播放器实例。
 */
function bindForbidFastForward(target: AliplayerInstance): void {
    if (!props.forbidFastForward) return;

    let last = 0;
    let maxTime = 0;
    target.on('timeupdate', () => {
        const current = target.getCurrentTime();
        if (current - last > 2) {
            target.seek(last);
            return;
        }

        last = current;
        if (last >= maxTime) {
            maxTime = last;
        }
    });
}

/**
 * 使用当前合并配置创建 Aliplayer 实例。
 *
 * 如果组件已卸载、SDK 未加载或容器不存在，则直接跳过。
 */
function initPlayer(): void {
    if (isUnmounted.value || !window.Aliplayer || !containerRef.value) return;

    dispose();
    const nextPlayer = window.Aliplayer({ ...mergedOptions.value });
    player.value = nextPlayer;
    currentFormat.value = sourceFormat.value;
    bindEvents(nextPlayer);
    bindForbidFastForward(nextPlayer);
}

/**
 * 加载 SDK、扩展脚本并初始化播放器。
 *
 * 该方法会处理统计拦截、SDK 资源加载、额外组件脚本加载和 Vue DOM 更新等待。
 * 如果任一步失败，会通过 `sdk-error` 事件抛给业务层处理。
 */
async function init(): Promise<void> {
    const token = ++initToken;
    try {
        if (props.disableTracking) {
            installTrackingBlocker(props.trackingUrlPatterns.length ? props.trackingUrlPatterns : undefined);
        }
        await loadAliplayerSdk(resolvedCssLink.value, resolvedScriptSrc.value);
        await loadExtraScripts(props.componentScripts);
        await nextTick();
        if (isUnmounted.value || token !== initToken) return;
        initPlayer();
    } catch (error) {
        emit('sdk-error', error instanceof Error ? error : new Error(String(error)));
    }
}

/**
 * 局部重载播放器。
 *
 * @param nextSource 可选的新播放源。传入且播放器已存在时直接调用 `loadByUrl`。
 */
async function reload(nextSource?: string): Promise<void> {
    if (nextSource && player.value) {
        player.value.loadByUrl(props.normalizeSourceUrl ? normalizeSource(nextSource) || nextSource : nextSource);
        return;
    }

    await init();
}

/**
 * 播放失败时的业务重试入口。
 *
 * 当前行为等价于 `reload`，但命名更贴合 `error` 回调中的使用语义。
 *
 * @param nextSource 可选的新播放源。
 */
async function retry(nextSource?: string): Promise<void> {
    await reload(nextSource);
}

/**
 * 播放视频。
 */
function play(): void {
    player.value?.play();
}

/**
 * 暂停视频。
 */
function pause(): void {
    player.value?.pause();
}

/**
 * 从头重播视频。
 */
function replay(): void {
    player.value?.replay();
}

/**
 * 跳转到指定时间。
 *
 * @param time 秒数。
 */
function seek(time: number): void {
    player.value?.seek(time);
}

/**
 * 获取当前播放时间。
 *
 * @returns 当前播放时间，单位秒。
 */
function getCurrentTime(): number | undefined {
    return player.value?.getCurrentTime();
}

/**
 * 获取视频总时长。
 *
 * @returns 视频总时长，单位秒。
 */
function getDuration(): number | undefined {
    return player.value?.getDuration();
}

/**
 * 获取当前音量。
 *
 * @returns 音量值，通常为 0 到 1。
 */
function getVolume(): number | undefined {
    return player.value?.getVolume();
}

/**
 * 设置当前音量。
 *
 * @param volume 音量值，通常为 0 到 1。
 */
function setVolume(volume: number): void {
    player.value?.setVolume(volume);
}

/**
 * 使用 URL 切换播放源。
 *
 * @param url 播放源地址。
 * @param time 可选起播时间，单位秒。
 */
function loadByUrl(url: string, time?: number): void {
    player.value?.loadByUrl(url, time);
}

/**
 * 使用 VID + PlayAuth 重新播放。
 *
 * @param vid 视频 ID。
 * @param playauth 播放凭证。
 */
function replayByVidAndPlayAuth(vid: string, playauth: string): void {
    player.value?.replayByVidAndPlayAuth(vid, playauth);
}

/**
 * 使用 MPS 鉴权信息重新播放。
 *
 * @param vid 视频 ID。
 * @param accId 访问密钥 ID。
 * @param accSecret 访问密钥 Secret。
 * @param stsToken STS Token。
 * @param authInfo 鉴权信息。
 * @param domainRegion 域名地域。
 */
function replayByVidAndAuthInfo(
    vid: string,
    accId: string,
    accSecret: string,
    stsToken: string,
    authInfo: string,
    domainRegion: string
): void {
    player.value?.replayByVidAndAuthInfo(vid, accId, accSecret, stsToken, authInfo, domainRegion);
}

/**
 * 设置播放器尺寸。
 *
 * @param width 宽度，例如 `100%` 或 `640px`。
 * @param height 高度，例如 `360px`。
 */
function setPlayerSize(width: string, height: string): void {
    player.value?.setPlayerSize(width, height);
}

/**
 * 设置播放倍速。
 *
 * @param speed 倍速值，例如 `1.25`、`1.5`、`2`。
 */
function setSpeed(speed: number): void {
    player.value?.setSpeed(speed);
}

/**
 * 设置截图参数。
 *
 * 方法名保留阿里云 SDK 原始拼写 `setSanpshotProperties`，避免破坏旧版本 API。
 *
 * @param width 截图宽度。
 * @param height 截图高度。
 * @param rate 截图质量。
 */
function setSanpshotProperties(width: number, height: number, rate: number): void {
    player.value?.setSanpshotProperties(width, height, rate);
}

/**
 * 请求进入全屏。
 */
function requestFullScreen(): void {
    player.value?.fullscreenService?.requestFullScreen();
}

/**
 * 退出全屏。
 */
function cancelFullScreen(): void {
    player.value?.fullscreenService?.cancelFullScreen();
}

/**
 * 获取当前是否处于全屏。
 *
 * @returns 是否全屏；当前 SDK 不支持或播放器未初始化时返回 `undefined`。
 */
function getIsFullScreen(): boolean | undefined {
    return player.value?.fullscreenService?.getIsFullScreen();
}

/**
 * 获取播放器状态。
 *
 * @returns Aliplayer 状态字符串。
 */
function getStatus(): string | undefined {
    return player.value?.getStatus();
}

/**
 * 设置直播时移范围。
 *
 * @param beginTime 起始时间。
 * @param endTime 结束时间。
 */
function setLiveTimeRange(beginTime: string, endTime: string): void {
    player.value?.liveShiftSerivce?.setLiveTimeRange(beginTime, endTime);
}

/**
 * 设置视频旋转角度。
 *
 * @param rotate 旋转角度，正数为顺时针。
 */
function setRotate(rotate: number): void {
    player.value?.setRotate(rotate);
}

/**
 * 获取视频旋转角度。
 */
function getRotate(): number | undefined {
    return player.value?.getRotate();
}

/**
 * 设置视频镜像方向。
 *
 * @param image 镜像类型，例如 `horizon` 或 `vertical`。
 */
function setImage(image: string): void {
    player.value?.setImage(image);
}

/**
 * 设置播放器封面图。
 *
 * @param cover 封面图地址。
 */
function setCover(cover: string): void {
    player.value?.setCover(cover);
}

/**
 * 设置进度条打点。
 *
 * @param markers 打点配置数组。
 */
function setProgressMarkers(markers: unknown[]): void {
    player.value?.setProgressMarkers(markers);
}

/**
 * 设置试看时间。
 *
 * @param time 试看时间，单位秒。
 */
function setPreviewTime(time: number): void {
    player.value?.setPreviewTime(time);
}

/**
 * 获取试看时间。
 */
function getPreviewTime(): number | undefined {
    return player.value?.getPreviewTime();
}

/**
 * 判断当前是否为试看状态。
 */
function isPreview(): boolean | undefined {
    return player.value?.isPreview();
}

/**
 * 取消监听底层播放器事件。
 *
 * @param eventName 事件名。
 * @param handler 需要取消的回调函数。
 */
function off(eventName: string, handler: (event?: unknown) => void): void {
    player.value?.off?.(eventName, handler);
}

onMounted(() => {
    void init();
});

watch(
    () => normalizedSource.value,
    (source) => {
        if (!source) return;
        const nextFormat = inferSourceFormat(source);
        if (player.value && nextFormat && nextFormat === currentFormat.value) {
            player.value.loadByUrl(source);
            return;
        }
        void init();
    }
);

watch(
    () => [
        props.options,
        props.forbidFastForward,
        props.license,
        props.lowLatency,
        props.autoFormat,
        props.sdkVersion,
        props.cssLink,
        props.scriptSrc,
        props.componentScripts,
        props.disableTracking,
        props.trackingUrlPatterns
    ],
    () => {
        void init();
    },
    { deep: true }
);

onBeforeUnmount(() => {
    isUnmounted.value = true;
    initToken += 1;
    dispose();
});

defineExpose<VueAliplayerV2Expose>({
    getPlayer,
    init,
    initPlayer,
    reload,
    retry,
    play,
    pause,
    replay,
    seek,
    getCurrentTime,
    getDuration,
    getVolume,
    setVolume,
    loadByUrl,
    replayByVidAndPlayAuth,
    replayByVidAndAuthInfo,
    setPlayerSize,
    setSpeed,
    setSanpshotProperties,
    requestFullScreen,
    cancelFullScreen,
    getIsFullScreen,
    getStatus,
    setLiveTimeRange,
    setRotate,
    getRotate,
    setImage,
    dispose,
    setCover,
    setProgressMarkers,
    setPreviewTime,
    getPreviewTime,
    isPreview,
    off
});
</script>

<style scoped>
.vue-aliplayer-v2 {
    width: 100%;
}
</style>
