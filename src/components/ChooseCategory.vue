<script setup>
import Category from './Category.vue'
import { reactive } from 'vue'
const quiz = reactive({
  categories: [
    {
      key: 'film/series',
      value: 'Film / Series'
    },
    {
      key: 'gastronomy',
      value: 'Gastronomy'
    },
    {
      key: 'history',
      value: 'History'
    },
    {
      key: 'science',
      value: 'Science'
    },
    {
      key: 'Sport',
      value: 'Sport'
    },
    {
      key: 'mixed',
      value: 'Mixed'
    }
  ]
})
</script>

<template>
  <header>
    <h3 class="text-4xl text-center mb-5">Choose a category</h3>
  </header>
  <main class="pt-5">
    <div class="categories flex flex-wrap card p-2">
      <Category :key="category.key" v-for="category in quiz.categories" :title="category.value" />
    </div>
  </main>
</template>

<style scoped></style>
