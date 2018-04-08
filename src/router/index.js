import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import IntroductionPage from '@/components/pages/IntroductionPage'
import SeptemberPage from '@/components/pages/months/SeptemberPage'
import OctoberPage from '@/components/pages/months/OctoberPage'
import NovemberPage from '@/components/pages/months/NovemberPage'
import DecemberPage from '@/components/pages/months/DecemberPage'
import JanuaryPage from '@/components/pages/months/JanuaryPage'
import FebruaryPage from '@/components/pages/months/FebruaryPage'
import MarchPage from '@/components/pages/months/MarchPage'
import AprilPage from '@/components/pages/months/AprilPage'
import ChatbotPage from '@/components/pages/ChatbotPage'
import NotFoundPage from '@/components/pages/NotFoundPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        date: new Date('2017-07-01')
      },
      component: HomePage
    },
    {
      path: '/introduction',
      name: 'introduction',
      meta: {
        date: new Date('2017-08-01')
      },
      component: IntroductionPage
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
      path: '/january',
      name: 'january',
      meta: {
        date: new Date('2018-01-01')
      },
      component: JanuaryPage
    },
    {
      path: '/february',
      name: 'february',
      meta: {
        date: new Date('2018-02-01')
      },
      component: FebruaryPage
    },
    {
      path: '/march',
      name: 'march',
      meta: {
        date: new Date('2018-03-01')
      },
      component: MarchPage
    },
    {
      path: '/april',
      name: 'april',
      meta: {
        date: new Date('2018-04-01')
      },
      component: AprilPage
    },
    {
      path: '/chatbot',
      name: 'chatbot',
      meta: {
        date: new Date('2018-05-01')
      },
      component: ChatbotPage
    },
    {
      path: '*',
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
})
