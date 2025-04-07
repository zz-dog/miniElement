// 用于打包utils,hooks,...
import { dest, series, src, parallel } from "gulp";
import { buildConfig } from "./utils/config";
import path, { resolve } from "path";
import { projectRoot } from "./utils/paths";
import ts from "gulp-typescript";
import { withTashName } from "./utils";
export const buildPackages = (dirname: string, filename: string) => {
  const tasks = Object.entries(buildConfig).map(([module, config]) => {
    const tsConfig = resolve(projectRoot, "./tsconfig.json"); // tsconfig.json的路径
    const inputs = ["**/*.ts", "!node_modules/**/*", "!gulpfile.ts"];
    const output = path.resolve(dirname, "./dist", config.output.name);
    return series(
      withTashName(`build:${filename}`, () => {
        return src(inputs)
          .pipe(
            ts.createProject(tsConfig, {
              declaration: true,
              strict: true,
              module: config.module,
            })()
          )
          .pipe(dest(output));
      }),
      withTashName(`copy:${filename}`, () => {
        return src(resolve(`${output}/**`)) // 读取文件
          .pipe(dest(resolve(config.output.path, filename))); // 输出文件到指定目录
      })
    );
  });
  return parallel(tasks);
};

export * from "./build-component";
