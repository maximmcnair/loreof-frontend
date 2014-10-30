// angular.module('myApp', [])
// .controller('MainController', function($scope) {
//   $scope.name = "Ari";
//   $scope.sayHello = function() {
//     $scope.greeting = "Hello " + $scope.name;
//   }
// })

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
