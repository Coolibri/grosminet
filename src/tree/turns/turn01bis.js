import childs1 from './turns/turn02bis'
import childs2 from './turns/turn02'

export default 
[
  {
  text: 'Pour la plus part d\'entre vous, vous avez choisi de faire une décarge en plein air ! Regardons les résultats sur votre planète ! Le problème déchet est en parti résolu. Cependant, en les mettant sous terre, des produits chimiques présent parmis les déchets se sont infiltrés dans la terre et notemment dans les nappes phréatiques! Les habitants de votre planète n\'ont alors plu d\'eau pour d\'hydrater. Que souhaitez vous faire? ',
  choices: 
  [
    {
      label: 'Distribuer des bouteilles d\'eau !',
      value: (nbP) => {
        if (nbP === 0) {
          return 'Personne ne distribue de bouteilles?'
        } else {
          return 'Pour ' + nbP + ' pays, ce sera open bouteilles d\'eau ! '
        }
      },
      points: {
        food: {value: 0, turns: [1, 0.5, 0, -0.5]},
        water: {value: 1, turns: [2, 1, 0.5, 0]},
        waste: {value: 2, turns: [2, 1, 0.5, 0]},
        energy: {value: 0, turns: [0, 0, 0, 0]}
      }
    },
    {
      label: 'Détourner un cours d\'eau ',
      value: (nbP) => {
        if (nbP === 0) {
          return 'personne n\'a choisi de détourner un cours d\'eau '
        }
        return nbP + ' pays ont choisi de détourner un cours d\'eau. '
      },
      points: {
        food: {value: 0, turns: [1, 1, 0.75, 0.5]},
        water: {value: 1, turns: [2, 1, 0.5, 0]},
        waste: {value: 0, turns: [0, 0, 0, 0]},
        energy: {value: 2, turns: [1, 1.5, 1, 0.5]}
      }
    },
    {
      label: 'Désintoxiquer les nappes phréatiques',
      value: (nbP) => {
        if (nbP === 0) {
          return 'personne n\'a choisi de Désintoxiquer les nappes phréatiques !'
        }
        return nbP + ' a choisi de désintoxiquer les nappes phréatiques !'
      },
      points: {
        food: {value: 0, turns: [1, 0.5, 0, -0.5]},
        water: {value: 2, turns: [0.4, 0.9, 1.5, 2.5]},
        waste: {value: 0, turns: [0, 0, 0, 0]},
        energy: {value: -1, turns: [0.5, 0.5, 0.5, 0.5]}
      }
    }
  ],
  childs: childs2
  },

  {
  text: 'Pour la plus part d\'entre vous, vous avez choisi d\'incinérer les déchets ! Regardons les résultats sur votre planète ! Grâce à l\'incinération, les déchets sont traités efficacement. Leur combustion produit un peu d\'énergie mais pas assez pour fournir la population grandissante de la planète . Que souhaitez vous faire? ',
  choices: [
    {
      label: 'Eoliennes',
      value: (nbP) => {
        if (nbP === 0) {
          return ' Personne n\'a choisi les éoliennes.'
        } else {
          return ' '+ nbP + 'pays choisissent les éoliennes '
        }
      },
      points: {
        food: {value: 0, turns: [0, 0, 0, 0]},
        water: {value: 0, turns: [0, 0, 0, 0]},
        waste: {value: 0, turns: [0, 0, 0, 0]},
        energy: {value: 2, turns: [0.5, 0.5, 0.5, 0.5]}
      }
    },
    {
      label: 'Nucléaire',
      value: (nbP) => {
        if (nbP === 0) {
          return 'personne n\'a choisi le nucléaire '
        }
        return '' + nbP + ' pays construisent des centrales nucléaires. '
      },
      points: {
        food: {value: 0, turns: [0, 0, 0, 0]},
        water: {value: -1, turns: [-0.5, -0.5, -0.5, -0.5]},
        waste: {value: -5, turns: [1, 1, 1.5, 2]},
        energy: {value: 3, turns: [1, 1, 1, 1]}
      }
    },
    {
      label: 'Matières fossiles : pétrole et charbon',
      value: (nbP) => {
        if (!nbP) {
          return 'Personne ne choisit les matières fossiles.'
        }
        return '' + nbP + ' pays choisissent de produire de l\'énergie à partir de pétrole ou de charbon. '
      },
      points: {
        food: {value: 1, turns: [0, -0.5, -0.5, -1]},
        water: {value: 1, turns: [0, -0.5, -0.5, -1]},
        waste: {value: 0, turns: [0, 0, 0, 0]},
        energy: {value: 2, turns: [1, 1, 0.5, 0]}
      }
    }
  ],
  childs: childs1
  },
  {
  text: 'Pour la plus part d\'entre vous, vous avez choisi d\'enfouir les déchets ! Regardons les résultats sur votre planète ! Le problème déchet est en parti résolu. Cependant, en les mettant sous terre, des produits chimiques présent parmis les déchets se sont infiltrés dans la terre et notemment dans les nappes phréatiques! Les habitants de votre planète n\'ont alors plu d\'eau pour d\'hydrater. Que souhaitez vous faire? ',
  choices: 
  [
    {
      label: 'Distribuer des bouteilles d\'eau !',
      value: (nbP) => {
        if (nbP === 0) {
          return 'Personne ne distribue de bouteilles?'
        } else {
          return 'Pour ' + nbP + ' pays, ce sera open bouteilles d\'eau ! '
        }
      },
      points: {
        food: {value: 0, turns: [1, 0.5, 0, -0.5]},
        water: {value: 1, turns: [2, 1, 0.5, 0]},
        waste: {value: 2, turns: [2, 1, 0.5, 0]},
        energy: {value: 0, turns: [0, 0, 0, 0]}
      }
    },
    {
      label: 'Détourner un cours d\'eau ',
      value: (nbP) => {
        if (nbP === 0) {
          return 'personne n\'a choisi de détourner un cours d\'eau '
        }
        return nbP + ' pays ont choisi de détourner un cours d\'eau. '
      },
      points: {
        food: {value: 0, turns: [1, 1, 0.75, 0.5]},
        water: {value: 1, turns: [2, 1, 0.5, 0]},
        waste: {value: 0, turns: [0, 0, 0, 0]},
        energy: {value: 2, turns: [1, 1.5, 1, 0.5]}
      }
    },
    {
      label: 'Désintoxiquer les nappes phréatiques',
      value: (nbP) => {
        if (nbP === 0) {
          return 'personne n\'a choisi de Désintoxiquer les nappes phréatiques !'
        }
        return nbP + ' a choisi de désintoxiquer les nappes phréatiques !'
      },
      points: {
        food: {value: 0, turns: [1, 0.5, 0, -0.5]},
        water: {value: 2, turns: [0.4, 0.9, 1.5, 2.5]},
        waste: {value: 0, turns: [0, 0, 0, 0]},
        energy: {value: -1, turns: [0.5, 0.5, 0.5, 0.5]}
      }
    }
  ],
  childs: childs2
  }
]