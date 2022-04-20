const gulp = require('gulp');
const babel = require('gulp-babel');

function build () {
  return gulp.src('./src/**/*.ts')
    .pipe(babel())
    .pipe(gulp.dest('./dist'));
}

exports.default = gulp.series(gulp.parallel(build));
