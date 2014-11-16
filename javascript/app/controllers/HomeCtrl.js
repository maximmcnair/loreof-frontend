loreOfControllers
  .controller('HomeCtrl', ['$scope', '$topicService', '$http', '$resourceService',
  function($scope, $topicService, $http, $resourceService) {

    $topicService.getTopics().then(function(data) {
      $scope.topics = data
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

    // var query = {topicSlug: 'climate-change'}
    // $resourceService.getResources(query).then(function(data) {
    //   console.log(data)
    //   $scope.resources = data
    // })
  }])
