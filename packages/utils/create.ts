// BEM 规范
// block,element,modifier,state
// 1. block: 组件名称，表示一个独立的功能模块
// 2. element: 组件的子元素，表示组件内部的结构和组成部分
// 3. modifier: 组件的不同状态或变体，表示组件的不同外观或行为
// 4. state: 组件的状态，表示组件在不同情况下的表现和交互

const createNamespace = (name: string) => {
  const prefixedName = `z-${name}`; // 添加前缀
  return;
};
const _bem = (
  prefixedName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  // z-button__text--primary
  if (blockSuffix) {
    prefixedName += `-${blockSuffix}`; // 添加块后缀
  }
  if (element) {
    prefixedName += `__${element}`; // 添加元素
  }
  if (modifier) {
    prefixedName += `--${modifier}`; // 添加修饰符
  }
  return prefixedName; // 返回 BEM 类名
};
export const createBEM = (prefixedName: string) => {
  const b = (blockSuffix: string) => _bem(prefixedName, blockSuffix, "", "");
  const e = (element: string, blockSuffix: string) =>
    _bem(prefixedName, blockSuffix, element, "");
  const m = (modifier: string, blockSuffix: string) =>
    _bem(prefixedName, blockSuffix, "", modifier);
  const be = (blockSuffix: string, element: string) =>
    _bem(prefixedName, blockSuffix, element, "");
  const em = (element: string, modifier: string) =>
    _bem(prefixedName, "", element, modifier);
  const bm = (blockSuffix: string, modifier: string) =>
    _bem(prefixedName, blockSuffix, "", modifier);
  const bem = (blockSuffix: string, element: string, modifier: string) =>
    _bem(prefixedName, blockSuffix, element, modifier);
  const is = (name: string, state: boolean) => (state ? `is-${name}` : "");
  return {
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
  };
};
