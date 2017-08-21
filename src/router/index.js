import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Dashboard from '@/components/layout/Dashboard'
import Home from '@/components/pages/Home'
import MyInfo from '@/components/pages/MyInfo'
import MyFavorite from '@/components/pages/MyFavorite'
import MyOrders from '@/components/pages/MyOrders'
import StoreSearchResult from '@/components/pages/StoreSearchResult'
import StoreView from '@/components/pages/StoreView'
import WorkView from '@/components/pages/WorkView'
import DesignerView from '@/components/pages/DesignerView'
import Checkout from '@/components/pages/Checkout'
import Calendar from '@/components/pages/Calendar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Dashboard,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: '/my/info',
          name: 'MyInfo',
          component: MyInfo
        },
        {
          path: '/my/favorite',
          name: 'MyFavorite',
          component: MyFavorite
        },
        {
          path: '/my/orders',
          name: 'MyOrders',
          component: MyOrders
        },
        {
          path: '/search-result/store',
          name: 'StoreSearchResult',
          component: StoreSearchResult
        },
        {
          path: '/store/view',
          name: 'StoreView',
          component: StoreView
        },
        {
          path: '/work/view',
          name: 'WorkView',
          component: WorkView
        },
        {
          path: '/designer/view',
          name: 'DesignerView',
          component: DesignerView
        },
        {
          path: '/checkout',
          name: 'Checkout',
          component: Checkout
        },
        {
          path: '/calendar',
          name: 'Calendar',
          component: Calendar
        },
      ]
    },
  ]
})
