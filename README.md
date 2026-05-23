# vue-aliplayer-v2

基于阿里云 Aliplayer SDK 的 Vue 3 播放器组件。可通过 Aliplayer 官方能力播放 mp4、m3u8、flv、直播流、加密点播、清晰度切换和直播时移等场景。

> v2 从 Vue 3 + Vite 重构开始，不再兼容 Vue 2。Vue 2 项目请继续安装 `vue-aliplayer-v2@1.x`。

## 在线演示

- 项目演示：https://langyuxiansheng.github.io/vue-aliplayer-v2/
- 阿里云播放器演示：https://player.alicdn.com/aliplayer/index.html

## 安装

```bash
npm i vue-aliplayer-v2
```

```bash
yarn add vue-aliplayer-v2
```

## 全局注册

```ts
import { createApp } from 'vue';
import App from './App.vue';
import VueAliplayerV2 from 'vue-aliplayer-v2';

const app = createApp(App);

app.use(VueAliplayerV2, {
    // 默认使用阿里云 Web 播放器 SDK 2.37.0，新版 SDK 走 imp-web-player 资源路径
    sdkVersion: '2.37.0',
    // 可选：覆盖完整 SDK 地址
    cssLink: 'https://g.alicdn.com/apsara-media-box/imp-web-player/2.37.0/skins/default/aliplayer-min.css',
    scriptSrc: 'https://g.alicdn.com/apsara-media-box/imp-web-player/2.37.0/aliplayer-min.js'
});

app.mount('#app');
```

## 局部注册

```vue
<template>
    <VueAliplayerV2
        ref="playerRef"
        :source="source"
        :options="options"
        :license="license"
        low-latency
        @ready="handleReady"
        @error="handleError"
    />
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import VueAliplayerV2, {
    type AliplayerLicense,
    type AliplayerOptions,
    type VueAliplayerV2Expose
} from 'vue-aliplayer-v2';

const playerRef = ref<VueAliplayerV2Expose | null>(null);
const source = ref('//player.alicdn.com/video/aliyunmedia.mp4');
const license = ref<AliplayerLicense | null>(null);
const options = reactive<AliplayerOptions>({
    autoplay: true,
    isLive: false,
    useH5Prism: true
});

function handleReady() {
    playerRef.value?.play();
}

function handleError(error: unknown) {
    console.log('player error', error);
}
</script>
```

## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | `string \| null` | `null` | 播放源。存在时优先于 `options.source`，变更后会调用底层 `loadByUrl` 动态切换。 |
| `options` | `AliplayerOptions \| null` | `null` | 透传给 Aliplayer 的配置项。 |
| `license` | `AliplayerLicense \| null` | `null` | Aliplayer License 配置，等价于 `options.license`，适配新版 SDK 要求。 |
| `autoFormat` | `boolean` | `true` | 根据 `source` 后缀自动补充 `format`，支持 `mp4/m3u8/flv/mp3/rtmp`。 |
| `lowLatency` | `boolean` | `false` | FLV 直播低延迟预设，会在 `isLive + flv` 时默认关闭 stash buffer。 |
| `normalizeSourceUrl` | `boolean` | `true` | 自动对非 ASCII 播放地址执行 `encodeURI`，处理中文文件名等 URL。 |
| `forbidFastForward` | `boolean` | `false` | 禁止拖拽快进。通过监听 `timeupdate` 回退到上次播放位置实现。 |
| `sdkVersion` | `string` | `2.37.0` | 生成阿里云 `imp-web-player` SDK 资源地址。 |
| `cssLink` | `string` | Aliplayer 2.37.0 CSS | 覆盖播放器样式地址。 |
| `scriptSrc` | `string` | Aliplayer 2.37.0 JS | 覆盖播放器脚本地址。 |
| `componentScripts` | `string[]` | `[]` | 额外加载自定义组件脚本，需在播放器初始化前加载。 |
| `disableTracking` | `boolean` | `false` | 可选拦截 Aliplayer 已知 track 上报请求。 |
| `trackingUrlPatterns` | `Array<string \| RegExp>` | `[]` | 自定义需要拦截的 track URL 片段或正则。 |

## Events

组件会透传常用 Aliplayer 事件：

```ts
ready
play
pause
canplay
playing
ended
liveStreamStop
onM3u8Retry
hideBar
showBar
waiting
timeupdate
snapshoted
requestFullScreen
cancelFullScreen
error
startSeek
completeSeek
sdk-error
```

