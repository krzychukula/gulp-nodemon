var gulp = require('gulp')
  , jshint = require('gulp-jshint')
  , mocha = require('gulp-mocha')
  , nodemon = require('./index')
  , es = require('event-stream')

gulp.task('test', function () {
  gulp.src('./test/*-test.js')
    .pipe(jshint({ asi: true, laxcomma: true }))
    //.pipe(mocha({ ui: 'bdd' }))RS
})

gulp.task('lint', function () {
  gulp.src('./**/*.js')
    .pipe(jshint())
})

gulp.task('nodemon', function () {
  nodemon({ script: './express/app.js', options: '-e html,js' })
    .on('restart', 'lint')
})