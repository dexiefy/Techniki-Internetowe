var gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch'),
 responsive = require('gulp-responsive'),
 livereload = require('gulp-livereload');
 var webserver = require('gulp-webserver');

 gulp.task('webserver', function() {
   gulp.src('./')
     .pipe(webserver({
       livereload: true,
       directoryListing: true,
       open: true
     }));
 });

gulp.task('connect', function() {
  connect.server({
    root: 'docs',
    });
});

gulp.task('html', function () {
  gulp.src('./docs/*.html')
    .pipe(connect.reload())
    .pipe(livereload());
});




gulp.task('images', function () {
  return gulp.src('./docs/Assets/Images/*.{jpg,png}')
    .pipe(responsive({
      //konwertuje do jpg
      '*': [{
        // male-360pix
        width: 360,
        rename: {
          suffix: '-small',
          extname: '.jpg',
        },
      }, {
        // srednie 720pix
        width: 720,
        rename: {
          suffix: '-medium',
          extname: '.jpg',
        },
      }, {
        // duze 1080pix
        width: 1080,
        rename: {
          suffix: '-large',
          extname: '.jpg',
        },
      }],
    }))
    .pipe(gulp.dest('./docs/Assets/Images'));
});

gulp.task('watch', function () {
  var server = livereload({ start: true });
  // livereload.listen();
    gulp.watch(['./docs/*.html'], ['html']);
});
// livereload({ start: true })
gulp.task('default', ['connect', 'html','webserver', 'watch']);
