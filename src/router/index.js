import Vue from 'vue'
import Router from 'vue-router'
import config from '../../config/index'

Vue.use(Router)
export const router = new Router({
  base: config.build.assetsPublicPath,
  routes: [
    {path: '/', redirect: '/test1'},
    {path: '/test1', component: resolve => require(['../pages/test.vue'], resolve)},
    {path: '/test2', component: resolve => require(['../pages/test2.vue'], resolve)}
  ]
})
