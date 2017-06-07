<template>
  <div class="game">

    <messages :messages="messages" class="messages" v-if="areWePlaying"></messages>

    <div class="messages" v-else>
      <p>{{ nextMessage }} Fin du jeu !</p>
      <div v-if="global < 5">
        <p>La planète n'a pas survécu à votre rythme de vie</p>
      </div>
      <div v-else-if="global > 95">
        <p>Vous avez gagné</p>
      </div>
      <div v-else>
        <p>Fin du scenario</p>
        <p>{{ state }}</p>
        <p>global {{ global }}</p>
      </div>
    </div>

    <planet-state id="planet-state" :state="state" :global="global"></planet-state>

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
  import TreeLoader from '@/tree/treeLoader'
  import PointsCompanion from '@/pointsCompanion'

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
        choicesSelector: [],
        choicesHistory: [],
        nextMessage: '',
        messages: [],
        global: 50,
        areWePlaying: true
      }
    },
    created: function () {
      this.players = DataPasser.getData()
      // start the game !
      this.messages.push({
        text: TreeLoader.getTreeRoot().text
      })
      this.currentChoices = TreeLoader.getTreeRoot().choices
    },
    methods: {
      playerMkChoice: function (pName, choiceNb, choice) {
        this.choicesSelector.push({from: pName, choiceNb: choiceNb, choice: choice})
        this.choicesCount++
        if (this.choicesCount === this.players.length) {
          let count = [0, 0, 0]
          for (let i = 0; i < this.choicesSelector.length; i++) {
            count[this.choicesSelector[i].choiceNb]++
          }

          this.nextMessage += this.currentChoices[0].value(count[0])
          this.nextMessage += this.currentChoices[1].value(count[1])
          this.nextMessage += this.currentChoices[2].value(count[2])

          let selected = count.indexOf(Math.max(...count))

          this.choicesHistory.push({
            selected: selected,
            count: JSON.parse(JSON.stringify(count)),
            choices: this.currentChoices,
            selector: this.choicesSelector
          })

          this.state = PointsCompanion.calcGlobalState(
            this.players.length,
            this.state,
            this.choicesHistory)

          this.global = PointsCompanion.calcGlobal(
            this.players.length,
            this.global,
            this.choicesHistory
          )

          if (PointsCompanion.isItTheEnd(this.global)) {
            this.messages.push({
              text: this.nextMessage + 'fin du jeu'
            })
            this.areWePlaying = false
          } else {
            TreeLoader.setNextTurn(selected)
            this.messages.push({
              text: this.nextMessage + TreeLoader.getCurrentTurn().text
            })
            this.resetTurn()
          }
        }
      },
      resetTurn: function () {
        this.currentChoices = TreeLoader.getCurrentTurn().choices
        this.choicesCount = 0
        this.nextMessage = ''
        this.choicesSelector = []
      }
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Puritan:400,700');

  * {
    font-family: 'Puritan', sans-serif;
    font-weight: 700;
  }

  .messages {
    font-size: 1.2em;
  }

  .game {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* background: linear-gradient(to top, rgb(0.8,0.8,0.8),white); */
    background: #e0f8f1;
  }

  .messages {
    border-bottom: 1px solid darkgrey;
    overflow: auto;
    background: white;
    flex: 1;
  }

  .players {
    display: flex;
    justify-content: space-around;
  }

  #planet-state {
    padding-top: 20px;
  }

</style>
