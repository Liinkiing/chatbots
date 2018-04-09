<template>
  <div class="home-page page">
    <div class="page__title">
      <h1 class="bold">chatbots</h1>
      <h2 class="white">technological watch from september 2017 to march 2018</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-page'
}
</script>

<style lang="scss">
  .home-page {
    .page__title {
      width: max-content;
    }

    h2 {
      margin-top: -3rem;
      margin-left: 0.3rem;
      text-align: left;
      @include fontSize(20);
    }
  }

</style>
