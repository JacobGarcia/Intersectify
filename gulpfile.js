let gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'public',
      port: 8888
    },
  })
})

gulp.task('watch',['browserSync'], function () {
  gulp.watch('./public/*.html', browserSync.reload)
  gulp.watch('./src/js/**/*.js')
  gulp.watch('./src/css/*.scss')
})

gulp.task('start', function () {
  nodemon({
    script: 'server.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('run', ['watch','start'])
