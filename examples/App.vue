<template>
    <main class="demo-page">
        <header class="app-header">
            <div class="brand-block">
                <span class="version">vue-aliplayer-v2</span>
                <h1>Aliplayer Vue 3 Workbench</h1>
            </div>
            <div class="header-actions">
                <button type="button" class="button secondary" @click="resetAll">重置</button>
                <button type="button" class="button secondary" @click="show = !show">{{ show ? '销毁' : '挂载' }}</button>
                <button type="button" class="button primary" :disabled="isMultiple || !show" @click="playerRef?.retry(currentSource || undefined)">重试</button>
            </div>
        </header>

        <section class="status-strip">
            <article>
                <span>SDK</span>
                <strong>{{ sdkVersion }}</strong>
            </article>
            <article>
                <span>播放模式</span>
                <strong>{{ sourceModeLabel }}</strong>
            </article>
            <article>
                <span>推断格式</span>
                <strong>{{ inferredFormat || '未识别' }}</strong>
            </article>
            <article>
                <span>播放器状态</span>
                <strong>{{ playerStatus }}</strong>
            </article>
            <article>
                <span>事件</span>
                <strong>{{ logs.length }}</strong>
            </article>
        </section>

        <section class="workspace">
            <div class="stage-column">
                <section class="player-panel">
                    <div class="player-panel-head">
                        <div>
                            <h2>{{ isMultiple ? '多实例验证' : '单实例调试' }}</h2>
                            <p>{{ currentSource || 'VID / STS 初始化模式' }}</p>
                        </div>
                        <label class="switch compact-switch">
                            <span>多实例</span>
                            <input v-model="isMultiple" type="checkbox">
                        </label>
                    </div>

                    <div class="player-frame" :class="{ 'is-multiple': isMultiple }">
                        <template v-if="show">
                            <div v-if="isMultiple" class="player-grid">
                                <VueAliplayerV2
                                    v-for="item in multipleSources"
                                    :key="item"
                                    class="player"
                                    :source="item"
                                    :options="playerOptions"
                                    :license="resolvedLicense"
                                    :sdk-version="sdkVersion"
                                    :component-scripts="componentScriptList"
                                    :auto-format="autoFormat"
                                    :normalize-source-url="normalizeSourceUrl"
                                    :disable-tracking="disableTracking"
                                    :low-latency="lowLatency"
                                    :forbid-fast-forward="forbidFastForward"
                                    @ready="handleReady"
                                    @error="handleError"
                                    @sdk-error="handleSdkError"
                                />
                            </div>
                            <VueAliplayerV2
                                v-else
                                ref="playerRef"
                                class="player"
                                :source="currentSource"
                                :options="playerOptions"
                                :license="resolvedLicense"
                                :sdk-version="sdkVersion"
                                :component-scripts="componentScriptList"
                                :auto-format="autoFormat"
                                :normalize-source-url="normalizeSourceUrl"
                                :disable-tracking="disableTracking"
                                :low-latency="lowLatency"
                                :forbid-fast-forward="forbidFastForward"
                                @ready="handleReady"
                                @play="pushLog('play')"
                                @pause="pushLog('pause')"
                                @ended="pushLog('ended')"
                                @waiting="pushLog('waiting')"
                                @timeupdate="handleTimeUpdate"
                                @error="handleError"
                                @sdk-error="handleSdkError"
                            />
                        </template>
                        <div v-else class="empty-player">
                            <strong>播放器未挂载</strong>
                            <span>{{ currentSource || '等待初始化参数' }}</span>
                        </div>
                    </div>

                    <div class="transport">
                        <button type="button" class="button icon-button" :disabled="isMultiple || !show" @click="playerRef?.play()">播放</button>
                        <button type="button" class="button icon-button" :disabled="isMultiple || !show" @click="playerRef?.pause()">暂停</button>
                        <button type="button" class="button icon-button" :disabled="isMultiple || !show" @click="playerRef?.replay()">重播</button>
                        <button type="button" class="button icon-button" :disabled="isMultiple || !show" @click="seekTo">跳转</button>
                        <button type="button" class="button icon-button" :disabled="isMultiple || !show" @click="requestFullScreen">全屏</button>
                        <button type="button" class="button icon-button" :disabled="isMultiple || !show" @click="snapshotStatus">状态</button>
                    </div>
                </section>

                <section class="lower-grid">
                    <article class="event-panel">
                        <div class="section-head">
                            <h2>事件流</h2>
                            <button type="button" class="text-button" @click="logs = []">清空</button>
                        </div>
                        <ol class="log-list">
                            <li v-for="item in logs" :key="item.id">
                                <time>{{ item.time }}</time>
                                <span>{{ item.message }}</span>
                            </li>
                            <li v-if="!logs.length" class="muted-row">暂无事件</li>
                        </ol>
                    </article>

                    <article class="config-panel">
                        <div class="section-head">
                            <h2>配置预览</h2>
                            <button type="button" class="text-button" @click="copyConfig">复制</button>
                        </div>
                        <pre>{{ formattedOptions }}</pre>
                    </article>
                </section>
            </div>

            <aside class="inspector">
                <div class="tabs" role="tablist" aria-label="参数分组">
                    <button
                        v-for="tab in tabs"
                        :key="tab.value"
                        type="button"
                        :class="{ active: activeTab === tab.value }"
                        @click="activeTab = tab.value"
                    >
                        {{ tab.label }}
                    </button>
                </div>

                <section v-if="activeTab === 'source'" class="panel-section">
                    <h2>播放源</h2>
                    <div class="segmented">
                        <button
                            v-for="mode in sourceModes"
                            :key="mode.value"
                            type="button"
                            :class="{ active: sourceMode === mode.value }"
                            @click="sourceMode = mode.value"
                        >
                            {{ mode.label }}
                        </button>
                    </div>

                    <label v-if="sourceMode === 'url'" class="field">
                        <span>预设源</span>
                        <select v-model="selectedPreset">
                            <option v-for="item in sourcePresets" :key="item.value" :value="item.value">{{ item.label }}</option>
                        </select>
                    </label>

                    <label v-if="sourceMode === 'url'" class="field">
                        <span>自定义 URL</span>
                        <input v-model="customSource" type="url" placeholder="https://example.com/video.mp4">
                    </label>

                    <div v-if="sourceMode === 'vid'" class="field-grid">
                        <label class="field">
                            <span>VID</span>
                            <input v-model="vidConfig.vid" type="text" placeholder="1e067a2831b641db...">
                        </label>
                        <label class="field">
                            <span>PlayAuth</span>
                            <input v-model="vidConfig.playauth" type="text" placeholder="Base64 PlayAuth">
                        </label>
                        <label class="field">
                            <span>Auth Timeout</span>
                            <input v-model.number="vidConfig.authTimeout" type="number" min="60" step="60">
                        </label>
                    </div>

                    <div v-if="sourceMode === 'sts'" class="field-grid">
                        <label class="field">
                            <span>VID</span>
                            <input v-model="stsConfig.vid" type="text">
                        </label>
                        <label class="field">
                            <span>Region</span>
                            <input v-model="stsConfig.region" type="text" placeholder="cn-shanghai">
                        </label>
                        <label class="field">
                            <span>AccessKey ID</span>
                            <input v-model="stsConfig.accessKeyId" type="text">
                        </label>
                        <label class="field">
                            <span>AccessKey Secret</span>
                            <input v-model="stsConfig.accessKeySecret" type="password">
                        </label>
                        <label class="field">
                            <span>Security Token</span>
                            <textarea v-model="stsConfig.securityToken" rows="3"></textarea>
                        </label>
                    </div>
                </section>

                <section v-if="activeTab === 'basic'" class="panel-section">
                    <h2>基础</h2>
                    <div class="switch-grid">
                        <label class="switch">
                            <span>自动播放</span>
                            <input v-model="baseOptions.autoplay" type="checkbox">
                        </label>
                        <label class="switch">
                            <span>直播</span>
                            <input v-model="baseOptions.isLive" type="checkbox">
                        </label>
                        <label class="switch">
                            <span>H5</span>
                            <input v-model="baseOptions.useH5Prism" type="checkbox">
                        </label>
                        <label class="switch">
                            <span>Flash</span>
                            <input v-model="baseOptions.useFlashPrism" type="checkbox">
                        </label>
                        <label class="switch">
                            <span>循环</span>
                            <input v-model="baseOptions.rePlay" type="checkbox">
                        </label>
                        <label class="switch">
                            <span>预加载</span>
                            <input v-model="baseOptions.preload" type="checkbox">
                        </label>
                        <label class="switch">
                            <span>内联播放</span>
                            <input v-model="baseOptions.playsinline" type="checkbox">
                        </label>
                        <label class="switch">
                            <span>禁用 Seek</span>
                            <input v-model="baseOptions.disableSeek" type="checkbox">
                        </label>
                    </div>

                    <div class="field-grid">
                        <label class="field">
                            <span>宽度</span>
                            <input v-model="baseOptions.width" type="text">
                        </label>
                        <label class="field">
                            <span>高度</span>
                            <input v-model="baseOptions.height" type="text">
                        </label>
                        <label class="field">
                            <span>语言</span>
                            <select v-model="baseOptions.language">
                                <option value="zh-cn">zh-cn</option>
                                <option value="en-us">en-us</option>
                            </select>
                        </label>
                        <label class="field">
                            <span>控制栏</span>
                            <select v-model="baseOptions.controlBarVisibility">
                                <option value="hover">hover</option>
                                <option value="click">click</option>
                                <option value="always">always</option>
                            </select>
                        </label>
                        <label class="field">
                            <span>隐藏延迟</span>
                            <input v-model.number="baseOptions.showBarTime" type="number" min="0" step="500">
                        </label>
                        <label class="field">
                            <span>封面</span>
                            <input v-model="baseOptions.cover" type="url" placeholder="https://...">
                        </label>
                    </div>
                </section>

                <section v-if="activeTab === 'live'" class="panel-section">
                    <h2>直播与格式</h2>
                    <div class="switch-grid">
                        <label class="switch">
                            <span>自动格式</span>
                            <input v-model="autoFormat" type="checkbox">
                        </label>
                        <label class="switch">
                            <span>低延迟</span>
                            <input v-model="lowLatency" type="checkbox">
                        </label>
                        <label class="switch">
                            <span>URL 编码</span>
                            <input v-model="normalizeSourceUrl" type="checkbox">
                        </label>
                        <label class="switch">
                            <span>禁快进</span>
                            <input v-model="forbidFastForward" type="checkbox">
                        </label>
                    </div>

                    <div class="field-grid">
                        <label class="field">
                            <span>格式</span>
                            <select v-model="manualFormat">
                                <option value="">auto</option>
                                <option value="mp4">mp4</option>
                                <option value="m3u8">m3u8</option>
                                <option value="flv">flv</option>
                                <option value="mp3">mp3</option>
                                <option value="rtmp">rtmp</option>
                            </select>
                        </label>
                        <label class="field">
                            <span>FLV stash</span>
                            <select v-model="flvStash">
                                <option value="auto">auto</option>
                                <option value="on">on</option>
                                <option value="off">off</option>
                            </select>
                        </label>
                        <label class="field">
                            <span>stash size</span>
                            <input v-model.number="stashInitialSizeForFlv" type="number" min="0" step="32">
                        </label>
                        <label class="field">
                            <span>RTS 版本</span>
                            <input v-model="rtsVersion" type="text" placeholder="2.2.1">
                        </label>
                        <label class="field">
                            <span>时移开始</span>
                            <input v-model="liveStartTime" type="text" placeholder="2026/05/23 10:00:00">
                        </label>
                        <label class="field">
                            <span>时移结束</span>
                            <input v-model="liveOverTime" type="text" placeholder="2026/05/23 12:00:00">
                        </label>
                    </div>
                </section>

                <section v-if="activeTab === 'sdk'" class="panel-section">
                    <h2>SDK 与扩展</h2>
                    <div class="field-grid">
                        <label class="field">
                            <span>SDK 版本</span>
                            <input v-model="sdkVersion" type="text">
                        </label>
                        <label class="field">
                            <span>License 域名</span>
                            <input v-model="licenseForm.domain" type="text" placeholder="example.com">
                        </label>
                        <label class="field">
                            <span>License Key</span>
                            <input v-model="licenseForm.key" type="password">
                        </label>
                        <label class="field">
                            <span>组件脚本</span>
                            <textarea v-model="componentScriptsText" rows="3" placeholder="每行一个脚本地址"></textarea>
                        </label>
                    </div>

                    <div class="switch-grid">
                        <label class="switch">
                            <span>拦截 track</span>
                            <input v-model="disableTracking" type="checkbox">
                        </label>
                        <label class="switch">
                            <span>系统菜单</span>
                            <input v-model="baseOptions.enableSystemMenu" type="checkbox">
                        </label>
                    </div>
                </section>

                <section v-if="activeTab === 'skin'" class="panel-section">
                    <h2>皮肤</h2>
                    <div class="field-grid">
                        <label class="field">
                            <span>大播放按钮</span>
                            <select v-model="skinPreset">
                                <option value="default">default</option>
                                <option value="center">center</option>
                                <option value="minimal">minimal</option>
                                <option value="hidden">hidden</option>
                            </select>
                        </label>
                        <label class="field">
                            <span>试看时间</span>
                            <input v-model.number="previewTime" type="number" min="0">
                        </label>
                        <label class="field">
                            <span>打点秒数</span>
                            <input v-model="progressMarkersText" type="text" placeholder="10,30,60">
                        </label>
                    </div>

                    <label class="field">
                        <span>自定义 options JSON</span>
                        <textarea v-model="customOptionsJson" rows="8" spellcheck="false"></textarea>
                    </label>
                    <p v-if="customOptionsError" class="error-line">{{ customOptionsError }}</p>
                </section>
            </aside>
        </section>
    </main>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import VueAliplayerV2, { type AliplayerLicense, type AliplayerOptions, type VueAliplayerV2Expose } from '../packages';
