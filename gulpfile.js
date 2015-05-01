var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('connect');
var myth = require('gulp-myth');
var karma = require('gulp-karma');
//var browserSync = require('browser-sync');
//var karma = require('karma').server;
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var serve = require('serve-static');
var browsersync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var plumber = require('gulp-plumber');
var beeper = require('beeper');
var del = require('del');
var config = require('./gulp.conf.json');

// == ERROR HANDLER =====
function onError(err) {
  beeper();
  console.log(err);
}

// == CSS =====
// make sure that style.css stays on top during concatenation
//var cssFiles = ['app/css/style.css', 'app/css/*css.css'];
gulp.task('styles',
          function() {
            return gulp
              //.src(cssFiles)
              .src(config.desktop.src)
              .pipe(plumber({
                      errorHandler: onError
                    }))
              .pipe(concat('all.css'))
              .pipe(myth())
              .pipe(gulp.dest(config.desktop.dest));
          });

// == JS =====
gulp.task('scripts',
          function() {
            return gulp
              .src(['app/*.js', 'app/entry/*js'])
              .pipe(jshint())
              .pipe(jshint.reporter('default'))
              .pipe(concat('all.js'))
              .pipe(uglify())
              .pipe(gulp.dest('dist/'));
          });

// == IMAGES =====
gulp.task('images',
          function() {
            return gulp
              .src('app/img/*')
              .pipe(imagemin())
              .pipe(gulp.dest('dist/img'));
          });

// == SERVER =====
gulp.task('server',
          function() {
            return connect()
              .use(serve(__dirname + '/app'))
              .listen(8080)
              .on('listening', function() {
                    console.log('Server Running: http?//localhost:8080');
                  });
          }
);

// == BROWSER SYNC =====
gulp.task('browsersync', function(cb) {
  return browsersync({
    server: {baseDir: './app'}
  }, cb);
});

// == BROWSERIFY =====
gulp.task('browserify', function() {
  return browserify('./app/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

// == CLEAN TASK =====
gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

// == WATCH =====
gulp.task('watch', function() {
  //gulp.watch('app/css/*.css', runSequence('styles', browsersync.reload));
  gulp.watch('app/css/*.css', ['styles', browsersync.reload]);
  gulp.watch('app/*.js', ['scripts', browsersync.reload]);
  gulp.watch('app/img', ['images', browsersync.reload]);
});

// === KARMA =====
var testFiles = [
  'creational/**/*.js'
];
gulp.task('karma', function() {
  // Be sure to return the stream
  return gulp.src(testFiles)
    .pipe(karma({
            configFile: 'karma.conf.js'
          }))
    .on('error', function(err) {
          // Make sure failed tests cause gulp to exit non-zero
          throw err;
        });
});

// == DEFAULT =====
gulp.task('default', ['styles',
                      'scripts',
                      'images',
  //'server',
                      'browsersync',
                      'browserify',
                      'watch']);