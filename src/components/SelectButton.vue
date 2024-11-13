<script setup>
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['onSelect'])
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: ''
  },
  hint: String,
  id: {
    type: String,
    required: true
  },
  value: {
    type: Boolean,
    default: false
  }
})

const handleClick = () => {
  emit('onSelect', props.id)
}
</script>

<template>
  <div :class="['select-button-wrapper bg-white', size]">
    <div
      class="select-button text-center p-2 cursor-pointer border-2 rounded-xl flex items-center justify-center w-full min-h-full"
      @click="handleClick"
    >
      <div class="text-content flex flex-col justify-center" :class="{ skeleton: value }">
        <span :class="{ 'text-left': hint }" v-html="title"></span>
        <small v-if="hint" class="pt-2 text-gray-700 font-normal text-left">
          {{ hint }}
        </small>
      </div>
      <img
        v-if="hint"
        src="@/assets/img/svg/iconArrow.svg"
        width="24"
        height="24"
        class="my-auto ml-2"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.select-button-wrapper {
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.small {
    min-height: 50px;
  }
}

.select-button {
  font-weight: 500;
  border-color: var(--accent-color);
  font-size: 0.875rem;

  &.small {
    font-size: 0.75rem;
  }
}

.text-content {
  text-align: center;
}

.skeleton {
  background-color: #f3f3f3;
}
</style>
