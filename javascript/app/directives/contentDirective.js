angular.module('loreof.directives')
  .directive('ngContent', [
    function() {
      return {
        link: function($scope, $el, $attrs) {
          $scope.$watch($attrs.ngContent, function(value) {
            $el.attr('content', value)
          })
        }
      }
    }
  ])
