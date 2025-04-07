import { dest, series, src } from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import { resolve } from "path";
const compile = () => {
  const sass = gulpSass(dartSass);

  return src(resolve(__dirname, "./src/*.scss"))
    .pipe(sass.sync())
    .pipe(dest(resolve(__dirname, "./dist/css")));
};
const copyFonts = () => {
  return src(resolve(__dirname, "./src/fonts/*")).pipe(
    dest(resolve(__dirname, "./dist/fonts"))
  );
};

const copyfullStyle = () => {
  return src(resolve(__dirname, "./dist/**")).pipe(
    dest(resolve(__dirname, "../../dist/theme-chalk"))
  );
};
export default series(compile, copyFonts, copyfullStyle);
