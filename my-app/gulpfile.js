const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const rename = require('gulp-rename')
const browser = require('browser-sync').create()

gulp.task('sassToCSS', function(){
    return gulp.src('src/scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed'}).on('error',sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/'))
})


gulp.task('wathFiles', function(){
    gulp.watch('src/scss/*.scss', gulp.series('sassToCSS'))
})

gulp.task('default', gulp.parallel('wathFiles'))