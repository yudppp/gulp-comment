# gulp-comment

gulp-comment is a [gulp](https://github.com/wearefractal/gulp) plugin to comment.

Nothing is done. It just merely passes.


## use

#### unuse gulp-comment
```js
var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('default', function () {
    gulp.src(['index.js'])
        // use jshint
        .pipe(jshint())
        // use jshint-stylish
        // any comment...
        .pipe(jshint.reporter('jshint-stylish'));
});
```

#### **use gulp-comment**
```js
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var comment = require('gulp-comment');

gulp.task('default', function () {
    gulp.src(['index.js'])
        .pipe(comment('use jshint'))
        .pipe(jshint())
        .pipe(comment('use jshint-stylish'))
        .pipe(comment('any comment...'))
        .pipe(jshint.reporter('jshint-stylish'));
});
```
