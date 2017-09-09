<template>
  <transition name="slide-fade">
    <div>
      <div><a href="#" v-on:click="$router.go(-1)">back</a></div>
      <div class="eccolo">Eccolo !</div>
    </div>
  </transition>
</template>

<script>
  export default {}
</script>

<style>
</style>
