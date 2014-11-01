angular
  .module('loreof.controllers', [])
  .controller('HomeCtrl', ['$scope', '$resourceService', '$http',
  function($scope, $resourceService, $http) {

    $resourceService.getResources().then(function(data) {
      $scope.resources = data
    })

    $http.get(apiURl + '/api/topic/internet')
      .success(function(data, status, headers, config) {
        console.log('success', data, status)
      })
      .error(function(data, status, headers, config) {
        console.log('error', data, status)
      })


  }])
