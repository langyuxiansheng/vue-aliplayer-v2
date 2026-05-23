# vue-aliplayer-v2

English | [简体中文](./README.md)

A Vue 3 wrapper for the Aliyun Web Player Aliplayer SDK. v2 is rebuilt with Vue 3, TypeScript, and Vite. It supports URL playback, VID + PlayAuth, STS credentials, live streams, low-latency FLV, automatic format inference, License injection, extension component scripts, multiple player instances, and common player instance methods.

> v2 no longer supports Vue 2. For Vue 2 projects, keep using `vue-aliplayer-v2@1.x`.

## Demo

- Project demo: https://langyuxiansheng.github.io/vue-aliplayer-v2/
- Official Aliplayer demo: https://player.alicdn.com/aliplayer/index.html
- Official integration guide: https://help.aliyun.com/zh/vod/developer-reference/integration

## Features

- Vue 3 component and plugin installation via `app.use(VueAliplayerV2, options)`.
- TypeScript exports for props, options, events, player instances, and exposed ref methods.
- Loads Aliyun `imp-web-player` SDK 2.37.0 by default, with custom CSS/JS URL support.
- Supports `source` URLs, `options.source`, VID + PlayAuth, and STS credential playback.
- Infers `mp4`, `m3u8`, `flv`, `mp3`, and `rtmp` formats from source URLs.
- Adds an optional low-latency preset for FLV live streams.
- Supports License config for newer Aliplayer Web SDK versions.
- Supports multiple player instances while loading the SDK assets only once.
- Loads extra component scripts before player initialization for playlists, watermarks, marquees, and other Aliplayer extensions.
- Provides an optional blocker for known tracking requests.

## Installation

```bash
npm install vue-aliplayer-v2
```

```bash
yarn add vue-aliplayer-v2
```

```bash
pnpm add vue-aliplayer-v2
```

## Quick Start

### Global Registration

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

### Local Import

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

## Plugin Options

