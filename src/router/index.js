import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    }, {
      path: '/',
      name: 'City',
      component: () => import('@/pages/city/City')
    }, {
      path: '/addr',
      name: 'Addr',
      component: () => import('@/pages/addr/Addr')
    }, {
      path: '/search',
      name: 'Search',
      component: () => import('@/pages/search/Search')
    }, {
      path: '/order',
      name: 'Order',
      component: () => import('@/pages/order/Order')
    }, {
      path: '/user',
      name: 'User',
      component: () => import('@/pages/user/User')
    }, {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/login/Login')
    }],
  scrollBehavior (to, from, savePosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
