var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var removeLogs = require('gulp-removelogs');

gulp.task('default', ['script'], function() {
    // place code for your default task here
});

gulp.task('script', function() {
    gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
	gulp.watch('src/**/*.js', ['script']);
});

//console.log 삭제 후 압축(실제 적용시 실행)
gulp.task('release', function() {
    gulp.src('src/*.js')
        .pipe(removeLogs())
        .pipe(uglify())
        .pipe(concat('A1_DASOM.js'))
        .pipe(gulp.dest('./'));
});