'use strict'
// var apiURl = 'http://api.loreof.co'
var apiURl = 'http://localhost:4002'
  , app = angular.module('loreof',
    [ 'ui.router'
    , 'ui.bootstrap'
    , 'ngAnimate'
    , 'loreof.controllers'
    , 'loreof.services'
    , 'loreof.directives'
    , 'seo'
    ])

app.config(function($stateProvider, $sceDelegateProvider, $locationProvider, $urlRouterProvider) {
  // use the HTML5 History API
  $locationProvider.html5Mode(true)

  $stateProvider
    .state('home',
      { url: '/'
      , templateUrl: 'partials/home.html'
      , controller: 'HomeCtrl'
      , modalMaster: true
      })
    .state('topic',
      { url: '/topic/:topic'
      , templateUrl: 'partials/topic.html'
      , controller: 'TopicCtrl'
      , modalMaster: true
      })
    .state('resource',
      { url: '/resource/:id'
      , templateUrl: 'partials/resource.html'
      , controller: 'ResourceCtrl'
      , modalSlave: true
      , controllerAs: 'ctrl'
      , resolve:
        { resourceId: function($stateParams) {
            console.log('$stateParams', $stateParams)
            return $stateParams.id;
          }
        }
      })

  $urlRouterProvider.otherwise('/')

  // Enable handling of url changes ourselves
  $urlRouterProvider.deferIntercept()

  // Allow youtube/vimeo content
  $sceDelegateProvider.resourceUrlWhitelist(
    [ 'self'
    , 'https://www.youtube.com/**'
    , 'http://player.vimeo.com/**'
    ])
})
app.run(['$rootScope', '$state', '$modal', '$location', '$urlRouter', '$timeout', '$stateParams',
  function ($rootScope, $state, $modal, $location, $urlRouter, $timeout, $stateParams) {

  var entering
    , modalInstance
    , toStatePrevented

  modalInstance = toStatePrevented = null
  entering = false

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
    if (fromState.modalMaster && toState.modalSlave) {
      event.preventDefault()
      $state.current.inModal = toState
      entering = true
      $timeout(function() {
        return $location.path($state.href(toState, toParams), false)
      }, 0)
      _.assign($stateParams, toParams)
      modalInstance = $modal.open(toState)
      return modalInstance.result["catch"](function() {
        entering = false
        $state.current.inModal = null
        $state.go(fromState)
        return modalInstance = toStatePrevented = null
      })
    }
  })

  return $rootScope.$on('$locationChangeSuccess', function(event, toUrl, fromUrl) {
    event.preventDefault()
    if ($state.current.inModal == null) {
      return $urlRouter.sync()
    } else if (!entering && (modalInstance != null)) {
      return modalInstance.dismiss()
    } else {
      return entering = false
    }
  })

}])
var loreOfControllers = angular.module('loreof.controllers', [])
