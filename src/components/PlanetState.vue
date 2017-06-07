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
  #global-state {
    display: block;
    width: 100%;
  }

  .global-range {
    width: 100%;
    display: block;
  }

  input[type=range] {
    -webkit-appearance: none;
    margin: 18px 0;
    width: 80%;
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 18px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }

  input[type=range]::-webkit-slider-runnable-track {
    height: 6px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: -moz-linear-gradient(to right, red, lawngreen);
    background: -webkit-linear-gradient(to right, red, lawngreen);
    background: linear-gradient(to right, red, lawngreen);
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

  div > label {
    display: inline-block;
    width: 30%;
  }

  div > input {
    display: inline-block;
    width: 70%;
  }
</style>
