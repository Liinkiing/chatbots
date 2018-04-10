<template>
  <div id="app">
    <div class="page__imgs">
      <router-link :to="{ name: 'chatbot' }" class="test">
        <img src="@/assets/img/general/chatbot.svg" alt="Chatbot">
      </router-link>

      <router-link :to="{ name: 'informations' }">
        <img src="@/assets/img/general/infos.svg" alt="Chatbot">
      </router-link>
    </div>

    <transition :name="transitionName" mode="out-in">
      <router-view/>
    </transition>

    <transition name="timeline">
      <timeline-component/>
    </transition>
  </div>
</template>

<script>
import TimelineComponent from '@/components/TimelineComponent'

export default {
  name: 'App',
  components: {
    TimelineComponent
  },
  data () {
    return {
      transitionName: 'slide-in',
      direction: 1
    }
  },
  created () {
    window.addEventListener('keydown', (e) => {
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
    }
  }
}
</script>

<style lang="scss">
</style>
