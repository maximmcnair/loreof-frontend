function toTitleCase(str){
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

loreOfControllers
  .controller('TopicCtrl', ['$scope', '$resourceService', '$http', '$stateParams', '$location', '$metaService',
  function($scope, $resourceService, $http, $stateParams, $location, $metaService) {
    console.log( $location.search()['tags'])
    /*
     * Tags
     */
    var tagsRaw = [].concat( $location.search()['tags'] )
      , tagsFormatted = []

    angular.forEach(tagsRaw, function (tag) {
      tagsFormatted.push( toTitleCase(tag.replace(/-/g, ' ')) )
    })

    $scope.topic =
        { slug: $stateParams.topic
        , title: toTitleCase($stateParams.topic.replace(/-/g, ' '))
        , tags: tagsFormatted
        }

    /*
     * Meta Data
     */
    $metaService.setMeta('pageTitle', $scope.topic.title + ' | Lore Of')
    $metaService.setMeta('facebookTitle', $scope.topic.title + ' | Lore Of')

    var query =
      { topicSlug: $stateParams.topic
      , tags: $scope.topic.tags
      }

    // console.log( $location.search()['tags'] )

    $resourceService.getResources(query).then(function(data) {
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