import { inferSourceFormat } from '../packages/AliplayerV2/source';

/**
 * Demo 支持的播放源输入方式。
 *
 * - `url`：直接传入 URL，覆盖 MP4、M3U8、FLV、RTMP 等普通场景。
 * - `vid`：使用阿里云 VOD 的 VID + PlayAuth 初始化。
 * - `sts`：使用阿里云 VOD 的 STS 临时凭证初始化。
 */
type SourceMode = 'url' | 'vid' | 'sts';

/**
 * 右侧参数面板的分组值。
 *
 * 该类型让 tab 切换、配置区渲染和默认状态保持同步，新增面板时需要同步扩展。
 */
type TabValue = 'source' | 'basic' | 'live' | 'sdk' | 'skin';

/**
 * 播放器事件流中的单条日志。
 *
 * 日志只用于 demo 展示，不参与播放器状态机；`id` 保证 Vue 列表渲染稳定。
 */
type LogItem = {
    id: string;
    time: string;
    message: string;
};

/**
 * 单实例播放器引用。
 *
 * 多实例模式下不绑定 ref，避免示例按钮对多个播放器同时发出指令造成歧义。
 */
const playerRef = ref<VueAliplayerV2Expose | null>(null);

/**
 * 是否挂载播放器组件。
 *
 * 用于验证组件反复创建、销毁时 SDK 实例和 DOM 容器能否正确释放。
 */
