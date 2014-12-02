/*
 * $topicService tests
 */

describe('Unit: $topicService', function () {
  beforeEach(angular.mock.module('loreof'))

  var service
    , $httpBackend

  beforeEach(inject(function ($topicService, _$httpBackend_) {
    service = $topicService
    $httpBackend = _$httpBackend_
    // mock partials/app ^hack
    $httpBackend.whenGET('partials/app.html').respond('')
    $httpBackend.whenGET('partials/home.html').respond('')
  }))

  it('should exist', function () {
    expect(service).toBeDefined()
  })

  it('should have a getTopics()', function () {
    expect(service.getTopics()).toBeDefined()
  })

  it('should resolve to an array of topics', function() {
    // mock /api/v1/topic with fixture
    $httpBackend.whenGET(apiURl + '/api/v1/topic').respond(topicFixture)

    var promise = service.getTopics()
      , topics = null

    promise.then(function(data){
      topics = data
      // console.log('data', data)
      // console.log('topics a', topics)
    })
    // console.log('topics', topics)

    // flush response
    $httpBackend.flush()
    // console.log('topics', topics)

    // should be an array
    expect(topics instanceof Array).toBeTruthy()
    // should match fixture
    expect(topics).toEqual(topicFixture)
  })

  it('should reject the promise and respond with error')
})