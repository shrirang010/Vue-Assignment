import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Make BootstrapVue available throughout your project

Vue.config.productionTip = false
Vue.use(BootstrapVue);
new Vue({
  render: h => h(App),
}).$mount('#app')
