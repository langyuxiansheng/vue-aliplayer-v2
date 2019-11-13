// 导入组件，组件必须声明 name
import AliplayerV2 from './src/main.vue';
// 为组件添加 install 方法，用于按需引入
AliplayerV2.install = function (Vue) {
    Vue.component(AliplayerV2.name, AliplayerV2);
}
export default AliplayerV2;