const show = ref(true);

/**
 * 是否进入多实例验证模式。
 *
 * 主要用于复现历史 issue 中多个播放器共存时容器 ID、事件绑定和实例销毁的问题。
 */
const isMultiple = ref(false);

/**
 * 当前打开的右侧参数面板。
 */
const activeTab = ref<TabValue>('source');

/**
 * 当前播放源模式。
 */
const sourceMode = ref<SourceMode>('url');

/**
 * URL 模式下选择的预设播放源。
 */
const selectedPreset = ref('//player.alicdn.com/video/aliyunmedia.mp4');

/**
 * URL 模式下输入的自定义播放源。
 *
 * 有值时优先级高于 `selectedPreset`，便于快速粘贴用户自己的直播或点播地址。
 */
const customSource = ref('');

/**
 * demo 顶部展示的播放器状态。
 */
const playerStatus = ref('init');

/**
 * 最近播放器事件列表。
 */
const logs = ref<LogItem[]>([]);

/**
 * 当前加载的 Aliplayer SDK 版本。
 *
 * 默认跟随阿里云官方文档当前推荐的 2.37.0；用户可在 demo 中验证旧版或新版 SDK。
 */
const sdkVersion = ref('2.37.0');

/**
 * 是否自动根据 source URL 后缀推断 `format`。
 */
