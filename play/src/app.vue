<script setup lang="ts">
import { ref } from "vue";
const flag = ref(false);
const onclick = () => {
  if (flag.value) {
    window.document.documentElement.setAttribute("data-theme", "dark");
  } else {
    window.document.documentElement.setAttribute("data-theme", "light");
  }
  flag.value = !flag.value;
};
</script>

<template>
  <ZButton
    disabled
    size="small"
  >
    click
  </ZButton>
  <ZButton size="default"> click </ZButton>
  <ZButton size="large"> click </ZButton>
</template>