`sdk-error` 是组件额外事件，在 Aliplayer SDK 脚本加载失败时触发。

## Ref 方法

```ts
playerRef.value?.play();
playerRef.value?.pause();
playerRef.value?.replay();
playerRef.value?.seek(30);
playerRef.value?.getCurrentTime();
playerRef.value?.getDuration();
playerRef.value?.getVolume();
playerRef.value?.setVolume(0.8);
playerRef.value?.loadByUrl('//player.alicdn.com/video/aliyunmedia.mp4');
playerRef.value?.getStatus();
playerRef.value?.requestFullScreen();
playerRef.value?.cancelFullScreen();
playerRef.value?.dispose();
playerRef.value?.getPlayer();
```

完整暴露方法包括：

```ts
getPlayer
init
initPlayer
reload
retry
play
pause
replay
seek
getCurrentTime
getDuration
getVolume
setVolume
loadByUrl
replayByVidAndPlayAuth
replayByVidAndAuthInfo
setPlayerSize
setSpeed
setSanpshotProperties
requestFullScreen
cancelFullScreen
getIsFullScreen
getStatus
setLiveTimeRange
setRotate
getRotate
setImage
dispose
setCover
setProgressMarkers
setPreviewTime
getPreviewTime
isPreview
off
```

## 多播放器

```vue
<template>
    <VueAliplayerV2
        v-for="item in sources"
        :key="item"
        :source="item"
        :options="options"
    />
</template>
```

v2 的 SDK 加载器会复用同一份 CSS/JS 资源，多个播放器同时挂载时不会重复插入相同的 SDK 标签。

## License

阿里云新版 Web 播放器 SDK 要求配置网站域名和 License Key。可以通过 `license` prop 或 `options.license` 传入：

```vue
<VueAliplayerV2
    :source="source"
    :license="{ domain: 'example.com', key: 'example-key' }"
/>
```

## VID + PlayAuth

```vue
<VueAliplayerV2
    :options="{
        vid: '<your video ID>',
        playauth: '<your PlayAuth>',
        authTimeout: 7200
    }"
/>
```

`vid + playauth` 是初始化配置，不需要再传 `source`。如果要在播放器创建后切换，可以调用：

```ts
playerRef.value?.replayByVidAndPlayAuth(vid, playauth);
```

## FLV/HLS/RTMP 说明

- FLV 直播请设置 `options.isLive = true`，组件会自动推断 `format: 'flv'`。
- 开启 `low-latency` 后，FLV 直播默认使用 `enableStashBufferForFlv: false` 和 `stashInitialSizeForFlv: 128`，可在 `options` 中覆盖。
- m3u8、flv、mp4 跨格式切换时，v2 会自动重建播放器；同格式切换优先调用 `loadByUrl`。
- RTMP 在现代浏览器 H5 模式下不再可靠，建议服务端转 HLS/FLV/RTS。

## 自定义组件和跑马灯

Aliplayer 自定义组件需要额外加载组件脚本，然后通过 `options.components` 注入。组件提供 `componentScripts` 保证脚本在播放器初始化前加载：

```vue
<VueAliplayerV2
    :source="source"
    :component-scripts="['/aliplayer-components/playlist.js']"
    :options="{
        components: [
            {
                name: 'PlaylistComponent',
                type: window.PlaylistComponent,
                args: { list: playlist }
            }
        ]
    }"
/>
```

跑马灯、水印、播放列表等能力是否可用取决于所加载的 Aliplayer 自定义组件脚本。

## 失败重试

播放器错误页属于 Aliplayer SDK 内部 UI。业务侧可以监听 `error` 后使用组件暴露的 `retry()` 或 `reload()` 做局部重试：

```ts
function handleError() {
    playerRef.value?.retry();
}
```

## 开发

```bash
npm install
npm run dev
```

构建 demo：

```bash
npm run build
```

构建组件库：

```bash
npm run type-check
npm run lib
```

## 迁移说明

- v2 仅支持 Vue 3。
- 入口从 Vue 2 插件模式迁移为 Vue 3 `app.use(...)`。
- 组件 ref 需要通过 `ref<VueAliplayerV2Expose | null>` 使用。
- 旧版本用户请安装 `vue-aliplayer-v2@1.x`。
