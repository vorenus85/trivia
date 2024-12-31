<template>
  <PageTitle :title="translation[lang].chooseLanguage" />
  <main class="pt-5">
    <div class="languages grid grid-cols-2 card gap-8">
      <div class="language-item" @click="chooseLanguage('en')">
        <img src="@/assets/img/svg/gb.svg" width="100" height="50" class="w-full" />
      </div>
      <div class="language-item" @click="chooseLanguage('hu')">
        <img src="@/assets/img/svg/hu.svg" width="100" height="50" class="w-full" />
      </div>
    </div>
    <div class="mt-5 card p-5"></div>
  </main>
</template>
<script setup>
import PageTitle from '@/components/PageTitle.vue'
import { useTriviaStore } from '@/stores/trivia'
import { pages, difficulties, translation } from '../constants'
import { computed } from 'vue'

const triviaStore = useTriviaStore()

const lang = computed(() => {
  return triviaStore.selectedLanguage
})

const chooseLanguage = (lang) => {
  triviaStore.setLanguage(lang)
  triviaStore.setPage('CATEGORY')
}
</script>
<style lang="scss">
.language-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
