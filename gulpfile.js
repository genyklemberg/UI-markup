var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('sass-watch', shell.task([
  'sass src/styles/main.scss:dist/public/css/main.css --sourcemap=inline --scss --style=nested'
]));

gulp.task('copy-assets', function () {
  return gulp.src('src/assets/**/*')
    .pipe( gulp.dest('dist/public/assets') );
});


gulp.task('watch', function () {
  gulp.watch([
    'src/assets/**/*'
  ], ['serve-watch']);

  gulp.watch([
    'src/styles/**/*.scss'
  ], ['sass-watch']);
});


gulp.task('default', ['copy-assets','sass-watch']);
