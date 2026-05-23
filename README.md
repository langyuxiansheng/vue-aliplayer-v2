# vue-aliplayer-v2

[English](./README.en-US.md) | 简体中文

基于阿里云 Web 播放器 Aliplayer SDK 的 Vue 3 播放器组件。v2 使用 Vue 3、TypeScript 和 Vite 重构，支持 URL 播放、VID + PlayAuth、STS、直播、低延迟 FLV、自动格式推断、License 注入、扩展组件脚本、多实例和常用播放器实例方法。

> v2 不再兼容 Vue 2。Vue 2 项目请继续安装 `vue-aliplayer-v2@1.x`。

## 在线演示

- 项目 demo：https://langyuxiansheng.github.io/vue-aliplayer-v2/
- 阿里云播放器官方演示：https://player.alicdn.com/aliplayer/index.html
- 阿里云播放器接入文档：https://help.aliyun.com/zh/vod/developer-reference/integration

## 特性

- Vue 3 组件和插件安装方式，支持 `app.use(VueAliplayerV2, options)`。
- TypeScript 类型导出，包含 props、options、事件、播放器实例和 ref 暴露方法。
- 默认加载阿里云 `imp-web-player` SDK 2.37.0，也可以自定义 CSS/JS 地址。
- 支持 `source` URL、`options.source`、VID + PlayAuth、STS 鉴权配置。
- 自动识别 `mp4`、`m3u8`、`flv`、`mp3`、`rtmp` 播放格式。
- FLV 直播低延迟预设，可按业务需要覆盖 stash buffer 配置。
- 支持 License 配置，适配新版 Aliplayer Web 播放器要求。
- 支持多播放器共存，SDK 资源只加载一次。
- 支持额外加载自定义组件脚本，便于接入播放列表、水印、跑马灯等 Aliplayer 扩展。
- 提供可选的已知 track 上报拦截能力。

## 安装

```bash
npm install vue-aliplayer-v2
```

```bash
yarn add vue-aliplayer-v2
```

```bash
pnpm add vue-aliplayer-v2
```

## 快速开始

### 全局注册

```ts
import { createApp } from 'vue';
import App from './App.vue';
import VueAliplayerV2 from 'vue-aliplayer-v2';

const app = createApp(App);

app.use(VueAliplayerV2, {
    sdkVersion: '2.37.0'
});

app.mount('#app');
```

```vue
<template>
    <VueAliplayerV2
        source="//player.alicdn.com/video/aliyunmedia.mp4"
        :options="{ autoplay: true, useH5Prism: true }"
    />
</template>
```

### 局部引入

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
        @sdk-error="handleSdkError"
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

const license = ref<AliplayerLicense | null>({
    domain: 'example.com',
    key: 'your-license-key'
});

const options = reactive<AliplayerOptions>({
    autoplay: true,
    isLive: false,
    useH5Prism: true,
    playsinline: true,
    width: '100%',
    height: '420px',
    controlBarVisibility: 'hover'
});

function handleReady() {
    playerRef.value?.play();
}

function handleError(error: unknown) {
    console.log('player error', error);
}

