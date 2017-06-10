export default 
[
  {
    text: 'Pour la plus part d\'entre vous, vous avez choisi de distribuer des bouteilles d\'eau ! Regardons les résultats sur votre planète ! Le problème d\'eau est en parti résolu. Cependant, en utilisant distribuant des bouteilles d\'eau, vous avez augmenté significativement le nombre de déchets. Les éboueurs étant débordé, il vous faut une solution ! Que souhaitez vous faire? ',
    choices: [
      {
        label: 'Enfouir',
        value: (nbP) => {
        if (nbP === 0) {
          return 'Personne n\'enfouit les déchets?'
        } else {
          return 'Pour ' + nbP + ' pays, on enfouit les déchets sous terre ! '
        }
      },
      points: {
        food: {value: , turns: [1, 0.5, 0, -0.5]},
        water: {value: 1, turns: [2, 1, 0.5, 0]},
        waste: {value: 2, turns: [2, 1, 0.5, 0]},
        energy: {value: 0, turns: [0, 0, 0, 0]}
      }
    },
      {
        label: 'Bruler',
        value: (pName) => {
          return 'pour une bonne santée, ' + pName + 'choisis l\'eau et c\'est raisonnable'
        }
      },
      {
        label: 'Rien, les éboueurs finiront bien par y arriver tous seuls !',
        value: (pName) => { return pName + ' veux du sucre,plus de sucre ! ' }
      }
    ]
  },
  {
    text: 'Pour la plus part d\'entre vous, vous avez choisi de détourner un cours d\'eau ! Regardons les résultats sur votre planète ! Le problème d\'eau est en parti résolu. Cependant, en détournant un cours d\'eau, vous avez privé votre station hydraulique d\'eau, elle ne produit alors plus autant d\'éléctricité ! Une partie de votre pays est même privé d\'éléctricité ! Que souhaitez vous faire? ',
    choices: [
      {
        label: 'Construire des éoliennes',
        value: (nbP) => {
        if (nbP === 0) {
          return 'Personne ne construit d\'éoliennes.'
        } else {
          return 'Pour ' + nbP + ' pays, on ouvre un parc éolien ! '
        }
      },
      points: {
        food: {value: 0, turns: [1, 0.5, 0, -0.5]},
        water: {value: 0, turns: [2, 1, 0.5, 0]},
        waste: {value: 0, turns: [2, 1, 0.5, 0]},
        energy: {value: 2, turns: [0, 0.5, 1.8, 3]}
      }
    },
     {
        label: 'Augmenter la production d\'éléctricité par les centrales nucléaires',
        value: (nbP) => {
        if (nbP === 0) {
          return 'Personne n\'investit dans les centrales nucléaires.'
        } else {
          return 'Pour ' + nbP + ' pays, on intensifie la production dans les centrales nucléaires ! '
        }
      },
      points: {
        food: {value: 0, turns: [1, 0.5, 0, -0.5]},
        water: {value: 2, turns: [1, 1, 1, 1]},
        waste: {value: 1, turns: [0, 0.5, 1, 2]},
        energy: {value: 2, turns: [2, 1, 1, 1]}
      }
    }
    ]
  },
  {
    text: 'Pour la plus part d\'entre vous, vous avez choisi de désintoxiquer les nappes phréatiques ! Regardons les résultats sur votre planète ! Le problème d\'eau se pose toujours mais la situation s\'améliore. Cependant, désintoxiquer les nappes phréatiques, ça demande de l\'énergie ! Il semblerait même qu\'il y ait quelque coupure général d\'éléctricité pendant la journée ! Que souhaitez vous faire? ',
    choices: [
      {
        label: 'Construire des éoliennes',
        value: (nbP) => {
        if (nbP === 0) {
          return 'Personne ne construit d\'éoliennes.'
        } else {
          return 'Pour ' + nbP + ' pays, on ouvre un parc éolien ! '
        }
      },
      points: {
        food: {value: 0, turns: [1, 0.5, 0, -0.5]},
        water: {value: 0, turns: [2, 1, 0.5, 0]},
        waste: {value: 0, turns: [2, 1, 0.5, 0]},
        energy: {value: 2, turns: [0, 0.5, 1.8, 3]}
      }
    },
    {
        label: 'Augmenter la production d\'éléctricité par les centrales nucléaires',
        value: (nbP) => {
        if (nbP === 0) {
          return 'Personne n\'investit dans les centrales nucléaires.'
        } else {
          return 'Pour ' + nbP + ' pays, on intensifie la production dans les centrales nucléaires ! '
        }
      },
      points: {
        food: {value: 0, turns: [1, 0.5, 0, -0.5]},
        water: {value: -2, turns: [1, 1, 1, 1]},
        waste: {value: -1, turns: [0, 0.5, 1, 2]},
        energy: {value: 2, turns: [2, 1, 1, 1]}
      }
    },
    {
        label: 'Rien',
        value: (nbP) => {
        if (nbP === 0) {
          return 'Personne ne fait rien.'
        } else {
          return 'Pour ' + nbP + ' pays, ils ont décidé de ne rien faire ! '
        }
      },
      points: {
        food: {value: 0, turns: [1, 0.5, 0, -0.5]},
        water: {value: 0, turns: [2, 1, 0.5, 0]},
        waste: {value: 0, turns: [2, 1, 0.5, 0]},
        energy: {value: -1, turns: [0.5, 1, 1, 1]}
      }
    }
    ]
  }
]