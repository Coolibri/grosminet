<template>
  <div id="global-state">
    <state :global="true" :state="state">
    </state>
    <div class="global-range"><label>global</label><input disabled type="range" :value="global"/></div>
  </div>
</template>

<script>
  import State from './State'
  export default {
    components: {State},
    name: 'planet-state',
    props: ['state', 'global'],
    data: function () {
      return {}
    }
  }
</script>

<style scoped>
  #global-state{
    display: block;
    width:100%;
  }
  .global-range {
    width: 100%;
    display: block;
  }


  div > label {
    display:inline-block;
    width: 30%;
  }

  div > input {
    display: inline-block;
    width: 70%;
  }
</style>
