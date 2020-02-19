const gulp = require("gulp");
const browserSync = require("browser-sync");
const babel = require("gulp-babel");

const copy = () => {
  return gulp
    .src([
      "app/*.html",
      "app/**/*.jpg",
      "app/**/*.css" //"app/**/*.js"
    ])
    .pipe(gulp.dest("build"));
};

const serve = () => {
  return browserSync.init({
    server: "build",
    open: false,
    port: 3000
  });
};

const processJs = () => {
  return gulp
    .src("app/scripts/*.js")
    .pipe(babel({ presets: ["env"] }))
    .pipe(gulp.dest("build/scripts"));
};

gulp.task("processJs", processJs);

gulp.task("buildAndServe", gulp.series(copy, serve));
