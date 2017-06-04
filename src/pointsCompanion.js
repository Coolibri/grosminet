export default {
  /**
   * calc the global poucentage of planet state according 4 lasts choices.
   *
   * @param globalHistory
   * @return int in pourcentage
   */
  calcGlobal: function (globalHistory) {

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
   * @param globalHistory
   * @return state of four elements
   */
  calcGlobalState: function (globalHistory) {

  }
}
