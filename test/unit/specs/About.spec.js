import AboutComp from 'src/components/pages/About.vue'
import { mount } from 'avoriaz'

describe('About content test', () => {
  it('should render well', () => {
    const wrapper = mount(AboutComp)
    expect(wrapper.contains('.eccolo'))
      .to.equal(true)
  })
})
