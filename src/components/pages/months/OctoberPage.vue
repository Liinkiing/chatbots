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
    <a class="page__source" href="https://www.lesechos.fr/idees-debats/cercle/cercle-174336-lintelligence-des-chatbots-nest-elle-quartificielle-2118761.php">Read more...</a>

    <h2>Chatbot for the launch of the new Arte’s series</h2>
    <p>The Franco-German channel challenges its fans to put themselves in the shoes of a complete stranger through his Facebook Messenger account.</p>
    <p>To immerse future viewers in the universe of the series, ARTE has chosen the entertainment agency Dare.Win and its LiveBotter chatbots developers to create an original experience to meet the characters.</p>
    <br>
    <p>This operation aims to bring the experience of a transfer to life, simply by using a mobile phone. Thus, by sending a message on the Facebook page of ARTE, the subject will be transferred into the body of Sylvain Bernard, the protagonist of the series, and will have to take his place during conversations with his colleagues from the Action Brigade against Illegal transfer.</p>
    <p>The goal is to answer the questions of the greatest profilers by claiming to be and always have been Sylvain Bernard. Through this experience of a few minutes, the user will navigate between three Messenger conversations and will have to make the right choices to gain access to the first episode of the series in preview.</p>
    <a class="page__source" href="https://lareclame.fr/darewin-arte-transferts-188604">Read more...</a>

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
