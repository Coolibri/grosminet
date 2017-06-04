<template>
  <div class="game">
    <planet-state :state="state" :global="global"></planet-state>

    <messages :messages="messages" class="messages"></messages>

    <div class="players">
      <player @choice="playerMkChoice" :choices="currentChoices" v-for="player in players" :player="player"
              :key="player.name"></player>
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
        choicesCount: 0,
        currentChoices: [],
        messages: [],
        global: 50
      }
    },
    created: function () {
      this.players = DataPasser.getData()
      // start the game !
      this.messages.push({
        text: 'Bienvenue sur votre planète, pb de surpopulation et donc de famine, que faire ?'
      })
      this.currentChoices = [
        'engrais',
        'OGM',
        'local'
      ]
    },
    methods: {
      playerMkChoice: function (pName, choiceNb) {
        this.messages.push({
          text: pName + ' make the ' + this.currentChoices[choiceNb] + ' choice'
        })
        this.choicesCount++
        if (this.choicesCount === this.players.length) {
          this.messages.push({
            text: 'every body won !'
          })
        }
      }
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
