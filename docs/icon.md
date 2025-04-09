# icon 组件

## icon 组件

icon 组件用于展示图标，支持多种图标库和自定义图标。

## 基础用法

```vue
<template>
  <ZIcon name="icon-name" />
</template>
```

## 属性

| 属性名 | 类型   | 默认值  | 说明                                     |
| ------ | ------ | ------- | ---------------------------------------- |
| name   | string | -       | 图标名称，支持多种图标库和自定义图标     |
| size   | string | default | 图标大小，支持 px、em、rem 等单位        |
| color  | string | #ccc    | 图标颜色，支持十六进制、RGB、RGBA 等格式 |
