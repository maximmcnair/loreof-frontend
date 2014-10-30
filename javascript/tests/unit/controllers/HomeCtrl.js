var expect = chai.expect

describe('Unit: HomeCtrl', function () {
  beforeEach(angular.mock.module('loreof'))

  var ctrl
    , scope

  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new()
    // Create the controller
    ctrl = $controller('HomeCtrl',
            { $scope: scope
            })
  }))

  it('should get topics', function () {
    expect(scope.topics).to.be.undefined
  })
})