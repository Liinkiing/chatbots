<template>
  <div id="app">
    <transition name="page-imgs">
      <div class="page__imgs" :class="animate ? 'page__imgs-focus' : ''" v-if="isAllowed">
        <router-link :to="{ name: 'chatbot' }">
          <img src="@/assets/img/general/chatbot.svg" alt="Chatbot">
        </router-link>

        <router-link :to="{ name: 'informations' }">
          <img src="@/assets/img/general/infos.svg" alt="Chatbot">
        </router-link>
      </div>
    </transition>

    <transition :name="transitionName" mode="out-in">
      <router-view/>
    </transition>

    <transition name="timeline">
      <timeline-component v-if="isAllowed && !animate"/>
    </transition>
  </div>
</template>

<script>
import TimelineComponent from '@/components/TimelineComponent'
import {EventBus} from './main'

const blacklist = ['home', 'introduction', 'chatbot', 'informations']

export default {
  name: 'App',
  components: {
    TimelineComponent
  },
  data () {
    return {
      transitionName: 'slide-in',
      direction: 1,
      animate: null,
      canNavigateWithKeyboard: true
    }
  },
  created () {
    EventBus.$on('contentChanged', this.contentChanged.bind(this))
    EventBus.$on('chat.focus', () => {
      this.canNavigateWithKeyboard = false
    })
    EventBus.$on('chat.blur', () => {
      this.canNavigateWithKeyboard = true
    })

    window.addEventListener('keydown', (e) => {
      if (!this.canNavigateWithKeyboard) return
      switch (e.keyCode) {
        case 37:
          this.prev()
          break
        case 39:
          this.next()
          break
      }
    })
  },
  watch: {
    '$route' (to, from) {
      this.transitionName = this.computeTransition(to, from)
    }
  },
  computed: {
    isAllowed () {
      return !blacklist.includes(this.$route.name)
    }
  },
  methods: {
    computeTransition (to, from) {
      let transitionName = 'slide-in'
      if (to.meta && to.meta.date && from.meta && from.meta.date) {
        if (from.meta.date > to.meta.date) {
          transitionName = 'slide-out'
        } else {
          transitionName = 'slide-in'
        }
      }
      return transitionName
    },
    getRouteName (date) {
      if (date) {
        let destinationDate = new Date(date.setMonth(date.getMonth() + this.direction))
        return this.$router.options.routes.filter(route => {
          return route.meta && route.meta.date.toLocaleDateString() === destinationDate.toLocaleDateString()
        })[0]
      }
      return null
    },
    prev () {
      this.direction = -1
      this.performNavigation()
    },
    next () {
      this.direction = 1
      this.performNavigation()
    },
    performNavigation () {
      if (this.$route.meta && this.$route.meta.date) {
        let date = new Date(this.$route.meta.date)
        let route = this.getRouteName(date)
        if (route) {
          this.$router.push(route)
        }
      }
    },
    contentChanged (animate) {
      console.log(animate)
      this.animate = animate
    }
  }
}
</script>
