var gulp = require('gulp');

/**
*Gulp plug-ins
*/
//mocha for testing 
var mocha = require('gulp-mocha');
//util to log errors
var util = require('gulp-util');
//linter to verify js files
var jshint = require('gulp-jshint');
//to compile sass files
var sass = require('gulp-sass');
//concatnates JS files
var concat = require('gulp-concat');
//minitfy JS files
var uglify = require('gulp-uglify');
//rename files
var rename = require('gulp-rename');
//open files
var open = require('gulp-open');

/**
 * Gulp Tasks
 */

 // Lint Task
 gulp.task('lint', function() {
     return gulp.src('/public/js/*.js')
         .pipe(jshint())
         .pipe(jshint.reporter('default'));
 });

 // Compile Our Sass
 gulp.task('sass', function() {
     return gulp.src('/public/scss/*.scss')
         .pipe(sass())
         .pipe(gulp.dest('dist/css'));
 });

 // Concatenate & Minify JS
 gulp.task('scripts', function() {
     return gulp.src('/public/js/*.js')
         .pipe(concat('all.js'))
         .pipe(gulp.dest('dist'))
         .pipe(rename('all.min.js'))
         .pipe(uglify())
         .pipe(gulp.dest('dist/js'));
 });

 // Watch Files For Changes
 gulp.task('watch', function() {
     gulp.watch('/public/js/*.js', ['lint', 'scripts']);
     gulp.watch('scss/*.scss', ['sass']);
     gulp.watch(['views/**', 'public/**', '.js', 'routes/**', 'test/**'], ['test']);
 });

//open view
gulp.task('open', function(){
  gulp.src('/public/views/index.html')
  .pipe(open());
});

//Run tests
 gulp.task('test', function () {
     return gulp.src(['test/**/*.js'], { read: false })
         .pipe(mocha({ reporter: 'spec' }))
         .on('error', util.log);
 });

 // *** default task *** //
 gulp.task('default', ['test', 'lint', 'sass', 'scripts', 'watch'], function(){});