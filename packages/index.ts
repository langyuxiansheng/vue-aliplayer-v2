import type { App } from 'vue';
import VueAliplayerV2 from './AliplayerV2/index.vue';
import { DEFAULT_CSS_LINK, DEFAULT_SCRIPT_SRC, DEFAULT_SDK_VERSION } from './AliplayerV2/sdkLoader';
import type { VueAliplayerV2Options } from './AliplayerV2/types';

/**
 * 对外重新导出组件相关类型。
 *
 * 使用方可以直接从包入口导入类型，不需要关心内部目录结构。
 */
export type {
    AliplayerEventName,
    AliplayerInstance,
    AliplayerLicense,
    AliplayerOptions,
    AliplayerV2Props,
    VueAliplayerV2Expose,
    VueAliplayerV2Options
} from './AliplayerV2/types';

/**
 * 带 Vue 插件安装能力的组件类型。
 *
 * Vue SFC 默认导出的类型不包含运行时追加的 `install`、`Player` 和 props 默认值修改能力，
 * 因此在入口处扩展该类型，保证后续赋值过程在 TypeScript 下可描述。
 */
type InstallableVueAliplayerV2 = typeof VueAliplayerV2 & {
    /**
     * Vue 插件安装方法，支持 `app.use(VueAliplayerV2, options)`。
     */
    install: (app: App, options?: VueAliplayerV2Options) => void;
    /**
     * 兼容旧版本 `VueAliplayerV2.Player` 的局部注册写法。
     */
    Player: typeof VueAliplayerV2;
    /**
     * 组件 props 运行时定义。
     *
     * 这里仅列出入口需要改写默认值的 props。
     */
    props: {
        sdkVersion: { default: string | (() => string) };
        cssLink: { default: string | (() => string) };
        scriptSrc: { default: string | (() => string) };
        componentScripts: { default: string[] | (() => string[]) };
        disableTracking: { default: boolean | (() => boolean) };
        trackingUrlPatterns: { default: Array<string | RegExp> | (() => Array<string | RegExp>) };
    };
};

/**
 * 全局默认配置。
 *
 * 组件 props 的 default 会读取该对象，因此 `app.use` 中传入的配置会影响后续所有未显式
 * 覆盖同名 props 的播放器实例。
 */
const globalOptions: Required<VueAliplayerV2Options> = {
    sdkVersion: DEFAULT_SDK_VERSION,
    cssLink: DEFAULT_CSS_LINK,
    scriptSrc: DEFAULT_SCRIPT_SRC,
    componentScripts: [],
    disableTracking: false,
    trackingUrlPatterns: []
};

/**
 * 添加插件安装能力后的播放器组件。
 */
const installable = VueAliplayerV2 as unknown as InstallableVueAliplayerV2;

/**
 * Vue 插件安装入口。
 *
 * @param app Vue 应用实例。
 * @param options 全局默认配置，会合并到 `globalOptions`。
 */
installable.install = (app: App, options?: VueAliplayerV2Options): void => {
    Object.assign(globalOptions, options || {});
    app.component('VueAliplayerV2', installable);
};

/**
 * 从全局配置读取默认 CSS 地址。
 */
installable.props.cssLink.default = (): string => globalOptions.cssLink;
/**
 * 从全局配置读取默认 JS 地址。
 */
installable.props.scriptSrc.default = (): string => globalOptions.scriptSrc;
/**
 * 从全局配置读取默认 SDK 版本。
 */
installable.props.sdkVersion.default = (): string => globalOptions.sdkVersion;
/**
 * 从全局配置读取默认扩展脚本。
 */
installable.props.componentScripts.default = (): string[] => globalOptions.componentScripts;
/**
 * 从全局配置读取默认统计拦截开关。
 */
installable.props.disableTracking.default = (): boolean => globalOptions.disableTracking;
/**
 * 从全局配置读取默认统计拦截规则。
 */
installable.props.trackingUrlPatterns.default = (): Array<string | RegExp> => globalOptions.trackingUrlPatterns;
/**
 * 兼容旧版本的 `VueAliplayerV2.Player` 导出。
 */
installable.Player = installable;

export { installable as VueAliplayerV2 };
export default installable;
