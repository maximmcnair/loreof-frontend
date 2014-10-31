angular.module('loreof.services')
  .factory('$resourceService', ['$http', '$q', function ($http, $q) {
    var service =
      { getResources: function () {
          var deferred = $q.defer()
          $http
            .get('/api/v1/resource').success(function (topics) {
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
            .get('/api/v1/resource/' + id).success(function (topics) {
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
            .get('/api/v1/staffresources').success(function (topics) {
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