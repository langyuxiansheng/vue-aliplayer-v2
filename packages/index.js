// packages / index.js
// 导入单个组件
import VueAliplayerV2 from './AliplayerV2';
// 定义 install 方法
VueAliplayerV2.install = (Vue) =>{
    Vue.component(VueAliplayerV2.name, VueAliplayerV2)
};
VueAliplayerV2.Player = VueAliplayerV2;
export default VueAliplayerV2;