const autoFormat = ref(true);

/**
 * 是否启用低延迟直播相关默认项。
 */
const lowLatency = ref(true);

/**
 * 是否在传给 SDK 前对播放源做安全编码。
 */
const normalizeSourceUrl = ref(true);

/**
 * 是否禁止快进。
 */
const forbidFastForward = ref(false);

/**
 * 是否拦截 SDK 的埋点请求。
 */
const disableTracking = ref(false);

/**
 * 每行一个自定义组件脚本地址。
 *
 * 组件会在 SDK 主脚本加载完成后顺序加载这些扩展脚本。
 */
const componentScriptsText = ref('');

/**
 * 手动指定的播放格式。
 *
 * 留空时交给组件根据 `autoFormat` 和 URL 自动推断。
 */
const manualFormat = ref('');

/**
 * FLV stash buffer 开关。
 *
 * `auto` 表示不覆盖 SDK 默认值，`on` 和 `off` 分别写入布尔值。
 */
const flvStash = ref<'auto' | 'on' | 'off'>('auto');

/**
 * FLV 首包缓冲大小，单位沿用 Aliplayer SDK。
 */
const stashInitialSizeForFlv = ref(128);

/**
 * RTS 插件版本号。
 *
 * 仅在项目需要阿里云超低延迟 RTS 直播时填写。
 */
const rtsVersion = ref('');

/**
 * 直播时移开始时间。
 */
const liveStartTime = ref('');

/**
 * 直播时移结束时间。
 */
const liveOverTime = ref('');

/**
 * 皮肤布局预设。
 */
const skinPreset = ref('center');

/**
 * 试看时长，单位为秒。
 */
const previewTime = ref(0);

/**
 * 进度条打点输入，使用逗号分隔秒数。
 */
const progressMarkersText = ref('10,30,60');

/**
 * 透传给 Aliplayer 的自定义 JSON 配置。
 *
 * 这里保留文本输入是为了让 demo 能覆盖未显式建表单的 SDK 参数。
 */
const customOptionsJson = ref('{\n  "diagnosisButtonVisible": true\n}');

/**
 * 自定义 JSON 解析失败时的错误文案。
 */
const customOptionsError = ref('');

/**
 * 日志递增种子。
 *
 * 与时间戳拼接后生成列表 key，避免同一毫秒内多条事件冲突。
 */
let logSeed = 0;

/**
 * 右侧参数面板定义。
 */
const tabs: Array<{ label: string; value: TabValue }> = [
    { label: '源', value: 'source' },
    { label: '基础', value: 'basic' },
    { label: '直播', value: 'live' },
    { label: 'SDK', value: 'sdk' },
    { label: '皮肤', value: 'skin' }
];

/**
 * 播放源模式切换项。
 */
const sourceModes: Array<{ label: string; value: SourceMode }> = [
    { label: 'URL', value: 'url' },
    { label: 'VID', value: 'vid' },
    { label: 'STS', value: 'sts' }
];

/**
 * URL 模式下的演示源。
 *
 * 保留多个源用于验证 URL 规范化、格式推断和 reload 行为。
 */
const sourcePresets = [
    { label: 'MP4 演示源', value: '//player.alicdn.com/video/aliyunmedia.mp4' },
    { label: 'MP4 备用源', value: '//yunqivedio.alicdn.com/user-upload/nXPDX8AASx.mp4' },
    { label: 'M3U8 直播源', value: '//ivi.bupt.edu.cn/hls/cctv1.m3u8' }
];

/**
 * 多实例模式下使用的播放源列表。
 */
