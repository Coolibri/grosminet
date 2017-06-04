import Bus from '@/bus'

describe('singleton bus', () => {
  let bus1
  let bus2
  beforeEach(function (done) {
    bus1 = Bus.getBus()
    bus2 = Bus.getBus()
    done()
  })

  it('should select the same object', () => {
    expect(bus1).to.equal(bus2)
  })

  it('should trigger "test" and send 1', () => {
    bus1.$emit('test', 1)
    bus2.$on('test', function (data) {
      expect(data).to.equal(1)
    })
  })
})
