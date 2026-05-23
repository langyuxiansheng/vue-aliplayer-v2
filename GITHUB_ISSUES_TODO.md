# GitHub Issues Todo

Fetched from `langyuxiansheng/vue-aliplayer-v2` open issues on 2026-05-23.

Source: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues

## Summary

- Open issues recorded: 25
- Main themes: Vue 3 compatibility, SDK loading/lifecycle, FLV/HLS/RTMP playback, Aliplayer SDK version drift, skin/custom UI configuration, documentation gaps.
- Implementation pass on 2026-05-23: Vue 3 rewrite landed, SDK default updated to the new `imp-web-player` path, wrapper-level lifecycle/loading/playback helpers were added. Items marked "Code status" below are handled in this repository unless noted as upstream/documentation-only.

## Compatibility And Packaging

### #34 please support vue3.x

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/34
- Created: 2020-12-08
- Comments: 3
- Problem: users request Vue 3 support.
- Notes: comments mention a third-party Vue 3/Vite fork/package `vue-aliplayer-v3`; current project is Vue 2 based.
- Follow-up: decide whether to add Vue 3 support in this package, publish a separate Vue 3 package, or document Vue 2-only support.
- Code status: fixed in v2.0.0 rewrite. Vue 2 users must stay on 1.x.

### #35 安装之后引用就直接报这个问题

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/35
- Created: 2020-12-23
- Comments: 3
- Problem: Vue 3 usage throws `Cannot read property '_c' of undefined` from `vue-aliplayer-v2.umd.min.js`.
- Notes: maintainer identified likely cause as Vue version mismatch; overlaps with #34.
- Follow-up: treat as Vue 3 compatibility/package-entry issue.
- Code status: fixed by replacing the Vue 2 UMD build with Vue 3/Vite library output.

### #65 VueAliplayerV2在vue中使用报错

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/65
- Created: 2022-06-12
- Comments: 1
- Problem: user reports usage error with screenshot only.
- Notes: another user reported the same issue in 2023.
- Follow-up: inspect screenshot manually when triaging; likely packaging/import/runtime compatibility.
- Code status: likely fixed by Vue 3 package rewrite and typed exports; still needs reporter repro if screenshot covers another error.

### #45 关于浏览器兼容的问题

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/45
- Created: 2021-03-23
- Comments: 1
- Problem: works in Chrome 89, player component does not display in Chrome 59.
- Notes: current wrapper relies on upstream Aliplayer SDK compatibility.
- Follow-up: define supported browser matrix and test whether transpilation/polyfills or SDK version is the blocker.
- Code status: documented as upstream SDK/browser support. v2 build targets modern Vue 3/Vite environments.

### #46 请问，我使用uniapp安装aliplayerV2的问题

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/46
- Created: 2021-03-25
- Comments: 1
- Problem: using npm install in uni-app, player buttons/components do not show.
- Notes: maintainer had not tested uni-app.
- Follow-up: decide whether uni-app is supported; if yes, add setup notes and a minimal repro.
- Code status: not claimed as fixed. Needs a uni-app repro because this package targets Vue 3 web apps.

### #70 建议升级阿里云播放器到最新版

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/70
- Created: 2023-04-12
- Comments: 0
- Problem: default SDK is outdated; user changed CSS/JS defaults to Aliplayer `2.15.2`.
- Notes: user also mentions missing source maps because Aliplayer is closed source.
- Follow-up: verify latest stable Aliplayer SDK URL, update defaults if safe, and document how to override SDK URLs.
- Code status: fixed. Default SDK now uses `apsara-media-box/imp-web-player/2.37.0`; `sdkVersion`, `cssLink`, and `scriptSrc` are configurable.

## SDK Loading And Lifecycle

### #71 优化建议

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/71
- Created: 2024-08-02
- Comments: 2
- Problem: each created player reportedly adds another CSS and JS resource.
- Notes: comment references newer `apsara-media-box/imp-web-player/2.16.3` resource URLs and a multi-player example.
- Follow-up: reproduce with multiple create/destroy cycles and verify whether duplicate resource tags appear under current component logic.
- Code status: fixed in shared SDK loader. It caches CSS/JS by URL and avoids duplicate tags for multiple players.

