'use strict'
// var apiURl = 'http://api.loreof.co'
var apiURl = 'http://localhost:4002'
  , app = angular.module('loreof',
    [ 'ui.router'
    , 'ct.ui.router.extras'
    , 'ui.bootstrap'
    , 'ngAnimate'
    , 'loreof.controllers'
    , 'loreof.services'
    , 'loreof.directives'
    , 'seo'
    ])

app.config(function($stateProvider, $sceDelegateProvider, $locationProvider, $urlRouterProvider) {
  // use the HTML5 History API
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('app',
      { url: ''
      , abstract: true
      , sticky: true
      , views:
        { app:
          { templateUrl: 'partials/app.html'
          }
        }
      })
    .state('app.home',
      { url: '/'
      , templateUrl: 'partials/home.html'
      , controller: 'HomeCtrl'
      })
    .state('app.topic',
      { url: '/topic/:topic'
      , templateUrl: 'partials/topic.html'
      , controller: 'TopicCtrl'
      })
    .state('resource',
      { url: '/resource/:id'
      , onEnter: ['$stateParams', '$state', '$modal', '$resourceService',
        function($stateParams, $state, $modal, $resourceService) {
          $modal.open({
            templateUrl: 'partials/resource.html'
          , resolve: {
              resourceId: function() { return $stateParams.id }
            }
          , controller: 'ResourceCtrl'
          , backdrop: true
          })
        }]
      })

  $sceDelegateProvider.resourceUrlWhitelist(
    [ 'self'
    , 'https://www.youtube.com/**'
    , 'http://player.vimeo.com/**'
    ])
})
app.run(['$rootScope', '$location', function ($rootScope, $location) {
  $rootScope.count = 0
  $rootScope.$on('$stateChangeStart', function (event, next) {
    console.log($rootScope.count)
    $rootScope.count++
  })
}])
var loreOfControllers = angular.module('loreof.controllers', [])
