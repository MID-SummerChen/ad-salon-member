// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// element UI
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-TW'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI, {locale})

// Muse UI
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import '@/assets/muse-custom.less'
Vue.use(MuseUI)

// Material UI
import 'vue-material/dist/vue-material.css'
var VueMaterial = require('vue-material')
Vue.use(VueMaterial)


import '@/assets/style.styl'


Vue.config.productionTip = false
Vue.config.silent = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
