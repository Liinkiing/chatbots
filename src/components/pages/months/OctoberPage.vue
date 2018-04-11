<template>
  <page-component :title="'oct.'">
    <h2>Is chatbot’s intelligence only artificial ?</h2>
    <p>Did you know that they are around 70% message requests made to chatbot that they do not understand?</p>
    <p>But why is this that difficult for a chatbot to understand our questions?</p>
    <p>We can answer this question by distinguishing 4 major problems of a chatbot:</p>

    <ol>
      <li>Lack of robustness</li>
      <li>Limited cover</li>
      <li>Setup cost</li>
      <li>Hard to maintain</li>
    </ol>

    <p>In a near future, we could address those problems by using <strong>Machine Reading</strong>.</p>
    <p>The machine reading is the ability of a bot of understanding the context of a question in his own language, by using complex graph science. It will have a semantic representation of what the used asked, thus increasing his understanding a lot! When it will be ready, it will be a next major step in chatbots history!</p>
    <a class="page__source" href="https://www.lesechos.fr/idees-debats/cercle/cercle-174336-lintelligence-des-chatbots-nest-elle-quartificielle-2118761.php">Know more...</a>

    <h2>The place of chatbot in advertising</h2>
    <p>Another great and original usage of chatbot is in the domain of advertising.</p>
    <p>Arte tried it and nailed it! For their new series “Transferts”, Arte made a Chatbot in Facebook Messenger.</p>
    <p>The chatbot is meant to dive in the user in the plot of their serie. It allows to break the 4th wall by putting directly the user in the serie. </p>
    <p>During the conversation, we learn that our spirit was graft in another person body.</p>
    <p>Thanks to the chatbot we can explore new unique ways of advertising, and we think that it’s a great idea and an original way of using chatbot.</p>

    <a class="page__source" href="https://www.20minutes.fr/serie/2170523-20171116-transferts-change-corps-grace-chatbot-arte">Know more...</a>
  </page-component>
</template>

<script>
import PageComponent from '../../PageComponent'

export default {
  name: 'home-page',
  components: {
    PageComponent
  }
}
</script>

<style lang="scss">
</style>
