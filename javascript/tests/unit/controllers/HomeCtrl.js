/*
 * HomeCtrl Unit Testing
 */

describe('Unit: HomeCtrl', function () {
  beforeEach(angular.mock.module('loreof'))

  var scope
    , $topicService

  /*
   * Mock $topicService
   */
  beforeEach(function(){
    var mockResourceService = {}
    module('loreof', function($provide) {
      $provide.value('$topicService', mockResourceService)
    })

    inject(function($q) {
      mockResourceService.data = resourceFixture

      mockResourceService.getTopics = function() {
        var defer = $q.defer()
        defer.resolve(this.data)
        return defer.promise
      }
    })
  })

  beforeEach(inject(function($controller, $rootScope, _$topicService_) {
    scope = $rootScope.$new()
    $topicService = _$topicService_
  }))

  beforeEach(inject(function($controller, $rootScope, _$topicService_) {
    scope = $rootScope.$new()
    $topicService = _$topicService_

    $controller('HomeCtrl',
                  {$scope: scope, $topicService: $topicService })

    scope.$digest()
  }))

  it('should contain topics at startup', function() {
    expect(scope.topics).toEqual(resourceFixture)
  })

})
