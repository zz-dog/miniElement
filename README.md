# 依赖安装

```
pnpm install
```

# 目录结构

├── README.md、 # 说明文档
├── pnpm-lock.yaml、 # 依赖锁定文件
├── package.json、 # 依赖配置文件
├── tsconfig.json、 # ts 配置文件
├── play #组件测试目录
├── packages #monorepo 项目目录
│ ├── elements # vue3 组件目录
│ ├── utils # 工具函数目录
│ ├── theme-chalk # 组件样式目录

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
