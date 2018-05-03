import Vue from 'vue'
import Router from 'vue-router'
import card from '@/views/card.vue'

Vue.use(Router);
/**
 * 1、命名导出
 */
export default new Router({
  mode: 'history', //TODO 访问路径不带井号 hash :带#号 默认带#号
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: card
    }
  ]
});


