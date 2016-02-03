'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');

gulp.task('default', ['watch', 'serve']);

gulp.task('watch', ['build'], function() {
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.js', ['js']);
});

gulp.task('build', ['html', 'js']);

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('www'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  browserify({
    entries: './src/main.js'
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('www'))
  .pipe(connect.reload());
});

gulp.task('serve', function() {
  connect.server({
    root: 'www',
    port: 3000,
    livereload: true
  });
});
