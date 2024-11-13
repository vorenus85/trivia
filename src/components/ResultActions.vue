<template>
  <div class="actions flex justify-between mt-5 card p-2">
    <div class="col-6 px-0 flex justify-start" v-if="showPlayAgain">
      <button class="btn flex flex-col items-center justify-center" @click="navToStart">
        <img src="@/assets/img/svg/iconPlayAgain.svg" width="45" height="45" class="" />
        <small class="py-2">Play again</small>
      </button>
    </div>
    <div class="col-6 px-0 flex justify-content-end" v-if="showViewAnswers">
      <button class="btn flex flex-col items-center justify-center" @click="navToDetailedResults">
        <img src="@/assets/img/svg/iconReview.svg" width="45" height="45" class="" />
        <small class="py-2">View Answers</small>
      </button>
    </div>
  </div>
</template>
<script setup>
import { useTriviaStore } from '@/stores/trivia'

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

const triviaStore = useTriviaStore()

function navToStart() {
  triviaStore.setPage('START')
  triviaStore.initNewGame()
}

function navToDetailedResults() {
  triviaStore.setPage('DETAILED_RESULTS')
}
</script>
