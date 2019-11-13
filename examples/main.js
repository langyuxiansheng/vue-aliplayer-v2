import Vue from 'vue';
import App from './App.vue';
import VueAliplayerV2 from '../packages';
Vue.use(VueAliplayerV2);
Vue.config.productionTip = false;
new Vue({
    render: h => h(App),
}).$mount('#app');