### #62 多屏播放后，只销毁最后一个播放实例

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/62
- Created: 2022-03-25
- Comments: 2
- Problem: in `v-for`, clearing the list only destroys the last player instance.
- Notes: reporter says FLV did not reproduce, HLS did reproduce.
- Follow-up: test multi-instance destroy with HLS and inspect player ID/ref/lifecycle handling.
- Code status: improved. Component now guards async init after unmount and disposes each instance independently; still needs real HLS multi-player regression test.

### #69 Uncaught TypeError: s._options is null

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/69
- Created: 2023-03-29
- Comments: 0
- Problem: runtime error `s._options is null`, screenshot only.
- Follow-up: inspect screenshot and try to reproduce around destroy/re-init or options mutation.
- Code status: improved. Init is token-guarded and avoids creating stale players after fast option/source changes.

## Playback Failures And Stream Behavior

### #11 rtmp html5模式下不能播放

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/11
- Created: 2020-06-10
- Comments: 3
- Problem: RTMP cannot play in HTML5 mode after Flash deprecation.
- Notes: comment says RTMP only works with Flash; another suggests FLV.js.
- Follow-up: document RTMP limitation clearly; avoid promising HTML5 RTMP support unless using another playback strategy.
- Code status: documented limitation. RTMP H5 support is not fixed in wrapper.

### #21 直播，不能播放flv格式的视频

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/21
- Created: 2020-08-10
- Comments: 1
- Problem: FLV live stream fails both by `source` and dynamic `loadByUrl`.
- Notes: maintainer suggested validating stream in VLC and checking Aliplayer config.
- Follow-up: create verified FLV live test case and document required options.
- Code status: improved. Wrapper infers `format: 'flv'`; `lowLatency` adds FLV live buffer defaults. Needs real FLV source validation.

### #24 mp4格式视频加载错误4400

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/24
- Created: 2020-09-27
- Comments: 4
- Problem: large or special MP4 URL reports error 4400; user says autoplay is false but play still appears to trigger.
- Notes: maintainer suspected URL permissions/cross-origin/path encoding; reporter later said the URL contains Chinese characters.
- Follow-up: test encoded vs unencoded URLs, autoplay false behavior, and error handling for cross-origin/private MP4.
- Code status: improved. Wrapper now `encodeURI`s source URLs by default to handle Chinese filenames. Cross-origin/private URL failures remain source/server issues.

### #37 发现m3u8视频播放时的问题

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/37
- Created: 2021-01-07
- Comments: 1
- Problem: M3U8 quality switching is delayed; after switching and refreshing, playback fails.
- Follow-up: reproduce with multi-quality M3U8 source and inspect whether wrapper re-init/load flow loses format or quality state.
- Code status: improved. Wrapper infers source format and rebuilds player on cross-format changes instead of always calling `loadByUrl`.

### #52 flv直播刷新页面视频卡住

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/52
- Created: 2021-06-16
- Comments: 3
- Problem: FLV live video gets stuck after page refresh.
- Notes: reporter confirmed issue was still unresolved in 2021.
- Follow-up: include in FLV live repro matrix with #21 and #68.
- Code status: improved by FLV format inference, async init guards, and `lowLatency`; still needs real stream repro.

### #68 播放Flv视频直播时，时间长了后会延迟几分钟

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/68
- Created: 2022-12-17
- Comments: 0
- Problem: FLV live stream accumulates several minutes of latency over time.
- Follow-up: check Aliplayer FLV buffer options such as stash buffer settings and live latency handling.
- Code status: improved. `lowLatency` applies `enableStashBufferForFlv: false` and `stashInitialSizeForFlv: 128` unless explicitly overridden.

## Playback APIs And Source Modes

