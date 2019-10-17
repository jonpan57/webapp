import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      // redirect: 'goods',
      name: 'index',
      component: () => import('components/index')
    }
  ]
})
