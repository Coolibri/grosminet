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
