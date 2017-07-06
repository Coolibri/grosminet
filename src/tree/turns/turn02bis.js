import childs1 from './turn04'
import childs2 from './turn04bis'
import childs3 from './turn03bis2'

export default
[
  {
    text: 'Pour la plupart d\'entre vous, vous avez choisi de construire un parc éolien ! Regardons les résultats sur votre planète ! Le problème d\'énergie n\'est pas encore résolu, mais on commence à apercevoir les premiers effets du parc éolien. Il y a deux tours, vous aviez décidé d\'enfouir les déchets, vous vous en souvenez ? Il semblerait que certain animaux on bu de l\'eau contaminée ! De plus, plusieurs champs ne produisent plus car l\'eau a empoisonné la terre en partie. Il manque alors de nourriture dans votre ville ! Que souhaitez-vous faire? ',
    choices: [
      {
        label: 'OGM',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne n\'aime les OGM ?'
          } else {
            return 'Bien, pour ' + nbP + ' pays ce sera OGM ! '
          }
        },
        points: {
          food: {value: 4, turns: [1, 0.5, 0, -0.5]},
          water: {value: -1, turns: [1, 1.5, 2, 3]},
          waste: {value: -1, turns: [2, 1, 0.5, 0]},
          energy: {value: -2, turns: [1, 0, 0, 0]}
        }
      },
      {
        label: 'Engrais',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne n\'a choisi les engrais comme solutions '
          }
          return 'Arrosons les plantations de ' + nbP + ' pays d\'engrais. '
        },
        points: {
          food: {value: 4, turns: [1, 1, 0.75, 0.5]},
          water: {value: -5, turns: [0.5, 1, 0.25, 0]},
          waste: {value: -2, turns: [0, 0, 0.5, 1]},
          energy: {value: 0, turns: [1, 0, 0, 0]}
        }
      },
      {
        label: 'Elevage de bétail intensif',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne n\'a choisi l\'élevage de bétail intensif !'
          }
          return nbP + ' ont choisi d\'élever intensivement des poules !'
        },
        points: {
          food: {value: 4, turns: [1, 0.5, 0, -0.5]},
          water: {value: 0, turns: [0, 0, 0, 0]},
          waste: {value: 0, turns: [0, 0, 0, 0]},
          energy: {value: -2, turns: [1, 0, 0, 0]}
        }
      }
    ],
    childs: childs1
  },
  {
    text: 'Pour la plupart d\'entre vous, vous avez choisi d\'intensifier la production des centrales nucléaires! Regardons les résultats sur votre planète ! L\'énergie est revenue partout dans la ville ! Vous décidez donc de remettre la production d\'éléctricité à un niveau normal, ce qui vous prendra quelques tours. Cependant, la production a rejeté beaucoup de CO2 dans l\'air. De plus, faites attention, le nombre de déchets nucléaires semble augmenter... ! Que souhaitez-vous faire? ',
    choices: [
      {
        label: 'Rendre les transports en commun gratuits.',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne ne décide de rendre les transports en commun gratuits.'
          } else {
            return 'Pour ' + nbP + ' pays, les transports en commun deviennent gratuits pendant quelques temps ! '
          }
        },
        points: {
          food: {value: 0, turns: [0, 0, 0, 0]},
          water: {value: -1, turns: [0.5, 0.5, 0.5, 0.5]},
          waste: {value: 0, turns: [0, 0, 0, 0]},
          energy: {value: 0, turns: [0, 0, 0, 0]}
        }
      },
      {
        label: 'Inciter les habitants à acheter des voitures électriques',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne n\'investit dans les voitures électriques.'
          } else {
            return 'Pour ' + nbP + ' pays, on investit dans les voitures électriques! '
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
        label: 'S\'occuper des déchets nucléaires',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne n\'investit dans les voitures électriques.'
          } else {
            return 'Pour ' + nbP + ' pays, on investit dans les voitures électriques! '
          }
        },
        points: {
          food: {value: 0, turns: [0, 0, 0, 0]},
          water: {value: 0, turns: [0, 0, 0, 0]},
          waste: {value: 0, turns: [0, 0, 0, 0]},
          energy: {value: 1, turns: [0.5, 1, 2, 0]}
        }
      }
    ],
    childs: childs2
  },
  {
    text: 'Pour la plupart d\'entre vous, vous avez choisi les matières fossiles! Regardons les résultats sur votre planète ! Vous avez ainsi assez d\'énergie pour tous les habitants de votre pays. Cependant, l\'utilisation des matières fossiles dégagent beaucoup de gaz à effet de serre. Que souhaitez-vous faire? ',
    choices: [
      {
        label: 'Rendre les transports en commun gratuits.',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne ne décide de rendre les transports en commun gratuits.'
          } else {
            return 'Pour ' + nbP + ' pays, les transports en commun deviennent gratuits pendant quelques temps ! '
          }
        },
        points: {
          food: {value: 0, turns: [0, 0, 0, 0]},
          water: {value: -1, turns: [0.5, 0.5, 0.5, 0.5]},
          waste: {value: 0, turns: [0, 0, 0, 0]},
          energy: {value: 0, turns: [0, 0, 0, 0]}
        }
      },
      {
        label: 'Inciter les habitants à acheter des voitures électriques',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne n\'investit dans les voitures électriques.'
          } else {
            return 'Pour ' + nbP + ' pays, on investit dans les voitures électriques! '
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
        label: 'Boiser des arbres',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne n\'investit dans les voitures électriques.'
          } else {
            return 'Pour ' + nbP + ' pays, on investit dans les voitures électriques! '
          }
        },
        points: {
          food: {value: 0, turns: [0, 0, 0, 0]},
          water: {value: 0, turns: [0, 0, 0, 0]},
          waste: {value: 0, turns: [0, 0, 0, 0]},
          energy: {value: 1, turns: [0.5, 1, 2, 0]}
        }
      }
    ],
    childs: childs3
  }
]
