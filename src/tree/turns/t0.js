import childs from './turn01bis'

export default {
  id: 't0',
  choices: [
    {
      id: 'c0',
      points: {
        food: {value: 1, turns: [-1, -1, 0, 0]},
        water: {value: 6, turns: [-1, 0, 0, 0]},
        waste: {value: 0, turns: [1, 1, 0, 0]},
        energy: {value: 0, turns: [1, 0, 0, 0]}
      }
    },
    {
      id: 'c1',
      points: {
        food: {value: 1, turns: [0, 0, 0, -0.5]},
        water: {value: 1, turns: [0, 0, 0, -0.5]},
        waste: {value: 3, turns: [1, 1, 1, 1]},
        energy: {value: 2, turns: [0.5, 0.5, 0.5, 0.5]}
      }
    },
    {
      id: 'c2',
      points: {
        food: {value: -2, turns: [0, 0.5, 0.5, 1]},
        water: {value: -3, turns: [0, 0.5, 1, 2]},
        waste: {value: 2, turns: [1, 0.5, 0, 0]},
        energy: {value: 0, turns: [0, 0, 0, 0]}
      }
    }
  ],
  childs: childs
}
