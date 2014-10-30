module.exports = function() {
  return {
    basePath: ''
  , frameworks:
    [ 'mocha'
    , 'chai'
    ]
  , files:
    [
    ]
  , exclude:
    [
    ]
  , preprocessors:
    { 'test.js': ['browserify']
    }
  , reporters: ['progress']
  , port: 9876
  , colors: true
  , autoWatch: true
  // , browsers: ['PhantomJS', 'Chrome']
  , browsers: ['PhantomJS']
  , singleRun: false
  }
}
