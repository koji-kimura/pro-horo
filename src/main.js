import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you are using css-loader

import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  iconfont: 'fa'
}).$mount('#app');
