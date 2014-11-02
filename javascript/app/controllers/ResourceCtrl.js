loreOfControllers
  .controller('ResourceCtrl', ['$scope', '$resourceService', '$routeParams',
  function($scope, $resourceService, $routeParams) {

    $resourceService.getResource($routeParams.id).then(function(data) {
      $scope.resource = data
    })

  }])
