var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

// Now we can add the cssBuild task to our gulpfile.
gulp.task('cssBuild', function() {
  return gulp.src(['scss/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});

// Serving
gulp.task('serve', function() {
  gulp.watch(["scss/*.scss"], ['cssBuild']);
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html",
      
    }
  });
});


