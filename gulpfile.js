(function () {

  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //clean
  gulp.task('clean', function () {
    return $.del('dist');
  });

  //default copy task:
  gulp.task('default', ['clean'],function () {
    return gulp.src('src/**')
      .pipe(gulp.dest('dist'));
  });


}());
