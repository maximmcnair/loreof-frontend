loreOfControllers
  .controller('TopicCtrl', ['$scope', '$resourceService', '$http', '$routeParams',
  function($scope, $resourceService, $http, $routeParams) {

    var query = {topicSlug: $routeParams.topic}
    $resourceService.getResources(query).then(function(data) {
      $scope.resources = data
    })

    // $http(
    //   { url: apiURl + '/api/v1/resource'
    //   , method: 'GET'
    //   , params: {topicSlug: 'bitcoin'}
    //   })
    //   .success(function (topics) {
    //     deferred.resolve(topics)
    //   })

    // $http.get(apiURl + '/api/topic/internet')
    //   .success(function(data, status, headers, config) {
    //     console.log('success', data, status)
    //   })
    //   .error(function(data, status, headers, config) {
    //     console.log('error', data, status)
    //   })

  }])
