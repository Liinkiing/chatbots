<template>
  <div class="home-page page">
    <div class="page__title">
      <h1 class="bold">chatbots</h1>
      <h2 class="white">technological watch from september 2017 to march 2018</h2>
    </div>
    <div class="page__navigation">
      <transition name="timeline" mode="out-in">
        <h3 key="primaryHeading" v-if="showPrimaryHeading">This website is a timeline</h3>
        <h3 key="secondaryHeading" v-else>Use the arrows of your keyboard or the timeline to navigate</h3>
      </transition>
      <div class="page__navigation--buttons">
        <div class="navigation__button">
          <img src="../../assets/img/general/left.svg">
        </div>
        <div class="navigation__button">
          <img src="../../assets/img/general/right.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-page',
  data () {
    return {
      showPrimaryHeading: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.showPrimaryHeading = false
    }, 2000)
  }
}
</script>

<style lang="scss">
  .home-page {
    .page__title {
      width: max-content;
    }
    .page__navigation {
      position: absolute;
      bottom: 16%;
      width: 400px;
      text-align: center;
      & h3 {
        text-align: center;
      }
      &--buttons {
        display: flex;
        justify-content: space-evenly;
        .navigation__button {
          height: 60px;
          width: 60px;
          border: 4px $white solid;
          clear: both;
          padding: 10px;
        }
      }
    }

    h2 {
      margin-top: -3rem;
      margin-left: 0.3rem;
      text-align: left;
      @include fontSize(20);
    }
  }

</style>
