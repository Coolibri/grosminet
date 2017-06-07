<template>
  <div class="player" :class="{unactive: !active}">
    <h4>{{ player.name }}</h4>
    <hr/>
    <state :global="false" :state="state"></state>
    <div class="btn-group">
      <button v-on:click="mkChoice(player.name, 0, choices[0])">
        {{ choices[0].label }}
      </button>
      <button v-on:click="mkChoice(player.name, 1, choices[1])">
        {{ choices[1].label }}
      </button>
      <button v-on:click="mkChoice(player.name, 2, choices[2])">
        {{ choices[2].label }}
      </button>
    </div>

  </div>
</template>

<script>
  import State from './State'
  import PointsCompanion from '@/pointsCompanion'
  export default {
    components: {State},
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
      mkChoice: function (pName, choiceNb, choice) {
        if (this.active) {
          console.log('push that into history', choice)
          this.history.push(choice)
          this.$emit('choice', pName, choiceNb, choice)
          this.active = false
        }
      }
    }
  }
</script>

<style scoped>


  .unactive {
    background: lightgrey;
  }

  .btn-group {
    margin: 7px 0;
  }

  .btn-group button {
    border: 1px solid darkgrey;
    margin: 0;
    background: white;
    padding: 5px 8px;
    font-size: 1.05em;
    display: block;
    width: 100%;
  }

  .btn-group button:hover {
    background: lightgrey;
  }

  .unactive .btn-group button {
    background: lightgrey;
  }

  .btn-group button:first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .btn-group button:last-child {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  * {
    font-family: 'Puritan', sans-serif;
    font-weight: 700;
  }
</style>
