// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
/**
 * 命名接收1
 */
//import {router} from './router/index';
/**
 * 命名接收2
 */
//import * as routers from './router/index';
//let router = routers.router;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//等于router:router ES6这种写法会代码key和val都一样
  components: { App },
  template: '<App/>'
});


