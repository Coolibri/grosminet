<template>
  <!-- App -->
  <div id="app">
    <router-view id="mainView"></router-view>
    <footer>Coolibri -
      <router-link :to="{name:'about'}">about us</router-link>
    </footer>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less">
  body {
    border: 0;
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100vw;
    height: 100vh;
    border: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    & > footer {
      border-top: 1px solid lightgrey;
      flex: 5;
    }

    & > #mainView {
      flex: 95;
    }
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    display: none;
  }

  .slide-fade-enter
    /* .slide-fade-leave-active below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
