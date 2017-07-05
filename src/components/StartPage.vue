<template>
  <div class="start-page">
    <h1>Coolibri - prototype 1.9</h1>
    <form
      v-if="players.length < 4"
      v-on:submit.prevent="true;">
      <input
        type="text"
        v-model="playerName"
        :placeholder="$t('startpage.placeholder')"
        @keyup.enter="addPlayer"/>
      <button v-on:click="addPlayer()">{{ $t('startpage.buttons.add') }}</button>
    </form>
    <hr/>
    <ul>
      <li
        v-for="player in players"
        :key="player.name">
        {{ player.name }}
      </li>
    </ul>
    <button class="btn btn-lg btn-primary" id="start-game-btn" v-on:click="enterTheGame()">
      {{ $t('startpage.buttons.start') }}
    </button>

    <p>Design for chrome</p>
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
        if (this.players.length !== 0) {
          DataPasser.setData(this.players)
          this.$router.push({
            path: 'game'
          })
        }
      }
    }
  }
</script>

<style scoped>

  .start-page {
    background: #000033;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }

  .start-page ul {
    margin: 5px;
    padding-left: 0;
  }

  .start-page ul li {
    list-style: none;
    padding: 5px;
    margin: 0;
    color: white;
  }

  .btn-primary {
    font-size: 2em;
    padding: 5px;
  }

  form input {
    background: transparent;
    border: 1px solid white;
    color: white;
    padding: 7px;
  }

  form input::placeholder {
    color: darkgrey;
  }

  form button {
    background: transparent;
    border: none;
    color: white;
  }

  form button::before {
    content: '+ ';
    color: white;
  }

  h1 {
    color: white;
    font-weight: 400;
  }

  hr {
    width: 80%;
    border-color: darkgrey;
  }

  #start-game-btn {
    background: transparent;
    color: white;
    border: none;
  }

  #start-game-btn::after {
    content: ' >';
    color: white;
  }
</style>
