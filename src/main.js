// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { XHeader,ViewBox } from 'vux'
import store from './store/'
Vue.component('x-header', XHeader)
Vue.component('view-box', ViewBox)
Vue.config.productionTip = false

// Vue.mixin(socket);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
