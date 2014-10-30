var sharedConfig = require(__dirname + '/shared.conf')
  , scripts = require('./scripts')

module.exports = function(config) {
  // Extends shared karma config file
  var conf = sharedConfig()

  // Add files here
  conf.files = conf.files.concat([
    scripts.plugins
  , scripts.fixtures
  , scripts.app
  ])

  config.set(conf)
}
