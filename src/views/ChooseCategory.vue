<script setup>
import Category from '../components/Category.vue'
import Title from '../components/Title.vue'
import { reactive } from 'vue'
import { useTriviaStore } from '../stores/trivia'
import { pages } from '../constants'
const triviaStore = useTriviaStore()

const quiz = reactive({
  categories: [
    {
      key: 'film/series',
      title: 'Film / Series'
    },
    {
      key: 'gastronomy',
      title: 'Gastronomy'
    },
    {
      key: 'history',
      title: 'History'
    },
    {
      key: 'science',
      title: 'Science'
    },
    {
      key: 'Sport',
      title: 'Sport'
    },
    {
      key: 'mixed',
      title: 'Mixed'
    }
  ]
})

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
  <Title :title="`Please choose category`" />
  <main class="pt-5">
    <div class="categories flex flex-wrap card p-2">
      <Category
        :key="category.key"
        v-for="category in quiz.categories"
        :category="category.title"
        :categoryId="category.key"
        @on-select-category="handleSelectCategory"
      />
    </div>
  </main>
</template>

<style scoped></style>
