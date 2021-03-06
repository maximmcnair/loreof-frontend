module.exports =
  { plugins:
    // dependencies
    [ __dirname + '/javascript/lib/angular.js'
    , __dirname + '/javascript/lib/angular-ui-router.js'
    , __dirname + '/javascript/lib/angular-animate.js'
    , __dirname + '/javascript/lib/angular-sanitize.js'
    , __dirname + '/javascript/lib/angular-seo.js'
    , __dirname + '/javascript/lib/ct-ui-router-extras.js'
    , __dirname + '/javascript/lib/ui-bootstrap-custom-0.12.0.js'
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
    , __dirname + '/javascript/app/controllers/HeadCtrl.js'
    , __dirname + '/javascript/app/controllers/HomeCtrl.js'
    , __dirname + '/javascript/app/controllers/TopicCtrl.js'
    , __dirname + '/javascript/app/controllers/TopicSelect.js'
    , __dirname + '/javascript/app/controllers/ResourceCtrl.js'
    // Services
    , __dirname + '/javascript/app/services/topicService.js'
    , __dirname + '/javascript/app/services/resourceService.js'
    , __dirname + '/javascript/app/services/mediaService.js'
    , __dirname + '/javascript/app/services/metaService.js'
    // Directives
    , __dirname + '/javascript/app/directives/resourceDirective.js'
    , __dirname + '/javascript/app/directives/contentDirective.js'
    ]
  , test:
    [ __dirname + '/javascript/lib/angular-mocks.js'
    , __dirname + '/javascript/tests/unit/controllers/HomeCtrl.js'
    , __dirname + '/javascript/tests/unit/controllers/TopicCtrl.js'
    , __dirname + '/javascript/tests/unit/controllers/ResourceCtrl.js'
    , __dirname + '/javascript/tests/unit/services/topicService.js'
    , __dirname + '/javascript/tests/unit/services/resourceService.js'
    , __dirname + '/javascript/tests/unit/directives/resourceDirective.js'
    ]
  }

