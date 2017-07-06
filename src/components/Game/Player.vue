<template>
  <div class="player" :class="{unactive: !active}">
    <player-life class="player-life" :val="life"></player-life>
    <div class="player-body">
      <h4>{{$t('player.name', {name: player.name})}}</h4>
      <div v-if="!endTurn" class="btn-group">
        <button :class="{selected: !active && lastChoice === 0}" v-on:click="mkChoice(0, choices[0])">
          {{ $t(pre + choices[0].id) }}
        </button>
        <button :class="{selected: !active && lastChoice === 1}" v-on:click="mkChoice(1, choices[1])">
          {{ $t(pre + choices[1].id) }}
        </button>
        <button :class="{selected: !active && lastChoice === 2}" v-on:click="mkChoice(2, choices[2])">
          {{ $t(pre + choices[2].id) }}
        </button>
      </div>
      <div class="turn-result" v-else>
        <ul>
          <li>food : {{diff.food > 0 ? '+' + diff.food : diff.food}}</li>
          <li>energy : {{diff.energy > 0 ? '+' + diff.energy : diff.energy}}</li>
          <li>water : {{diff.water > 0 ? '+' + diff.water : diff.water}}</li>
          <li>waste : {{diff.waste > 0 ? '+' + diff.waste : diff.waste}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import State from './PlanetState/StateRight'
  import PointsCompanion from '@/pointsCompanion'
  import PlayerLife from './Player/PlayerLife'
  export default {
    components: {
      PlayerLife,
      State
    },
    name: 'player',
    props: [
      'player',
      'choices',
      'turnId',
      'endTurn',
      'playing'
    ],
    computed: {
      pre: function () {
        return 'game.turns.' + this.turnId + '.choices.'
      }
    },
    data: function () {
      return {
        name: 'default',
        history: [],
        state: {
          food: 50,
          waste: 50,
          energy: 50,
          water: 50
        },
        diff: {
          food: 0,
          waste: 0,
          energy: 0,
          water: 0
        },
        life: 0,
        lastChoice: 0,
        active: true
      }
    },
    created: function () {
      this.calcLife()
    },
    watch: {
      name: function () {
        return this.player.name
      },
      endTurn: function (isTheEndOfTurn) {
        if (isTheEndOfTurn) {
          const playerState = PointsCompanion.calcPlayerState(this.state, this.history)
          console.log(playerState)
          this.state = playerState.state
          this.diff = playerState.diff
          this.active = true
        }
      },
      playing: function (val) {
        console.log('playing ?', val)
        if (!val) {
          console.log(val)
          this.$emit('final', {
            player: this.player,
            history: this.history,
            score: this.life
          })
        }
      },
      state: function () {
        this.calcLife()
        console.log(this.player.name, this.life)
      }
    },
    methods: {
      calcLife: function () {
        console.log(PointsCompanion.calcPlayerLife(this.state))
        this.life = PointsCompanion.calcPlayerLife(this.state)
      },
      mkChoice: function (choiceNb, choice) {
        if (this.active) {
          console.log('push that into history', choice)
          this.lastChoice = choiceNb
          choice.turn = this.turnId
          this.history.push(choice)
          this.$emit('choice', this.player.name, choiceNb, choice)
          this.active = false
        }
      }
    }
  }
</script>

<style scoped>

  .player {
    padding: 7px;
    display: flex;
    min-width: 250px;
    max-width: 400px;
  }

  .player-life {
    margin: 20px 5px 10px 5px;
  }

  .player-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .player h4 {
    color: white;
    text-align: left;
  }

  h4 {
    margin-top: 7px;
    margin-bottom: 3px;
  }

  .btn-group {
    margin: 7px 0;
  }

  .btn-group button {
    border: 1px solid white;
    margin: 5px 0;
    background: transparent;
    color: white;
    padding: 5px 8px;
    font-size: 1.05em;
    font-weight: 100;
    min-height: 45px;
    width: 100%;
    display: block;
  }

  .btn-group button:hover {
    background: #0000E5;
  }

  .btn-group button:active {
    background: #000040;
  }

  .unactive {
    border: 1px solid white;
  }

  .btn-group .selected {
    background: #0000FF;
    border-color: #0000BF;
  }

  .turn-result {
    margin: 7px 0;
    border: 1px solid white;
  }

  .turn-result ul {
    list-style: none;
    padding-left: 15px;
  }

  .turn-result ul li {
    color: white;
    text-align: left;
  }

  * {
    font-family: 'Puritan', sans-serif;
    font-weight: 700;
  }
</style>
