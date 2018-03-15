<template>
  <div class="page">
    <div class="page__title page__line">
      <h1 class="bold">{{title}}</h1>
    </div>

    <img src="../assets/img/general/arrow.svg" class="arrow" alt="Arrow">
  </div>
</template>

<script>
export default {
  name: 'page-component',
  props: ['title']
}
</script>

<style lang="scss" scoped>
  .page__title {
    width: 100%;
  }

  .arrow {
    position: absolute;
    left: 50%;
    bottom: 12vh;
    transform: translate(-50%, -50%);
    width: 8rem;
  }
</style>