### #43 vid+palyauth播放问题

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/43
- Created: 2021-03-06
- Comments: 5
- Problem: `replayByVidAndPlayAuth` appears undefined from both `getPlayer()` and component ref.
- Notes: later comment says methods like `replay()` and `pause()` were also undefined; maintainer notes multiple refs become arrays; user later resolved.
- Follow-up: improve docs for `$refs` in single vs multiple-player usage and when methods are available.
- Code status: fixed for Vue 3 docs. README now shows typed `ref<VueAliplayerV2Expose | null>`.

### #49 这个不支持vid+playauth播放吗

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/49
- Created: 2021-05-18
- Comments: 3
- Problem: question about `vid + playauth` playback support.
- Notes: comment says it works when adding `encryptType: 1`; later user asks what else is required.
- Follow-up: add working `vid + playauth` example and option notes.
- Code status: documented. `vid + playauth` is supported through `options`; ref method remains exposed.

## UI, Skin, And Extension Features

### #53 播放按钮

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/53
- Created: 2021-06-21
- Comments: 14
- Problem: users ask how to center play button, configure quality/subtitle options, change cover, and adjust progress/button colors.
- Notes: maintainer answered that `skinLayout` must be placed inside `options`; example uses `skinLayout: [{ name: 'bigPlayButton', align: 'cc' }]`.
- Follow-up: add skin customization examples to README.
- Code status: partially documented through options passthrough. More visual skin examples can be added later.

### #55 请问我要把清晰度切换单独放到设置外面要怎么弄呢？

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/55
- Created: 2021-06-22
- Comments: 1
- Problem: user wants quality switch outside the settings menu.
- Notes: maintainer pointed to Aliplayer skin settings docs.
- Follow-up: document whether this is possible through `skinLayout` or requires custom components.
- Code status: documented as Aliplayer skin/custom component responsibility.

### #57 自定义组件

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/57
- Created: 2021-07-06
- Comments: 4
- Problem: user asks whether Aliplayer custom component API is supported for a playlist.
- Notes: maintainer says SDK should support it, but another user says adding `components` in `options` does not work unless custom component JS is separately loaded.
- Follow-up: verify custom component loading order and provide an example if supported.
- Code status: improved. Added `componentScripts` to load custom component scripts before player init; README includes example.

### #61 播放失败页面自定义

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/61
- Created: 2021-09-24
- Comments: 1
- Problem: clicking refresh on the player error page refreshes the whole page; user wants local refresh or custom refresh handler.
- Notes: maintainer says the error page comes from Aliplayer.
- Follow-up: check whether SDK exposes error UI customization or whether wrapper can expose a local retry pattern.
- Code status: improved. Added `reload()` / `retry()` exposed methods for local retry; SDK error UI itself remains upstream.

### #67 跑马灯功能可以用吗

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/67
- Created: 2022-10-08
- Comments: 0
- Problem: user asks whether marquee/watermark scrolling text is available.
- Follow-up: verify Aliplayer support and document unsupported/supported approach.
- Code status: documented via `componentScripts` + `options.components`; availability depends on the loaded Aliplayer custom component.

### #59 如何关闭track

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/59
- Created: 2021-08-20
- Comments: 1
- Problem: player sends tracking POST requests to `https://videocloud.cn-hangzhou.log.aliyuncs.com/logstores/newplayer/track`; user wants to disable.
- Notes: a comment suggests deleting `postWithHeader`, which is not a clean wrapper-level solution.
- Follow-up: find official SDK option, if any; otherwise document limitation.
- Code status: opt-in mitigation added. `disableTracking` can block known Aliplayer tracking URLs at wrapper level.

## Format And Capability Questions

### #60 能播vr视频或者vr直播吗

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/60
- Created: 2021-09-16
- Comments: 1
- Problem: asks whether VR video or VR live can be played.
- Notes: maintainer had not tested.
- Follow-up: verify upstream Aliplayer capability and document scope.
- Code status: documentation-only. Wrapper passes options through but does not implement VR rendering itself.

### #66 支持AVI 格式的视频吗？

- Link: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/66
- Created: 2022-09-07
- Comments: 0
- Problem: asks whether AVI format is supported.
- Follow-up: document supported formats according to upstream Aliplayer/browser support.
- Code status: documented format scope. AVI is not claimed as supported by this wrapper.
