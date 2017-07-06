<template>
  <div>
    <div class="choice">* {{$t(th)}}</div>
  </div>
</template>

<script>
  export default {
    name: 'graph-fragment',
    props: ['history'],
    computed: {
      th: function () {
        return 'game.turns.' + this.history.turn + '.choices.' + this.history.id
      }
    }
  }
</script>

<style scoped>
  .choice {
    padding:2px 10px;
  }
</style>
