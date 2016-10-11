// Gulp Build Manger
var gulp = require('gulp');
// Gulp Plugins
var del = require('del');
var cache = require('gulp-cache');
const autoprefixer = require('gulp-autoprefixer');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

// Default Task
// runs for the gulp command with no args
gulp.task('default', function (callback) {
  runSequence(['watch'],
    callback
  )
})

// <-- Development Tasks -->
// Compile Pug(Jade) Templates to Html
gulp.task('templates', function() {
  gulp.src('app/index.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('app/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Compile SASS to CSS and autoprefix
gulp.task('sass', function(){
  return gulp.src('app/sass/*.+(scss|sass)')
    .pipe(sass()) // Using gulp-sass
    .pipe(autoprefixer({
            browsers: ['> 1% in US'],
            cascade: false
        }))
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Browser Sync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

// Watch SASS and PUG files or changes and reload with browser sync
gulp.task('watch', ['browserSync', 'templates', 'sass'], function(){
  gulp.watch('app/sass/*.+(scss|sass)', ['sass', browserSync.reload]);
  gulp.watch('app/**/*.+(pug|jade)', ['templates', browserSync.reload]);
  gulp.watch('app/js/**/*.js', browserSync.reload);
})

// <-- Build Tasks -->
// Concatinate and minify JS and CSS files with useref
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    // .pipe(useref())
    // .pipe(gulpIf('*.js', uglify()))
    // .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

// Optimize Images with imagemin
gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg|PNG|JPG|JPEG|GIF|SVG)')
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('dist/images'))
});

// Copy fonts to dist
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

// Copy css to dist
gulp.task('css', function() {
  return gulp.src('app/css/**/*')
  .pipe(gulp.dest('dist/css'))
})

// Copy js to dist
gulp.task('js', function() {
  return gulp.src('app/js/**/*')
  .pipe(gulp.dest('dist/js'))
})

// Copy tools to dist
gulp.task('tools', function() {
  return gulp.src('app/tools/**/*')
  .pipe(gulp.dest('dist/tools'))
})

// Copy favicon to dist
gulp.task('favicon', function() {
  return gulp.src('app/favicon.ico')
  .pipe(gulp.dest('dist'))
})

// clean out dist directory
gulp.task('clean:dist', function() {
  return del.sync('dist');
})

// clear caches
gulp.task('cache:clear', function (callback) {
  return cache.clearAll(callback)
})

// run the production build sequence
gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['templates', 'sass'],
    ['useref', 'images', 'fonts', 'css', 'js', 'tools', 'favicon'],
    callback
  )
})
