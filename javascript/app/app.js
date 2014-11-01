'use strict'
var apiURl = 'http://localhost:4002'
  , app = angular.module('loreof',
    [ 'ngRoute'
    , 'loreof.controllers'
    , 'loreof.services'
    , 'loreof.directives'
    ])
    .config(function($routeProvider, $sceDelegateProvider, $locationProvider) {
      // use the HTML5 History API
      $locationProvider.html5Mode(true)

      $routeProvider
        .when('/', {
          templateUrl: 'partials/home.html'
        , controller: 'HomeCtrl'
        })
        // .when('/topic/:topic', {
        //   templateUrl: 'partials/topic'
        // , controller: 'TopicCtrl'
        // })
    })

var loreOfControllers = angular.module('loreof.controllers', [])