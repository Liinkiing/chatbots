<template>
  <page-component :title="'chatbot'" :force-show="true" :show-faders="false">
    <chat/>
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
  mounted () {
    document.querySelector('body').classList.add('chatbot')
  },
  beforeDestroy () {
    document.querySelector('body').classList.remove('chatbot')
  }
}
</script>

<style lang="scss">

</style>
