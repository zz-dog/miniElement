export const withTashName = <T>(name: string, fn: T) => {
  return Object.assign(fn, { displayName: name });
};

import { spawn } from "child_process";
import { projectRoot } from "./paths";
//在node中起一个子进程
export const run = async (command: string) => {
  return new Promise((resolve, reject) => {
    const [cmd, ...args] = command.split(" ");
    const app = spawn(cmd, args, {
      cwd: projectRoot,
      stdio: "inherit", // inherit 继承父进程的输入输出流
      shell: true, // 在shell中运行命令
    });
    app.on("close", resolve);
    app.on("error", reject); // 捕获错误
  });
};
