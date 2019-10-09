import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/index'),
      children: [
        {
          path: 'goods',
          name: 'goods',
          component: () => import('@/components/goods/index')
        },
        {
          path: 'ratings',
          name: 'ratings',
          component: () => import('@/components/ratings/index')
        },
        {
          path: 'seller',
          name: 'seller',
          component: () => import('@/components/seller/index')
        }
      ]

    }
  ]
})
