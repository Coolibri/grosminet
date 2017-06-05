import TreeLoader from '@/tree/treeLoader'

export default {
  /**
   * calc the global poucentage of planet state according 4 lasts choices.
   *
   * @param nbPlayer.
   * @param currentGlobal.
   * @param globalHistory.
   * @return int in pourcentage.
   */
  calcGlobal: function (nbPlayer, currentGlobal, globalHistory) {
    let global = currentGlobal
    for (let i = 0; i < 4 && globalHistory.length - i !== 0; i++) {
      for (let j = 0; j < 3; j++) {
        global += parseInt((parseFloat(globalHistory[i].count[j])) * parseFloat(globalHistory[i].choices[j].points.food.value) * parseFloat(globalHistory[i].choices[j].points.food.turns[3 - i]))
      }
      for (let j = 0; j < 3; j++) {
        global += parseInt((parseFloat(globalHistory[i].count[j])) * parseFloat(globalHistory[i].choices[j].points.waste.value) * parseFloat(globalHistory[i].choices[j].points.waste.turns[3 - i]))
      }
      for (let j = 0; j < 3; j++) {
        global += parseInt((parseFloat(globalHistory[i].count[j])) * parseFloat(globalHistory[i].choices[j].points.water.value) * parseFloat(globalHistory[i].choices[j].points.water.turns[3 - i]))
      }
      for (let j = 0; j < 3; j++) {
        global += parseInt((parseFloat(globalHistory[i].count[j])) * parseFloat(globalHistory[i].choices[j].points.energy.value) * parseFloat(globalHistory[i].choices[j].points.energy.turns[3 - i]))
      }
    }

    return global
  },

  /**
   * compute the state of a country.
   *
   * @param currentState actual player state.
   * @param playerHistory.
   * @return state of four elements.
   */
  calcPlayerState: function (currentState, playerHistory) {
    const state = JSON.parse(JSON.stringify(currentState)) // hard clone
    for (let i = 0; i < 4 && playerHistory.length - i !== 0; i++) {
      state.food += parseInt(parseFloat(playerHistory[i].points.food.value) * parseFloat(playerHistory[i].points.food.turns[3 - i]))
      state.energy += parseInt(parseFloat(playerHistory[i].points.energy.value) * parseFloat(playerHistory[i].points.energy.turns[3 - i]))
      state.waste += parseInt(parseFloat(playerHistory[i].points.waste.value) * parseFloat(playerHistory[i].points.waste.turns[3 - i]))
      state.water += parseInt(parseFloat(playerHistory[i].points.water.value) * parseFloat(playerHistory[i].points.water.turns[3 - i]))
    }

    return state
  },

  /**
   * compute global state acccording to 4 lasts choices
   *
   * @param nbPlayer.
   * @param currentState.
   * @param globalHistory.
   * @return state of four elements
   */
  calcGlobalState: function (nbPlayer, currentState, globalHistory) {
    const state = JSON.parse(JSON.stringify(currentState)) // hard clone
    for (let i = 0; i < 4 && globalHistory.length - i !== 0; i++) {
      for (let j = 0; j < 3; j++) {
        state.food += parseInt((parseFloat(globalHistory[i].count[j])) * parseFloat(globalHistory[i].choices[j].points.food.value) * parseFloat(globalHistory[i].choices[j].points.food.turns[3 - i]))
      }
      for (let j = 0; j < 3; j++) {
        state.waste += parseInt((parseFloat(globalHistory[i].count[j])) * parseFloat(globalHistory[i].choices[j].points.waste.value) * parseFloat(globalHistory[i].choices[j].points.waste.turns[3 - i]))
      }
      for (let j = 0; j < 3; j++) {
        state.water += parseInt((parseFloat(globalHistory[i].count[j])) * parseFloat(globalHistory[i].choices[j].points.water.value) * parseFloat(globalHistory[i].choices[j].points.water.turns[3 - i]))
      }
      for (let j = 0; j < 3; j++) {
        state.energy += parseInt((parseFloat(globalHistory[i].count[j])) * parseFloat(globalHistory[i].choices[j].points.energy.value) * parseFloat(globalHistory[i].choices[j].points.energy.turns[3 - i]))
      }
    }

    return state
  },

  /**
   * check if it's the last leaf or if the planet live forever or die.
   *
   * @param global
   * @return boolean true if it's the end of the game.
   */
  isItTheEnd: function (global) {
    if (TreeLoader.getCurrentTurn().childs === null) {
      return true
    }

    return global < 5 || global > 95
  }
}
