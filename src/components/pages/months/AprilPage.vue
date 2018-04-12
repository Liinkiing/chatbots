<template>
  <page-component :title="'apr.'">
    <div class="page__article">
      <img class="img-illu img-illu-left" src="@/assets/img/illus/april/apr_1.svg" alt="Illustration">
      <h2>A chatbot that helps you contest your fines</h2>
      <p>DoNotPay, Winlt, TurboAppeal are chatbot that help you to contest your fines. Their function are really simple.</p>
      <p>A serie of question regarding your infraction is asked, and a letter-type is sent to the administration as a ground of appeal. These disputes represent 13 millions of dollars lost to the administrations.</p>
      <a class="page__source" href="http://www.ladn.eu/tech-a-suivre/habitat-et-villes-connectes/stationnement-un-robot-fait-sauter-les-amendes/">Read more...</a>
    </div>

    <div class="page__article">
      <img class="img-illu img-illu-right img-illu-smaller" src="@/assets/img/illus/april/apr_2.svg" alt="Illustration">
      <h2>Facebook stops the new apps that wish to join the social network</h2>
      <p>Resulting the Cambridge Analytica case, Facebook announced an action plan to stop the data leak of users.</p>
      <p>Facebook is actually reviewing its process of exam of news applications or chatbots. This break is critical to the industries that spent thousand of dollars for new applications that can be used or put online because of this decision. It reminds us that depending on only one platform is dangerous for the launch of a product.</p>
      <a class="page__source" href="https://siecledigital.fr/2018/03/30/facebook-met-en-pause-les-nouvelles-applications-ou-chatbot-qui-souhaitent-rejoindre-le-reseau-social/">Read more...</a>
    </div>

    <div class="page__article">
      <img class="img-illu img-illu-left" src="@/assets/img/illus/april/apr_3.svg" alt="Illustration">
      <h2>How can we communicate effectively with an A.I. ?</h2>
      <p>Because a great number of chatbot proved to be irrelevant or disappointing, Les Echos proposed a serie of rules to apply when you are chatting with a bot.</p>
      <p>It advises you to write correctly, to avoid sarcasm or irony, old fashioned expressions… It is also proposed to talk to the bot the same way you’ll talk with a child, that way it can learn and get better.</p>
      <a class="page__source" href="https://www.lesechos.fr/idees-debats/cercle/cercle-181248-comment-bien-communiquer-avec-une-intelligence-artificielle-2166687.php#iErVG3ujucvqrwYB.99">Read more...</a>
    </div>
  </page-component>
</template>

<script>
import PageComponent from '../../PageComponent'

export default {
  name: 'april-page',
  components: {
    PageComponent
  }
}
</script>

<style lang="scss">
</style>
