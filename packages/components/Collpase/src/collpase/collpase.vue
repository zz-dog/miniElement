<script setup lang="ts">
import type {
  CollpaseProps,
  CollpaseEmits,
  CollpaseItemName,
} from "../collpase";
import { COLLPASE_CTX_KEY } from "../constacts";
import { createBEM } from "@z/utils";
import { defineOptions, inject, defineProps, ref, watch, provide } from "vue";
defineOptions({
  name: "ZCollpase",
});
const props = defineProps<CollpaseProps>();
const emits = defineEmits<CollpaseEmits>();
const activeNames = ref(props.modelValue || []);
const bem = createBEM("collapse");
const blockClass = bem.b();

const handleItemClick = (item: CollpaseItemName) => {
  let _activeNames = [...activeNames.value];
  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? "" : item];
  }
  const index = _activeNames.indexOf(item);
  if (index > -1) {
    _activeNames.splice(index, 1);
  } else {
    _activeNames.push(item);
  }
  updateActiveNames(_activeNames);
};
const updateActiveNames = (newNames: CollpaseItemName[]) => {
  activeNames.value = newNames;
  emits("update:modelValue", newNames);
  emits("change", newNames);
};
watch(
  () => props.modelValue,
  (newVal) => {
    activeNames.value = newVal;
  }
);

provide(COLLPASE_CTX_KEY, {
  activeNames,
  handleItemClick,
});
</script>

<template>
  <div :class="[blockClass]">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use "./collpase.scss";
</style>
