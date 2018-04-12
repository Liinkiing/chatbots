<template>
  <page-component :title="'oct.'">
    <div class="page__article">
      <img class="img-illu img-illu-left img-illu-smaller" src="@/assets/img/illus/october/oct_4-left.svg" alt="Illustration">
      <img class="img-illu img-illu-right img-illu-bigger" src="@/assets/img/illus/october/oct_4-right.svg" alt="Illustration">
      <h2>Chatbot: for or against?</h2>
      <p>Chatbots are multiplying in companies, who are still groping to test this solution.</p>
      <p>Be careful. Designing a self-learning chatbot and letting it generate text is possible but can be dangerous for a brand. Microsoft has paid the price: he had to muzzle his bot that poured racist remarks influenced by malicious Internet users.</p>
      <p>Another important point: find the relevant location of the bot. Meetic installs it on his website to assist the customer. Direct Energie and Air France prefer to go through Messenger. In any case, companies should never lose sight of the fact that a bot is a tool, not a strategy.</p>
    </div>

    <div class="page__article">
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
    </div>

    <div class="page__article">
      <img class="img-illu img-illu-left img-illu-top img-illu-bigger" src="@/assets/img/illus/october/oct_3-left-1.svg" alt="Illustration">
      <img class="img-illu img-illu-left img-illu-bottom img-illu-bigger" src="@/assets/img/illus/october/oct_3-left-2.svg" alt="Illustration">
      <img class="img-illu img-illu-right img-illu-smaller" src="@/assets/img/illus/october/oct_3-right.svg" alt="Illustration">
      <h2>How can we all behave like Miranda Priestly ?</h2>
      <p>Who has not dreamed one day, overwhelmed, to be Miranda Priestly, the popess of fashion, with his court of personal assistants in the movie "The Devil Wears Prada"? This is now possible thanks to automated chat robots, in other words chatbots.</p>
      <p class="bold">For your beauty</p>
      <p>Nothing can beat the experience of chatting with a Sephora associate about your makeup needs in person, but the Sephora chatbot on Kik (a popular messaging app) comes pretty close.</p>
      <p>Sephora’s chatbots are helping consumers find deals and make purchases, but also make fashion choices and find products that meet their unique style and tastes. That’s something a simple ecommerce website doesn’t offer.</p>
      <a class="page__source" href="https://bots.kik.com/#/sephora">Try it</a>
      <p class="bold">Clothes</p>
      <p>Clothing brand H&M developed an interactive bot for the Kik messaging app that recommends products based on your own preferences. It starts out by asking you to select photos of clothing that you like. Then it asks you to pick your personal style: Casual, Boho, Preppy, Classic, or Grunge.</p>
      <a class="page__source" href="https://bots.kik.com/#/hm">Try it</a>
      <a class="page__source" href="https://www.abetterlemonadestand.com/ecommerce-chatbots/">Read more...</a>
      <a class="page__source" href="http://www.e-marketing.fr/Thematique/social-media-1096/Breves/Penser-chatbot-demain-321396.htm#gTpapVy9EFvd72GA.97">Other article</a>
    </div>
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
