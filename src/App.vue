<script setup>
import CategoryView from './views/CategoryView.vue'
import Header from './components/Header.vue'
import { useTriviaStore } from '@/stores/trivia'
import Logo from './components/Logo.vue'
import DifficultyView from './views/DifficultyView.vue'
import QuestionsView from './views/QuestionsView.vue'
import ResultView from './views/ResultView.vue'
import DetailedResultsView from './views/DetailedResultsView.vue'
import LanguageView from './views/LanguageView.vue'
const triviaStore = useTriviaStore()
</script>

<template>
  <div class="centered-content">
    <Logo />
    <Header />
    <div class="ml-auto mr-auto p-2 content w-full">
      <LanguageView v-if="triviaStore.activePage === 'LANGUAGE'" />
      <CategoryView v-if="triviaStore.activePage === 'CATEGORY'" />
      <DifficultyView v-if="triviaStore.activePage === 'DIFFICULTY'" />
      <QuestionsView v-if="triviaStore.activePage === 'QUESTIONS'" />
      <ResultView v-if="triviaStore.activePage === 'RESULT'" />
      <DetailedResultsView v-if="triviaStore.activePage === 'DETAILED_RESULTS'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.centered-content {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  flex-direction: column;
  overflow: hidden;
}

@media (min-width: 992px) {
  .centered-content {
    overflow: visible;
    max-width: 750px;
    margin: 0 auto;
  }
}

.content {
  min-height: 60vh;
  margin-top: -3rem;
  position: relative;
}
</style>
