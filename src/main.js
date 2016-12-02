import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'Vue-resource'

import App from './App'
import Home from './components/Home'
import 'bootstarp/dist/css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
