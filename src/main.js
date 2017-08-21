// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import '@/assets/muse-custom.less'
import 'vue-material/dist/vue-material.css'
import '@/assets/var.styl'
import '@/assets/style.styl'
var VueMaterial = require('vue-material')

Vue.use(VueMaterial)
Vue.use(MuseUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
