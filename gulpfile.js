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
//run server
var nodemon = require('gulp-nodemon')
//open browser
var open = require('gulp-open');
//operating system
var os = require('os');
//browser-sync
var browserSync = require('browser-sync').create();
//reload browser on every change
var reload = require('gulp-livereload');

//set browser
var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

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
     return gulp.src('/public/stylesheets/scss/*.scss')
         .pipe(sass())
         .pipe(gulp.dest('/public/stylesheets/css'));
 });

 // Concatenate & Minify JS
 gulp.task('scripts', function() {
     return gulp.src('/public/js/*.js')
         .pipe(concat('all.js'))
         .pipe(gulp.dest('/public/js'))
         .pipe(rename('all.min.js'))
         .pipe(uglify())
         .pipe(gulp.dest('/public/js'));
 });

//run server
gulp.task('launch', function(){
	//launch server at on 8080
	nodemon({
		 script: 'server.js'
		, ext: 'js'
		, env: { 'NODE_ENV': 'development' }
	})

	//launch browser
	browserSync.init({
	    proxy: 'localhost:8080'
	});
})

//Run tests
 gulp.task('test', function () {
     return gulp.src(['test/**/*.js'], { read: false })
         .pipe(mocha({ reporter: 'spec' }))
         .on('error', util.log);
 });

gulp.task('client-watch', ['test', 'sass', 'scripts'], browserSync.reload);

 // watch Files For Changes
 gulp.task('watch', function() {
     gulp.watch('public/js/*.js', ['lint', 'scripts']);
     gulp.watch('public/stylesheets/scss/*.scss', ['sass']);
     gulp.watch(['public/**', 'test/**'], ['test']);
     gulp.watch("public/**", ['client-watch']);
 });

 // *** default task *** //
 gulp.task('default', ['lint', 'sass', 'scripts','launch', 'watch', 'test'], function(){});