<template>
  <div>
    <img id="eccolo-logo" src="static/img/eccolo-logo.png" alt="eccolo logo"/>

    <router-link :to="{name:'game_home'}">Launch the demo</router-link>
  </div>
</template>

<script>
  export default {
    name: 'ec-home-page'
  }
</script>
