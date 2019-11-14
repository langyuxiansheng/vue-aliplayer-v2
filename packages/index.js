// packages / index.js
// 导入单个组件
import VueAliplayerV2 from './AliplayerV2';

// 以数组的结构保存组件，便于遍历
const components = [
    VueAliplayerV2
];

// 定义 install 方法
const install = (Vue) =>{
    if (install.installed) return false;
    install.installed = true;
    // 遍历并注册全局组件
    components.map(component => {
        return Vue.component(component.name, component)
    });
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    // 导出的对象必须具备一个 install 方法
    install,
    VueAliplayerV2
    // 组件列表
};
