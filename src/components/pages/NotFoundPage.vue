<template>
  <div class="home-page page">
    <div class="page__title">
      <h1 class="bold">404</h1>
      <h2>not found</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'not-found-page'
}
</script>

<style lang="scss">
  .home-page {
    h2 {
      margin-top: -3rem;
      margin-left: 0.3rem;
      text-align: left;
      @include fontSize(20);
    }
  }
</style>
