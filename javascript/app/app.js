'use strict'

angular
  .module('loreof',
  [ 'ngRoute'
  , 'loreof.controllers'
  , 'loreof.services'
  ])
  .config(function($routeProvider, $sceDelegateProvider, $locationProvider) {
    // use the HTML5 History API
    $locationProvider.html5Mode(true)

    $routeProvider
      .when('/', {
        templateUrl: 'partials/home'
      , controller: 'HomeCtrl'
      })
  })
