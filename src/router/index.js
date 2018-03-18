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
      name: 'HelloWorld',
      component: HomePage
    },
    {
      path: '/september',
      name: 'SeptemberPage',
      component: SeptemberPage
    },
    {
      path: '/october',
      name: 'OctoberPage',
      component: OctoberPage
    },
    {
      path: '/november',
      name: 'NovemberPage',
      component: NovemberPage
    },
    {
      path: '/december',
      name: 'DecemberPage',
      component: DecemberPage
    },
    {
      path: '*',
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
})
