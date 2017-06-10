export default
[
  {
    text: 'Pour la plus part d\'entre vous, vous avez choisi d\'investir dans les OGM ! Regardons les résultats sur votre planète ! Des plantes résistant à l\'empoisonement ont pu poussé dans vos champ ! La quantité de nourriture n\'est plus un problème, il semblerait même que la production ait dépassé la consommation ! Votre quantité de production est donc revu à la baisse. Ensuite, la plantation d\'OGM a crée différents problème : premièrement, à cause d\'une surproduction, il y a donc trop de déchets alimentaires dans votre pays. Ensuite, il semblerait les OMG ont eu un effet nocif sur les micro-organisme du sol. Les plantes traditionnelles ont plus de mal à se développer à présent. De plus, les chercheurs ne savent pas encore les effets à long terme des OGM sur l\'Homme... Restez vigilent. Que souhaitez vous faire? ',
    choices: [
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
    ],
    childs: null
  },
  {
    text: 'Pour la plus part d\'entre vous, vous avez choisi d\'utiliser des engrais! Regardons les résultats sur votre planète ! L\'utilisation d\'engrais a permis d\'augmenter la production de légumes, les habitants peuvent alors remanger à leur faim ! Cependant, l\'utilisation d\'engrais à fait que certain produits chimiques ont infiltré la terre, et par conséquent, amoindris la quantité de micro-organisme dans le sol pourtant essentiel à la croissance des plantes. Les plantes deviennet alors dépendant des engrais. En plus de crée une dépendance, il semblerait que certains de vos engrais contenait de l\'ammoniac ! Les effets de dénitrification ont alors générés des gazs à effets de serre. Que souhaitez vous faire? ',
    choices: [
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
    ],
    childs: null
  },
  {
    text: 'Pour la plus part d\'entre vous, vous avez choisi de faire de l\'élevage intensif ! Le problème de nourriture n\'est pas totalement réglé mais ça va dans le bon sens. Cependant, il semblerait que l\'élebage intensif rejette beaucoup de gaz à effets de serre dans l\'air. Que souhaitez vous faire? ',
    choices: [
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
    ],
    childs: null
  }
]
