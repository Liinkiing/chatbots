<template>
  <page-component :title="'chatbot'" :force-show="true">
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
  }
}
</script>

<style lang="scss">

</style>
