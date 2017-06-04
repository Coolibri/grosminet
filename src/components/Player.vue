<template>
  <div class="player">
    <h4>{{ player.name }}</h4>
    <state :state="state"></state>
    <div>
      <div v-on:click="mkChoice(player.name,0)">{{ choices[0] }}</div>
      <div v-on:click="mkChoice(player.name,1)">{{ choices[1] }}</div>
      <div v-on:click="mkChoice(player.name,2)">{{ choices[2] }}</div>
    </div>

  </div>
</template>

<script>
  import State from './State'
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
        }
      }
    },
    watcher: {
      name: function () {
        return this.player.name
      }
    },
    methods: {
      mkChoice: function (pName, choiceNb) {
        this.$emit('choice', pName, choiceNb)
      }
    }
  }
</script>
