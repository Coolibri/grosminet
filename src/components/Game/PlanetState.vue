<template>
  <div class="state">
    <div class="state-body">
      <div>
        <state-left :global="true" :state="state">
        </state-left>
      </div>
      <div>
        <planet-graph :state="state"></planet-graph>
      </div>
      <div>
        <state-right :global="true" :state="state"></state-right>
      </div>
    </div>
    <div class="state-range">
      <game-range :value="global"></game-range>
    </div>
  </div>
</template>

<script>
  import StateRight from './PlanetState/StateRight'
  import StateLeft from './PlanetState/StateLeft'
  import PlanetGraph from './PlanetState/PlanetGraph'
  import GameRange from './PlanetState/RangeComp'
  export default {
    components: {
      GameRange,
      PlanetGraph,
      StateRight,
      StateLeft
    },
    name: 'planet-state',
    props: ['state', 'global'],
    data: function () {
      return {}
    }
  }
</script>

<style scoped>

  .state{
    padding:20px;
  }

  .state-body {
    display: flex;
    justify-content: space-around;
  }

  .state-body div {
    flex-grow: 1;
  }

  input[type=range] {
    -webkit-appearance: none;
    margin: 18px 0;
    width: 80%;
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    background: -moz-linear-gradient(to right, red, lawngreen);
    background: -webkit-linear-gradient(to right, red, lawngreen);
    background: linear-gradient(to right, red, lawngreen);
  }

  .state-range {
    width:80%;
    margin:5px auto;
  }

</style>
