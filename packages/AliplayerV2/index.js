// 导入组件，组件必须声明 name
import VueAliplayerV2 from './src/main.vue';
// 为组件添加 install 方法，用于按需引入
VueAliplayerV2.install = function (Vue) {
    Vue.component(VueAliplayerV2.name, VueAliplayerV2);
}
export default VueAliplayerV2;
