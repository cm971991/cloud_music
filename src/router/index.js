import Vue from 'vue'
import Router from 'vue-router'
import config from '../../config/index'

Vue.use(Router)
export const router = new Router({
  base: config.build.assetsPublicPath,
  routes: [
    {path: '/', redirect: 'recommend'},
    {path: '/login', component: resolve => require(['../pages/login/login.vue'], resolve)},
    {path: '/login_mobile', component: resolve => require(['../pages/login/login_mobile.vue'], resolve)},
    {path: '/songList', component: resolve => require(['../pages/songList/songList.vue'], resolve)},
    {path: '/recommend', component: resolve => require(['../pages/recommend/recommend.vue'], resolve)},
    {path: '/moments', component: resolve => require(['../pages/moments/moments.vue'], resolve)},
    {path: '/test1', component: resolve => require(['../pages/test.vue'], resolve)},
    {path: '/test2', component: resolve => require(['../pages/test2.vue'], resolve)}
  ]
})