function handleSdkError(error: Error) {
    console.log('sdk load error', error.message);
}
</script>
```

## Vue 插件配置

`app.use(VueAliplayerV2, options)` 会设置全局默认值。单个组件传入同名 prop 时，会覆盖全局默认值。

```ts
app.use(VueAliplayerV2, {
    sdkVersion: '2.37.0',
    cssLink: 'https://g.alicdn.com/apsara-media-box/imp-web-player/2.37.0/skins/default/aliplayer-min.css',
    scriptSrc: 'https://g.alicdn.com/apsara-media-box/imp-web-player/2.37.0/aliplayer-min.js',
    componentScripts: ['/aliplayer-components/watermark.js'],
    disableTracking: false,
    trackingUrlPatterns: ['newplayer/track']
});
```

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `sdkVersion` | `string` | `2.37.0` | 阿里云 Web 播放器 SDK 版本。未传 `cssLink` 或 `scriptSrc` 时用于生成官方资源地址。 |
| `cssLink` | `string` | 2.37.0 官方 CSS | 自定义 Aliplayer CSS 地址。 |
| `scriptSrc` | `string` | 2.37.0 官方 JS | 自定义 Aliplayer JS 地址。 |
| `componentScripts` | `string[]` | `[]` | 自定义组件或业务扩展脚本地址列表。 |
| `disableTracking` | `boolean` | `false` | 是否启用已知 Aliplayer 统计上报拦截。 |
| `trackingUrlPatterns` | `Array<string \| RegExp>` | `['newplayer/track']` | 需要拦截的统计上报 URL 片段或正则。 |

## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | `string \| null` | `null` | 播放源 URL。存在时优先于 `options.source`。同格式变更优先调用 `loadByUrl`，跨格式变更会重建播放器。 |
| `options` | `AliplayerOptions \| null` | `null` | 透传给 Aliplayer 的初始化配置。组件会补充 `id`、`source`、`license`、`format` 和低延迟默认值。 |
| `license` | `AliplayerLicense \| null` | `null` | Aliplayer License 配置，优先级高于 `options.license`。 |
| `autoFormat` | `boolean` | `true` | 是否根据 `source` 自动推断 `format`。 |
| `lowLatency` | `boolean` | `false` | 是否启用 FLV 直播低延迟预设。 |
| `normalizeSourceUrl` | `boolean` | `true` | 是否对播放源执行 `encodeURI`，用于处理中文、空格等未编码地址。 |
| `forbidFastForward` | `boolean` | `false` | 是否禁止拖拽快进。 |
| `sdkVersion` | `string` | 全局配置 | 覆盖当前组件使用的 SDK 版本。 |
| `cssLink` | `string` | 全局配置 | 覆盖当前组件使用的 CSS 地址。 |
| `scriptSrc` | `string` | 全局配置 | 覆盖当前组件使用的 JS 地址。 |
| `componentScripts` | `string[]` | 全局配置 | 当前组件初始化前需要加载的扩展脚本。 |
| `disableTracking` | `boolean` | 全局配置 | 当前组件是否启用 track 拦截。 |
| `trackingUrlPatterns` | `Array<string \| RegExp>` | 全局配置 | 当前组件的 track 拦截规则。 |

## AliplayerOptions 常用字段

`options` 会完整透传给 Aliplayer SDK，因此可以继续使用官方文档中的配置项。组件类型中内置了以下常用字段，并保留索引签名支持官方新增字段。

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `source` | `string` | 播放源 URL。 |
| `width` | `string` | 播放器宽度，例如 `100%`。 |
| `height` | `string` | 播放器高度，例如 `420px`。 |
| `autoplay` | `boolean` | 是否自动播放。 |
| `isLive` | `boolean` | 是否为直播。 |
| `format` | `string` | 播放格式，例如 `mp4`、`m3u8`、`flv`。 |
| `license` | `AliplayerLicense` | Aliplayer License 配置。 |
| `vid` | `string` | 点播视频 ID。 |
| `playauth` | `string` | 点播播放凭证。 |
| `authTimeout` | `number` | 播放地址有效时长，单位秒。 |
| `region` | `string` | STS 媒资地域，例如 `cn-shanghai`。 |
| `accessKeyId` | `string` | STS 临时 AccessKey ID。 |
| `accessKeySecret` | `string` | STS 临时 AccessKey Secret。 |
| `securityToken` | `string` | STS 安全令牌。 |
| `components` | `unknown[]` | Aliplayer 自定义组件配置。 |
| `enableStashBufferForFlv` | `boolean` | FLV 是否启用 stash buffer。 |
| `stashInitialSizeForFlv` | `number` | FLV 初始缓存大小。 |
| `rtsVersion` | `string` | RTS SDK 版本。 |

## 事件

组件会透传常用 Aliplayer 事件，并额外提供 `sdk-error`。

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `ready` | `unknown` | 播放器初始化完成。 |
| `play` | `unknown` | 开始播放。 |
| `pause` | `unknown` | 暂停播放。 |
| `canplay` | `unknown` | 可以播放。 |
| `playing` | `unknown` | 正在播放。 |
| `ended` | `unknown` | 播放结束。 |
| `liveStreamStop` | `unknown` | 直播流停止。 |
| `onM3u8Retry` | `unknown` | M3U8 重试事件。 |
| `hideBar` | `unknown` | 控制栏隐藏。 |
| `showBar` | `unknown` | 控制栏显示。 |
| `waiting` | `unknown` | 播放等待。 |
| `timeupdate` | `unknown` | 播放进度更新。 |
| `snapshoted` | `unknown` | 截图完成。 |
| `requestFullScreen` | `unknown` | 进入全屏。 |
| `cancelFullScreen` | `unknown` | 退出全屏。 |
| `error` | `unknown` | 播放器运行时错误。 |
| `startSeek` | `unknown` | 开始 seek。 |
| `completeSeek` | `unknown` | seek 完成。 |
| `sdk-error` | `Error` | SDK CSS、JS 或扩展脚本加载失败。 |

## Ref 方法

通过 `ref<VueAliplayerV2Expose | null>` 可以访问组件暴露的方法。

```ts
playerRef.value?.play();
playerRef.value?.pause();
playerRef.value?.seek(30);
playerRef.value?.setVolume(0.8);
playerRef.value?.loadByUrl('//player.alicdn.com/video/aliyunmedia.mp4');
playerRef.value?.requestFullScreen();
playerRef.value?.retry();
```

| 方法 | 说明 |
| --- | --- |
| `getPlayer()` | 获取底层 Aliplayer 实例。 |
| `init()` | 加载 SDK 并初始化播放器。 |
| `initPlayer()` | 使用当前 props/options 创建播放器实例。 |
| `reload(nextSource?)` | 重载播放器，可传入新的播放源。 |
| `retry(nextSource?)` | 播放失败后的业务重试入口。 |
| `play()` | 播放。 |
| `pause()` | 暂停。 |
| `replay()` | 从头重播。 |
| `seek(time)` | 跳转到指定秒数。 |
| `getCurrentTime()` | 获取当前播放时间。 |
| `getDuration()` | 获取视频总时长。 |
| `getVolume()` | 获取音量。 |
| `setVolume(volume)` | 设置音量。 |
| `loadByUrl(url, time?)` | 使用 URL 切换播放源。 |
| `replayByVidAndPlayAuth(vid, playauth)` | 使用 VID + PlayAuth 重新播放。 |
| `replayByVidAndAuthInfo(...)` | 使用 MPS 鉴权信息重新播放。 |
| `setPlayerSize(width, height)` | 设置播放器尺寸。 |
| `setSpeed(speed)` | 设置播放倍速。 |
| `setSanpshotProperties(width, height, rate)` | 设置截图参数。方法名沿用阿里云 SDK 拼写。 |
| `requestFullScreen()` | 进入全屏。 |
| `cancelFullScreen()` | 退出全屏。 |
| `getIsFullScreen()` | 获取是否处于全屏。 |
| `getStatus()` | 获取播放器状态。 |
| `setLiveTimeRange(beginTime, endTime)` | 设置直播时移可播放范围。 |
| `setRotate(rotate)` | 设置视频旋转角度。 |
| `getRotate()` | 获取视频旋转角度。 |
| `setImage(image)` | 设置视频镜像。 |
| `dispose()` | 销毁播放器。 |
| `setCover(cover)` | 设置封面图。 |
| `setProgressMarkers(markers)` | 设置进度条打点。 |
| `setPreviewTime(time)` | 设置试看时间。 |
| `getPreviewTime()` | 获取试看时间。 |
| `isPreview()` | 判断是否处于试看状态。 |
| `off(eventName, handler)` | 取消监听底层播放器事件。 |

## 使用示例

### URL 播放

```vue
<VueAliplayerV2
    source="//player.alicdn.com/video/aliyunmedia.mp4"
    :options="{
        autoplay: true,
        useH5Prism: true,
        width: '100%',
        height: '420px'
    }"
