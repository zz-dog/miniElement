import { outDir } from "./paths";
import { resolve } from "path";
export const buildConfig = {
  esm: {
    module: "ESNext",
    format: "esm",
    output: {
      name: "es",
      path: resolve(outDir, "es"),
    },
    bundle: {
      path: "z/es",
    },
  },
  cjs: {
    module: "CommentJS",
    format: "cjs",
    output: {
      name: "lib",
      path: resolve(outDir, "lib"),
    },
    bundle: {
      path: "z/lib",
    },
  },
};
