<template>
  <input type="range" v-model="value"/>
</template>

<script>
  export default {
    name: 'game-range',
    props: [
      'value'
    ]
  }
</script>

<style scoped>

  input[type=range] {
    -webkit-appearance: none;
    margin: 15px 0;
    width: 100%;
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-thumb {
    height: 0;
    width: 0;
    border: 5px solid transparent;
    border-top: 5px solid white;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
    transform: translate(0, -8px);
  }

  input[type=range]::-webkit-slider-thumb {
    height: 9px;
    margin-top: -5px;
    width: 6px;
  }

  input[type=range]::-webkit-slider-runnable-track {
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
</style>
