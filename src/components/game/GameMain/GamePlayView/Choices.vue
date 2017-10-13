<template>
  <div>
    <h2 v-if="turnStep === 1">Player's choices</h2>
    <ul>
      <li>Choice 1</li>
      <li>Choice 2</li>
      <li>Choice 3</li>
    </ul>
    <scores></scores>
  </div>
</template>

<script>
  import Scores from '&/GameMain/GamePlayView/Choices/Scores.vue'

  export default {
    name: 'choices',
    components: {
      'scores': Scores
    },
    props: [
      'choices'
    ],
    data: () => ({
      // @todo : should be a state from the helper
      playerState: 0,
      // @todo : make it a helper, so a computed
      turnStep: 0
    })
  }
</script>

<style>

</style>
