angular.module('loreof.services')
  .factory('$resourceService', ['$http', '$q', function ($http, $q) {
    var service =
      { getResources: function (query) {
          var deferred = $q.defer()
          $http(
            { url: apiURl + '/api/v1/resource'
            , method: 'GET'
            , params: query
            })
            .success(function (topics) {
              deferred.resolve(topics)
            })
            .error(function () {
              deferred.reject('error')
            })
          return deferred.promise
        }
      , getResource: function (id) {
          var deferred = $q.defer()
          $http
            .get(apiURl + '/api/v1/resource/' + id).success(function (topics) {
              deferred.resolve(topics)
            })
            .error(function () {
              deferred.reject('error')
            })
          return deferred.promise
        }
      , getStaffRecommdations: function () {
          var deferred = $q.defer()
          $http
            .get(apiURl + '/api/v1/staffresources').success(function (topics) {
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