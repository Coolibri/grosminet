<template>
  <div>
    <state :state="state">
    </state>
    {{ global }}
  </div>
</template>

<script>
  import State from './State'
  export default {
    components: {State},
    name: 'planet-state',
    props: ['state', 'global'],
    data: function () {
      return {
      }
    }
  }
</script>
