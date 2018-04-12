<template>
  <div class="introduction-page page">
    <div class="page__title page__title-focus page__line">
      <h1 class="bold">chatbot</h1>
    </div>

    <div class="content__fade"></div>
    <div class="page__content">
      <div class="introduction-page__item">
        <h2>What is a chatbot?</h2>
        <p>A chatbot is a service, powered by rules and sometimes artificial intelligence, that you interact with via a chat interface. The service could be any number of things, ranging from functional to fun, and it could live in any major chat product</p>
      </div>

      <div class="introduction-page__item introduction-page__item-how">
        <h2>Where can we find chatbots?</h2>
        <div class="introduction-page__item-how__imgs">
          <div class="introduction-page__item-how__imgs-item">
            <img src="@/assets/img/introduction/platforms-section/siri.png" alt="Siri">
            <img src="@/assets/img/introduction/platforms-section/google_assistant.png" alt="Google assistant">
          </div>
          <div class="introduction-page__item-how__imgs-item">
            <img src="@/assets/img/introduction/platforms-section/messenger.png" alt="Messenger">
            <img src="@/assets/img/introduction/platforms-section/skype.png" alt="Skype">
            <img src="@/assets/img/introduction/platforms-section/slack.png" alt="Slack">
            <img src="@/assets/img/introduction/platforms-section/mail.png" alt="Mail">
          </div>
        </div>
        <p>Chatbots work within chat platforms such a Facebook Messenger, Slack or SMS. Each chat platform has it’s own features. These features determine the possible ways in which the chatbot can interact with the user, however the actual behaviour of the chatbot is determined by the bot itself.</p>
      </div>

      <div class="introduction-page__item">
        <h2>How do Chatbots work?</h2>
        <p>There are two types of chatbots Rule based bots and AI bots.</p>
      </div>

      <div class="introduction-page__container">
        <div class="introduction-page__container-item">
          <img src="@/assets/img/introduction/how-section/illu-1.svg" alt="Illustration">
          <h3 class="bold">Scripted chatbots</h3>
          <p>Conversations with this type of chatbot can only follow predetermined paths. At each step in the conversation the user will need to pick from explicit options to determine the next step in the conversation.</p>
          <p>Conversations with this type of chatbot can only follow predetermined paths. At each step in the conversation the user will need to pick from explicit options to determine the next step in the conversation.</p>
        </div>

        <div class="introduction-page__container-item">
          <img src="@/assets/img/introduction/how-section/illu-2.svg" alt="Illustration">
          <h3 class="bold">Intelligent chatbots</h3>
          <p>Artificial intelligence allows them to be more flexible in terms of the user input they can accept. They can accept free form input in the form of text or voice statements.</p>
          <p>AI also allows them to improve the more that they are used. This bot continuously gets smarter as it learns from conversations it has with people.</p>
        </div>
      </div>

      <div class="introduction-page__container">
        <div class="introduction-page__item">
          <h2>Uses of chatbot</h2>
          <p>There are many uses for chatbots. Several different types of issues can be distinguished according to B2B or B2C positioning.</p>
        </div>
      </div>

      <div class="introduction-page__container introduction-page__item-uses">
        <div>
          <img src="@/assets/img/introduction/uses-section/learning.svg" alt="Illustration">
          <h3>Bot Learning</h3>
          <p>trains, coaches and accompanies students on an educational path</p>
        </div>
        <div>
          <img src="@/assets/img/introduction/uses-section/news.svg" alt="Illustration">
          <h3>News Bot</h3>
          <p>Chatbot who tells you about the news</p>
        </div>
        <div>
          <img src="@/assets/img/introduction/uses-section/assistant.svg" alt="Illustration">
          <h3>Brand assistant Bot</h3>
          <p>Customer support, relationship and after sales service</p>
        </div>
        <div>
          <img src="@/assets/img/introduction/uses-section/e-commerce.svg" alt="Illustration">
          <h3>E-commerce bot</h3>
          <p>sell / advice / recommendations</p>
        </div>
        <div>
          <img src="@/assets/img/introduction/uses-section/entertainment.svg" alt="Illustration">
          <h3>Entertainment Bot</h3>
          <p>outing ideas, exhibition, bar, restaurants</p>
        </div>
        <div>
          <img src="@/assets/img/introduction/uses-section/fun.svg" alt="Illustration">
          <h3>Fun Bot</h3>
          <p>spent the time, live an experience</p>
        </div>

        <router-link :to="{ name: 'chatbot' }" class="start-navigation">
          <img src="@/assets/img/introduction/uses-section/dialog.svg" alt="Illustration">
        </router-link>
      </div>
    </div>
    <div class="content__fade"></div>
    </div>
</template>

<script>
export default {
  name: 'introduction-page'
}
</script>

<style lang="scss" scoped>
  .introduction-page {
    position: relative;
    padding: 0;
    display: inherit;
    & .page__title {
      width: 100%;
    }

    @include customScroolbar;

    .illu-1 {
      top: 14rem;
    }

    .content__fade {
      top: 13.5rem;

      &:last-of-type {
        bottom: 13rem;
      }
    }

    .page__content {
      position: relative;
      margin-top: 10rem;
      padding: 0;
      padding-top: $page-padding;
      width: 100%;
      height: 78vh;
    }

    &__container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      margin: 0 auto;
      margin-bottom: 4rem;
      max-width: $container;
      color: $black;

      &:nth-of-type(4) {
        margin-bottom: 0;
      }

      p {
        margin-left: $content-margin;
      }

      &-item {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        width: 47%;

        p {
          margin-left: inherit;
        }

        img {
          margin: 0 auto;
          width: 60%;
        }

        h3 {
          position: absolute;
          top: 7.5rem;
          @include fontSize(20);
        }

        &:first-of-type {
          h3 {
            right: 0;
          }
        }

        &:last-of-type {
          h3 {
            left: 0;
          }
        }
      }
    }

    &__item {
      margin: 0 auto 4rem;
      max-width: 38rem;

      &-how {
        &__imgs {
          img {
            margin: 0 .5rem;
            max-width: 3.4rem;
          }

          &-item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 10rem;
            margin: 0 auto 2rem;

            &:first-of-type {
              margin-bottom: 1rem;
            }
          }
        }
      }

      &-uses {
        justify-content: center;

        div, a {
          margin-bottom: 3rem;
          width: calc(100%/3);
          text-align: center;

          img {
            width: 8rem;
          }

          h3 {
            width: 100%;
            text-align: center;
          }

          p {
            margin: 0 auto;
            max-width: 80%;
          }
        }

        .start-navigation {
          margin-top: 4rem;
        }
      }
    }
  }

  .page__content {
    padding-top:  10rem;
  }
</style>
