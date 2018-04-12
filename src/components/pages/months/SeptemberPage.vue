<template>
  <page-component :title="'sept.'">
    <div class="page__article">
      <img class="img-illu img-illu-left" src="@/assets/img/illus/september/sept_1.svg" alt="Illustration">
      <h2>Chatbots: revolution or regression regarding UX design?</h2>
      <p>Will chatbot be deprecated in a near future? That is the question that many people wonder. Indeed, a lot of chatbots are currently not that useful.</p>
      <p>But it’s not all a waste! With the progression of the machine learning, chatbot will become more and more relevant, and they will process our requests faster.</p>
      <p>It can also be a great asset for company, because they allow gathering of analytics in a more “human way”, by talking with a company customer and getting data from their answers.</p>
      <p>Furthermore, they actually needs you to type your question! That’s a waste of time. Event bots of big company like Google (with their Google Assistant) can take some time to process your request and answer your question.</p>
      <a class="page__source" href="http://www.angie.fr/chatbots-revolution-regression-matiere-dux/">Read more...</a>
    </div>

    <div class="page__article">
      <h2>Insurance firms use Chatbots to sell policies, and help you</h2>
      <p>Today, chatbots have partly replaced humans at insurance firms to answer customer queries, giving recommendations and issuing policy documents.</p>
      <p>It suggests customers the right insurance plan and the sum insured, creates a policy proposal and gives them a payment link.
        It goes beyond just issuing a policy to assisting with emergency numbers and information on cost of living. The chatbot has completed more than 1,500 interactions in just over a month since its in ception.</p>
      <a class="page__source" href="https://economictimes.indiatimes.com/markets/stocks/news/insurance-firms-use-chatbots-to-sell-policies-and-help-you/articleshow/60741512.cms">Read more...</a>
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