const multipleSources = [
    '//player.alicdn.com/video/aliyunmedia.mp4',
    '//yunqivedio.alicdn.com/user-upload/nXPDX8AASx.mp4',
    '//player.alicdn.com/video/aliyunmedia.mp4',
    '//yunqivedio.alicdn.com/user-upload/nXPDX8AASx.mp4'
];

/**
 * demo 可视化表单中的基础 Aliplayer 配置。
 *
 * 该对象会被合并进最终 `playerOptions`，与 SDK 参数名保持一致，便于直接复制。
 */
const baseOptions = reactive<AliplayerOptions>({
    width: '100%',
    height: '420px',
    autoplay: true,
    isLive: false,
    useH5Prism: true,
    useFlashPrism: false,
    playsinline: true,
    preload: true,
    rePlay: false,
    disableSeek: false,
    enableSystemMenu: false,
    controlBarVisibility: 'hover',
    showBarTime: 5000,
    language: 'zh-cn',
    cover: ''
});

/**
 * 阿里云 Web 播放器 License 表单。
 *
 * 当 `domain` 和 `key` 都填写后才会注入到组件，避免空字符串覆盖全局配置。
 */
const licenseForm = reactive<AliplayerLicense>({
    domain: '',
    key: ''
});

/**
 * VID + PlayAuth 初始化表单。
 */
const vidConfig = reactive({
    vid: '',
    playauth: '',
    authTimeout: 7200
});

/**
 * STS 初始化表单。
 */
const stsConfig = reactive({
    vid: '',
    region: 'cn-shanghai',
    accessKeyId: '',
    accessKeySecret: '',
    securityToken: ''
});

/**
 * 当前播放源模式的展示文案。
 */
const sourceModeLabel = computed(() => sourceModes.find((item) => item.value === sourceMode.value)?.label || 'URL');

/**
 * 当前 URL 播放源。
 *
 * 非 URL 模式下返回 `null`，这样组件不会同时收到 `source` 与 VID/STS 参数。
 */
const currentSource = computed(() => {
    if (sourceMode.value !== 'url') return null;
    return customSource.value.trim() || selectedPreset.value;
});

/**
 * 当前 URL 播放源的自动格式推断结果。
 */
const inferredFormat = computed(() => inferSourceFormat(currentSource.value));

/**
 * 自定义组件脚本列表。
 */
const componentScriptList = computed(() => componentScriptsText.value.split('\n').map((item) => item.trim()).filter(Boolean));

/**
 * 组件最终接收的 License 配置。
 */
const resolvedLicense = computed(() => {
    if (!licenseForm.domain.trim() || !licenseForm.key.trim()) return null;
    return {
        domain: licenseForm.domain.trim(),
        key: licenseForm.key.trim()
    };
});

/**
 * 根据皮肤预设生成 SDK `skinLayout`。
 *
 * `undefined` 表示不覆盖 SDK 默认布局，`false` 表示显式隐藏默认皮肤。
 */
const skinLayout = computed(() => {
    if (skinPreset.value === 'default') return undefined;
    if (skinPreset.value === 'hidden') return false;
    if (skinPreset.value === 'minimal') {
        return [
            { name: 'bigPlayButton', align: 'cc' },
            {
                name: 'controlBar',
                align: 'blabs',
                x: 0,
                y: 0,
                children: [
                    { name: 'progress', align: 'blabs', x: 0, y: 44 },
                    { name: 'playButton', align: 'tl', x: 12, y: 12 },
                    { name: 'timeDisplay', align: 'tl', x: 48, y: 10 },
                    { name: 'fullScreenButton', align: 'tr', x: 12, y: 12 }
                ]
            }
        ];
    }
    return [{ name: 'bigPlayButton', align: 'cc' }];
});

/**
 * 将逗号分隔的秒数转换成 Aliplayer 进度条打点配置。
 */
const progressMarkers = computed(() => progressMarkersText.value
    .split(',')
    .map((item) => Number(item.trim()))
    .filter((item) => Number.isFinite(item) && item > 0)
    .map((time, index) => ({
        offset: time,
        text: `Marker ${index + 1}`
    })));

/**
 * 解析用户输入的自定义 JSON 配置。
 *
 * 解析失败时返回空对象，同时把错误信息展示在 demo 表单下方，避免无效 JSON 中断渲染。
 */
const parsedCustomOptions = computed<Record<string, unknown>>(() => {
    customOptionsError.value = '';
    if (!customOptionsJson.value.trim()) return {};

    try {
        return JSON.parse(customOptionsJson.value) as Record<string, unknown>;
    } catch (error) {
        customOptionsError.value = error instanceof Error ? error.message : String(error);
        return {};
    }
});

/**
 * 汇总组件当前使用的 Aliplayer options。
 *
 * 这里有意只写入有效值，避免空字符串或自动态字段覆盖 SDK 默认行为。
 */
