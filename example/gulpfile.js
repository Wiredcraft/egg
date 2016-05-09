var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');

var css = 'styles.scss';

// Prepares the CSS file
gulp.task('default', function() {
    gulp.src(css)
        .pipe(sass({ includePaths: require('node-bourbon').includePaths }))
        .pipe(concat('styles.css'))
        .pipe(minify({keepBreaks: true}))
        .pipe(gulp.dest('.'));
});

// Prepares assets & watch for changes
gulp.task('development', ['default'], function(callback) {
    gulp.watch(css, ['default']);
});
