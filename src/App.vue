<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  @import url('https://fonts.googleapis.com/css?family=Puritan:400,700');

  * {
    font-family: 'Puritan', sans-serif;
    font-weight: 700;
  }
</style>
