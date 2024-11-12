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
  triviaStore.setDifficulty(difficulty.key)
  triviaStore.setTimePerAnswer(difficulty.time)
  triviaStore.setQuestionsAmount(difficulty.questions)
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
