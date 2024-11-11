<script setup>
defineEmits(['onSelectCategory', 'submit'])
defineProps({
  category: {
    type: String,
    required: true
  },
  categoryId: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="category col-6">
    <div
      class="category-title ripple text-center p-2 border-round-lg border-1 border-solid border-primary flex-1 cursor-pointer min-h-full align-content-center"
      @click="$emit('onSelectCategory', categoryId)"
    >
      {{ category }}
    </div>
  </div>
</template>
<style scoped lang="scss">
.category {
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
}

.category-title {
  font-weight: 500;
}
</style>
