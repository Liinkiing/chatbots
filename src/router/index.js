import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import SeptemberPage from '@/components/pages/SeptemberPage'

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
    }
  ]
})
