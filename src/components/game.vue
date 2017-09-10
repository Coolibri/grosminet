<template>
  <transition name="slide-fade">
    <div id="game">
      <players-bar
        @restart="restartTheGame"
      ></players-bar>
      <main-view></main-view>
    </div>
  </transition>
</template>

<script>
  import PlayersBar from 'src/components/game/PlayersBar.vue'
  import MainView from 'src/components/game/GameMain.vue'

  export default {
    name: 'game',
    components: {
      MainView,
      PlayersBar,
      'players-bar': PlayersBar,
      'main-view': MainView
    },
    methods: {
      restartTheGame () {
        this.$router.replace({path: '/_empty'})
        this.$router.replace({path: '/game'})
      }
    }
  }
</script>

<style scoped lang="less">
  #game {
    display: flex;
    flex-direction: column;

    & players-bar {
      flex: 5;
    }

    & main-view {
      flex: 95;
    }
  }
</style>
