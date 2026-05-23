import type { App } from 'vue';
import VueAliplayerV2 from './AliplayerV2/index.vue';
import type { VueAliplayerV2Options } from './AliplayerV2/types';
export type { AliplayerEventName, AliplayerInstance, AliplayerLicense, AliplayerOptions, AliplayerV2Props, VueAliplayerV2Expose, VueAliplayerV2Options } from './AliplayerV2/types';
type InstallableVueAliplayerV2 = typeof VueAliplayerV2 & {
    install: (app: App, options?: VueAliplayerV2Options) => void;
    Player: typeof VueAliplayerV2;
    props: {
        sdkVersion: {
            default: string | (() => string);
        };
        cssLink: {
            default: string | (() => string);
        };
        scriptSrc: {
            default: string | (() => string);
        };
        componentScripts: {
            default: string[] | (() => string[]);
        };
        disableTracking: {
            default: boolean | (() => boolean);
        };
        trackingUrlPatterns: {
            default: Array<string | RegExp> | (() => Array<string | RegExp>);
        };
    };
};
declare const installable: InstallableVueAliplayerV2;
export { installable as VueAliplayerV2 };
export default installable;
//# sourceMappingURL=index.d.ts.map