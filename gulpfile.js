// Gulp Build Manger
var gulp = require('gulp');
// Gulp Plugins
var del = require('del');
var cache = require('gulp-cache');
const autoprefixer = require('gulp-autoprefixer');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var rev = require('gulp-rev');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var usemin = require('gulp-usemin');
var defer = require("gulp-defer");
var minifyHtml = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

// Default Task
// runs for the gulp command with no args
gulp.task('default', ['serve']);

// <-- Development Tasks -->
// Compile Pug(Jade) Templates to Html
gulp.task('templates', function() {
  gulp.src('app/index.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('app/'))
    .pipe(browserSync.reload({
      stream: true
    })),
  gulp.src('app/views/skills/*.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('app/skills/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Compile SASS to CSS and autoprefix
gulp.task('sass', function(){
  return gulp.src('app/sass/*.+(scss|sass)')
    .pipe(sourcemaps.init())
    .pipe(sass()) // Using gulp-sass
    .pipe(autoprefixer({
            browsers: ['> 1% in US'],
            cascade: false
        }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Browser Sync for dev server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

// Watch SASS, JS and PUG files or changes and reload with browser sync
gulp.task('serve', ['browserSync', 'templates', 'sass'], function(){
  gulp.watch('app/sass/**/*.+(scss|sass)', ['sass', browserSync.reload]);
  gulp.watch('app/**/*.+(pug|jade)', ['templates', browserSync.reload]);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

// dev alias for serve task
gulp.task('dev', function (callback) { runSequence(['serve'], callback) });

// Production build tasks
// Concatinate and minify HTML, JS and CSS files with usemin
gulp.task('usemin', function() {
  return gulp.src('./app/index.html')
    // causing write error
    .pipe(usemin({
      css: [ cssnano(), rev() ],
      html: [ function () {return $.minifyHtml({ empty: true });} ],
      jslib: [ uglify(), rev() ],
      jsapp: [ uglify(), rev() ],
      inlinejs: [ uglify() ],
      inlinecss: [ cssnano(), 'concat' ]
    }))
    .pipe(gulp.dest('dist/'));
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
});

// Copy core source to dist
gulp.task('core', function() {
  return gulp.src('app/**/*.+(html|HTML|css|CSS|js|JS)')
  .pipe(gulp.dest('dist'))
});

// Copy favicon to dist
gulp.task('favicon', function() {
  return gulp.src('app/favicon.ico')
  .pipe(gulp.dest('dist'))
});

// clean out dist directory
gulp.task('clean:dist', function() { return del.sync('dist'); });

// clear caches
gulp.task('cache:clear', function (callback) { return cache.clearAll(callback) });

// run the production build sequence
gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['templates', 'sass'],
    ['core', 'images', 'fonts', 'favicon'],
    callback
  )
});

// Browser Sync for production test server
gulp.task('browserSync:dist', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
});

// starts a test production server
// runs the build task before,
// and serves the dist folder
gulp.task('serve:dist', function (callback) {
  runSequence(
    ['build'],
    ['browserSync:dist'],
    callback
  )
});

// runs serve task for dist alias
gulp.task('dist', ['serve:dist']);
