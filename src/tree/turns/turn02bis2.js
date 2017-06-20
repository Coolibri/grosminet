export default
[
  {
    text: 'Pour la plupart d\'entre vous, vous avez choisi de planter des arbres pour aspirer le CO2! Que souhaitez-vous faire? ',
    choices: [
      {
        label: ' ',
        value: (nbP) => {
          if (nbP === 0) {
            return ' '
          } else {
            return '  ' + nbP + '   '
          }
        },
        points: {
          food: {value: 0, turns: [0, 0, 0, 0]},
          water: {value: 0, turns: [0, 0, 0, -0.5]},
          waste: {value: 0, turns: [1, 1, 1, 1]},
          energy: {value: 0, turns: [0.5, 0.5, 0.5, 0.5]}
        }
      },
      {
        label: ' ',
        value: (nbP) => {
          if (nbP === 0) {
            return '  '
          }
          return '  ' + nbP + '   '
        },
        points: {
          food: {value: 0, turns: [0, 0, 0, 0]},
          water: {value: 0, turns: [1.5, 2, 3, 1]},
          waste: {value: 0, turns: [1, 1, 1, 1]},
          energy: {value: 0, turns: [2, 1, 0.5, -2]}
        }
      },
      {
        label: ' ',
        value: (nbP) => {
          if (nbP === 0) {
            return '  '
          }
          return '  ' + nbP + '   '
        },
        points: {
          food: {value: 0, turns: [0, 0, 0, 0]},
          water: {value: 0, turns: [1.5, 2, 3, 1]},
          waste: {value: 0, turns: [1, 1, 1, 1]},
          energy: {value: 0, turns: [2, 1, 0.5, -2]}
        }
      }
    ],
    childs: null
  },
  {
    text: 'Pour la plupart d\'entre vous, vous avez choisi de traiter les eaux souterraines ! Que souhaitez vous faire? ',
    choices: [
      {
        label: ' ',
        value: (nbP) => {
          if (nbP === 0) {
            return ' '
          }
          return ' ' + nbP + ' '
        },
        points: {
          food: {value: 0, turns: [0, 0, 0, 0]},
          water: {value: 0, turns: [1.5, 2, 3, 1]},
          waste: {value: 0, turns: [1, 1, 1, 1]},
          energy: {value: 0, turns: [2, 1, 0.5, -2]}
        }
      },
      {
        label: ' ',
        value: (nbP) => {
          if (nbP === 0) {
            return ' '
          } else {
            return ' ' + nbP + ' '
          }
        },
        points: {
          food: {value: 0, turns: [0, 0, 0, 0]},
          water: {value: 0, turns: [0.5, 1, 2, 4]},
          waste: {value: 0, turns: [0, 0, 0, 0]},
          energy: {value: 0, turns: [0, 0, 0, 0]}
        }
      },
      {
        label: ' ',
        value: (nbP) => {
          if (nbP === 0) {
            return ' '
          } else {
            return ' ' + nbP + ' '
          }
        },
        points: {
          food: {value: 0, turns: [0, 0, 0, 0]},
          water: {value: 0, turns: [0.5, 1, 2, 4]},
          waste: {value: 0, turns: [0, 0, 0, 0]},
          energy: {value: 0, turns: [0, 0, 0, 0]}
        }
      }
    ],
    childs: null
  },
  {
    text: 'Pour la plupart d\'entre vous, vous avez choisi de ne rien faire ! L\'eau polluée attaque votre nourriture, que faire ?',
    choices: [
      {
        label: 'Faire des OGMS',
        value: (nbP) => {
          if (nbP === 0) {
            return ' Personne ne veux manger d\'OGM ? '
          } else {
            return nbP + ' de pays passent aux OGM ! '
          }
        },
        points: {
          food: {value: 0, turns: [1, 1, 1, 1]},
          water: {value: 0, turns: [1, 1, 1, 1]},
          waste: {value: 0, turns: [0, 0, 0.5, 1]},
          energy: {value: 0, turns: [0.5, 0.5, 0.5, 0.5]}
        }
      },
      {
        label: ' ',
        value: (nbP) => {
          if (nbP === 0) {
            return ' '
          }
          return nbP + ' '
        },
        points: {
          food: {value: 0, turns: [0, 0, 0, 0]},
          water: {value: 0, turns: [0.5, 1, 2, 4]},
          waste: {value: 0, turns: [0, 0, 0, 0]},
          energy: {value: 0, turns: [0, 0, 0, 0]}
        }
      },
      {
        label: ' ',
        value: (nbP) => {
          if (nbP === 0) {
            return ' '
          }
          return nbP + ' '
        },
        points: {
          food: {value: 0, turns: [0, 0, 0, 0]},
          water: {value: 0, turns: [0.5, 0.5, 0.5, 0.5]},
          waste: {value: 0, turns: [0, 0, 0, 0]},
          energy: {value: 0, turns: [0, 0, 0, 0]}
        }
      }
    ],
    childs: null
  }
]
