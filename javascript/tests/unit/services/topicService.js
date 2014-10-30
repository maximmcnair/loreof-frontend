var expect = chai.expect

describe('Unit: topicService', function () {
  beforeEach(angular.mock.module('loreof'))

  it('should exist', inject(function($topicService) {
    expect($topicService).not.to.equal(null)
  }))

  it('should return all topics', inject(function($topicService) {
    var firstServiceTopic = $topicService.allTopics[0]
      , firstFixtureTopic = topicFixture[0]

    expect(firstFixtureTopic.title).to.equal(firstServiceTopic.title)
  }))
})