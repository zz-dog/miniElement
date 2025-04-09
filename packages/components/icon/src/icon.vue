<script setup lang="ts">
import { defineProps, defineOptions, withDefaults, computed } from "vue";
import { IconProps } from "./icon";
import { createBEM } from "@z/utils";
const props = withDefaults(defineProps<IconProps>(), {
  size: "default",
  color: "red",
});
defineOptions({
  name: "ZIcon",
});
const bem = createBEM("icon");
const sizeClass = bem.bm(props.size);
const nameClass = bem.b() + "-" + props.name;
</script>

<template>
  <i
    :class="sizeClass + ' ' + nameClass"
    :style="{ color: color }"
  >
    <slot></slot>
  </i>
</template>
