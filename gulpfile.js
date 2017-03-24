var gulp = require('gulp'),
  connect = require('gulp-connect');
 
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
 
gulp.task('default', ['connect', 'watch']);
