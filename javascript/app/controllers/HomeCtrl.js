angular
  .module('loreof.controllers', [])
  .controller('HomeCtrl', ['$scope', '$resourceService', function($scope, $resourceService) {

    $resourceService.getResources().then(function(data) {
      $scope.resources = data
    })

  }])
