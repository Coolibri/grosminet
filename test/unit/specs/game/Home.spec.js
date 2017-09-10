import { mount } from 'avoriaz'
import GameVue from 'src/components/game.vue'

describe('Game Home Tests', () => {
  describe('HTML Layout', () => {
    const wrapper = mount(GameVue)
    it('should have two part', () => {
      expect(wrapper.find('#game > div').length)
        .to.equal(2)
    })
  })
})
