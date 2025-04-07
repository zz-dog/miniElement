import type { App, Component, Plugin } from "vue";

type SFCWithInstall<T> = T & Plugin;

// 组件循环注册
// 组件循环注册函数，接收一个组件数组，返回一个安装函数
export const makeInstaller = (components: Component[]) => {
  const installer = (app: App) => {
    return components.forEach((component) => {
      return app.component(component.name!, component);
    });
  };
  return installer;
};

//用于将组件注册为插件
export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    app.component((component as Component).name!, component as Component);
  };
  return component as SFCWithInstall<T>;
};

export * from "./create";
