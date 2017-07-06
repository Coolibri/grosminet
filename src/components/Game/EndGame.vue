<template>
  <div>
    <div v-if="global < 5">
      <p>La planète n'a pas survécu à votre rythme de vie</p>
    </div>
    <div v-else-if="global > 95">
      <p>Vous avez gagné</p>
    </div>
    <div v-else>
      <p>Fin du scenario</p>
    </div>
    <div>
      <h5>Your journey</h5>
      <div class="players-history">
        <player-history-graph
          v-for="player in history"
          class="player-history"
          :player="player"
          :key="player.player.name"
        ></player-history-graph>
      </div>
    </div>
  </div>
</template>

<script>
  import PlayerHistoryGraph from './EndGame/PlayerHistoryGraph'
  export default {
    components: {PlayerHistoryGraph},
    name: 'end-game',
    props: [
      'global',
      'history'
    ]
  }
</script>

<style scoped>
  .players-history {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .player-history {

  }
</style>
