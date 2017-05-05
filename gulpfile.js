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
      // Convert all images to JPEG format
      '*': [{
        // image-medium.jpg is 375 pixels wide
        width: 360,
        rename: {
          suffix: '-small',
          extname: '.jpg',
        },
      }, {
        // image-large.jpg is 480 pixels wide
        width: 720,
        rename: {
          suffix: '-medium',
          extname: '.jpg',
        },
      }, {
        // image-extralarge.jpg is 768 pixels wide
        width: 1080,
        rename: {
          suffix: '-large',
          extname: '.jpg',
        },
      }],
    }))
    .pipe(gulp.dest('./docs/Assets/Images'));
});


