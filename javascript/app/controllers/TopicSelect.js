loreOfControllers
  .controller('TopicSelectCtrl', ['$scope', '$stateParams', '$location',
  function($scope, $stateParams, $location) {
    if($location.$$path.indexOf('topic') === 1){
      $scope.topicSelected = true
    } else {
      $scope.topicSelected = false
    }
  }])
