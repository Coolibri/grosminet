import Sheperd from 'tether-shepherd'

let tour = new Sheperd
  .Tour({
    defaults: {
      classes: 'shepherd-theme-dark'
    }
  })

tour.addStep('global-planet', {
  title: 'This is your planet',
  text: 'You all live here.',
  attachTo: '#planet-state bottom',
  buttons: [
    {
      text: 'Let\'s see this gauges',
      action: tour.next
    }
  ]
})

tour.addStep('gauge', {
  title: 'This is your <b>water</b> gauge',
  text: 'When your activity don\'t pollute the water, this cursor will go right, otherwise... who knows ?',
  attachTo: '.water bottom',
  buttons: [
    {
      text: 'What about the big one ?',
      action: tour.next
    }
  ]
})

tour.addStep('global-gauge', {
  title: 'The health of your planet',
  text: 'this show to you how the planet feel. If she start having problems you will see the cursor go to the left' +
  'don\'t forget to watch after this bar !',
  attachTo: '.state-range bottom',
  buttons: [
    {
      text: 'And me ?',
      action: tour.next
    }
  ]
})

tour.addStep('player-global', {
  title: 'It\'s you !',
  text: 'Home sweet home ! Your country too have a life bar just there !',
  attachTo: '.players top',
  buttons: [
    {
      text: 'and what happen at home ?',
      action: tour.next
    }
  ]
})

tour.addStep('messages', {
  title: 'Story and history',
  text: 'Here come the story of this planet and of your journey ! ho there is a breaking news, maybe you should read it',
  attachTo: '.messages top',
  buttons: [
    {
      text: 'what\'s are my choices ?',
      action: tour.next
    }
  ]
})

tour.addStep('choices', {
  title: 'Your turn to play',
  text: 'just make your own choice for your own country !',
  attachTo: '.btn-group right',
  buttons: [
    {
      text: 'and then ?',
      action: tour.next
    }
  ]
})

tour.addStep('validate', {
  title: 'Just click to next turn',
  text: 'wait for all the player to choose and then go to your next step !',
  attachTo: '.btn-next top',
  buttons: [
    {
      text: 'let\'s begin my journey',
      action: tour.next
    }
  ]
})

export default tour
