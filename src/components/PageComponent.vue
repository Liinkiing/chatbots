<template>
  <div class="page">
    <div class="page__title page__line" :class="className" @click="toggleContent()">
      <h1 class="bold">{{title}}</h1>
    </div>

    <div class="content__fade" v-if="forceShow || showContent"></div>
    <transition name="fade">
      <div class="page__content" v-if="forceShow || showContent">
        <slot></slot>
      </div>
    </transition>
    <div class="content__fade" v-if="forceShow || showContent"></div>

    <img v-if="!forceShow" src="../assets/img/general/arrow.svg" class="arrow" :class="animate ? 'arrow-focus' : ''" alt="Arrow" @click="toggleContent()">
  </div>
</template>

<script>
export default {
  name: 'page-component',
  props: {
    title: {type: String, required: true},
    forceShow: {type: Boolean, required: false, default: false}
  },
  data () {
    return {
      animate: false,
      showContent: false
    }
  },
  computed: {
    className () {
      return {
        'page__title-focus': this.forceShow || this.animate
      }
    }
  },
  methods: {
    toggleContent () {
      if (this.forceShow) return
      if (!this.animate) {
        this.animate = !this.animate

        setTimeout(() => {
          this.showContent = !this.showContent
        }, 1000)
      } else {
        this.showContent = !this.showContent

        setTimeout(() => {
          this.animate = !this.animate
        }, 1000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .page__title {
    z-index: 1;
    width: 100%;
    transition: all $transition-duration ease;
    cursor: pointer;

    &-focus {
      top: 4rem;
      @include fontSize(40);
    }
  }

  .page__content {
    height: 70vh;
    width: 80vw;
    max-width: 840px;
    padding: $page-padding;
  }

  .arrow {
    z-index: 1;
    position: absolute;
    width: 6rem;
    left: calc(50% - (6rem / 2));
    bottom: 12vh;
    transform-origin: center;
    transition: all $transition-duration ease;
    cursor: pointer;

    &-focus {
      bottom: 6vh;
      transform: rotate(180deg);
    }
  }
</style>
