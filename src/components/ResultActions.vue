<template>
  <div class="actions flex justify-between mt-5 card p-2">
    <div class="col-6 px-0 flex justify-start" v-if="showPlayAgain">
      <button
        class="btn flex flex-col items-center justify-center"
        id="navToStart"
        @click="navToStart"
      >
        <img src="@/assets/img/svg/iconPlayAgain.svg" width="45" height="45" class="" />
        <small class="py-2">{{ translation[lang].playAgain }}</small>
      </button>
    </div>
    <div class="col-6 px-0 flex justify-content-end" v-if="showViewAnswers">
      <button
        class="btn flex flex-col items-center justify-center"
        id="navToDetailedResults"
        @click="navToDetailedResults"
      >
        <img src="@/assets/img/svg/iconReview.svg" width="45" height="45" class="" />
        <small class="py-2">{{ translation[lang].viewAnswers }}</small>
      </button>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { translation } from '../constants'
import { useTriviaStore } from '@/stores/trivia'
const triviaStore = useTriviaStore()

const emit = defineEmits(['navToStart', 'navToDetailedResults'])
defineProps({
  showPlayAgain: {
    type: Boolean,
    default: true
  },
  showViewAnswers: {
    type: Boolean,
    default: true
  }
})

const lang = computed(() => {
  return triviaStore.selectedLanguage
})

function navToStart() {
  emit('navToStart')
}

function navToDetailedResults() {
  emit('navToDetailedResults')
}
</script>
