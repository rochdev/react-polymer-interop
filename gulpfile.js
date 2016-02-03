'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', ['watch']);

gulp.task('watch', ['build'], function() {
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.js', ['js']);
});

gulp.task('build', ['html', 'js']);

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('www'));
});

gulp.task('js', function() {
  browserify({
    entries: './src/main.js'
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('www'));
});
