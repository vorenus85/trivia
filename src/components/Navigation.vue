<template>
  <button class="navigation flex absolute" @click="navBack(navTo)">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 17.5L3 12L9 6.5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 12H21"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>
<script setup>
import { useTriviaStore } from '@/stores/trivia'
const triviaStore = useTriviaStore()

defineProps({ navTo: String })

function navBack(navTo) {
  triviaStore.setPage(navTo)
}
</script>
<style lang="scss" scoped>
.navigation {
  transform: translateY(-110px);
  background: #fff;
  border-radius: 6px;
  padding: 8px;
  color: var(--text-color);
  transition: all 0.2s;

  &:hover {
    box-shadow:
      0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px -1px rgba(0, 0, 0, 0.1);
  }
}
</style>