const playerOptions = computed<AliplayerOptions>(() => {
    const options: AliplayerOptions = {
        ...baseOptions,
        ...parsedCustomOptions.value
    };

    if (!baseOptions.cover) delete options.cover;
    if (manualFormat.value) options.format = manualFormat.value;
    if (flvStash.value !== 'auto') options.enableStashBufferForFlv = flvStash.value === 'on';
    if (stashInitialSizeForFlv.value > 0) options.stashInitialSizeForFlv = stashInitialSizeForFlv.value;
    if (rtsVersion.value.trim()) options.rtsVersion = rtsVersion.value.trim();
    if (liveStartTime.value.trim()) options.liveStartTime = liveStartTime.value.trim();
    if (liveOverTime.value.trim()) options.liveOverTime = liveOverTime.value.trim();
    if (skinLayout.value !== undefined) options.skinLayout = skinLayout.value;
    if (previewTime.value > 0) options.previewTime = previewTime.value;
    if (progressMarkers.value.length) options.progressMarkers = progressMarkers.value;

    if (sourceMode.value === 'vid') {
        options.vid = vidConfig.vid.trim();
        options.playauth = vidConfig.playauth.trim();
        options.authTimeout = vidConfig.authTimeout;
    }

    if (sourceMode.value === 'sts') {
        options.vid = stsConfig.vid.trim();
        options.region = stsConfig.region.trim();
        options.accessKeyId = stsConfig.accessKeyId.trim();
        options.accessKeySecret = stsConfig.accessKeySecret.trim();
        options.securityToken = stsConfig.securityToken.trim();
    }

    return options;
});

/**
 * 可复制的完整 demo 配置快照。
 */
const formattedOptions = computed(() => JSON.stringify({
    source: currentSource.value,
    options: playerOptions.value,
    license: resolvedLicense.value,
    sdkVersion: sdkVersion.value,
    autoFormat: autoFormat.value,
    lowLatency: lowLatency.value,
    normalizeSourceUrl: normalizeSourceUrl.value,
    disableTracking: disableTracking.value,
    componentScripts: componentScriptList.value
}, null, 2));

/**
 * 追加一条事件日志。
 *
 * @param message - 要展示在事件流中的简短描述。
 */
function pushLog(message: string): void {
    const item = {
        id: `${Date.now()}-${logSeed++}`,
        time: new Date().toLocaleTimeString(),
        message
    };
    logs.value = [item, ...logs.value].slice(0, 10);
}

/**
 * 处理播放器 ready 事件。
 */
function handleReady(): void {
    playerStatus.value = 'ready';
    pushLog('ready');
}

/**
 * 处理播放进度更新。
 *
 * demo 只在整 15 秒附近刷新状态，减少 timeupdate 高频事件对界面的干扰。
 */
function handleTimeUpdate(): void {
    const current = playerRef.value?.getCurrentTime();
    if (typeof current === 'number' && Math.floor(current) % 15 === 0) {
        playerStatus.value = `playing ${Math.floor(current)}s`;
    }
}

/**
 * 处理播放器运行时错误。
 *
 * @param event - SDK 透传的错误事件或错误对象。
 */
function handleError(event?: unknown): void {
    playerStatus.value = 'error';
    pushLog(`error ${JSON.stringify(event || {})}`);
}

/**
 * 处理 SDK 加载失败。
 *
 * @param error - 组件在加载 CSS、JS 或扩展脚本时抛出的错误。
 */
function handleSdkError(error: Error): void {
    playerStatus.value = 'sdk-error';
    pushLog(`sdk-error ${error.message}`);
}

/**
 * 跳转到固定时间点。
 *
 * demo 使用 15 秒作为确定性测试值，方便观察禁快进和 seek 行为。
 */
function seekTo(): void {
    playerRef.value?.seek(15);
    pushLog('seek 15s');
}

/**
 * 请求播放器全屏。
 */
function requestFullScreen(): void {
    playerRef.value?.requestFullScreen();
    pushLog('fullscreen');
}

/**
 * 读取播放器当前状态并写入事件流。
 */
function snapshotStatus(): void {
    playerStatus.value = playerRef.value?.getStatus() || 'unknown';
    pushLog(`status ${playerStatus.value}`);
}

/**
 * 复制当前配置快照到剪贴板。
 */
function copyConfig(): void {
    void navigator.clipboard?.writeText(formattedOptions.value);
    pushLog('config copied');
}

/**
 * 重置 demo 中所有可编辑参数。
 */
function resetAll(): void {
    sourceMode.value = 'url';
    selectedPreset.value = sourcePresets[0].value;
    customSource.value = '';
    sdkVersion.value = '2.37.0';
    autoFormat.value = true;
    lowLatency.value = true;
    normalizeSourceUrl.value = true;
    forbidFastForward.value = false;
    disableTracking.value = false;
    manualFormat.value = '';
    flvStash.value = 'auto';
    stashInitialSizeForFlv.value = 128;
    rtsVersion.value = '';
    liveStartTime.value = '';
    liveOverTime.value = '';
    skinPreset.value = 'center';
    previewTime.value = 0;
    progressMarkersText.value = '10,30,60';
    customOptionsJson.value = '{\n  "diagnosisButtonVisible": true\n}';
    componentScriptsText.value = '';
    licenseForm.domain = '';
    licenseForm.key = '';
    Object.assign(baseOptions, {
        width: '100%',
        height: '420px',
        autoplay: true,
        isLive: false,
        useH5Prism: true,
        useFlashPrism: false,
        playsinline: true,
        preload: true,
        rePlay: false,
        disableSeek: false,
        enableSystemMenu: false,
        controlBarVisibility: 'hover',
        showBarTime: 5000,
        language: 'zh-cn',
        cover: ''
    });
    pushLog('reset');
}
</script>

