<script setup>
import SelectButton from '../components/SelectButton.vue'
import PageTitle from '../components/PageTitle.vue'
import { useTriviaStore } from '../stores/trivia'
import { pages, categories } from '../constants'
const triviaStore = useTriviaStore()

function handleSelectCategory(categoryId) {
  setCategory(categoryId)
  showDifficultyPage()
}

function setCategory(categoryId) {
  triviaStore.setCategory(categoryId)
}

function showDifficultyPage() {
  triviaStore.setPage(pages.difficulty)
}
</script>

<template>
  <PageTitle :title="`Choose category`" />
  <main class="pt-5">
    <div class="categories grid grid-cols-2 card gap-2">
      <SelectButton
        :key="category.key"
        v-for="category in categories"
        :title="category.title"
        :id="category.key"
        @on-select="handleSelectCategory"
      />
    </div>
  </main>
</template>

<style scoped></style>
