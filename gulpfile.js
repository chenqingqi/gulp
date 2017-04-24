var gulp = require('gulp');

var concat = require('gulp-concat');

gulp.task('default', function() 
{
    /**
     * 将a.js和b.js合并为new.js，输出到src/js文件夹
     */
    gulp.src(['a.js','b.js']).pipe(concat('new.js')).pipe(gulp.dest('./'));

})