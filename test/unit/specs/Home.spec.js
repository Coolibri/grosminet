import HomeComp from 'src/components/pages/Home.vue'
import { mount } from 'avoriaz'

import router from '../VueRouter'

describe('Home Component', () => {
  describe('Home layout', () => {
    const wrapper = mount(HomeComp, {router})
    it('should contain the eccolo logo', () => {
      const img = wrapper.find('img')[0]

      expect(img.getAttribute('src'))
        .to.equal('static/img/eccolo-logo.png')
    })

    it('should contain a link to start game', () => {
      expect(wrapper.contains('a'))
        .to.equal(true)

      expect(wrapper.find('a')[0].text())
        .to.equal('Launch the demo')

      expect(wrapper.find('a')[0].getAttribute('href'))
        .to.contains('/game')
    })
  })
})
