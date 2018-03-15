<template>
  <page-component :title="'sept.'">
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
