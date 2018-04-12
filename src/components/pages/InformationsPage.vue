<template>
  <div class="informations-page page">
    <transition name="page-imgs">
      <div class="page__imgs">
        <img class="close-icon" src="@/assets/img/general/close.svg" alt="Chatbot" @click="close">
        <a href="../../../static/files/veille_chatbot_2017-2018.pdf" target="_blank">
          <img class="printer-icon" src="@/assets/img/general/imprimante.svg" alt="Printer">
        </a>
      </div>
    </transition>
    <h1>about</h1>
    <div class="page__sources">
      <ul v-for="month in Object.keys(sources)" :key="month">{{ month }}
        <li v-for="article in sources[month]" :key="article.source">
          <div class="article__title">
            {{ article.title }}
          </div>
          <div class="article__source">
            <a :href="article.source">{{ article.source }}</a>
          </div>
        </li>
      </ul>
      <div class="page__about">
        <p>Made by LETUE Erwann, LAPLACE Sophie, JOUVET Martin & JBARA Omar</p>
      </div>
    </div>
  </div>
</template>

<script>
import dataSources from '../../data/sitographie'
export default {
  name: 'informations-page',
  data () {
    return {
      previousPath: '/'
    }
  },
  computed: {
    sources () {
      return dataSources
    }
  },
  methods: {
    close () {
      this.$router.push({
        path: this.previousPath
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.previousPath = from.path
    })
    next()
  }
}
</script>

<style lang="scss">
  @keyframes fadeLeft {
    0% {
      filter: blur(10px);
      opacity: 0;
      transform: translateX(-40px);
    }
    100% {
      filter: blur(0);
      opacity: 1;
      transform: translateX(0);
    }
  }

  .page.informations-page {
    justify-content: flex-start;
    overflow-y: scroll;
    padding-top: 0;
    @media print {
      overflow: visible;
    }
    & .page__imgs {
      flex-direction: row-reverse;
      & a {
        height: 4rem;
      }
      & img {
        width: 4rem;
        &:hover {
          cursor: pointer;
        }
      }
      @media print {
        display: none;
      }
    }
    @include customScroolbar();
    & .page__sources {
      margin-top: 160px;
      @media print {
        margin-top: 0;
      }
    }
    & .page__about {
      filter: blur(10px);
      opacity: 0;
      transform: translateX(-40px);
      color: $black;
      width: 100%;
      padding-left: 40px;
      margin-top: 70px;
      animation: fadeLeft 1s;
      animation-fill-mode: forwards;
      animation-delay: 2.5s;
    }
    & h1 {
      font-size: 4rem;
      margin-top: 0;
      position: fixed;
      z-index: 3;
      width: 100%;
      text-align: center;
      padding: 40px;
      background: $main-color;
      @media print {
        display: none;
      }
      &:after {
        content: '';
        position: absolute;
        z-index: 1;
        pointer-events: none;
        left: 0;
        background-image: linear-gradient(to bottom, $main-color, transparentize($main-color, 1) 90%);
        width: 100%;
        top: 100%;
        height: 60px;
      }
    }
    & ul {
      color: $black;
      filter: blur(10px);
      opacity: 0;
      transform: translateX(-40px);
      animation: fadeLeft 1s;
      animation-fill-mode: forwards;
      font-size: 1.7rem;
      font-weight: bold;
      font-family: 'nexa-bold', sans-serif;
      @for $i from 1 to 9 {
        &:nth-child(#{$i}) {
          animation-delay: $i * 0.25s;
        }
      }
      & li {
        font-family: 'nexa-light', sans-serif;
        list-style: none;
        font-size: 1.3rem;
        margin: 20px 40px;
        & a {
          text-decoration: underline;
          font-size: 1rem;
          color: transparentize($black, 0.3);
        }
      }
    }
  }
</style>
