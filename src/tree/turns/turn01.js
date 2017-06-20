export default [
  {
    text: 'La plupart a choisi les OGM, regardons les effets des OGM sur la planète !',
    choices: [
      {
        label: 'Bière',
        value: (pName) => {
          return pName + ' a fait un super choix ! '
        }
      },
      {
        label: 'Eau',
        value: (pName) => {
          return 'Pour une bonne santé, ' + pName + 'choisissent l\'eau et c\'est raisonnable'
        }
      },
      {
        label: 'Soda',
        value: (pName) => { return pName + ' veulent du sucre, plus de sucre ! ' }
      }
    ]
  },
  {
    text: 'La plupart a choisi les engrais, regardons les effets des engrais sur la planète !',
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
