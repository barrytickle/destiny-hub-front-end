var gulp = require('gulp'),
    notify = require('gulp-notify'),
    filter = require('gulp-filter'),
    sass = require('gulp-ruby-sass'),
    order = require('gulp-order'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    minify = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util'),
    rename = require('gulp-rename'),
    del = require('del');


gulp.task('clean', function(){
  notify({message: 'Clean initiated'});
  console.log('clean initiated');
  return del(['dist/css/**', 'app/css/**']);
});



  //SCCS Compile
  gulp.task('sass-list', () =>
      sass('app/scss/*.scss', {style: 'expanded'})
      .on('error', sass.logError)
      .pipe(gulp.dest('app/css/'), {overwrite: true})
      .pipe(notify({message: 'SCCS task complete innit!'}))
);

gulp.task('clean-js', function(){
    notify({
      message:'Javascript clean initiated'
    });
    return del(['dist/js/***']);
});



//minify CSS
  gulp.task('minify', function() {
    var cssFiles = ['app/css/*.css'];

   return gulp.src(cssFiles)
    .pipe(concat('main.css'))
    .pipe(minify())
    .pipe(gulp.dest('dist/css'), {overwrite: true})
    .pipe(notify({message: 'Task complete innit!'}));
  });

gulp.task('clean-then-sass', gulp.series('clean', 'sass-list', 'minify'));


//JS Files
  gulp.task('uglify', function() {
    var jsFiles = ['app/js/*.js'];

    return gulp.src(jsFiles)
    .pipe(order([
      'jquery.min.js',
      '*',
      'scripts.js'
    ]))
    .pipe(concat('main.js'))
    .pipe(uglify().on('error', util.log))
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({message: 'Task complete innit!'}));
  });

gulp.task('clean-then-uglify', gulp.series('clean-js', 'uglify'));

//watch
  gulp.task('watch', function() {

    //js files
    gulp.watch('app/js/*', gulp.series('clean-then-uglify'));

    //sass files
    gulp.watch('app/scss/**/*', gulp.series('clean-then-sass'));
  });

