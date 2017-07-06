export default
[
  {
    text: 'Pour la plupart d\'entre vous, vous avez choisi d\'investir dans les OGM ! Regardons les résultats sur votre planète ! Des plantes résistant à l\'empoisonement ont pu pousser dans vos champs ! La quantité de nourriture n\'est plus un problème, il semblerait même que la production ait dépassé la consommation ! Votre quantité de production est donc revue à la baisse. Ensuite, la plantation d\'OGM a créé différents problèmes : premièrement, à cause d\'une surproduction, il y a donc trop de déchets alimentaires dans votre pays. Ensuite, il semblerait les OMG ont eu un effet nocif sur les micro-organismes du sol. Les plantes traditionnelles ont plus de mal à se développer à présent. De plus, les chercheurs ne savent pas encore les effets à long terme des OGM sur l\'Homme... Restez vigilants. Que souhaitez-vous faire? ',
    choices: [
      {
        label: ' Incinérer les déchets',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne ne décide d\'incinérer les décherts ?'
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
        label: 'Prioriser le traitement du sol',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne ne s\'occupe du sol ? '
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
        label: 'Prioriser le traitement du sol',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne ne s\'occupe du sol ? '
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
    ],
    childs: null
  },
  {
    text: 'Pour la plupart d\'entre vous, vous avez choisi d\'utiliser des engrais! Regardons les résultats sur votre planète ! L\'utilisation d\'engrais a permis d\'augmenter la production de légumes, les habitants peuvent alors remanger à leur faim ! Cependant, l\'utilisation d\'engrais a fait que certains produits chimiques ont infiltré la terre, et par conséquent, amoindri la quantité de micro-organismes dans le sol pourtant essentiels à la croissance des plantes. Les plantes deviennent alors dépendantes des engrais. En plus de créer une dépendance, il semblerait que certains de vos engrais contenaient de l\'ammoniac ! Les effets de dénitrification ont alors généré des gazs à effet de serre. Que souhaitez-vous faire? ',
    choices: [
      {
        label: 'Traiter le sol',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne ne s\'occupe du sol ? '
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
        label: 'Planter de nouveaux arbres ',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne ne plante d\'arbres.'
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
      },
      {
        label: 'Planter de nouveaux arbres ',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne ne plante d\'arbres.'
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
    ],
    childs: null
  },
  {
    text: 'Pour la plupart d\'entre vous, vous avez choisi de faire de l\'élevage intensif ! Le problème de nourriture n\'est pas totalement réglé mais ça va dans le bon sens. Cependant, il semblerait que l\'élevage intensif rejette beaucoup de gaz à effets de serre dans l\'air. Que souhaitez-vous faire? ',
    choices: [
      {
        label: 'Rien',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne ne fait rien ?'
          } else {
            return nbP + ' pays décident de ne rien faire ! '
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
        label: 'Planter des arbres',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne ne replante d\'arbre. '
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
        label: 'Transport gratuits',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne ne rend les transports en commun gratuits !'
          }
          return nbP + ' pays rendent leur transports gratuits 2 semaines dans l\'année !'
        },
        points: {
          food: {value: 0, turns: [0, 0, 0, 0]},
          water: {value: -1, turns: [0.5, 0.5, 0.5, 0.5]},
          waste: {value: 0, turns: [0, 0, 0, 0]},
          energy: {value: 0, turns: [0, 0, 0, 0]}
        }
      }
    ],
    childs: null
  }
]
