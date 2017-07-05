<template>
  <div id="messages-list" ref="lists">
    <p v-html="$t('game.start')"></p>
    <div v-for="id in messages">
      <hr/>
      <h3>{{ $t('game.turns.' + id + '.headline') }}</h3>
      <p>{{ $t('game.turns.' + id + '.text') }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'messages',
    props: ['messages'],
    updated: function () {
      const container = this.$refs.lists
      container.scrollTop = container.scrollHeight
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Puritan:400,700');

  * {
    font-family: 'Puritan', sans-serif;
  }

  #messages-list {
    padding: 10px;
  }

  p {
    text-align: justify;
    font-family: 'Puritan', sans-serif;
    font-weight: 700;
    font-size: 1.05em;
  }
</style>
