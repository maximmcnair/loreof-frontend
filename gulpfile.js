// Gulpfile.js
var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , nib = require('nib')
  , jade = require('gulp-jade')
  , rename = require('gulp-rename')
  , connect = require('gulp-connect')
  , path = require('path')

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

gulp.task('images', function () {
  gulp.src('./images/**/*.*', { base: './' })
    .pipe(gulp.dest('./build/'))
})

gulp.task('watch', function () {
  gulp.watch(defaultPaths.stylus, ['stylus'])
  gulp.watch(defaultPaths.jade, ['jade'])
})

gulp.task('server', function () {
  connect.server({
    root: './build/'
  , host: '*'
  , port: '5230'
  })
})

gulp.task('default', ['stylus', 'jade', 'images', 'server', 'watch'])
gulp.task('build', ['stylus', 'jade', 'images'])
