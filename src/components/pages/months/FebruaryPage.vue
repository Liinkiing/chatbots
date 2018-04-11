<template>
  <page-component :title="'feb.'">
    <h2>How can we make chatbots look more human ? A new idea by Facebook.</h2>
    <p>To allow a chatbot to make conversation FAIR (Facebook AI Research) developed a deeper learning.</p>
    <p> Instead of programming questions and answers, the searchers used big data to train the chatbot to talk.</p>
    <p> This data base, PersonaChat, contains more than 160 000 lines of dialog, extracted from exchanges between surfers of the Amazon Mechanical Turk plateform. The chatbot can’t yet do a perfect small talk but the conversation is becoming more and more fluent.</p>
    <a class="page__source" href="https://www.numerama.com/tech/325193-facebook-a-une-nouvelle-idee-pour-rendre-les-chatbots-plus-humains.html">Read more...</a>

    <h2>Bots forecast for 2018</h2>
    <p>A study directed by Oracle proved that 38% of french brands have already used chatbots and this percentage will only increase until 2020 where 79% will have it deployed for the customer relation management. The main question is will chatbot replace instant messaging ?</p>
    <a class="page__source" href="https://www.journalducm.com/reseaux-sociaux-tendances-2018/">Read more...</a>

    <h2>Save money without doing anything!</h2>
    <p>“Bruno”: it is the name of the bot that helps you to save money.</p>
    <p>To use it, you only have to link your bank account and it will encourage you to save amount under 50 euros.</p>
    <p>For the moment, Bruno is in Beta and you can find this bot on messenger which can be very helpful for big spenders!</p>
    <a class="page__source" href="https://www.maddyness.com/2018/02/05/fintech-chatbot-bruno-leve-1-million-euros/">Read more...</a>

    <h2>When bots are part of the justice</h2>
    <p>A young English man developed a virtual and totally free avocado for varied juridical procedure.</p>
    <p>This was originally created by “Joshua Browder” to contest many of the contraventions that he has to paid.</p>
    <a class="page__source" href="http://mashable.france24.com/tech-business/20180220-robot-avocat-algorithme-contraventions-justice-chatbot">Read more...</a>
  </page-component>
</template>

<script>
import PageComponent from '../../PageComponent'

export default {
  name: 'february-page',
  components: {
    PageComponent
  }
}
</script>

<style lang="scss">
</style>
