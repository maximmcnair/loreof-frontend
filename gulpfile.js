// Gulpfile.js
var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , nib = require('nib')
  , jade = require('gulp-jade')
  , rename = require('gulp-rename')
  , connect = require('gulp-connect')
  , path = require('path')
  , concat = require('gulp-concat')
  , karma = require('karma').server

var defaultPaths =
  { stylus:
    [ './stylus/**/**/*.styl'
    , './stylus/**/*.styl'
    , './stylus/*.styl'
    ]
  , jade:
    [ './jade/*.jade'
    , './jade/**/*.jade'
    ]
  , js:
    { plugins:
      [ './javascript/lib/angular.js'
      , './javascript/lib/angular-animate.js'
      , './javascript/lib/angular-route.js'
      ]
    , app:
      [ './javascript/app/app.js'
      ]
    // , tests:
    //   [ './javascript/tests/'
    //   ]
    }
  }

gulp.task('stylus', function () {
  gulp.src('./stylus/style.styl')
    .pipe(stylus(
      { set: ['compress']
      , use: [nib()]
      , import: ['nib']
      , errors: true
      }
    ))
    .pipe(gulp.dest('./build/css'))
})

gulp.task('jade', function () {
  gulp.src('./jade/layout.jade')
    .pipe(jade())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./build/'))
})

function compileScript(path, name) {
  return gulp.src(path)
    .pipe(concat(name))
    // .pipe(uglify())
    .pipe(gulp.dest('build/js'))
}

gulp.task('js:build:plugins', function () {
  return compileScript(defaultPaths.js.plugins, 'angular.js')
})
gulp.task('js:build:app', function () {
  return compileScript(defaultPaths.js.app, 'app.js')
})

gulp.task('js:test', function (callback) {
  karma.start({
    configFile: __dirname + '/javascript/tests/phantom.conf'
  , singleRun: false
  }, callback)
})

gulp.task('images', function () {
  gulp.src('./images/**/*.*', { base: './' })
    .pipe(gulp.dest('./build/'))
})

gulp.task('watch', function () {
  gulp.watch(defaultPaths.stylus, ['stylus'])
  gulp.watch(defaultPaths.jade, ['jade'])
  gulp.watch(defaultPaths.js.angular, ['js:build:plugins'])
  gulp.watch(defaultPaths.js.app, ['js:build:app'])
})

gulp.task('server', function () {
  connect.server({
    root: './build/'
  , host: '*'
  , port: '5230'
  })
})

gulp.task('default',
  [ 'stylus'
  , 'jade'
  , 'js:build:plugins'
  , 'js:build:app'
  , 'images'
  , 'server'
  , 'watch'])

gulp.task('build',
  [ 'stylus'
  , 'jade'
  , 'js:build:plugins'
  , 'js:build:app'
  , 'images'])
