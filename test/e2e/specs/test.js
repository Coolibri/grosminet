// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'start page test': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.start-page')
      .setValue('.start-page form input', 'nightwatch')
      .pause(500)
      .click('.start-page form div')
      .pause(500)
      .waitForElementVisible('.start-page ul li', 1000)
      .getText('.start-page ul li', function (result) {
        this.assert.equal(result.value, 'nightwatch')
      })
      .click('#start-game-btn')
      .waitForElementVisible('.game', 5000)
  },
  'game set-up tests': function (browser) {
    browser.end()
  }
}
