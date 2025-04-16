<script setup lang="ts">
const modelValue = ["test1", "test2"];
</script>

<template>
  <ZCollpase :modelValue>
    <ZCollpaseItem
      :title="name"
      :key="index"
      :name="name"
      v-for="(name, index) in modelValue"
    >
      <div>this is content</div>
    </ZCollpaseItem>
  </ZCollpase>
</template>
