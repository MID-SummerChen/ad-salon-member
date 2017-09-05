import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Dashboard from '@/components/layout/Dashboard'
import Home from '@/components/pages/Home'
import Register from '@/components/pages/Register'
import MyInfo from '@/components/pages/MyInfo'
import MyFavorite from '@/components/pages/MyFavorite'
import MyOrders from '@/components/pages/MyOrders'
import StoreSearchResult from '@/components/pages/StoreSearchResult'
import StoreView from '@/components/pages/StoreView'
import WorkView from '@/components/pages/WorkView'
import DesignerView from '@/components/pages/DesignerView'
import Checkout from '@/components/pages/Checkout'
import Calendar from '@/components/pages/Calendar'
import StoreSchedule from '@/components/pages/StoreSchedule'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  routes: [
    {
      path: '/',
      component: Dashboard,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
          meta: { scrollToTop: true }
        },
        {
          path: '/register',
          name: 'Register',
          component: Register,
          meta: { scrollToTop: true }
        },
        {
          path: '/my/info',
          name: 'MyInfo',
          component: MyInfo,
          meta: { scrollToTop: true }
        },
        {
          path: '/my/favorite',
          name: 'MyFavorite',
          component: MyFavorite,
          meta: { scrollToTop: true }
        },
        {
          path: '/my/orders',
          name: 'MyOrders',
          component: MyOrders,
          meta: { scrollToTop: true }
        },
        {
          path: '/search-result/store',
          name: 'StoreSearchResult',
          component: StoreSearchResult,
          meta: { scrollToTop: true }
        },
        {
          path: '/store/view',
          name: 'StoreView',
          component: StoreView,
          meta: { scrollToTop: true }
        },
        {
          path: '/work/view',
          name: 'WorkView',
          component: WorkView,
          meta: { scrollToTop: true }
        },
        {
          path: '/designer/view',
          name: 'DesignerView',
          component: DesignerView,
          meta: { scrollToTop: true }
        },
        {
          path: '/checkout',
          name: 'Checkout',
          component: Checkout,
          meta: { scrollToTop: true }
        },
        {
          path: '/calendar',
          name: 'Calendar',
          component: Calendar,
          meta: { scrollToTop: true }
        },
        {
          path: '/schedule',
          name: 'StoreSchedule',
          component: StoreSchedule,
          meta: { scrollToTop: true }
        },
      ]
    },
  ]
})


router.beforeEach(async (to, from, next) => {
  window.scrollTo(0, 0)
  next()
  
})


export default router