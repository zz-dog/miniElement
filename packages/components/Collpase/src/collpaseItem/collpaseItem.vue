<script setup lang="ts">
import { COLLPASE_CTX_KEY } from "../constacts";
import { inject, defineProps, computed, defineOptions } from "vue";
import type { CollpaseItemProps } from "../collpase";
import { createBEM } from "@z/utils";
defineOptions({
  name: "ZCollpaseItem",
});
const props = defineProps<CollpaseItemProps>();
const ctx = inject(COLLPASE_CTX_KEY);

const isActive = computed(() => {
  return ctx?.activeNames.value.includes(props.name);
});
const handleClick = () => {
  if (props.disabled) return;
  ctx?.handleItemClick(props.name);
};
const bem = createBEM("collapse-item");
const blockClass = bem.b();
const titleClass = bem.e("title");
const contentClass = bem.e("content");
const activeClass = computed(() => {
  return bem.is("active", isActive.value || false);
});

console.log(activeClass.value);
</script>
<template>
  <div :class="[blockClass]">
    <div
      @click="handleClick"
      :class="titleClass"
    >
      <span>{{ props.title }}</span>
    </div>
    <div :class="[activeClass, contentClass]">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "./collpaseItem.scss";
</style>
