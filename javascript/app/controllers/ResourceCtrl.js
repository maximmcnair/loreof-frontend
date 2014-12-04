loreOfControllers
  .controller('ResourceCtrl', ['$scope', '$resourceService', '$mediaService', '$state', '$timeout', '$stateParams',
  function($scope, $resourceService, $mediaService, $state, $timeout, $stateParams) {

    $resourceService.getResource($stateParams.id).then(function(data) {
      $scope.resource = data

      if($scope.resource.trailer){
        if($mediaService.isValidYoutube($scope.resource.trailer)){
          $scope.video = $mediaService.getYoutubeSrc($scope.resource.trailer)
        } else if ($mediaService.isValidVimeo($scope.resource.trailer)) {
          $scope.video = $mediaService.getVimeoSrc($scope.resource.trailer)
        } else {
          $scope.video = ''
        }
      } else {
        if($mediaService.isValidYoutube($scope.resource.video)){
          $scope.video = $mediaService.getYoutubeSrc($scope.resource.video)
        } else if ($mediaService.isValidVimeo($scope.resource.video)) {
          $scope.video = $mediaService.getVimeoSrc($scope.resource.video)
        } else {
          $scope.video = ''
        }
      }

      // SEO REQUIREMENT: 
      // PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
      // we are finished with this controller. 
      $scope.htmlReady()
    })

  }])
