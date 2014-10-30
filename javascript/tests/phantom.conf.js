var sharedConfig = require(__dirname + '/shared.conf')

module.exports = function(config) {
  // Extends shared karma config file
  var conf = sharedConfig()

  // Add files here
  conf.files = conf.files.concat([
    // dependencies
      '../lib/angular.js'
    , '../lib/angular-mocks.js'
    , '../lib/angular-route.js'
    // Fixtures
    , './fixtures/topicFixtures.js'
    , './fixtures/resourceFixtures.js'
    // Application
    , '../app/app.js'
    // Controllers
    , '../app/controllers/HomeCtrl.js'
    , './unit/controllers/HomeCtrl.js'
    // Services
    , '../app/services/topicService.js'
    , './unit/services/topicService.js'
    , '../app/services/resourceService.js'
    , './unit/services/resourceService.js'
  ])

  config.set(conf)
}
