<script setup>
import SelectButton from '../components/SelectButton.vue'
import PageTitle from '../components/PageTitle.vue'
import { useTriviaStore } from '../stores/trivia'
import { pages, categories, translation } from '../constants'
import { computed } from 'vue'
import Navigation from '@/components/Navigation.vue'
const triviaStore = useTriviaStore()
const navTo = 'LANGUAGE'
const lang = computed(() => {
  return triviaStore.selectedLanguage
})

function handleSelectCategory(category) {
  triviaStore.setCategory(category)
  triviaStore.setPage(pages.difficulty)
}
</script>

<template>
  <Navigation :navTo="navTo" />
  <PageTitle :title="translation[lang].chooseCategory" />
  <main class="pt-5">
    <div class="categories grid grid-cols-2 card gap-2">
      <SelectButton
        :key="category.key"
        v-for="category in categories"
        :title="translation[lang][category.key]"
        :id="category.key"
        @click="handleSelectCategory({ id: category.id, title: translation[lang][category.key] })"
      />
    </div>
  </main>
  <div class="mt-5 card p-5"></div>
</template>

<style scoped></style>
