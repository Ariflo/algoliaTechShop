var gulp = require('gulp');

/**
*Gulp plug-ins
*/
//mocha for testing 
var mocha = require('gulp-mocha')
//util to log errors
, util = require('gulp-util')
//linter to verify js files
, jshint = require('gulp-jshint')
//to compile sass files
, sass = require('gulp-sass')
//concatnates JS files
, concat = require('gulp-concat')
//minitfy JS files
, uglify = require('gulp-uglify')
//rename files
, rename = require('gulp-rename')
//run server
, nodemon = require('gulp-nodemon')
//open browser
, open = require('gulp-open')
//operating system
, os = require('os')
//browser-sync
, browserSync = require('browser-sync').create()
//reload browser on every change
, reload = require('gulp-livereload');

//set browser
var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

/**
 * Gulp Tasks
 */

 // Lint Task
 gulp.task('lint', function() {
     return gulp.src('public/js/*.js')
         .pipe(jshint())
         .pipe(jshint.reporter('default'));
 });

 // Compile Our Sass
 gulp.task('sass', function () {
   return gulp.src('public/stylesheets/sass/**/*.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(gulp.dest('public/stylesheets/css'));
 });

 // Concatenate & Minify JS
 gulp.task('scripts', function() {
     return gulp.src('public/js/*.js')
         .pipe(concat('all.js'))
         .pipe(gulp.dest('public'))
         .pipe(rename('all.min.js'))
         .pipe(uglify())
         .pipe(gulp.dest('public/js'));
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

//refresh browser
gulp.task('client-watch', function() {
    browserSync.reload();
});

//run tests
 gulp.task('test', function () {
     return gulp.src(['test/**/*.js'], { read: false })
         .pipe(mocha({ reporter: 'spec' }))
         .on('error', util.log);
 });

 // watch Files For Changes
 gulp.task('watch', function() {
     gulp.watch('public/js/*.js', ['lint', 'scripts']);
     gulp.watch('public/stylesheets/sass/*.scss', ['sass']);
     gulp.watch(['public/**','test/**'], ['test', 'client-watch']);
 });

 // *** default task *** //
 gulp.task('default', ['launch', 'lint', 'sass', 'scripts', 'watch', 'test'], function(){});