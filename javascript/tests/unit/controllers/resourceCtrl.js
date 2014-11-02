/*
 * ResourceCtrl Unit Testing
 */

describe('Unit: ResourceCtrl', function () {
  beforeEach(angular.mock.module('loreof'))

  var scope
    , $resourceService

  /*
   * Mock $resourceService
   */
  beforeEach(function(){
    var mockResourceService = {}
    module('loreof', function($provide) {
      $provide.value('$resourceService', mockResourceService)
    })

    inject(function($q) {
      mockResourceService.data = resourceFixture[0]

      mockResourceService.getResource = function() {
        var defer = $q.defer()
        defer.resolve(this.data)
        return defer.promise
      }
    })
  })

  beforeEach(inject(function($controller, $rootScope, _$resourceService_) {
    scope = $rootScope.$new()
    $resourceService = _$resourceService_
  }))

  beforeEach(inject(function($controller, $rootScope, _$resourceService_) {
    scope = $rootScope.$new()
    $resourceService = _$resourceService_

    $controller('ResourceCtrl',
      { $scope: scope
      , $resourceService: $resourceService
      , $routeParams: {topic: 'wildlife'}
      })

    scope.$digest()
  }))


  /*
   * Tests resource data
   */
  it('should contain a resource at startup', function() {
    expect(scope.resource).toEqual(resourceFixture[0])
  })

})
