<template>
  <div class="sensors">
    {{ state.water }}, {{ state.waste }}, {{ state.energy }}, {{ state.food }}
  </div>
</template>

<script>
  export default{
    name: 'state',
    props: [
      'state'
    ]
  }
</script>

<style>

</style>
