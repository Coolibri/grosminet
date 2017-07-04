<template>
  <div class="sensors">
    <div>
      <label for="food-range">{{ $t('states.food') }}</label>
      <game-range id="food-range" class="food range" :value="state.food"></game-range>
    </div>
    <div>
      <label for="water-range">{{ $t('states.waste') }}</label>
      <game-range id="water-range" class="water range" :value="state.water"></game-range>
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
    flex-direction: row;
    width: 100%;
  }

  .sensors div label {
    flex-basis: 30%;
    width: 30%;
    color: white;
    text-align: right;
    padding-top:9px;
    padding-right: 10px;
  }

  .global div .range {
    width: 70%;
    flex-basis: 70%;
  }

  .water::-webkit-slider-runnable-track {
    background: -moz-linear-gradient(to right, #1b1464, #00fefe);
    background: -webkit-linear-gradient(to right, #1b1464, #00fefe);
    background: linear-gradient(to right, #1b1464, #00fefe);
  }

  .food::-webkit-slider-runnable-track {
    background: -moz-linear-gradient(to right, #004941, #00fe00);
    background: -webkit-linear-gradient(to right, #004941, #00fe00);
    background: linear-gradient(to right, #004941, #00fe00);
  }

</style>
