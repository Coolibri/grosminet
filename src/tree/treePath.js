import childs from './turns/turn01bis'

export default {
  text: 'Vous commencez chacun à produire trop de déchets. Comment allez-vous gérer leur évacuation des villes ?',
  choices: [
    {
      label: 'Décharges en plein air',
      value: (nbP) => {
        if (nbP === 0) {
          return 'Personne ne choisit les décharges en plein air.'
        } else {
          return ' ' + nbP + ' pays choisissent les décharges en plein air ! '
        }
      },
      points: {
        food: {value: 1, turns: [0, 0, -0.5, -1]},
        water: {value: 1, turns: [0, 0, -0.5, 1]},
        waste: {value: 2, turns: [0.5, 0.5, 0, 0]},
        energy: {value: 0, turns: [1, 0, 0, 0]}
      }
    },
    {
      label: 'Incinération des déchets',
      value: (nbP) => {
        if (nbP === 0) {
          return 'Personne ne choisit l\'incinération des déchets. '
        }
        return 'Des usines d\'incinération sont construites dans '+ nbP + ' pays. Elles permettent de plus de produire de l\'énergie, mais vont doucement polluer l\'air.  '
      },
      points: {
        food: {value: 1, turns: [0, 0, 0, -0.5]},
        water: {value: 1, turns: [0, 0, 0, -0.5]},
        waste: {value: 3, turns: [1, 1, 1, 1]},
        energy: {value: 2, turns: [0.5, 0.5, 0.5, 0.5]}
      }
    },
    {
      label: 'Enfouissemment des déchets',
      value: (nbP) => {
        if (!nbP) {
          return 'Personne ne choisir d\'enterrer les déchets'
        }
        return ' '+ nbP + ' joueurs décident d\'enterrer les déchets. '
      },
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