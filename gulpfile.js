// Gulpfile.js
var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , nib = require('nib')

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

gulp.task('watch', function() {
  gulp.watch(defaultPaths.stylus, ['stylus'])
})

gulp.task('default', ['stylus', 'watch'])
gulp.task('build', ['stylus'])
