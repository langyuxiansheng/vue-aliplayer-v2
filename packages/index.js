// packages / index.js
// 导入单个组件
import VueAliplayerV2 from './AliplayerV2';
// 定义 install 方法
VueAliplayerV2.install = (Vue, options) =>{
    if(options && options.cssLink) VueAliplayerV2.props.cssLink.default = options.cssLink;
    if(options && options.scriptSrc) VueAliplayerV2.props.scriptSrc.default = options.scriptSrc;
    Vue.component(VueAliplayerV2.name, VueAliplayerV2);
};
VueAliplayerV2.Player = VueAliplayerV2;
export default VueAliplayerV2;
