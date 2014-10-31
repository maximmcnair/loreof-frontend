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

  /*
   * getResources()
   */
  describe('getResources()', function () {
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

  /*
   * getResource()
   */
  describe('getResource()', function () {
    it('should have a getResource()', function () {
      expect(service.getResource()).toBeDefined()
    })

    it('should resolve to a object', function () {
      var fakeId = 0

      // mock /api/v1/resource with fixture
      $httpBackend.whenGET('/api/v1/resource/' + fakeId).respond(resourceFixture[0])

      var promise = service.getResource(fakeId)
        , resource = null

      promise.then(function(data){
        resource = data
      })

      // flush response
      $httpBackend.flush()

      // should be an array
      expect(resource instanceof Object).toBeTruthy()
      // should match fixture
      expect(resource).toEqual(resourceFixture[0])
    })

    it('should reject the promise and response with error')
  })

  /*
   * getStaffRecommdations()
   */
  describe('getStaffRecommdations()', function () {
    it('should have a getStaffRecommdations()', function () {
      expect(service.getStaffRecommdations()).toBeDefined()
    })

    it('should resolve to an array of resources', function () {
      // mock /api/v1/staffresources with fixture
      $httpBackend.whenGET('/api/v1/staffresources').respond(resourceFixture)

      var promise = service.getStaffRecommdations()
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
  })

})
