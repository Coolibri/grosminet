export default (function () {
  let instance

  function createInstance () {
    return []
  }

  return {
    getData: function () {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    },
    setData: function (data) {
      instance = data
    },
    reset: function () {
      instance = createInstance()
    }
  }
})()
