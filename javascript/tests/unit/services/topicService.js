describe('Unit: topicService', function () {
  beforeEach(angular.mock.module('loreof'))

  var service
    , $httpBackend

  beforeEach(inject(function ($topicService, _$httpBackend_) {
    service = $topicService
    $httpBackend = _$httpBackend_
  }))

  it('should exist', function () {
    expect(service).toBeDefined()
  })

  it('should have a getTopics()', function () {
    expect(service.getTopics()).toBeDefined()
  })

  it('should return all topics', function() {
    // mock /api/v1/topic with fixture
    $httpBackend.whenGET('/api/v1/topic').respond(topicFixture)

    var promise = service.getTopics()
      , topics = null

    promise.then(function(data){
      topics = data
      // console.log('data', data)
      // console.log('topics a', data)
    })
    // console.log('topics', topics)

    // flush response
    $httpBackend.flush()
    // console.log('topics', topics)
    expect(topics instanceof Array).toBeTruthy()
    expect(topics).toEqual(topicFixture)
  })
})