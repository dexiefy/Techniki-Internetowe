var gulp = require('gulp'),
  connect = require('gulp-connect');
  var responsive = require('gulp-responsive');


gulp.task('default', ['connect', 'watch', 'images']);

gulp.task('connect', function() {
  connect.server({
    root: 'docs',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./docs/*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./docs/*.html'], ['html']);
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


