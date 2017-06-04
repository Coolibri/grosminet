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
    <button class="btn btn-lg btn-primary" id="start-game-btn" v-on:click="enterTheGame()">Demarrer le jeu</button>
  </div>
</template>

<script>
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
        this.$router.push({
          path: 'game',
          params: {extPlayers: this.players}
        })
      }
    }
  }
</script>

<style scoped>

</style>
