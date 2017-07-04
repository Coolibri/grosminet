<template>
  <div class="sensors-wrapper" :class="{ global: global, 'global-none': !global }">
    <div class="sensors">
      <div>
        <game-range class="water" :value="state.water"></game-range>
      </div>
      <div>
        <game-range class="waste" :value="state.waste"></game-range>
      </div>
    </div>
    <div class="sensors">
      <div>
        <game-range class="energy" :value="state.energy"></game-range>
      </div>
      <div>
        <game-range class="food" :value="state.food"></game-range>
      </div>
    </div>
  </div>
</template>

<script>
  import GameRange from './RangeComp'
  export default{
    components: {GameRange},
    name: 'state',
    props: [
      'state',
      'global'
    ]
  }
</script>

<style scoped>
  .sensors-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

  }
  .sensors {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    height: 60px;
    margin: 5px 0;
    width:49%;
  }

  div.global {
    height: 80px;
  }

  .sensors div {
    box-sizing: border-box;
    flex: 1;
    width: 100%;
    height: 30px;
    display: block; /* IE fix */
  }

  .sensors div label {
    display: inline-block;
  }

  .global div input {
    width: 80%;
    display: inline-block;
  }

  .global div label {
    width: 20%;
  }

  .global-none div input {
    width: 90%;
    display: inline-block;
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
