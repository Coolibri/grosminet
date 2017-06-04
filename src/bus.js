import Vue from 'vue'

export default (function () {
  let instance

  function createInstance () {
    return new Vue()
  }

  return {
    getBus: function () {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    }
  }
})()
