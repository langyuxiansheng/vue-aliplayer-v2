import { createApp } from 'vue';
import App from './App.vue';

/**
 * 启动 demo 应用。
 *
 * demo 直接引用源码入口，便于本地调试组件行为和 GitHub Pages 构建保持一致。
 */
createApp(App).mount('#app');
