<template>
  <div class="player-graph">
    <h3>{{ player.player.name }} - {{player.score}}</h3>
    <div class="player-graph-fragments">
      <graph-fragment
        v-for="h in player.history"
        :history="h"
        :key="h.id"
      ></graph-fragment>
    </div>
  </div>
</template>

<script>
  import GraphFragment from './PlayerHistoryGraph/GraphFragment'
  export default {
    components: {GraphFragment},
    name: 'player-history-graph',
    props: ['player']
  }
</script>

<style scoped>
  .player-graph {
    border: 1px solid black;
    min-width: 250px;
    max-width: 400px;
  }

</style>