`app.use(VueAliplayerV2, options)` sets global defaults. Component props with the same names override these defaults per instance.

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

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sdkVersion` | `string` | `2.37.0` | Aliyun Web Player SDK version. Used to generate official asset URLs when `cssLink` or `scriptSrc` is not provided. |
| `cssLink` | `string` | Official 2.37.0 CSS | Custom Aliplayer CSS URL. |
| `scriptSrc` | `string` | Official 2.37.0 JS | Custom Aliplayer JS URL. |
| `componentScripts` | `string[]` | `[]` | Extra component or business extension script URLs. |
| `disableTracking` | `boolean` | `false` | Enables the known Aliplayer tracking request blocker. |
| `trackingUrlPatterns` | `Array<string \| RegExp>` | `['newplayer/track']` | URL fragments or regular expressions to block. |

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | `string \| null` | `null` | Playback source URL. It has priority over `options.source`. Same-format changes prefer `loadByUrl`; cross-format changes recreate the player. |
| `options` | `AliplayerOptions \| null` | `null` | Raw Aliplayer initialization options. The component adds `id`, `source`, `license`, `format`, and low-latency defaults when needed. |
| `license` | `AliplayerLicense \| null` | `null` | Aliplayer License config. It has priority over `options.license`. |
| `autoFormat` | `boolean` | `true` | Infers `format` from `source`. |
| `lowLatency` | `boolean` | `false` | Enables the low-latency FLV live preset. |
| `normalizeSourceUrl` | `boolean` | `true` | Runs `encodeURI` on source URLs to handle Chinese characters, spaces, and other unencoded characters. |
| `forbidFastForward` | `boolean` | `false` | Prevents drag-to-fast-forward behavior. |
| `sdkVersion` | `string` | Global option | Overrides the SDK version for the current component. |
| `cssLink` | `string` | Global option | Overrides the CSS URL for the current component. |
| `scriptSrc` | `string` | Global option | Overrides the JS URL for the current component. |
| `componentScripts` | `string[]` | Global option | Extra scripts to load before initializing the current component. |
| `disableTracking` | `boolean` | Global option | Enables tracking request blocking for the current component. |
| `trackingUrlPatterns` | `Array<string \| RegExp>` | Global option | Tracking URL rules for the current component. |

## Common AliplayerOptions Fields

`options` is passed through to the Aliplayer SDK, so official SDK fields can still be used. The package declares the common fields below and keeps an index signature for additional official or business fields.

| Name | Type | Description |
| --- | --- | --- |
| `source` | `string` | Playback source URL. |
| `width` | `string` | Player width, for example `100%`. |
| `height` | `string` | Player height, for example `420px`. |
| `autoplay` | `boolean` | Whether to autoplay. |
| `isLive` | `boolean` | Whether the stream is live. |
| `format` | `string` | Source format, such as `mp4`, `m3u8`, or `flv`. |
| `license` | `AliplayerLicense` | Aliplayer License config. |
| `vid` | `string` | VOD video ID. |
| `playauth` | `string` | VOD PlayAuth token. |
| `authTimeout` | `number` | Playback URL validity duration in seconds. |
| `region` | `string` | STS media region, for example `cn-shanghai`. |
| `accessKeyId` | `string` | Temporary STS AccessKey ID. |
| `accessKeySecret` | `string` | Temporary STS AccessKey Secret. |
| `securityToken` | `string` | STS security token. |
| `components` | `unknown[]` | Aliplayer custom component config. |
| `enableStashBufferForFlv` | `boolean` | Whether FLV stash buffer is enabled. |
| `stashInitialSizeForFlv` | `number` | FLV initial stash size. |
| `rtsVersion` | `string` | RTS SDK version. |

## Events

The component forwards common Aliplayer events and adds `sdk-error`.

| Event | Payload | Description |
| --- | --- | --- |
| `ready` | `unknown` | Player initialization completed. |
| `play` | `unknown` | Playback started. |
| `pause` | `unknown` | Playback paused. |
| `canplay` | `unknown` | Media can play. |
| `playing` | `unknown` | Media is playing. |
| `ended` | `unknown` | Playback ended. |
| `liveStreamStop` | `unknown` | Live stream stopped. |
| `onM3u8Retry` | `unknown` | M3U8 retry event. |
| `hideBar` | `unknown` | Control bar hidden. |
| `showBar` | `unknown` | Control bar shown. |
| `waiting` | `unknown` | Playback is waiting. |
| `timeupdate` | `unknown` | Playback time updated. |
| `snapshoted` | `unknown` | Snapshot completed. |
| `requestFullScreen` | `unknown` | Fullscreen requested. |
| `cancelFullScreen` | `unknown` | Fullscreen canceled. |
| `error` | `unknown` | Runtime player error. |
| `startSeek` | `unknown` | Seek started. |
| `completeSeek` | `unknown` | Seek completed. |
| `sdk-error` | `Error` | SDK CSS, JS, or extension script failed to load. |

## Ref Methods

Use `ref<VueAliplayerV2Expose | null>` to access exposed methods.

```ts
playerRef.value?.play();
playerRef.value?.pause();
playerRef.value?.seek(30);
playerRef.value?.setVolume(0.8);
playerRef.value?.loadByUrl('//player.alicdn.com/video/aliyunmedia.mp4');
playerRef.value?.requestFullScreen();
playerRef.value?.retry();
```

| Method | Description |
| --- | --- |
| `getPlayer()` | Returns the underlying Aliplayer instance. |
| `init()` | Loads the SDK and initializes the player. |
| `initPlayer()` | Creates a player instance with current props/options. |
| `reload(nextSource?)` | Reloads the player, optionally with a new source. |
| `retry(nextSource?)` | Business-friendly retry method after playback failure. |
| `play()` | Starts playback. |
| `pause()` | Pauses playback. |
| `replay()` | Replays from the beginning. |
| `seek(time)` | Seeks to a time in seconds. |
| `getCurrentTime()` | Returns current playback time. |
| `getDuration()` | Returns media duration. |
| `getVolume()` | Returns current volume. |
| `setVolume(volume)` | Sets volume. |
| `loadByUrl(url, time?)` | Switches source by URL. |
| `replayByVidAndPlayAuth(vid, playauth)` | Replays with VID + PlayAuth. |
| `replayByVidAndAuthInfo(...)` | Replays with MPS auth info. |
| `setPlayerSize(width, height)` | Sets player size. |
| `setSpeed(speed)` | Sets playback speed. |
| `setSanpshotProperties(width, height, rate)` | Sets snapshot options. The method name follows the SDK spelling. |
| `requestFullScreen()` | Enters fullscreen. |
| `cancelFullScreen()` | Exits fullscreen. |
| `getIsFullScreen()` | Returns fullscreen state. |
| `getStatus()` | Returns player status. |
| `setLiveTimeRange(beginTime, endTime)` | Sets the playable live time-shift range. |
| `setRotate(rotate)` | Sets video rotation. |
| `getRotate()` | Returns video rotation. |
| `setImage(image)` | Sets video mirror mode. |
| `dispose()` | Disposes the player. |
| `setCover(cover)` | Sets cover image. |
| `setProgressMarkers(markers)` | Sets progress markers. |
| `setPreviewTime(time)` | Sets preview duration. |
| `getPreviewTime()` | Returns preview duration. |
| `isPreview()` | Returns whether the player is in preview mode. |
| `off(eventName, handler)` | Removes a listener from the underlying player. |

## Usage Examples

### URL Playback

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

`VID + PlayAuth` is an initialization mode, so `source` is not required. To switch after the player has been created, call:

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

### FLV Live and Low Latency

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

When `low-latency` is enabled and the current source is FLV with `options.isLive = true`, the component adds:

```ts
{
    enableStashBufferForFlv: false,
    stashInitialSizeForFlv: 128
}
```

You can override these values directly in `options`.

### Live Time Shift

```ts
playerRef.value?.setLiveTimeRange('2026/05/23 10:00:00', '2026/05/23 12:00:00');
```

You can also pass official time-shift options during initialization:

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

### Multiple Players

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

v2 reuses SDK CSS/JS loading promises, so multiple players do not insert duplicate SDK tags for the same assets.

### Custom Components and Marquees

Aliplayer custom components often require extra scripts. Use `componentScripts` to load extension scripts before player initialization.

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

Playlist, watermark, marquee, and similar features depend on the Aliplayer custom component scripts you provide.

### Forbid Fast Forward

```vue
<VueAliplayerV2
    :source="source"
    forbid-fast-forward
