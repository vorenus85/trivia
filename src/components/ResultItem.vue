<template>
  <div class="result-item w-full flex">
    <div class="result-item-left pt-2 pr-2">
      <div class="indicator-circle" :class="`bg-${color}`"></div>
    </div>
    <div class="result-item-right flex flex-col">
      <span class="font-medium text-lg" :class="`text-${color}`">{{ value }}</span>
      {{ title }}
    </div>
  </div>
</template>
<script setup>
defineProps({
  value: [String, Number],
  color: String,
  title: String
})
</script>
<style scoped>
.indicator-circle {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  display: block;
}
</style>
