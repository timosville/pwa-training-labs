const gulp = require("gulp");
const browserSync = require("browser-sync");

const copy = () => {
  return gulp
    .src(["app/*.html", "app/**/*.jpg", "app/**/*.css", "app/**/*.js"])
    .pipe(gulp.dest("build"));
};

const serve = () => {
  return browserSync.init({
    server: "build",
    open: false,
    port: 3000
  });
};

gulp.task("buildAndServe", gulp.series(copy, serve));
