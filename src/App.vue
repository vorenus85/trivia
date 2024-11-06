<script setup>
import CategoryList from './views/CategoryList.vue'
import Header from './components/Header.vue'
import { useTriviaStore } from '@/stores/trivia'
const triviaStore = useTriviaStore()
</script>

<template>
  <div class="centered-content">
    <Header />
    <div class="container ml-auto mr-auto p-3 content">
      <CategoryList v-if="triviaStore.activePage === 'START'" />
      <PageDifficulty v-if="triviaStore.activePage === 'DIFFICULTY'" />
      <PageQuestions v-if="triviaStore.activePage === 'QUESTIONS'" />
      <PageResult v-if="triviaStore.activePage === 'RESULT'" />
      <PageDetailedResult v-if="triviaStore.activePage === 'DETAILED_RESULTS'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.centered-content {
  display: flex;
  height: calc(100vh - 2rem);
  align-items: center;
  padding: 1rem;
  flex-direction: column;
  overflow: hidden;
}

.content {
  height: 60vh;
  margin-top: -3rem;
  position: relative;
}
</style>
