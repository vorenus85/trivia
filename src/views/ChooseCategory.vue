<script setup>
import Category from '../components/Category.vue'
import Title from '../components/Title.vue'
import { reactive } from 'vue'
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
</script>

<template>
  <Title :title="`Please choose category`" />
  <main class="pt-5">
    <div class="categories flex flex-wrap card p-2">
      <Category
        :key="category.key"
        v-for="category in quiz.categories"
        :category="category.title"
      />
    </div>
  </main>
</template>

<style scoped></style>
