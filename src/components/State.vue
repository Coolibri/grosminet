<template>
  <div class="sensors" :class="{ global: global }">
    <div>
      <label>Water</label><input type="range" :value="state.water" disabled/>
    </div>
    <div>
      <label>Waste</label><input type="range" :value="state.waste" disabled/>
    </div>
    <div>
      <label>Energy</label><input type="range" :value="state.energy" disabled/>
    </div>
    <div>
      <label>Food</label><input type="range" :value="state.food" disabled/>
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
    width: 20%;
    display: inline-block;
  }

  .sensors div input {
    width: 80%;
    display: inline-block;
  }
</style>
