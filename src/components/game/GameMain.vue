<template>
  <div class="game-main-view">
    <state-view></state-view>
    <play-view></play-view>
  </div>
</template>

<script>
  import GamePlayView from '&/GameMain/GamePlayView.vue'
  import GameStateView from '&/GameMain/GameStateView.vue'

  export default {
    name: 'cl-game-main',
    components: {
      'play-view': GamePlayView,
      'state-view': GameStateView
    }
  }
</script>

<style scoped lang="less">
  .game-main-view {
    display: flex;
    flex-direction: row;

    & > div {
      flex: 1;
      padding: 10px;
    }
  }
</style>
