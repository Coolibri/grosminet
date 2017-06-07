<template>
  <div id="messages-list">
    <p v-for="message in messages">
      {{ message.text }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'messages',
    props: ['messages'],
    method: {
      updated: function () {
        const container = this.$el.querySelector('#messages-list')
        container.scrollTop = container.scrollHeight
      }
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Puritan:400,700');

  #messages-list {
    padding: 10px;
  }

  p {
    text-align: justify;
    font-family: 'Puritan', sans-serif;
    font-weight: 700;
    font-size:1.05em;
  }
</style>
