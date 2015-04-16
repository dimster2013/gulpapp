var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    console.log('connecting');
    connect.server({
        livereload: true,
        port:35729
    });
});

gulp.task('html', function () {
    console.log('html changed do a reload')
    gulp.src('*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    console.log('watching');
    gulp.watch(['*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);