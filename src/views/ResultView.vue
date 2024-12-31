<template>
  <div class="result-view">
    <PageTitle :title="translation[lang].yourScore">
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
      <div class="results grid grid-cols-2 card gap-2">
        <ResultItem
          :value="completedAnswers + `%`"
          :title="translation[lang].completion"
          color="primary"
        />
        <ResultItem
          :value="totalQuestions"
          :title="translation[lang].totalQuestion"
          color="primary"
        />
        <ResultItem :value="correctAnswers" :title="translation[lang].correct" color="success" />
        <ResultItem :value="wrongAnswers" :title="translation[lang].wrong" color="danger" />
      </div>
      <ResultActions @navToStart="onNavToStart" @navToDetailedResults="onNavToDetailedResults" />
    </main>
  </div>
</template>
<script setup>
import PageTitle from '@/components/PageTitle.vue'
import { CircleProgressBar } from 'circle-progress.vue'
import { useTriviaStore } from '@/stores/trivia'
import { computed, onMounted, ref } from 'vue'
import ResultItem from '@/components/ResultItem.vue'
import ResultActions from '@/components/ResultActions.vue'
import { translation } from '../constants'

const colorUnfilled = ref('#6a5ae0')
const triviaStore = useTriviaStore()

const lang = computed(() => {
  return triviaStore.selectedLanguage
})

const completedAnswers = computed(() => {
  const emptyAnswers = triviaStore.answers.filter((item) => item === '')
  let result = 100 - (parseInt(emptyAnswers.length) / parseInt(triviaStore.questionsAmount)) * 100
  result = Math.round(result)
  triviaStore.setCompletion(result)
  return result
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
  triviaStore.setCorrectAnswers(amountOfCorrectAnswers)
  return amountOfCorrectAnswers
})
const wrongAnswers = computed(() => {
  const result = totalQuestions.value - correctAnswers.value
  triviaStore.setWrongAnswers(result)
  return result
})

const score = computed(() => {
  let result = (correctAnswers.value / totalQuestions.value) * 100
  result = Math.round(result)
  triviaStore.setScore(result)
  return result
})

const onNavToStart = function () {
  triviaStore.setPage('CATEGORY')
  triviaStore.initNewGame()
}

const onNavToDetailedResults = function () {
  triviaStore.setPage('DETAILED_RESULTS')
}

onMounted(() => {
  // remove completed trivia from sessionStorage
  const completedTrivia =
    triviaStore.categoryId + '-' + triviaStore.language + '-' + triviaStore.difficulty
  sessionStorage.removeItem(completedTrivia)
})
</script>
<style scoped>
.result-view .page-title:before {
  width: 120px;
  height: 120px;
  top: -90px;
  left: calc(50% - 60px);
}

.progress {
  position: absolute;
  top: -86px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
