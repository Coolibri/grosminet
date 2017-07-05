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
    background: #000033;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  /**
   * http://applemusic.tumblr.com/
   * https://jsfiddle.net/xq56dmrh/
   */

  /** Ultra Light */
  @font-face {
    font-family: "San Francisco";
    font-weight: 100;
    src: url("/static/font/SanFranciscoText-Light.otf");
  }

  /** Thin */
  @font-face {
    font-family: "San Francisco";
    font-weight: 200;
    src: url("/static/font/SanFranciscoText-Light.otf");
  }

  /** Regular */
  @font-face {
    font-family: "San Francisco";
    font-weight: 400;
    src: url("/static/font/SanFranciscoText-Regular.otf");
  }

  /** Medium */
  @font-face {
    font-family: "San Francisco";
    font-weight: 500;
    src: url("/static/font/SanFranciscoText-Medium.otf");
  }

  /** Semi Bold */
  @font-face {
    font-family: "San Francisco";
    font-weight: 600;
    src: url("/static/font/SanFranciscoText-Semibold.otf");
  }

  /** Bold */
  @font-face {
    font-family: "San Francisco";
    font-weight: 700;
    src: url("/static/font/SanFranciscoText-Bold.otf");
  }

  * {
    font-family: 'San Francisco', sans-serif;
    font-weight: 700;
  }
</style>
