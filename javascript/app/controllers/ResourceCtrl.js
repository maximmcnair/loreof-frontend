loreOfControllers
  .controller('ResourceCtrl', ['$scope', '$resourceService', '$routeParams', '$mediaService',
  function($scope, $resourceService, $routeParams, $mediaService) {
    // $scope.video =
    //  $sce.trustAsHtml('<iframe src="https://www.youtube.com/embed/Bu6SE5TYrCM" frameborder="0" allowfullscreen="allowfullscreen"></iframe>')

    // $scope.video = $sce.trustAsHtml('<iframe src="https://www.youtube.com/embed/Bu6SE5TYrCM" frameborder="0" allowfullscreen="allowfullscreen"></iframe>')

    $resourceService.getResource($routeParams.id).then(function(data) {
      $scope.resource = data

      if($mediaService.isValidYoutube($scope.resource.trailer)){
        $scope.video = $mediaService.getYoutubeSrc($scope.resource.trailer)
      } else if ($mediaService.isValidVimeo($scope.resource.trailer)) {
        $scope.video = $mediaService.getVimeoSrc($scope.resource.trailer)
      } else {
        $scope.video = ''
      }
    })



  }])
