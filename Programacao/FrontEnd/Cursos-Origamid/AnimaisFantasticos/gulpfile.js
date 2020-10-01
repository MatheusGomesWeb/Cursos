const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const cleanCss = require('gulp-clean-css');

function minifyImages() {
  gulp.src('./img/**/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./img/'));
}

function minifyCss() {
  gulp.src('./css/style.css')
    .pipe(cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./dist'));
}

exports.minifyImages = minifyImages;
exports.minifyCss = minifyCss;
