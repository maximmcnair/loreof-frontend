angular.module('loreof.directives', [])
  .directive('resource', function($mediaService) {
    return {
      restrict: 'EA'
    , templateUrl: '/partials/components/resource-preview.html'
    // , tempalteUrl: 'resource-preview.html'
    , controller: function ($scope) {
        // $scope.thumbs = $mediaService.getThumbnail($scope.resource.trailer)
      }
    , link: function ($scope) {
      }
    }
  })

