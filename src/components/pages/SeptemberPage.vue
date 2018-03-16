<template>
  <page-component :title="'sept.'">
    <p>September content</p>
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
