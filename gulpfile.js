var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task("styles", function(){
	gulp.src("frontend/css/master.scss")
		.pipe(sass())
		.pipe(gulp.dest('frontend/css'))
});



gulp.task('index-html', function buildHTML() {
  return gulp.src('frontend/*.pug')
  .pipe(pug({
    // Your options in here.
  }))
  .pipe(gulp.dest('frontend'))
});

gulp.task('views', function buildHTML(){
	return gulp.src('frontend/html/*.pug')
		.pipe(pug({

		}))
		.pipe(gulp.dest('frontend/html'))
});

gulp.task("watch", function(){
	gulp.watch("frontend/css/*.scss", ["styles"]);
	gulp.watch("frontend/*.pug", ["index-html"]);
	gulp.watch("frontend/*/*.pug", ["views"]);
})

gulp.task("default", ["index-html","views","styles","watch"]);
