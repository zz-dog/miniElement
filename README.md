# 依赖安装

```
pnpm install
```

# 目录结构

```
├── build # 构建流程目录
├── packages #monorepo 项目目录
│ ├── elements # vue3 组件目录
│ ├── utils # 工具函数目录
│ ├── theme-chalk # 组件样式目录
├── docs #组件文档
├── play #组件测试目录
├── package.json、 # 依赖配置文件
├── pnpm-lock.yaml、 # 依赖锁定文件
├── README.md、 # 说明文档
├── tsconfig.json、 # ts 配置文件
```

# vue 内置 api

## defineProps

- 定义组件的 props，返回值是一个对象，包含所有 props 的值。

## defineOptions

- 定义组件的选项，返回值是一个对象，包含所有选项的值。
- name: 组件名称
- inheritAttrs: 是否继承父组件的属性，默认值为 true。

# scss 语法

## @use

- 模块化：@use 会将引入的文件作为一个模块，默认情况下其变量、函数和混入（mixin）是私有的，只有显式导出的内容可以使用。
- 命名空间：引入的文件会自动添加命名空间，避免变量或函数名冲突。
- 性能优化：@use 会确保文件只被加载一次，避免重复加载。
- 语法：@use '模块路径' as '别名';
- 例子：@use 'colors' as c;
- 使用：c.$color-name
- 注意：@use 引入的模块，默认是私有的，不能在全局使用。

## @import

- 全局作用域：@import 会将引入文件的所有内容直接导入到全局作用域，可能导致变量、函数或混入的命名冲突。
- 重复加载：如果多次使用 @import 引入同一个文件，文件会被重复加载，可能影响性能。
- 未来被废弃：@import 是旧的方式，Sass 官方建议使用 @use 和 @forward 替代。

## @forward

- @forward 用于将一个模块的内容重新导出（转发）给其他文件。
- 它不会直接将内容暴露到当前文件，而是将内容转发到引入当前文件的其他文件中。
- 适用场景：当你希望创建一个中间层模块，统一管理和转发多个模块的内容时。

## @at-root

- @at-root 用于在嵌套规则中跳出当前选择器的作用域，直接在根级别定义样式。

## &

- & 是 Sass 中的父选择器引用符号，用于在嵌套规则中引用当前选择器。
- 适用场景：当需要在嵌套规则中引用当前选择器时使用。

## 主题切换

- 定义多组 themes scss 变量
- 在[theme]循环 @each themes
- 通过切换 [theme] 实现 主题切换

# pnpm

## --filter

- 作用：用于筛选特定的工作区（workspace）包，执行命令时只针对匹配的包。
- 适用场景：在 Monorepo 项目中，选择性地对某些包执行命令。
- 用法：

```
  pnpm run build --filter ./packages
```

## -C

- 作用：切换到指定目录后再执行命令
- 适用场景：当需要在某个子目录中运行命令时使用。
- 用法：

```
 pnpm -C ./packages/elements run build
```

## --parallel

- --parallel：在 Monorepo 项目中，允许对多个包同时并行执行命令，而不是按顺序逐个执行。
- 适用场景：当需要提高执行效率时，尤其是多个包的构建或测试任务可以同时运行时。
- 用法：

```
pnpm run  --filter ./packages --parallel build
```
