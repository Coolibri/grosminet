export default
[
  {
    text: 'Pour la plus part d\'entre vous, vous avez choisi de rendre les transports communs ! Bonne nouvelle : les gens utilisent moins leur voiture, et donc il y a moins de CO2 dégagé. Que souhaitez vous faire? ',
    choices:
    [
      {
        label: ' Incinérer les déchets',
        value: (nbP) => {
          if (nbP === 0) {
            return 'personnes ne décide d\'incinérer les décherts ?'
          } else {
            return 'Dans ' + nbP + ' pays, on brûle les déchets ! '
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
        label: 'Prioritiser le traitement du sol',
        value: (nbP) => {
          if (nbP === 0) {
            return 'personne ne s\'occupe du sol ? '
          }
          return 'Traitons le sol dans ' + nbP + ' pays. '
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
    text: 'Pour la plus part d\'entre vous, vous avez choisi d\'inciter vos habitants à acheter des voitures électriques. Que souhaitez vous faire? ',
    choices:
    [
      {
        label: 'Traiter le sol',
        value: (nbP) => {
          if (nbP === 0) {
            return 'personne ne s\'occupe du sol ? '
          }
          return 'Traitons le sol dans ' + nbP + ' pays. '
        },
        points: {
          food: {value: 0, turns: [0, 0, 0, 0]},
          water: {value: 1, turns: [1.5, 2, 3, 1]},
          waste: {value: -1, turns: [1, 1, 1, 1]},
          energy: {value: -1, turns: [2, 1, 0.5, -2]}
        }
      },
      {
        label: 'Boiser de nouveaux arbres ',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne ne plantes d\'arbres.'
          } else {
            return 'Pour ' + nbP + ' pays, on plante des arbres ! '
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
    text: 'Pour la plus part d\'entre vous, vous avez choisi de planter des arbres pour aspirer le CO2. Que souhaitez vous faire? ',
    choices:
    [
      {
        label: 'Rien',
        value: (nbP) => {
          if (nbP === 0) {
            return 'personnes ne fait rien ?'
          } else {
            return nbP + ' pays décide de ne rien faire ! '
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
        label: 'boiser des arbres',
        value: (nbP) => {
          if (nbP === 0) {
            return 'personne ne replante d\'arbre. '
          }
          return nbP + ' pays plantent de nouveaux arbres. '
        },
        points: {
          food: {value: 0, turns: [0, 0, 0, 0]},
          water: {value: 1, turns: [0.5, 1, 2, 4]},
          waste: {value: 0, turns: [0, 0, 0, 0]},
          energy: {value: 0, turns: [0, 0, 0, 0]}
        }
      },
      {
        label: 'Transport gratuit',
        value: (nbP) => {
          if (nbP === 0) {
            return 'personne ne rend les transports en commun gratuit!'
          }
          return nbP + ' pays rendent leur transports gratuit 2 semaines dans l\'année !'
        },
        points: {
          food: {value: 0, turns: [0, 0, 0, 0]},
          water: {value: -1, turns: [0.5, 0.5, 0.5, 0.5]},
          waste: {value: 0, turns: [0, 0, 0, 0]},
          energy: {value: 0, turns: [0, 0, 0, 0]}
        }
      }
    ]
  }
]
