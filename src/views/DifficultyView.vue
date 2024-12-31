<script setup>
import Navigation from '@/components/Navigation.vue'
import PageTitle from '@/components/PageTitle.vue'
import { useTriviaStore } from '@/stores/trivia'
import { pages, difficulties, translation } from '../constants'
import SelectButton from '@/components/SelectButton.vue'
import { computed } from 'vue'

const triviaStore = useTriviaStore()

const lang = computed(() => {
  return triviaStore.selectedLanguage
})

function navBack() {
  triviaStore.setPage('CATEGORY')
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
  <PageTitle :title="translation[lang].chooseDifficulty" />
  <main class="pt-5">
    <div class="difficulties grid grid-cols-1 card gap-2">
      <SelectButton
        :key="difficulty.key"
        v-for="difficulty in difficulties"
        :title="translation[lang][difficulty.key]"
        :id="difficulty.key"
        @on-select="handleSelectDifficulty(difficulty)"
        :hint="
          translation[lang].difficultyHint
            .replace('[amount]', difficulty.questions)
            .replace('[time]', difficulty.time)
        "
        size="full"
      />
    </div>
  </main>
  <div class="mt-5 card p-5"></div>
</template>
