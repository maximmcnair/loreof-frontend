loreOfControllers
  .controller('HomeCtrl', ['$scope', '$topicService', '$http',
  function($scope, $topicService, $http) {

    // $topicService.getTopics().then(function(data) {
    //   $scope.topics = data
    // })

    $scope.topics = topicFixture
    $scope.tags

    $scope.topicsVisible = true
    $scope.tagsVisible = false


    $scope.showTags = function (topic) {
      $scope.tags = topic.tags

      $scope.topicsVisible = false
      $scope.tagsVisible = true
    }

    $scope.showTopics = function () {
      $scope.tags = ''
      console.log('showTopics')
      $scope.topicsVisible = true
      $scope.tagsVisible = false
    }

  }])
