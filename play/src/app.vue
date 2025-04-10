<script setup lang="ts">
import { ref } from "vue";
const flag = ref(false);
const onclick = () => {
  console.log("click");
};
</script>

<template>
  <ZButton
    disabled
    size="small"
    @click="onclick"
  >
    click
  </ZButton>
  <ZButton
    @click="onclick"
    size="default"
  >
    click
  </ZButton>
  <ZButton size="large"> click </ZButton>
</template>