<style scoped>
:global(*) {
    box-sizing: border-box;
}

:global(body) {
    margin: 0;
    min-width: 320px;
    overflow-x: hidden;
    color: oklch(24% 0.018 235);
    background:
        linear-gradient(180deg, oklch(97% 0.012 225), oklch(94% 0.018 210) 58%, oklch(95% 0.011 145));
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
}

:global(button),
:global(input),
:global(select),
:global(textarea) {
    font: inherit;
}

.demo-page {
    width: min(1500px, calc(100vw - 32px));
    margin: 0 auto;
    padding: 22px 0 40px;
}

.app-header,
.status-strip,
.player-panel,
.event-panel,
.config-panel,
.inspector {
    border: 1px solid oklch(84% 0.018 225);
    background: oklch(99% 0.006 225);
    box-shadow: 0 18px 48px oklch(40% 0.05 230 / 10%);
}

.app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    padding: 18px 20px;
    border-radius: 8px;
}

.brand-block {
    display: grid;
    gap: 4px;
}

.version {
    width: fit-content;
    padding: 4px 8px;
    color: oklch(40% 0.06 170);
    background: oklch(94% 0.045 165);
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
}

h1,
h2,
p {
    margin: 0;
}

h1 {
    color: oklch(21% 0.02 235);
    font-size: 26px;
    line-height: 1.2;
}

h2 {
    color: oklch(25% 0.018 235);
    font-size: 16px;
    line-height: 1.3;
}

.header-actions,
.transport,
.section-head,
.tabs,
.segmented {
    display: flex;
    align-items: center;
}

.header-actions,
.transport {
    flex-wrap: wrap;
    gap: 8px;
}

.button,
.text-button,
.tabs button,
.segmented button {
    min-height: 36px;
    border: 1px solid oklch(78% 0.024 225);
    border-radius: 7px;
    color: oklch(27% 0.02 235);
    background: oklch(99% 0.004 225);
    cursor: pointer;
    transition: border-color 180ms ease-out, color 180ms ease-out, background 180ms ease-out, transform 180ms ease-out;
}

.button {
    padding: 0 14px;
    font-weight: 700;
}

.button:hover,
.text-button:hover,
.tabs button:hover,
.segmented button:hover {
    border-color: oklch(59% 0.13 170);
    color: oklch(36% 0.1 170);
}

.button:active,
.text-button:active,
.tabs button:active,
.segmented button:active {
    transform: translateY(1px);
}

.button:disabled {
    cursor: not-allowed;
    opacity: 0.45;
}

.primary {
    border-color: oklch(53% 0.13 170);
    color: oklch(98% 0.006 170);
    background: oklch(48% 0.12 170);
}

.secondary {
    background: oklch(97% 0.01 225);
}

.icon-button {
    min-width: 72px;
}

.text-button {
    min-height: 30px;
    padding: 0 10px;
    color: oklch(39% 0.06 170);
    background: transparent;
    font-size: 12px;
    font-weight: 700;
}

.status-strip {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1px;
    margin-top: 14px;
    overflow: hidden;
    border-radius: 8px;
}

.status-strip article {
    display: grid;
    gap: 6px;
    min-height: 72px;
    padding: 14px 16px;
    background: oklch(98% 0.007 225);
}

.status-strip span,
.player-panel-head p,
.field span,
.switch span,
.log-list time {
    color: oklch(48% 0.025 235);
    font-size: 12px;
}

.status-strip strong {
    min-width: 0;
    overflow: hidden;
    color: oklch(24% 0.02 235);
    font-size: 16px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.workspace {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 430px;
    gap: 16px;
    margin-top: 16px;
}

.stage-column {
    display: grid;
    gap: 16px;
    min-width: 0;
}

.player-panel,
.event-panel,
.config-panel,
.inspector {
    min-width: 0;
    border-radius: 8px;
}

.player-panel {
    overflow: hidden;
}

.player-panel-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 18px;
    border-bottom: 1px solid oklch(87% 0.016 225);
}

.player-panel-head > div {
    display: grid;
    min-width: 0;
    gap: 4px;
}

.player-panel-head p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.player-frame {
    min-height: 460px;
    padding: 14px;
    overflow: hidden;
    background:
        radial-gradient(circle at top left, oklch(83% 0.06 172 / 20%), transparent 30%),
        oklch(18% 0.015 235);
}

.player-frame.is-multiple {
    min-height: 360px;
}

.player {
    width: 100%;
    min-height: 430px;
    overflow: hidden;
    background: oklch(13% 0.014 235);
    border: 1px solid oklch(30% 0.025 235);
    border-radius: 7px;
}

.player-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
}

.player-grid .player {
    min-height: 250px;
}

