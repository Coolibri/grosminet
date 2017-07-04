<template>
<span class="range" ref="playerlife">
  <span data-color="#00cc66"></span>
  <span data-color="#00cc66"></span>
  <span data-color="#00cc66"></span>

  <span data-color="#ffed00"></span>
  <span data-color="#ffed00"></span>
  <span data-color="#ffed00"></span>

  <span data-color="#f39200"></span>
  <span data-color="#f39200"></span>
  <span data-color="#f39200"></span>

  <span data-color="#e30613"></span>
  <span data-color="#e30613"></span>
  <span data-color="#e30613"></span>
</span>
</template>

<script>
  export default {
    name: 'player-life',
    props: ['val'],
    mounted: function () {
      const $spans = this.$refs.playerlife.querySelectorAll('span')
      for (let i = 11; i >= 0; i--) {
        if (i >= 6) {
          $spans[i].style.background = $spans[i].dataset.color
        } else {
          $spans[i].style.background = 'transparent'
        }
      }
    },
    watch: {
      val: function (value) {
        console.log(value)
        value = value < 0 ? 0 : value
        value = value > 100 ? 100 : value

        const barValue = Math.floor(value / 100 * 12) > 12 ? 12 : Math.floor(value / 100 * 12)

        const $spans = this.$refs.playerlife.querySelectorAll('span')

        console.log(value)
        for (let i = 11; i >= 0; i--) {
          if (i >= 12 - barValue) {
            $spans[i].style.background = $spans[i].dataset.color
          } else {
            $spans[i].style.background = '#00001c'
          }
        }
      }
    }
  }
</script>

<style scoped>
  .range {
    display: flex;
    flex-direction: column;
  }

  .range span {
    border: 1px solid rgba(60, 60, 60, 0.5);
    width: 15px;
    height: 12px;
  }

  .range span:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .range span:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

</style>
