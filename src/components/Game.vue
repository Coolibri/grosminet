<template>
  <div class="game">
    <planet-state :state="state" :global="global"></planet-state>

    <messages class="messages"></messages>

    <div class="players">
      <player v-for="player in players" :player="player" :key="player.name"></player>
    </div>
  </div>
</template>

<script>
  import PlanetState from './PlanetState'
  import Player from './Player'
  import Messages from './Messages'
  import DataPasser from '@/dataPasser'
  export default {
    components: {
      Messages,
      PlanetState,
      Player
    },
    name: 'Game',
    data: function () {
      return {
        players: [],
        state: {
          waste: 50,
          water: 50,
          energy: 50,
          food: 50
        },
        global: 50
      }
    },
    created: function () {
      this.players = DataPasser.getData()
    }
  }
</script>

<style scoped>
  .game {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .messages {
    border: 1px solid black;
    overflow: auto;
    flex: 1;
  }

  .players {
    display: flex;
    justify-content: space-between;
  }
</style>
