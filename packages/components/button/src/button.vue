<script setup lang="ts">
import { defineProps, withDefaults, defineOptions } from "vue";
import type { ButtonProps, ButtonEmits } from "./button";
import { createBEM } from "@z/utils";

defineOptions({
  name: "ZButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  type: "primary",
  size: "default",
  disabled: false,
});

const emits = defineEmits<ButtonEmits>();
const handleClick = (event: MouseEvent) => {
  if (props.disabled) return;
  emits("click", event);
};
const slots = defineSlots();
const bem = createBEM("button");
const blockClass = bem.b();
const typeClass = bem.bm(props.type);
const sizeClass = bem.bm(props.size);
const disabledClass = bem.is("disabled", props.disabled);
</script>

<template>
  <button
    :disabled="disabled"
    :class="[blockClass, typeClass, sizeClass, disabledClass]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
