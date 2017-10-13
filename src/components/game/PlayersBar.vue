<template>
  <div class="players-bar">
    <ul class="players-bar-list">
      <player></player>
      <player></player>
      <player></player>
      <player></player>
    </ul>
    <button
      v-on:click="restartTheDemo">
      {{ button.value }}
    </button>
  </div>
</template>

<script>
  import Player from '&/common/Players.vue'

  export default {
    name: 'cl-players-bar',
    components: {
      'player': Player
    },
    data: () => ({
      button: {value: 'restart'}
    }),
    methods: {
      restartTheDemo () {
        this.$emit('restart')
      }
    }
  }
</script>

<style scoped lang="less">
  .players-bar {
    display: flex;
    flex-direction: row;

    & .players-bar-list {
      flex:1;
      display: flex;
      flex-direction: row;
    }

    & button{
      flex:1;
    }
  }
</style>