.empty-player {
    display: grid;
    min-height: 430px;
    place-items: center;
    align-content: center;
    gap: 8px;
    color: oklch(87% 0.01 225);
    background: oklch(17% 0.014 235);
    border: 1px dashed oklch(43% 0.025 235);
    border-radius: 7px;
}

.empty-player span {
    max-width: 70ch;
    overflow: hidden;
    color: oklch(70% 0.018 225);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.transport {
    padding: 12px 14px 14px;
    border-top: 1px solid oklch(87% 0.016 225);
}

.lower-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    gap: 16px;
}

.event-panel,
.config-panel {
    min-width: 0;
    padding: 16px;
}

.section-head {
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
}

.log-list {
    display: grid;
    gap: 8px;
    max-height: 290px;
    margin: 0;
    padding: 0;
    overflow: auto;
    list-style: none;
}

.log-list li {
    display: grid;
    grid-template-columns: 82px minmax(0, 1fr);
    gap: 10px;
    align-items: start;
    min-height: 34px;
    padding: 8px 10px;
    color: oklch(28% 0.02 235);
    background: oklch(97% 0.008 225);
    border: 1px solid oklch(88% 0.014 225);
    border-radius: 6px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 12px;
}

.log-list span {
    min-width: 0;
    overflow-wrap: anywhere;
}

.muted-row {
    display: block !important;
    color: oklch(52% 0.02 235);
    font-family: inherit !important;
}

.config-panel pre {
    max-height: 290px;
    margin: 0;
    padding: 12px;
    overflow: auto;
    color: oklch(88% 0.02 155);
    background: oklch(18% 0.018 235);
    border-radius: 7px;
    font-size: 12px;
    line-height: 1.55;
}

.inspector {
    position: sticky;
    top: 14px;
    max-height: calc(100vh - 28px);
    overflow: hidden;
    align-self: start;
}

.tabs {
    gap: 6px;
    padding: 10px;
    border-bottom: 1px solid oklch(87% 0.016 225);
    background: oklch(96% 0.01 225);
}

.tabs button {
    flex: 1;
    min-width: 0;
    padding: 0 8px;
    font-size: 13px;
    font-weight: 700;
}

.tabs button.active,
.segmented button.active {
    border-color: oklch(54% 0.12 170);
    color: oklch(31% 0.09 170);
    background: oklch(93% 0.04 165);
}

.panel-section {
    display: grid;
    gap: 16px;
    max-height: calc(100vh - 92px);
    padding: 16px;
    overflow: auto;
}

.segmented {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 6px;
    padding: 4px;
    background: oklch(96% 0.01 225);
    border: 1px solid oklch(86% 0.016 225);
    border-radius: 8px;
}

.segmented button {
    border-color: transparent;
    background: transparent;
    font-weight: 700;
}

.field-grid,
.switch-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
}

.field {
    display: grid;
    gap: 6px;
    min-width: 0;
}

.field input,
.field select,
.field textarea {
    width: 100%;
    min-height: 38px;
    padding: 0 10px;
    color: oklch(24% 0.018 235);
    background: oklch(99% 0.005 225);
    border: 1px solid oklch(78% 0.024 225);
    border-radius: 7px;
    outline: none;
    transition: border-color 160ms ease-out, box-shadow 160ms ease-out;
}

.field textarea {
    min-height: 90px;
    padding: 10px;
    resize: vertical;
    line-height: 1.45;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
    border-color: oklch(55% 0.12 170);
    box-shadow: 0 0 0 3px oklch(78% 0.09 170 / 22%);
}

.switch {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-height: 42px;
    padding: 10px 12px;
    background: oklch(98% 0.007 225);
    border: 1px solid oklch(86% 0.016 225);
    border-radius: 7px;
}

.compact-switch {
    min-width: 112px;
}

.switch input {
    width: 18px;
    height: 18px;
    accent-color: oklch(49% 0.12 170);
}

.error-line {
    padding: 10px 12px;
    color: oklch(43% 0.13 28);
    background: oklch(95% 0.04 35);
    border: 1px solid oklch(82% 0.06 35);
    border-radius: 7px;
    font-size: 12px;
}

@media (max-width: 1180px) {
    .workspace,
    .lower-grid {
        grid-template-columns: 1fr;
    }

    .inspector {
        position: static;
        max-height: none;
    }

    .panel-section {
        max-height: none;
    }
}

@media (max-width: 780px) {
    .demo-page {
        width: min(100vw - 20px, 740px);
        padding-top: 10px;
    }

    .app-header {
        align-items: stretch;
        flex-direction: column;
    }

    .header-actions,
    .transport {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        width: 100%;
    }

    .header-actions .primary {
        grid-column: 1 / -1;
    }

    .button,
    .icon-button {
        min-width: 0;
        padding-inline: 8px;
    }

    .player-panel-head {
        align-items: stretch;
        flex-direction: column;
    }

    .status-strip,
    .field-grid,
    .switch-grid,
    .player-grid {
        grid-template-columns: 1fr;
    }

    .player-frame,
    .player,
    .empty-player,
    .player-grid .player {
        min-height: 260px;
    }

    .tabs {
        overflow-x: auto;
    }

    .tabs button {
        min-width: 74px;
    }
}
</style>
