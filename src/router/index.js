import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import SeptemberPage from '@/components/pages/SeptemberPage'
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
      path: '*',
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
})