/>
```

This is implemented by watching playback progress and seeking back when a forward jump is detected. It is useful as a lightweight business restriction. Stronger anti-bypass requirements should be combined with server-side authorization, preview limits, or encrypted playback.

### Retry After Failure

Aliplayer error pages are rendered by the SDK itself. Business code can listen to `error` and call `retry()` or `reload()` for local recovery.

```ts
function handleError() {
    playerRef.value?.retry();
}
```

### Optional Tracking Request Blocking

```vue
<VueAliplayerV2
    :source="source"
    disable-tracking
    :tracking-url-patterns="['newplayer/track', /\/logstores\//]"
/>
```

This only blocks URLs matching the configured rules and is intended as a wrapper-level fallback. In production, prefer official Aliyun settings, console-side configuration, or your own compliant analytics strategy.

## SSR and Nuxt

The Aliplayer SDK depends on browser `window` and DOM APIs. In SSR projects, render the player only on the client. For Nuxt:

```vue
<ClientOnly>
    <VueAliplayerV2 :source="source" />
</ClientOnly>
```

## TypeScript

The package entry exports these types:

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

## Migration

### From 1.x to 2.x

- v2 supports Vue 3 only and no longer keeps Vue 2 compatibility.
- The build toolchain is Vite, with ESM and UMD library outputs.
- Global registration now uses Vue 3 `app.use(VueAliplayerV2, options)`.
- Component refs should use `ref<VueAliplayerV2Expose | null>`.
- The default SDK path now uses Aliyun `imp-web-player` 2.37.0.
- New configs include `license`, `lowLatency`, `normalizeSourceUrl`, `componentScripts`, and `disableTracking`.
- For legacy Vue 2 projects, pin `vue-aliplayer-v2@1.x`.

## FAQ

### The player is not visible

Make sure the player is rendered only in the browser and check the `sdk-error` event. Common causes include blocked SDK assets, missing License config, source CORS issues, and a container height of `0`.

### The new SDK reports a License error

Apply for a Web Player License in the Aliyun console and pass it through the `license` prop or `options.license`:

```vue
<VueAliplayerV2
    :source="source"
    :license="{ domain: 'example.com', key: 'your-license-key' }"
/>
```

### URLs with Chinese characters or spaces fail to play

`normalizeSourceUrl = true` runs `encodeURI` on source URLs by default. If your business code already encodes URLs, disable it explicitly:

```vue
<VueAliplayerV2
    :source="source"
    :normalize-source-url="false"
/>
```

### Should I update `source` or call `loadByUrl` when switching sources?

For normal Vue usage, update `source`. The component handles same-format and cross-format changes. For imperative workflows, call `playerRef.value?.loadByUrl(url)`.

## Local Development

```bash
npm install
npm run dev
```

Type check:

```bash
npm run type-check
```

Build the demo:

```bash
npm run build
```

Build the library:

```bash
npm run lib
```

## License

[MIT](./LICENSE)
