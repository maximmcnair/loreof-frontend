loreOfControllers
  .controller('HomeCtrl', ['$scope', '$topicService', '$http', '$resourceService', '$metaService',
  function($scope, $topicService, $http, $resourceService, $metaService) {
    /*
     * Meta Data
     */
    $metaService.setMeta('pageTitle', 'Home | Lore Of')


    /*
     * Get topics
     */
    $topicService.getTopics().then(function(data) {
      $scope.topics = data
      // SEO REQUIREMENT:
      // PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
      // we are finished with this controller.
      // console.log(data)
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

    // var query = {topicSlug: 'climate-change'}
    // $resourceService.getResources(query).then(function(data) {
    //   console.log(data)
    //   $scope.resources = data
    // })
  }])
