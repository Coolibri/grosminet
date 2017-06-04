export default {
  text: 'Bienvenu sur votre planète, pb de surpopulation et donc de famine, que faire ?',
  choices: [
    {
      label: 'OGM',
      value: (nbP) => {
        if (nbP === 0) {
          return 'personnes n\'aime les OGM ?'
        } else {
          return 'well, pour ' + nbP + ' pays ce sera OGM ! '
        }
      }
    },
    {
      label: 'engrais',
      value: (nbP) => {
        if (nbP === 0) {
          return 'personne n\'a choisi les engrais comme solutions '
        }
        return 'arosons les plentations de ' + nbP + ' pays d\'engrais. '
      }
    },
    {
      label: 'test',
      value: (nbP) => {
        if (!nbP) {
          return 'personne ne peux test !'
        }
        return 'ceci est un test selon ' + nbP + ' de joueurs. '
      }
    }
  ],
  childs: [
    {
      text: 'most of you chose OGM, so let\'s see OGM results on planet !',
      choices: [
        {
          label: 'Beer',
          value: (pName) => {
            return pName + ' make a great choice ! '
          }
        },
        {
          label: 'Water',
          value: (pName) => {
            return 'pour une bonne santée, ' + pName + 'choisis l\'eau et c\'est raisonnable'
          }
        },
        {
          label: 'soda',
          value: (pName) => { return pName + ' veux du sucre,plus de sucre ! ' }
        }
      ]
    },
    {
      text: 'most of you chose engrais, so let\'s see engrais results on planet !',
      choices: [
        {
          label: 'Beer',
          value: (pName) => {
            return pName + ' make a great choice ! '
          }
        },
        {
          label: 'Water',
          value: (pName) => {
            return 'pour une bonne santée, ' + pName + 'choisis l\'eau et c\'est raisonnable'
          }
        },
        {
          label: 'soda',
          value: (pName) => { return pName + ' veux du sucre,plus de sucre ! ' }
        }
      ]
    },
    {
      text: 'most of you chose engrais, so let\'s see engrais results on planet !',
      choices: [
        {
          label: 'Beer',
          value: (pName) => {
            return pName + ' make a great choice ! '
          }
        },
        {
          label: 'Water',
          value: (pName) => {
            return 'pour une bonne santée, ' + pName + 'choisis l\'eau et c\'est raisonnable'
          }
        },
        {
          label: 'soda',
          value: (pName) => { return pName + ' veux du sucre,plus de sucre ! ' }
        }
      ]
    }
  ]
}
