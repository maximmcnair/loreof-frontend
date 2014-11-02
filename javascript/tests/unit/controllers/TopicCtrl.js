/*
 * TopicCtrl Unit Testing
 */

describe('Unit: TopicCtrl', function () {
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
      mockResourceService.data = resourceFixture

      mockResourceService.getResources = function() {
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

    $controller('TopicCtrl',
      { $scope: scope
      , $resourceService: $resourceService
      , $routeParams: {topic: 'wildlife'}
      })

    scope.$digest()
  }))


  /*
   * Tests resource data
   */
  it('should contain resources at startup', function() {
    expect(scope.resources).toEqual(resourceFixture)
  })

  /*
   * Test topic data
   */
  it('should have title of topic in scope', function() {
    expect(scope.topic.title).toEqual('Wildlife')
  })

})



//   // var ctrl
//   //   , scope

//   // // inject the $controller and $rootScope services
//   // // in the beforeEach block
//   // beforeEach(inject(function($controller, $rootScope) {
//   //   // Create a new scope that's a child of the $rootScope
//   //   scope = $rootScope.$new()
//   //   // Create the controller
//   //   ctrl = $controller('TopicCtrl',
//   //           { $scope: scope
//   //           })
//   // }))

//   // it('should get topics', function () {
//   //   expect(scope.topics).toBeUndefined()
//   // })
