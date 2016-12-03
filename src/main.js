import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'

import store from './store'
import App from './App'

import NotFound from './components/404'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path : '/',
  component : Home
},{
  path : 'home',
  component : Home
},{
  path : '/time-entries',
  component : TimeEntries,
  children : [{
    path : 'log-time',
    //懒加载
    component : LogTime,
  }]
},{
  path : '*',
  component : NotFound
}];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
// 这灵活得亮瞎了
/*new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
});
 new Vue(Vue.util.extend({
   router
 }, App)).$mount('#app');
new Vue({
  el:'#app',
  router,
  render:h => h(App)
});*/
var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
