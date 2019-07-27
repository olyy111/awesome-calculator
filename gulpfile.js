// 获取 gulp
var gulp = require('gulp')
let rename = require("gulp-rename");
var uglify = require('gulp-uglify-es').default

// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('uglify', function (done) {
  gulp.src('lib/calculator.js')
    .pipe(rename('lib/calculator.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('.'))
  done()
})