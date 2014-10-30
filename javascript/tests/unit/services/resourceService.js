/*
 * $resourceService tests
 */

describe('Unit: $resourceService', function () {
  beforeEach(angular.mock.module('loreof'))

  var service
    , $httpBackend

  beforeEach(inject(function ($resourceService, _$httpBackend_) {
    service = $resourceService
    $httpBackend = _$httpBackend_
  }))

  it('should exist', function () {
    expect(service).toBeDefined()
  })

  it('should have a getResources()', function () {
    expect(service.getResources()).toBeDefined()
  })

  it('should resolve to an array of resources', function() {
    // mock /api/v1/resource with fixture
    $httpBackend.whenGET('/api/v1/resource').respond(resourceFixture)

    var promise = service.getResources()
      , resources = null

    promise.then(function(data){
      resources = data
    })

    // flush response
    $httpBackend.flush()

    // should be an array
    expect(resources instanceof Array).toBeTruthy()
    // should match fixture
    expect(resources).toEqual(resourceFixture)
  })

  it('should reject the promise and respond with error')

})