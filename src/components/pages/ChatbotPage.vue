<template>
  <page-component :title="'chatbot'" :force-show="true" :show-faders="false">
    <img src="../../assets/img/general/arrow.svg" class="arrow navigation-back" alt="Arrow" @click="navigateBack">
    <div class="page__article">
      <chat/>
    </div>
  </page-component>
</template>

<script>
import PageComponent from '../PageComponent'
import Chat from '../Chat'

export default {
  name: 'chatbot-page',
  components: {
    Chat,
    PageComponent
  },
  data () {
    return {
      previousPath: '/'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.previousPath = from.path
    })
    next()
  },
  methods: {
    navigateBack () {
      this.$router.push({
        path: this.previousPath
      })
    }
  },
  mounted () {
    document.querySelector('body').classList.add('chatbot')
  },
  beforeDestroy () {
    document.querySelector('body').classList.remove('chatbot')
  }
}
</script>

<style lang="scss">
  body.chatbot {
    & .navigation-back {
      position: fixed;
      width: 6rem;
      transform: rotate(90deg);
      top: calc(50% - (6rem / 2));
      left: 40px;
      z-index: 5;
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
