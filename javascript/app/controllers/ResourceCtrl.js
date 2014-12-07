loreOfControllers
  .controller('ResourceCtrl', ['$scope', '$resourceService', '$mediaService', '$metaService', '$location', 'resourceId', 'isModal',
  function($scope, $resourceService, $mediaService, $metaService, $location, resourceId, isModal) {
    $scope.isModal = isModal

    $resourceService.getResource(resourceId).then(function(data) {
      $scope.resource = data

      /*
       * Meta Data
       */
      $metaService.setMeta('pageTitle', $scope.resource.title + ' | Lore Of')
      $metaService.setMeta('twitterTitle', $scope.resource.title + ' | Lore Of')
      $metaService.setMeta('facebookTitle', $scope.resource.title + ' | Lore Of')
      $metaService.setMeta('facebookUrl', $location.host() + $location.path())

      if($scope.resource.media.trailer){
        if($mediaService.isValidYoutube($scope.resource.media.trailer)){
          $scope.video = $mediaService.getYoutubeSrc($scope.resource.media.trailer)
        } else if ($mediaService.isValidVimeo($scope.resource.media.trailer)) {
          $scope.video = $mediaService.getVimeoSrc($scope.resource.media.trailer)
        } else {
          $scope.video = ''
        }
      } else {
        if($mediaService.isValidYoutube($scope.resource.media.video)){
          $scope.video = $mediaService.getYoutubeSrc($scope.resource.media.video)
        } else if ($mediaService.isValidVimeo($scope.resource.media.video)) {
          $scope.video = $mediaService.getVimeoSrc($scope.resource.media.video)
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
