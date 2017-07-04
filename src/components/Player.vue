<template>
  <div class="player" :class="{unactive: !active}">
    <player-life class="player-life" :val="state.waste"></player-life>
    <div class="player-body">
      <h4>{{ player.name }}</h4>
      <div class="btn-group">
        <button v-on:click="mkChoice(0, choices[0])">
          {{ choices[0].label }}
        </button>
        <button v-on:click="mkChoice(1, choices[1])">
          {{ choices[1].label }}
        </button>
        <button v-on:click="mkChoice(2, choices[2])">
          {{ choices[2].label }}
        </button>
      </div>
    </div>

  </div>
</template>

<script>
  import State from './State'
  import PointsCompanion from '@/pointsCompanion'
  import PlayerLife from './PlayerLife'
  export default {
    components: {
      PlayerLife,
      State
    },
    name: 'player',
    props: [
      'player',
      'choices'
    ],
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
        active: true
      }
    },
    watch: {
      name: function () {
        return this.player.name
      },
      choices: function () {
        this.state = PointsCompanion.calcPlayerState(this.state, this.history)
        this.active = true
      }
    },
    methods: {
      mkChoice: function (choiceNb, choice) {
        if (this.active) {
          console.log('push that into history', choice)
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
    display:flex;
    min-width:250px;
    max-width:400px;
  }


  .player-life {
    margin: 20px 5px 10px 5px;
  }

  .player-body {
    width:100%;
    display:flex;
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

  .unactive {
    background: lightgrey;
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
    width:100%;
    display: block;
  }

  .btn-group button:hover {
    background: #0000E5;
  }

  .btn-group button:active {
    background: #000040;
  }

  .unactive .btn-group button {
    background: lightgrey;
  }

  * {
    font-family: 'Puritan', sans-serif;
    font-weight: 700;
  }
</style>
