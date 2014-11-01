module.exports =
  { plugins:
    // dependencies
    [ __dirname + '/javascript/lib/angular.js'
    , __dirname + '/javascript/lib/angular-mocks.js'
    , __dirname + '/javascript/lib/angular-route.js'
    ]
  , fixtures:
    // Fixtures
    [ __dirname + '/javascript/tests/fixtures/topicFixtures.js'
    , __dirname + '/javascript/tests/fixtures/resourceFixtures.js'
    ]
  , app:
    // Application
    [ __dirname + '/javascript/app/app.js'
    // Controllers
    , __dirname + '/javascript/app/controllers/HomeCtrl.js'
    // Services
    , __dirname + '/javascript/app/services/topicService.js'
    , __dirname + '/javascript/app/services/resourceService.js'
    // Directives
    , __dirname + '/javascript/app/directives/resourceDirective.js'
    ]
  , test:
    [ __dirname + '/javascript/tests/unit/controllers/HomeCtrl.js'
    , __dirname + '/javascript/tests/unit/services/topicService.js'
    , __dirname + '/javascript/tests/unit/services/resourceService.js'
    , __dirname + '/javascript/tests/unit/directives/resourceDirective.js'
    ]
  }

