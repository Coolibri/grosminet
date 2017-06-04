<template>
  <div class="start-page">
    <form>
      <input
        type="text"
        v-model="playerName"
        placeholder="nom du nouveau joueur"
        @keyup.enter="addPlayer"/>
      <div class="btn btn-primary" v-on:click="addPlayer()">ajouter le joueur</div>
    </form>
    <ul>
      <li
        v-for="player in players"
        :key="player.name">
        {{ player.name }}
      </li>
    </ul>
    <button class="btn btn-lg btn-primary" id="start-game-btn" v-on:click="enterTheGame()"></button>
  </div>
</template>

<script>
  import DataPasser from '@/dataPasser'
  export default {
    name: 'start-page',
    data: function () {
      return {
        players: [],
        playerName: ''
      }
    },
    methods: {
      addPlayer: function () {
        if (this.playerName.trim()) {
          this.players.push({name: this.playerName.trim()})
          this.playerName = ''
        }
      },
      enterTheGame: function () {
        console.log('from start page', this.players)
        DataPasser.setData(this.players)
        this.$router.push({
          path: 'game'
        })
      }
    }
  }
</script>

<style scoped>

</style>
