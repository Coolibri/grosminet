<template>
  <div class="player">
    <img :src="imgSrc"/>
    <player-state :state="state"></player-state>
  </div>
</template>

<script>
  import State from '&/common/players/state.vue'
  import states from 'src/helpers/playerStates'

  export default {
    name: 'cl-game-players',
    components: {
      'player-state': State
    },
    props: ['imgSrc'],
    computed: {
      state: () => {
        return states.WAITING
      }
    }
  }
</script>

<style scoped lang="less">
  .player {
    margin: 2px 5px;

    & img {
      width:40px;
      height:40px;
      background: blue;
      border-radius: 20px;
    }
  }
</style>
