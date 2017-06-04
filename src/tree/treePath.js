import childs from './turns/turn01'

export default {
  text: 'Bienvenu sur votre planète, pb de surpopulation et donc de famine, que faire ?',
  choices: [
    {
      label: 'OGM',
      value: (nbP) => {
        if (nbP === 0) {
          return 'personnes n\'aime les OGM ?'
        } else {
          return 'well, pour ' + nbP + ' pays ce sera OGM ! '
        }
      },
      points: {
        food: {value: 4, turns: [1, 0.5, 0, -0.5]},
        water: {value: 0, turns: [0, 0, 0, 0]},
        waste: {value: 0, turns: [0, 0, 0, 0]},
        energy: {value: -2, turns: [1, 0, 0, 0]}
      }
    },
    {
      label: 'engrais',
      value: (nbP) => {
        if (nbP === 0) {
          return 'personne n\'a choisi les engrais comme solutions '
        }
        return 'arosons les plentations de ' + nbP + ' pays d\'engrais. '
      },
      points: {
        food: {value: 4, turns: [1, 1, 0.75, 0.5]},
        water: {value: -5, turns: [0.5, 1, 0.25, 0]},
        waste: {value: -2, turns: [0, 0, 0.5, 1]},
        energy: {value: 0, turns: [1, 0, 0, 0]}
      }
    },
    {
      label: 'test',
      value: (nbP) => {
        if (!nbP) {
          return 'personne ne peux test !'
        }
        return 'ceci est un test selon ' + nbP + ' de joueurs. '
      },
      points: {
        food: {value: 4, turns: [1, 0.5, 0, -0.5]},
        water: {value: 0, turns: [0, 0, 0, 0]},
        waste: {value: 0, turns: [0, 0, 0, 0]},
        energy: {value: -2, turns: [1, 0, 0, 0]}
      }
    }
  ],
  childs: childs
}
