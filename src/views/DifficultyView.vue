<script setup>
import Navigation from '@/components/Navigation.vue'
import PageTitle from '@/components/PageTitle.vue'
import { useTriviaStore } from '@/stores/trivia'
import { pages, difficulties } from '../constants'
import SelectButton from '@/components/SelectButton.vue'

const triviaStore = useTriviaStore()

function navBack() {
  triviaStore.setPage('START')
}

function handleSelectDifficulty(difficulty) {
  setDifficulty(difficulty.key)
  setTimePerAnswer(difficulty.time)
  showQuestionsPage()
}

function setDifficulty(id) {
  triviaStore.setDifficulty(id)
}

function setTimePerAnswer(value) {
  triviaStore.setTimePerAnswer(value)
}

function showQuestionsPage() {
  triviaStore.setPage(pages.questions)
}
</script>

<template>
  <Navigation @click="navBack" />
  <PageTitle :title="`Please choose difficulty`" />
  <main class="pt-5">
    <div class="difficulties flex flex-wrap card p-1">
      <SelectButton
        :key="difficulty.key"
        v-for="difficulty in difficulties"
        :title="difficulty.title"
        :id="difficulty.key"
        @on-select="handleSelectDifficulty(difficulty)"
        :hint="`Get ${difficulty.questions} questions, each with ${difficulty.time} seconds to answer.`"
        size="full"
      />
    </div>
  </main>
</template>
