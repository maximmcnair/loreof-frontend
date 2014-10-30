var sharedConfig = require(__dirname + '/shared.conf')
  , scripts = require(__dirname + '/../../scripts')

module.exports = function(config) {
  // Extends shared karma config file
  var conf = sharedConfig()

  // Add files here
  conf.files = conf.files.concat(
    scripts.plugins
  , scripts.fixtures
  , scripts.app
  )

  console.log(conf.files)

  config.set(conf)
}
