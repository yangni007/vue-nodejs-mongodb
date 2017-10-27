import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
// import Hello from '@/components/Hello'
import index from '@/components/index/index'
import register from '@/components/user/register'
import login from '@/components/user/login'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
