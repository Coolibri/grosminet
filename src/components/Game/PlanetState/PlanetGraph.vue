<template>
  <svg id="earth" v-bind:style="{ width: diameter + 'px', height: diameter + 'px' }">
    <clipPath id="cut-circle">
      <circle
        :cx="diameter/2"
        :cy="diameter/2"
        :r="diameter/2"
        stroke="black"
        fill="black"
        stroke-width="5"/>
    </clipPath>

    <defs>
      <radialGradient id="RadialGradientFood" cx="1" cy="1" :r="rstate.food">
        <stop offset="0%" stop-color="#00fe00"/>
        <stop offset="100%" stop-color="#004941"/>
      </radialGradient>
      <radialGradient id="RadialGradientWaste" cx="0" cy="0" :r="rstate.waste">
        <stop offset="0%" stop-color="#c996fe"/>
        <stop offset="100%" stop-color="#4a204d"/>
      </radialGradient>
      <radialGradient id="RadialGradientEnergy" cx="0" cy="1" :r="rstate.energy">
        <stop offset="0%" stop-color="#fffe00"/>
        <stop offset="100%" stop-color="#8c5400"/>
      </radialGradient>
      <radialGradient id="RadialGradientWater" cx="1" cy="0" :r="rstate.water">
        <stop offset="0%" stop-color="#00fefe"/>
        <stop offset="100%" stop-color="#1b1464"/>
      </radialGradient>
    </defs>

    <rect
      :x="diameter/2" :y="diameter/2"
      :width="diameter/2" :height="diameter/2"
      fill="url(#RadialGradientWaste)"
      clip-path="url(#cut-circle)"/>
    <rect
      :x="0" :y="diameter/2"
      :width="diameter/2" :height="diameter/2"
      fill="url(#RadialGradientWater)"
      clip-path="url(#cut-circle)"/>
    <rect
      :x="diameter/2" :y="0"
      :width="diameter/2" :height="diameter/2"
      fill="url(#RadialGradientEnergy)"
      clip-path="url(#cut-circle)"/>
    <rect
      :x="0" :y="0"
      :width="diameter/2" :height="diameter/2"
      fill="url(#RadialGradientFood)"
      clip-path="url(#cut-circle)"/>

    <circle
      :cx="diameter/2" :cy="diameter/2"
      :r="diameter/2"
      stroke="black"
      fill="transparent"
      stroke-width="2"/>
  </svg>
</template>

<script>
  export default {
    name: 'planet-graph',
    props: ['state'],
    data () {
      return {
        diameter: 400,
        rstate: {
          waste: 0,
          energy: 0,
          food: 0,
          water: 0
        }
      }
    },
    watch: {
      state: function (val) {
        this.calcRState(val)
      }
    },
    created: function () {
      this.calcRState(this.state)
    },
    methods: {
      calcRState: function (state) {
        const GRAD_MAX = 4
        this.rstate.food = (state.food / 100) * GRAD_MAX
        this.rstate.water = (state.water / 100) * GRAD_MAX
        this.rstate.waste = (state.waste / 100) * GRAD_MAX
        this.rstate.energy = (state.energy / 100) * GRAD_MAX
        console.log(this.rstate)
      }
    }
  }
</script>

<style scoped>

</style>
