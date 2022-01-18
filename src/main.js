import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import SideNav from "./layout/SideNav";
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuetify)
Vue.use(VueperSlides, VueperSlide)
Vue.component("sidebar-layout", SideNav);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
