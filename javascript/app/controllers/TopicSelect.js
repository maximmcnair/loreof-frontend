loreOfControllers
  .controller('TopicSelectCtrl', ['$scope', '$stateParams', '$location',
  function($scope, $stateParams, $location) {

    /*
     * Get topics
     */
    $topicService.getTopics().then(function(data) {
      $scope.topics = data
      // SEO REQUIREMENT:
      // PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
      // we are finished with this controller.
      $scope.htmlReady()
    })

    // $scope.getImage = function () {
    //   return {
    //     // 'background-image': 'url(/images/topic-space-bg.png)'
    //     'background-image': 'url(/images/bg.jpg)'
    //   }
    // }

    // $scope.topics = topicFixture
    $scope.tags

    $scope.topicsVisible = true
    $scope.tagsVisible = false

    $scope.showTags = function (topic) {
      $scope.topic = topic.slug
      $scope.tags = topic.tags

      $scope.topicsVisible = false
      $scope.tagsVisible = true

      // $scope.getImage = function () {
      //   return {
      //     'background-image': 'url(/images/topic-climate-change-bg.png)'
      //   }
      // }
    }

    $scope.showTopics = function () {
      $scope.tags = ''
      $scope.topicsVisible = true
      $scope.tagsVisible = false

      // $scope.getImage = function () {
      //   return {
      //     'background-image': 'url(/images/topic-space-bg.png)'
      //   }
      // }
    }

  }])