/>
```

### VID + PlayAuth

```vue
<VueAliplayerV2
    :options="{
        vid: '<your-video-id>',
        playauth: '<your-playauth>',
        authTimeout: 7200,
        width: '100%',
        height: '420px'
    }"
/>
```

`VID + PlayAuth` 是初始化配置，不需要再传 `source`。如果要在播放器创建后切换，可以调用：

```ts
playerRef.value?.replayByVidAndPlayAuth(vid, playauth);
```

### STS

```vue
<VueAliplayerV2
    :options="{
        vid: '<your-video-id>',
        region: 'cn-shanghai',
        accessKeyId: '<temporary-access-key-id>',
        accessKeySecret: '<temporary-access-key-secret>',
        securityToken: '<temporary-security-token>',
        width: '100%',
        height: '420px'
    }"
/>
```

### FLV 直播和低延迟

```vue
<VueAliplayerV2
    source="//example.com/live.flv"
    low-latency
    :options="{
        isLive: true,
        autoplay: true,
        width: '100%',
        height: '420px'
    }"
/>
```

开启 `low-latency` 后，如果当前播放源格式为 `flv` 且 `options.isLive = true`，组件会默认补充：

```ts
{
    enableStashBufferForFlv: false,
    stashInitialSizeForFlv: 128
}
```

如果业务需要其他缓存策略，可以直接在 `options` 中覆盖。

### 直播时移

```ts
playerRef.value?.setLiveTimeRange('2026/05/23 10:00:00', '2026/05/23 12:00:00');
```

也可以在初始化时传入官方支持的直播时移配置：

```vue
<VueAliplayerV2
    source="//example.com/live.m3u8"
    :options="{
        isLive: true,
        liveStartTime: '2026/05/23 10:00:00',
        liveOverTime: '2026/05/23 12:00:00'
    }"
