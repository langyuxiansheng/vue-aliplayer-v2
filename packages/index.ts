import type { App } from 'vue';
import VueAliplayerV2 from './AliplayerV2/index.vue';
import { DEFAULT_CSS_LINK, DEFAULT_SCRIPT_SRC, DEFAULT_SDK_VERSION } from './AliplayerV2/sdkLoader';
import type { VueAliplayerV2Options } from './AliplayerV2/types';

export type {
    AliplayerEventName,
    AliplayerInstance,
    AliplayerLicense,
    AliplayerOptions,
    AliplayerV2Props,
    VueAliplayerV2Expose,
    VueAliplayerV2Options
} from './AliplayerV2/types';

type InstallableVueAliplayerV2 = typeof VueAliplayerV2 & {
    install: (app: App, options?: VueAliplayerV2Options) => void;
    Player: typeof VueAliplayerV2;
    props: {
        sdkVersion: { default: string | (() => string) };
        cssLink: { default: string | (() => string) };
        scriptSrc: { default: string | (() => string) };
        componentScripts: { default: string[] | (() => string[]) };
        disableTracking: { default: boolean | (() => boolean) };
        trackingUrlPatterns: { default: Array<string | RegExp> | (() => Array<string | RegExp>) };
    };
};

const globalOptions: Required<VueAliplayerV2Options> = {
    sdkVersion: DEFAULT_SDK_VERSION,
    cssLink: DEFAULT_CSS_LINK,
    scriptSrc: DEFAULT_SCRIPT_SRC,
    componentScripts: [],
    disableTracking: false,
    trackingUrlPatterns: []
};

const installable = VueAliplayerV2 as unknown as InstallableVueAliplayerV2;

installable.install = (app: App, options?: VueAliplayerV2Options): void => {
    Object.assign(globalOptions, options || {});
    app.component('VueAliplayerV2', installable);
};

installable.props.cssLink.default = (): string => globalOptions.cssLink;
installable.props.scriptSrc.default = (): string => globalOptions.scriptSrc;
installable.props.sdkVersion.default = (): string => globalOptions.sdkVersion;
installable.props.componentScripts.default = (): string[] => globalOptions.componentScripts;
installable.props.disableTracking.default = (): boolean => globalOptions.disableTracking;
installable.props.trackingUrlPatterns.default = (): Array<string | RegExp> => globalOptions.trackingUrlPatterns;
installable.Player = installable;

export { installable as VueAliplayerV2 };
export default installable;
