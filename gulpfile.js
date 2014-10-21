// Gulpfile.js
var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , nib = require('nib')
  , jade = require('gulp-jade')
  , rename = require('gulp-rename')
  , connect = require('gulp-connect')
  , path = require('path')

var defaultPaths = {
  stylus: [
    './stylus/**/**/*.styl'
  , './stylus/**/*.styl'
  , './stylus/*.styl'
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

gulp.task('watch', function() {
  gulp.watch(defaultPaths.stylus, ['stylus'])
})

gulp.task('server', function () {
  connect.server({
    root: './build/'
  , host: '*'
  , port: '5230'
  })
})

gulp.task('default', ['stylus', 'jade', 'server', 'watch'])
gulp.task('build', ['stylus', 'jade'])
