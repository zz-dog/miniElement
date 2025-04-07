import { series } from "gulp";
import { run, withTashName } from "./utils";
export default series(
  withTashName("clean", async () => {
    await run("rmdir dist /s /q");
  }),
  withTashName("buildPackages", async () => {
    await run("pnpm run  --filter @z/theme-chalk  build");
    await run("pnpm run  --filter @z/utils  build");
  })
);
