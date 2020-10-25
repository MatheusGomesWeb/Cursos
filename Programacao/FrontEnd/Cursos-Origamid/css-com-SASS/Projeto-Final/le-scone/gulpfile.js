const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function minificarImagens() {
  gulp.src('./src/img/*').pipe(imagemin()).pipe(gulp.dest('./dist/img/'));
}

exports.default = minificarImagens;
