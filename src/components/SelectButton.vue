<script setup>
defineEmits(['onSelect'])
defineProps({
  title: {
    type: String,
    required: true
  },
  hint: {
    type: String
  },
  id: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'half'
  }
})
</script>
<template>
  <div class="select-button-wrapper col-6" :class="size === 'half' ? 'col-6' : 'col-12'">
    <div
      class="select-button ripple text-center p-2 border-round-lg border-1 border-solid flex-1 cursor-pointer min-h-full flex align-content-center justify-content-center"
      @click="$emit('onSelect', id)"
    >
      <div class="flex flex-column align-content-center justify-content-center">
        <span :class="hint?.length ? 'text-left' : ''">{{ title }}</span>
        <small
          class="pt-2 text-gray-700 font-normal"
          :class="hint?.length ? 'text-left' : ''"
          v-if="hint"
          >{{ hint }}</small
        >
      </div>

      <img
        src="@/assets/img/svg/iconArrow.svg"
        width="24"
        height="24"
        v-if="hint"
        class="my-auto"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.select-button-wrapper {
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.select-button {
  font-weight: 500;
  border-color: var(--accent-color);
  font-size: 0.875rem;
}

.text-accent {
  color: var(--accent-color);
}
</style>
