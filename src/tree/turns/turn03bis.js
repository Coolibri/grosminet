import childs1 from './turn04'
import childs2 from './turn04bis'

export default
[
  {
    text: 'Pour la plus part d\'entre vous, vous avez choisi de construire un parc éolien ! Regardons les résultats sur votre planète ! Le problème d\'énergie n\'est pas encore résolu, mais on commence à apercevoir les premiers éffets du parc éolien. Il y a deux tours, vous aviez décidé d\'enfouir les déchets, vous vous en souvenez ? Il semblerait que certain animaux on bu de l\'eau empoisonné ! De plus, plusieurs champs ne produisent plus car l\'eau a empoisonné la terre en partie. Il manque alors de nourritures dans votre ville ! Que souhaitez vous faire? ',
    choices:
    [
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
        label: 'élevage de bétail intensif',
        value: (nbP) => {
          if (nbP === 0) {
            return 'personne n\'a choisi l\'élevage de bétail intensif !'
          }
          return nbP + ' a choisi d\'élever intesivement des poules !'
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
    text: 'Pour la plus part d\'entre vous, vous avez choisi d\'intensifier la production des centrales nucléaires! Regardons les résultats sur votre planète ! L\'énergie est revenu partout dans toute la ville ! Vous décidez donc de remettre la production d\'éléctricité à un niveau normal, ce qui vous prendra quelques tours. Cependant, la production a rejeté beaucoup de CO2 dans l\'air. De plus, faites attentions, le nombre de déchets nuélaires semblent augmenter...  De plus, la désintoxication des nappes phréatiques suivent leur cours, et l\'eau comment à redevenir potable! Que souhaitez vous faire? ',
    choices:
    [
      {
        label: 'Rendre les transports en commun gratuit.',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne ne décide de rendre les transports en commum gratuit.'
          } else {
            return 'Pour ' + nbP + ' pays, les transports en commun deviennent gratuit pendant quelques temps ! '
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
            return 'Pour ' + nbP + ' pays, on investir dans les voitures électriques! '
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
        label: 's\'occuper des déchets nucléaires',
        value: (nbP) => {
          if (nbP === 0) {
            return 'Personne n\'investit dans les voitures électriques.'
          } else {
            return 'Pour ' + nbP + ' pays, on investir dans les voitures électriques! '
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
    text: 'Pour la plus part d\'entre vous, vous avez choisi de ne rien faire ! La désintoxication des nappes phréatiques vont dans le bon sens : l\'eau commence à redevenir potable dans certaines régions. Cependant, avant d\'être completement potable, il semblerait que certain animaux, et notemment le bétail, en ont bu et ont alors été désinfecté. De plus, plusieurs champs ne produisent plus car l\'eau a empoisonné la terre en partie. Il semblerait qu\'il n\'y ait pas assez de nourriture dans votre pays. Que souhaitez vous faire? ',
    choices:
    [
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
        label: 'élevage de bétail intensif',
        value: (nbP) => {
          if (nbP === 0) {
            return 'personne n\'a choisi l\'élevage de bétail intensif !'
          }
          return nbP + ' a choisi d\'élever intesivement des poules !'
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
  }
]
