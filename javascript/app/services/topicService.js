angular.module('loreof.services', [])
  .factory('$topicService', ['$http', '$q', function ($http, $q) {
    var service =
      { getTopics: function () {
          var deferred = $q.defer()
          $http
            .get('/api/v1/topic').success(function (topics) {
              deferred.resolve(topics)
            })
            .error(function () {
              deferred.reject('error')
            })
          return deferred.promise
        }
      }

    return service
  }])