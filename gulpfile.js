var gulp = require('gulp');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var less = require('gulp-less');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync').create();

gulp.task('js', function(){
    gulp.src('my_components/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('css', function(){
    gulp.src('./my_components/*.css')
        .pipe(less())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('injects', function(){
	gulp.src('./index.html')
		.pipe(inject(gulp.src("./**/*.*", { read: false, cwd: __dirname + '/build' })))
        .pipe(wiredep())
		.pipe(gulp.dest('./build'));
});

gulp.task('browser-sync', ['js', 'css', 'injects'], function(){ 
    browserSync.init({
		server: {
			baseDir: './build',
            routes: {
                "/bower_components": "bower_components"
            }
		}
	});
	gulp.watch('index.html', ['injects'], browserSync.reload());
	gulp.watch('my_components/*.css', ['css'], browserSync.reload());
    gulp.watch('my_components/*.js', ['js'], browserSync.reload());
});

gulp.task('default', ['browser-sync'], function(){});
