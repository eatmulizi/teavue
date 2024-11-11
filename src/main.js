import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/fonts.css' // 引入字体 CSS 文件
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
