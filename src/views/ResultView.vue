<template>
  <div class="result-vew">
    <PageTitle title="Your Score" class="text-md text-primary">
      <template #counter>
        <CircleProgressBar
          :value="correctAnswers"
          :max="totalQuestions"
          :size="110"
          :colorFilled="colorUnfilled"
          :colorUnfilled="colorUnfilled"
          strokeWidth="8px"
          :startAngle="0"
          :rounded="true"
          :reversedFilling="false"
          class="progress absolute"
          ><span class="font-bold text-primary text-lg">{{ score }}<small>pt</small></span>
        </CircleProgressBar>
      </template>
    </PageTitle>
    <main class="pt-5">
      <div class="results flex flex-wrap card p-1">
        <ResultItem :value="completedAnswers + `%`" title="Completion" color="primary" />
        <ResultItem :value="totalQuestions" title="Total Question" color="primary" />
        <ResultItem :value="correctAnswers" title="Correct" color="green-500" />
        <ResultItem :value="wrongAnswers" title="Wrong" color="red-500" />
      </div>

      <div class="actions flex flex-wrap mt-5 card p-2">
        <div class="col-6 px-0 flex justify-content-start">
          <button
            class="btn flex flex-column align-items-center justify-content-center"
            @click="navToStart"
          >
            <img src="@/assets/img/svg/iconPlayAgain.svg" width="45" height="45" class="" />
            <small class="py-2">Play again</small>
          </button>
        </div>
        <div class="col-6 px-0 flex justify-content-end">
          <button
            class="btn flex flex-column align-items-center justify-content-center"
            @click="navToDetailedResults"
          >
            <img src="@/assets/img/svg/iconReview.svg" width="45" height="45" class="" />
            <small class="py-2">View Answers</small>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import PageTitle from '@/components/PageTitle.vue'
import { CircleProgressBar } from 'circle-progress.vue'
import { useTriviaStore } from '@/stores/trivia'
import { computed, ref } from 'vue'
import ResultItem from '@/components/ResultItem.vue'
const colorUnfilled = ref('#6a5ae0')
const triviaStore = useTriviaStore()

const completedAnswers = computed(() => {
  const emptyAnswers = triviaStore.answers.filter((item) => item === '')
  let result = 100 - (parseInt(emptyAnswers.length) / parseInt(triviaStore.questionsAmount)) * 100
  return Math.round(result)
})

const totalQuestions = computed(() => {
  return triviaStore.questionsAmount
})

const correctAnswers = computed(() => {
  let amountOfCorrectAnswers = 0
  triviaStore.questions.forEach((element, index) => {
    if (element.correct_answer === triviaStore.answers[index]) {
      amountOfCorrectAnswers++
    }
  })
  return amountOfCorrectAnswers
})
const wrongAnswers = computed(() => {
  return totalQuestions.value - correctAnswers.value
})

const score = computed(() => {
  const result = (correctAnswers.value / totalQuestions.value) * 100
  return Math.round(result)
})

function navToStart() {
  triviaStore.setPage('START')
  triviaStore.initNewGame()
}

function navToDetailedResults() {
  triviaStore.setPage('DETAILED_RESULTS')
}
</script>
<style scoped>
.result-vew .page-title:before {
  width: 120px;
  height: 120px;
  top: -90px;
  left: calc(50% - 60px);
}

.progress {
  top: -86px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
