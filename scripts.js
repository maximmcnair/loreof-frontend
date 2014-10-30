module.exports =
  { plugins:
    // dependencies
    [ '../lib/angular.js'
    , '../lib/angular-mocks.js'
    , '../lib/angular-route.js'
    ]
  , fixtures:
    // Fixtures
    [ './fixtures/topicFixtures.js'
    , './fixtures/resourceFixtures.js'
    ]
  , app:
    // Application
    [ '../app/app.js'
    // Controllers
    , '../app/controllers/HomeCtrl.js'
    , './unit/controllers/HomeCtrl.js'
    // Services
    , '../app/services/topicService.js'
    , './unit/services/topicService.js'
    , '../app/services/resourceService.js'
    , './unit/services/resourceService.js'
    ]
  }

