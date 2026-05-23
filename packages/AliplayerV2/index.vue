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

const player = ref<AliplayerInstance | null>(null);
const containerRef = ref<HTMLDivElement | null>(null);
const isUnmounted = ref(false);
const currentFormat = ref<SourceFormat>(null);
let initToken = 0;
const playerId = `player-${Math.random().toString(36).slice(2).toUpperCase()}`;
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

const resolvedCssLink = computed(() => props.cssLink || (props.sdkVersion ? getCssLinkByVersion(props.sdkVersion) : DEFAULT_CSS_LINK));
const resolvedScriptSrc = computed(() => props.scriptSrc || (props.sdkVersion ? getScriptSrcByVersion(props.sdkVersion) : DEFAULT_SCRIPT_SRC));
const normalizedSource = computed(() => props.normalizeSourceUrl ? normalizeSource(props.source) : props.source);
const sourceFormat = computed(() => inferSourceFormat(normalizedSource.value));
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

function getPlayer(): AliplayerInstance | null {
    return player.value;
}

function dispose(): void {
    if (!player.value) return;
    player.value.dispose();
    player.value = null;
    currentFormat.value = null;
}

function bindEvents(target: AliplayerInstance): void {
    eventNames.forEach((eventName) => {
        target.on(eventName, (event?: unknown) => {
            emit(eventName, event);
        });
    });
}

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

function initPlayer(): void {
    if (isUnmounted.value || !window.Aliplayer || !containerRef.value) return;

    dispose();
    const nextPlayer = window.Aliplayer({ ...mergedOptions.value });
    player.value = nextPlayer;
    currentFormat.value = sourceFormat.value;
    bindEvents(nextPlayer);
    bindForbidFastForward(nextPlayer);
}

async function init(): Promise<void> {
    const token = ++initToken;
    try {
        if (props.disableTracking) {
            installTrackingBlocker(props.trackingUrlPatterns);
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

async function reload(nextSource?: string): Promise<void> {
    if (nextSource && player.value) {
        player.value.loadByUrl(props.normalizeSourceUrl ? normalizeSource(nextSource) || nextSource : nextSource);
        return;
    }

    await init();
}

async function retry(nextSource?: string): Promise<void> {
    await reload(nextSource);
}

function play(): void {
    player.value?.play();
}

function pause(): void {
    player.value?.pause();
}

function replay(): void {
    player.value?.replay();
}

function seek(time: number): void {
    player.value?.seek(time);
}

function getCurrentTime(): number | undefined {
    return player.value?.getCurrentTime();
}

function getDuration(): number | undefined {
    return player.value?.getDuration();
}

function getVolume(): number | undefined {
    return player.value?.getVolume();
}

function setVolume(volume: number): void {
    player.value?.setVolume(volume);
}

function loadByUrl(url: string, time?: number): void {
    player.value?.loadByUrl(url, time);
}

function replayByVidAndPlayAuth(vid: string, playauth: string): void {
    player.value?.replayByVidAndPlayAuth(vid, playauth);
}

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

function setPlayerSize(width: string, height: string): void {
    player.value?.setPlayerSize(width, height);
}

function setSpeed(speed: number): void {
    player.value?.setSpeed(speed);
}

function setSanpshotProperties(width: number, height: number, rate: number): void {
    player.value?.setSanpshotProperties(width, height, rate);
}

function requestFullScreen(): void {
    player.value?.fullscreenService?.requestFullScreen();
}

function cancelFullScreen(): void {
    player.value?.fullscreenService?.cancelFullScreen();
}

function getIsFullScreen(): boolean | undefined {
    return player.value?.fullscreenService?.getIsFullScreen();
}

function getStatus(): string | undefined {
    return player.value?.getStatus();
}

function setLiveTimeRange(beginTime: string, endTime: string): void {
    player.value?.liveShiftSerivce?.setLiveTimeRange(beginTime, endTime);
}

function setRotate(rotate: number): void {
    player.value?.setRotate(rotate);
}

function getRotate(): number | undefined {
    return player.value?.getRotate();
}

function setImage(image: string): void {
    player.value?.setImage(image);
}

function setCover(cover: string): void {
    player.value?.setCover(cover);
}

function setProgressMarkers(markers: unknown[]): void {
    player.value?.setProgressMarkers(markers);
}

function setPreviewTime(time: number): void {
    player.value?.setPreviewTime(time);
}

function getPreviewTime(): number | undefined {
    return player.value?.getPreviewTime();
}

function isPreview(): boolean | undefined {
    return player.value?.isPreview();
}

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
