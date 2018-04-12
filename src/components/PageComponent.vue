<template>
  <div class="page">
    <div ref="pageTitle" class="page__title page__line" :class="className" @click="toggleContent()">
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
import { EventBus } from '../main'

export default {
  name: 'page-component',
  props: {
    title: {type: String, required: true},
    forceShow: {type: Boolean, required: false, default: false}
  },
  data () {
    return {
      animate: false,
      showContent: false,
      canToggleContent: true
    }
  },
  mounted () {
    EventBus.$emit('contentChanged', this.animate)
    this.$refs.pageTitle.addEventListener('transitionend', () => {
      this.canToggleContent = true
    })
  },
  watch: {
    animate () {
      EventBus.$emit('contentChanged', this.animate)
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
      if (!this.canToggleContent) return
      this.canToggleContent = false
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
    z-index: 3;
    width: 100%;
    transition: all $transition-duration ease;
    cursor: pointer;
    @media screen and (max-height: 800px) {
      font-size: 5rem;
    }
    &-focus {
      top: 4rem;
      @include fontSize(40);
    }
  }

  .arrow {
    z-index: 6;
    position: absolute;
    width: 10rem;
    left: calc(50% - (10rem / 2));
    bottom: 22vh;
    transform-origin: center;
    transition: all $transition-duration ease;
    cursor: pointer;
    @media screen and (max-height: 1000px) {
      width: 6rem;
      left: calc(50% - (6rem / 2));
      bottom: 18vh;
    }

    &-focus {
      bottom: 4vh;
      transform: rotate(180deg) scale(0.5);
      @media screen and (max-height: 1000px) {
        bottom: 3rem;
      }
    }
  }
</style>
