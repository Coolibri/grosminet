export default
[
  {
    text: 'Pour la plus part d\'entre vous, vous avez choisi de rendre les transports communs gratuit ! Bonne nouvelle : les gens utilisent moins leur voiture, et donc il y a moins de CO2 dégagé.  ',
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
    text: 'Pour la plus part d\'entre vous, vous avez choisi d\'inciter vos habitants à acheter des voitures électriques. Ceci augmente votre demande en energie, comment y répondre ? ',
    choices: [
      {
        label: 'Eoliennes',
        value: (nbP) => {
          if (nbP === 0) {
            return ' Personne n\'a choisi les éoliennes.'
          } else {
            return ' ' + nbP + 'pays choisissent les éoliennes '
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
    childs: null
  },
  {
    text: 'Pour la plus part d\'entre vous, vous avez choisi de vous occuper des déchets nucléaires. Que souhaitez vous faire? ',
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
