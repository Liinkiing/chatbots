<template>
  <page-component :title="'September'">
  </page-component>
</template>

<script>
import PageComponent from './../PageComponent'

export default {
  name: 'home-page',
  components: {
    PageComponent
  }
}
</script>

<style lang="scss">
  @import "../../assets/scss/colors";
</style>
