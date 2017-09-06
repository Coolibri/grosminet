// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './routes/'

Vue.use(VueRouter)

const router = new VueRouter({routes})

/* eslint-disable no-new */
// Init App
new Vue({
  router,
  el: '#app',
  template: '<app/>',

  // Register App Component
  components: {
    app: App
  }
})
