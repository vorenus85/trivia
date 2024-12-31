<template>
  <div class="result-view">
    <Navigation :navTo="navTo" />
    <PageTitle :title="translation[lang].detailedResult">
      <template #question> </template>
      <template #counter>
        <CircleProgressBar
          :value="triviaStore.correctAnswers"
          :max="triviaStore.questionsAmount"
          :size="110"
          :colorFilled="colorUnfilled"
          :colorUnfilled="colorUnfilled"
          strokeWidth="8px"
          :startAngle="0"
          :rounded="true"
          :reversedFilling="false"
          class="progress absolute"
          ><span class="font-bold text-primary text-lg"
            >{{ triviaStore.score }}<small>pt</small></span
          >
        </CircleProgressBar>
      </template>
    </PageTitle>

    <main class="pt-5">
      <div class="results grid grid-cols-2 card gap-2 mb-5">
        <ResultItem
          :value="triviaStore.completionPercent + `%`"
          :title="translation[lang].completion"
          color="primary"
        />
        <ResultItem
          :value="triviaStore.questionsAmount"
          :title="translation[lang].totalQuestion"
          color="primary"
        />
        <ResultItem
          :value="triviaStore.correctAnswers"
          :title="translation[lang].correct"
          color="success"
        />
        <ResultItem
          :value="triviaStore.wrongAnswers"
          :title="translation[lang].wrong"
          color="danger"
        />
      </div>
      <div class="detailed-results card">
        <DetailedResultItem
          v-for="(question, index) in triviaStore.questions"
          :key="question.question"
          :question="question"
          :index="index"
        />
      </div>
      <ResultActions :showViewAnswers="false" @navToStart="onNavToStart" class="mb-5" />
    </main>
  </div>
</template>
<script setup>
import DetailedResultItem from '@/components/DetailedResultItem.vue'
import { CircleProgressBar } from 'circle-progress.vue'
import Navigation from '@/components/Navigation.vue'
import PageTitle from '@/components/PageTitle.vue'
import ResultActions from '@/components/ResultActions.vue'
import ResultItem from '@/components/ResultItem.vue'
import { useTriviaStore } from '@/stores/trivia'
import { translation } from '../constants'
import { computed, ref } from 'vue'
const triviaStore = useTriviaStore()
const navTo = 'RESULT'
const lang = computed(() => {
  return triviaStore.selectedLanguage
})
const colorUnfilled = ref('#6a5ae0')

const onNavToStart = function () {
  triviaStore.setPage('CATEGORY')
  triviaStore.initNewGame()
}
</script>
<style scoped>
.result-view .page-title:before {
  width: 120px;
  height: 120px;
  top: -90px;
  left: calc(50% - 60px);
}

.detailed-results {
  padding: 0.75rem;
}

.progress {
  position: absolute;
  top: -86px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
