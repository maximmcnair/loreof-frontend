// Gulpfile.js
var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , nib = require('nib')
  , jade = require('gulp-jade')
  , rename = require('gulp-rename')
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
  var inputPath = path.resolve('./interstitials/interstitials/' + interstitial.name + '/jade/index.jade')
    , outputPath = path.resolve('./interstitials/build/' + interstitial.name)

  gulp.src(inputPath)
    .pipe(jade())
    .pipe(gulp.dest(outputPath))
})

gulp.task('watch', function() {
  gulp.watch(defaultPaths.stylus, ['stylus'])
})

gulp.task('default', ['stylus', 'watch'])
gulp.task('build', ['stylus'])
