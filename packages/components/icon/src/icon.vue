<script setup lang="ts">
import { defineProps, defineOptions, withDefaults } from "vue";
import { IconProps } from "./icon";
const props = withDefaults(defineProps<IconProps>(), {
  size: "default",
  color: "red",
});
defineOptions({
  name: "ZIcon",
  // inheritAttrs: false,
});
</script>

<template>
  <i :style="[{ fontSize: size + 'px' }, { color: color }]"></i>
</template>
