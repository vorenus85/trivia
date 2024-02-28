<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="category col-6">
    <div
      class="category-title ripple text-center p-3 border-round-sm bg-primary font-bold flex-1 cursor-pointer"
    >
      {{ title }}
    </div>
  </div>
</template>
<style scoped lang="scss">
.category {
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
