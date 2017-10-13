import { mount } from 'avoriaz'
import PlayersBar from 'src/components/game/PlayersBar.vue'

describe('PlayersBar vue', () => {
  describe('Template layout and integrity', () => {
    const wrapper = mount(PlayersBar)

    it('should be contained into a div', () => {
      expect(wrapper.is('div'))
        .to.equal(true)
    })

    it('should contain a user list', () => {
      expect(wrapper.find('ul').length)
        .to.equal(1)

      expect(wrapper.find('ul')[0].getAttribute('class'))
        .to.equal('players-bar-list')
    })

    it('should contain a dynamic button', () => {
      expect(wrapper.find('button').length)
        .to.equal(1)
    })

    it('Should align the dynamic button to left and list to right with flex', () => {

    })
  })
})