/>
```

### 多播放器

```vue
<template>
    <VueAliplayerV2
        v-for="item in sources"
        :key="item"
        :source="item"
        :options="options"
    />
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const sources = [
    '//player.alicdn.com/video/aliyunmedia.mp4',
    '//yunqivedio.alicdn.com/user-upload/nXPDX8AASx.mp4'
];

const options = reactive({
    autoplay: false,
    width: '100%',
    height: '300px'
});
</script>
```

v2 会复用相同的 SDK CSS/JS 加载 Promise，多实例挂载时不会重复插入同一份 SDK 标签。

### 自定义组件和跑马灯

Aliplayer 的自定义组件通常需要额外脚本。可以通过 `componentScripts` 保证扩展脚本在播放器初始化前加载。

```vue
<VueAliplayerV2
    :source="source"
    :component-scripts="['/aliplayer-components/marquee.js']"
    :options="{
        components: [
            {
                name: 'MarqueeComponent',
                type: window.MarqueeComponent,
                args: {
                    text: 'vue-aliplayer-v2'
                }
            }
        ]
    }"
/>
```

播放列表、水印、跑马灯等能力是否可用取决于你加载的 Aliplayer 自定义组件脚本。

### 禁止快进

```vue
<VueAliplayerV2
    :source="source"
    forbid-fast-forward
/>
```

该能力通过监听播放进度并回退异常快进行为实现，适合作为轻量业务限制。更强的防绕过需求应结合服务端鉴权、试看、加密播放等方案。

### 失败重试

播放器错误页属于 Aliplayer SDK 内部 UI。业务侧可以监听 `error` 后调用 `retry()` 或 `reload()` 做局部重试。

```ts
function handleError() {
    playerRef.value?.retry();
}
```

### 可选拦截 track 上报

```vue
<VueAliplayerV2
    :source="source"
    disable-tracking
    :tracking-url-patterns="['newplayer/track', /\/logstores\//]"
/>
```

该能力只拦截已知 URL 规则，属于 wrapper 层兜底方案。生产项目优先使用阿里云官方配置、控制台设置或合规的业务上报策略。

## SSR 和 Nuxt 说明

Aliplayer SDK 依赖浏览器环境中的 `window` 和 DOM。SSR 项目中请只在客户端渲染播放器，例如 Nuxt 中使用 `<ClientOnly>`：

```vue
<ClientOnly>
    <VueAliplayerV2 :source="source" />
</ClientOnly>
```

## TypeScript

包入口导出以下类型：

```ts
import type {
    AliplayerEventName,
    AliplayerInstance,
    AliplayerLicense,
    AliplayerOptions,
    AliplayerV2Props,
    VueAliplayerV2Expose,
    VueAliplayerV2Options
} from 'vue-aliplayer-v2';
```

## 版本迁移

### 从 1.x 升级到 2.x

- v2 仅支持 Vue 3，不再考虑 Vue 2 向下兼容。
- 构建工具迁移为 Vite，库产物输出为 ESM 和 UMD。
- 全局注册改为 Vue 3 `app.use(VueAliplayerV2, options)`。
- 组件 ref 建议使用 `ref<VueAliplayerV2Expose | null>`。
- 默认 SDK 升级为阿里云 `imp-web-player` 2.37.0 路径。
- 新增 `license`、`lowLatency`、`normalizeSourceUrl`、`componentScripts`、`disableTracking` 等配置。
- 旧项目如需继续使用 Vue 2 版本，请固定安装 `vue-aliplayer-v2@1.x`。

## 常见问题

### 播放器没有显示

先确认页面只在浏览器端渲染，并检查 `sdk-error` 事件。常见原因包括 SDK 地址被拦截、License 未配置、播放源跨域、容器高度为 0。

### 新版 SDK 提示 License 问题

请到阿里云控制台申请 Web 播放器 License，并通过 `license` prop 或 `options.license` 传入：

```vue
<VueAliplayerV2
    :source="source"
    :license="{ domain: 'example.com', key: 'your-license-key' }"
/>
```

### URL 中有中文或空格播放失败

默认 `normalizeSourceUrl = true` 会对播放源执行 `encodeURI`。如果你的业务已经完成 URL 编码，可以显式关闭：

```vue
<VueAliplayerV2
    :source="source"
    :normalize-source-url="false"
/>
```

### 切换播放源时应该用 `source` 还是 `loadByUrl`

普通 Vue 场景优先更新 `source`。组件会自动判断同格式和跨格式切换。命令式场景可以调用 `playerRef.value?.loadByUrl(url)`。

## 本地开发

```bash
npm install
npm run dev
```

类型检查：

```bash
npm run type-check
```

构建 demo：

```bash
npm run build
```

构建组件库：

```bash
npm run lib
```

## License

[MIT](./LICENSE)
