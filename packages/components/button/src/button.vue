<script setup lang="ts">
import { defineProps, withDefaults, defineOptions } from "vue";
import type { ButtonProps } from "./button";
import { createBEM } from "@z/utils";

defineOptions({
  name: "ZButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  type: "primary",
  size: "default",
  disabled: false,
  loading: false,
});
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
  >
    <slot></slot>
  </button>
</template>
