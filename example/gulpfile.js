var gulp = require('gulp');
var sass = require('gulp-sass');

// var concat = require('gulp-concat');
// var minify = require('gulp-minify-css');

// Prepares the CSS file
gulp.task('default', function() {
    return gulp.src('./*.scss')
        .pipe(sass({ includePaths: require('node-bourbon').includePaths }))
        .pipe(gulp.dest('.'));
});

// Prepares assets & watch for changes
gulp.task('development', ['default'], function(callback) {
    gulp.watch('../**/*.scss', ['default']);
});
