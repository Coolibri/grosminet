<template>
  <div class="sensors" :class="{ global: global, 'global-none': !global }">
    <div>
      <label>Water</label><input class="water" type="range" :value="state.water" disabled/>
    </div>
    <div>
      <label>Waste</label><input class="waste" type="range" :value="state.waste" disabled/>
    </div>
    <div>
      <label>Energy</label><input class="energy" type="range" :value="state.energy" disabled/>
    </div>
    <div>
      <label>Food</label><input class="food" type="range" :value="state.food" disabled/>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'state',
    props: [
      'state',
      'global'
    ]
  }
</script>

<style scoped>
  .sensors {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    height: 120px;
  }

  div.global {
    height: 120px;
  }

  .sensors div {
    box-sizing: border-box;
    flex: 1;
    width: 50%;
    height: 60px;
    display: block; /* IE fix */
  }

  .sensors div label {
    display: inline-block;
  }

  .global div input {
    width: 80%;
    display: inline-block;
  }


  .global div label{
    width: 20%;
  }

  .global-none div input {
    width: 90%;
    display: inline-block;
  }

  input[type=range] {
    -webkit-appearance: none;
    margin: 18px 0;
    width: 100%;
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
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

  .water::-webkit-slider-runnable-track {
    background: -moz-linear-gradient(to right, darkblue, deepskyblue);
    background: -webkit-linear-gradient(to right, darkblue, deepskyblue);
    background: linear-gradient(to right, darkblue, deepskyblue);
  }

  .energy::-webkit-slider-runnable-track {
    background: -moz-linear-gradient(to right, orangered, yellow);
    background: -webkit-linear-gradient(to right, orangered, yellow);
    background: linear-gradient(to right, orangered, yellow);
  }

  .food::-webkit-slider-runnable-track {
    background: -moz-linear-gradient(to right, darkgreen, lawngreen);
    background: -webkit-linear-gradient(to right, darkgreen, lawngreen);
    background: linear-gradient(to right, darkgreen, lawngreen);
  }

  .waste::-webkit-slider-runnable-track {
    background: -moz-linear-gradient(to right, darkred, sandybrown);
    background: -webkit-linear-gradient(to right, darkred, sandybrown);
    background: linear-gradient(to right, darkred, sandybrown);
  }
</style>
