<template>
  <div class="player" :class="{unactive: !active}">
    <h4>{{ player.name }}</h4>
    <state :state="state"></state>
    <div>
      <div v-on:click="mkChoice(player.name, 0, choices[0])">{{ choices[0].label }}</div>
      <div v-on:click="mkChoice(player.name, 1, choices[1])">{{ choices[1].label }}</div>
      <div v-on:click="mkChoice(player.name, 2, choices[2])">{{ choices[2].label }}</div>
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
</style>
