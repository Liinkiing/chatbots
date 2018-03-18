import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import SeptemberPage from '@/components/pages/months/SeptemberPage'
import OctoberPage from '@/components/pages/months/OctoberPage'
import NovemberPage from '@/components/pages/months/NovemberPage'
import DecemberPage from '@/components/pages/months/DecemberPage'
import NotFoundPage from '@/components/pages/NotFoundPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        date: new Date('2017-08-01')
      },
      component: HomePage
    },
    {
      path: '/september',
      name: 'september',
      meta: {
        date: new Date('2017-09-01')
      },
      component: SeptemberPage
    },
    {
      path: '/october',
      name: 'october',
      meta: {
        date: new Date('2017-10-01')
      },
      component: OctoberPage
    },
    {
      path: '/november',
      name: 'november',
      meta: {
        date: new Date('2017-11-01')
      },
      component: NovemberPage
    },
    {
      path: '/december',
      name: 'december',
      meta: {
        date: new Date('2017-12-01')
      },
      component: DecemberPage
    },
    {
      path: '*',
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
})
