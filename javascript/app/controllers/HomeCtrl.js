loreOfControllers
  .controller('HomeCtrl', ['$scope', '$topicService', '$http',
  function($scope, $topicService, $http) {

    $topicService.getTopics().then(function(data) {
      $scope.topics = data
    })

  }])
