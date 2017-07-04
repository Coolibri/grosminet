<template>
  <div class="sensors">
    <div>
      <label for="food-range">Energy</label>
      <game-range id="food-range" class="energy range" :value="state.energy"></game-range>
    </div>
    <div>
      <label for="water-range">Waste</label>
      <game-range id="water-range" class="waste range" :value="state.waste"></game-range>
    </div>
  </div>
</template>

<script>
  import GameRange from './RangeComp'
  export default{
    components: {GameRange},
    name: 'state-right',
    props: [
      'state'
    ]
  }
</script>

<style scoped>
  .sensors {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5px 0;
  }

  .sensors div {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
  }

  .sensors div label {
    flex-basis: 20%;
    width: 20%;
    color: white;
    text-align: left;
    padding-top:9px;
    padding-left: 10px;
  }

  .global div .range {
    width: 80%;
    flex-basis: 80%;
  }

  .energy::-webkit-slider-runnable-track {
    background: -moz-linear-gradient(to right, #8c5400, #fffe00);
    background: -webkit-linear-gradient(to right, #8c5400, #fffe00);
    background: linear-gradient(to right, #8c5400, #fffe00);
  }

  .waste::-webkit-slider-runnable-track {
    background: -moz-linear-gradient(to right, #4a204d, #c996fe);
    background: -webkit-linear-gradient(to right, #4a204d, #c996fe);
    background: linear-gradient(to right, #4a204d, #c996fe);
  }
</style>
