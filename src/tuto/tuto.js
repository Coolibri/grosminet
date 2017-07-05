import Sheperd from 'tether-shepherd'

let tour = new Sheperd
  .Tour({
    defaults: {
      classes: 'shepherd-theme-arrows'
    }
  })

tour.addStep('example', {
  title: 'Example Shepherd',
  text: 'Creating a Shepherd is easy too! Just create ...',
  attachTo: '#planet-state',
  advanceOn: '.sensors'
})

export default tour
