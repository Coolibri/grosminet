export default 
[
  {
    text: 'Pour la plus part d\'entre vous, vous avez choisi de planter des arbres pour aspirer le CO2! Que souhaitez vous faire? ',
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
        water: {value: 1, turns: [0, 0, 0, -0.5]},
        waste: {value: 3, turns: [1, 1, 1, 1]},
        energy: {value: 2, turns: [0.5, 0.5, 0.5, 0.5]}
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
        water: {value: 1, turns: [1.5, 2, 3, 1]},
        waste: {value: -1, turns: [1, 1, 1, 1]},
        energy: {value: -1, turns: [2, 1, 0.5, -2]}
      }
    }
    ]
  },
  {
    text: 'Pour la plus part d\'entre vous, vous avez choisi de traiter les eaux souterraines ! Que souhaitez vous faire? ',
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
        water: {value: 1, turns: [1.5, 2, 3, 1]},
        waste: {value: -1, turns: [1, 1, 1, 1]},
        energy: {value: -1, turns: [2, 1, 0.5, -2]}
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
        water: {value: 1, turns: [0.5, 1, 2, 4]},
        waste: {value: 0, turns: [0, 0, 0, 0]},
        energy: {value: 0, turns: [0, 0, 0, 0]}
      }
    }
    ]
  },
  {
    text: 'Pour la plus part d\'entre vous, vous avez choisi de ne rien faire !  Que souhaitez vous faire? ',
    choices: [
      {
      label: ' ',
      value: (nbP) => {
        if (nbP === 0) {
          return ' '
        } else {
          return nbP + ' '
        }
      },
      points: {
        food: {value: 2, turns: [1, 1, 1, 1]},
        water: {value: -1, turns: [1, 1, 1, 1]},
        waste: {value: 0, turns: [0, 0, 0, 0]},
        energy: {value: -1, turns: [0.5, 0.5, 0.5, 0.5]}
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
        water: {value: 1, turns: [0.5, 1, 2, 4]},
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
        water: {value: -1, turns: [0.5, 0.5, 0.5, 0.5]},
        waste: {value: 0, turns: [0, 0, 0, 0]},
        energy: {value: 0, turns: [0, 0, 0, 0]}
      }
      }
    ]
  },
]