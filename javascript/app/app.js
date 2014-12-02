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
    .config(function($stateProvider, $sceDelegateProvider, $locationProvider, $urlRouterProvider) {
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
        // .state('resource',
        //   { url: '/resource/:id'
        //   , templateUrl: 'partials/resource.html'
        //   , controller: 'ResourceCtrl'
        //   })
        // .state('resource',
        //   { url: '/resource/:id'
        //   , onEnter: ['$stateParams', '$state', '$modal', '$resourceService',
        //     function($stateParams, $state, $modal, $resourceService) {
        //       $modal.open({
        //         templateUrl: 'partials/resource.html'
        //       , resolve: {
        //           resourceId: function() { return $stateParams.id }
        //         }
        //       , controller: 'ResourceCtrl'
        //       , backdrop: true
        //       })
        //     }]
        //   })

      $sceDelegateProvider.resourceUrlWhitelist(
        [ 'self'
        , 'https://www.youtube.com/**'
        , 'http://player.vimeo.com/**'
        ])
    })

var loreOfControllers = angular.module('loreof.controllers', [])

/* Converts an object into a key/value par with an optional prefix. Used for converting objects to a query string */
var qs = function(obj, prefix){
  var str = [];
  for (var p in obj) {
    var k = prefix ? prefix + "[" + p + "]" : p,
        v = obj[p];
    str.push(angular.isObject(v) ? qs(v, k) : (k) + "=" + encodeURIComponent(v));
  }
  return str.join("&");
}
