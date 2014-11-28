'use strict'
// var apiURl = 'http://api.loreof.co'
var apiURl = 'http://localhost:4002'
  , app = angular.module('loreof',
    [ 'ui.router'
    , 'ngAnimate'
    , 'loreof.controllers'
    , 'loreof.services'
    , 'loreof.directives'
    , 'seo'
    ])
    .config(function($stateProvider, $sceDelegateProvider, $locationProvider) {
      // use the HTML5 History API
      $locationProvider.html5Mode(true)

      $stateProvider
        .state('home',
          { url: '/'
          , templateUrl: 'partials/home.html'
          , controller: 'HomeCtrl'
          })
        .state('topic',
          { url: '/topic/:topic'
          , templateUrl: 'partials/topic.html'
          , controller: 'TopicCtrl'
          })


      // $routeProvider
      //   .when('/', {
      //     templateUrl: 'partials/home.html'
      //   , controller: 'HomeCtrl'
      //   })
      //   .when('/topic/:topic', {
      //     templateUrl: 'partials/topic.html'
      //   , controller: 'TopicCtrl'
      //   })
      //   .when('/resource/:id', {
      //     templateUrl: 'partials/resource.html'
      //   , controller: 'ResourceCtrl'
      //   })
      //   .otherwise({
      //     redirectTo: '/'
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
