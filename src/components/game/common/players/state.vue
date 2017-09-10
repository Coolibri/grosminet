<template>
  <div>
    {{ states[state].name }}
  </div>
</template>

<script>
  export default {
    name: 'cl-players-state',
    props: [
      'state'
    ],
    data: () => ({
      states: [
        {
          name: 'waiting',
          src: 'assets/img/states/waiting.png'
        },
        {
          name: 'done',
          src: 'assets/img/states/done.png'
        }
      ]
    })
  }
</script>

<style>

</style>
