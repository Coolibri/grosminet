import Vue from 'vue'
import AboutComp from 'src/components/pages/About.vue'

describe('About content test', () => {
  it('should render well', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(AboutComp)
    })
    expect(vm.$el.querySelector('.eccolo').textContent)
      .to.equal('Eccolo !')
  })
})
