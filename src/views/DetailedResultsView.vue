<template>
  <div class="result-view">
    <Navigation @click="navBack" />
    <PageTitle :title="`Detailed results`">
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
          title="Completion"
          color="primary"
        />
        <ResultItem :value="triviaStore.questionsAmount" title="Total Question" color="primary" />
        <ResultItem :value="triviaStore.correctAnswers" title="Correct" color="success" />
        <ResultItem :value="triviaStore.wrongAnswers" title="Wrong" color="danger" />
      </div>
      <div class="detailed-results card">
        <DetailedResultItem
          v-for="(question, index) in triviaStore.questions"
          :key="question.question"
          :question="question"
          :index="index"
        />
      </div>
      <ResultActions :showViewAnswers="false" @navToStart="onNavToStart" />
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
import { ref } from 'vue'
const triviaStore = useTriviaStore()
const colorUnfilled = ref('#6a5ae0')

function navBack() {
  triviaStore.setPage('RESULT')
}

const onNavToStart = function () {
  triviaStore.setPage('START')
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

.progress {
  position: absolute;
  top: -86px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
