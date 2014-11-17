function toTitleCase(str){
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

loreOfControllers
  .controller('TopicCtrl', ['$scope', '$resourceService', '$http', '$routeParams', '$location', '$metaService',
  function($scope, $resourceService, $http, $routeParams, $location, $metaService) {

    $scope.topic =
        { slug: $routeParams.topic
        , title: toTitleCase($routeParams.topic.replace(/-/g, ' '))
        }

    /*
     * Meta Data
     */
    $metaService.setMeta('pageTitle', $scope.topic.title + ' | Lore Of')
    $metaService.setMeta('facebookTitle', $scope.topic.title + ' | Lore Of')
  

    var query =
      { topicSlug: $routeParams.topic
      , tags: $location.search()['tags']
      }

    console.log( $location.search()['tags'] )

    $resourceService.getResources(query).then(function(data) {
      console.log(data)
      $scope.resources = data

      // SEO REQUIREMENT: 
      // PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
      // we are finished with this controller. 
      $scope.htmlReady()
    })

    // $http(
    //   { url: 'https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&maxResults=50&q=stackoverflow&key=AIzaSyBh6KBI0EcZzGk16Rt1P7qZzgKvKTngUno'
    //   , method: 'GET'
    //   })
    //   .success(function (reponse) {
    //     console.log(reponse)
    //   })

    // $http.get(apiURl + '/api/topic/internet')
    //   .success(function(data, status, headers, config) {
    //     console.log('success', data, status)
    //   })
    //   .error(function(data, status, headers, config) {
    //     console.log('error', data, status)
    //   })

  }])
