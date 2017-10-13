<template>
  <div>
    <h1>Turn title</h1>
    <img src="empty" alt="turn image"/>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis quam vitae justo auctor, et elementum dui vulputate. Nam varius dui sed nunc egestas laoreet. Donec id nisi eget sapien vulputate finibus. Nunc dignissim vitae mi nec condimentum. Integer ligula odio, dictum a consectetur vitae, dictum eu tellus. Sed imperdiet elit vitae ultricies suscipit. Nam bibendum ornare neque. Cras aliquam elit metus, ac mollis est sagittis quis. Maecenas porta ex ac eros volutpat, vitae faucibus ex sollicitudin. Duis egestas purus in tristique interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    </p>
    <choices></choices>
  </div>
</template>

<script>
  import Choices from '&/GameMain/GamePlayView/Choices.vue'
  export default {
    name: 'cl-game-state',
    components: {
      'choices': Choices
    }
  }
</script>
