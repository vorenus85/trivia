<template>
  <div class="result-item col-6 flex">
    <div class="result-item-left pt-1 pr-2">
      <div class="indicator-circle" :class="`bg-${color}`"></div>
    </div>
    <div class="result-item-right flex flex-column">
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
  background: #fff;
  border-radius: 100%;
  display: block;
}
</style>
