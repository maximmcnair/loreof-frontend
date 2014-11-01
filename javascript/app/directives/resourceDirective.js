angular.module('loreof.directives', [])
  .directive('resource', function() {
    return {
      restrict: 'EA'
    , templateUrl: '/partials/components/resource-preview.html'
    // , tempalteUrl: 'resource-preview.html'
    // , controller: function (element) {
    //     console.log('askjdhf', element)
    //   }
    // , link: function () {
    //     console.log('resource link')
    //   }
    }
  })
