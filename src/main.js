import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'

// 引入SWIPER-------VueAwesomeSwiper-------------------
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

// 引入VueAwesomeSwiper-------------------
Vue.use(VueAwesomeSwiper)


import i18n from "./18n";

new Vue({
  render: h => h(App),
  router,
  store,
  i18n,
}).$mount('#app')
