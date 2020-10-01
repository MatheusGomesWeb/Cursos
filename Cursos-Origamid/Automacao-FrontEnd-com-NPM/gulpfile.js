const gulp = require('gulp');
const gulp_sass = require('gulp-sass');
const auto_prefixer = require('gulp-autoprefixer');
const browser_sync = require('browser-sync').create();
const gulp_concat = require('gulp-concat');
const gulp_babel = require('gulp-babel');
const gulp_uglify = require('gulp-uglify');

// Compila arquivos sass
function compilarSass() {

  return gulp.src('./css/sass/*.scss')
    .pipe(gulp_sass({
      outputStyle: 'compressed'
    }))
    .pipe(auto_prefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css/'))
    .pipe(browser_sync.stream());
}

// LiveReload
function browserSync() {
  browser_sync.init({
    server: {
      baseDir: './'
    }
  });
}

// Adiciona plugins em um unico arquivo
function setPlugins() {
  return gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/moment/min/moment.min.js'
  ])
    .pipe(gulp_concat('plugins.js'))
    .pipe(gulp.dest('./js/plugins/'))
    .pipe(browser_sync.stream())
}

// Junta varios arquivos javascript
function concatJS() {

  let srcDir = './js/src/';
  let srcDest = './js/';

  return gulp.src(srcDir + '*.js')
    .pipe(gulp_concat('main.js'))
    .pipe(gulp_babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp_uglify())
    .pipe(gulp.dest(srcDest))
    .pipe(browser_sync.stream());
}

// monitora arquivos javscript
function watchJS() {
  gulp.watch('./js/src/*.js', concatJS);
}

// monitora arquivos html
function watchHtml() {
  gulp.watch('./*.html').on('change', browser_sync.reload);
}

// monitora arquivos sass
function watchSass() {
  gulp.watch('./css/sass/*.scss', compilarSass);
}

// exportando as funções
exports.setPlugins = setPlugins;

// função padrão
exports.default = gulp.parallel(watchSass, watchHtml, concatJS, setPlugins, watchJS, browserSync);

