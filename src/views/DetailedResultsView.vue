<template>
  <Navigation @click="navBack" />
  <PageTitle :title="`Detailed results`">
    <template #question> </template>
  </PageTitle>
  <main class="pt-5">
    <div class="detailed-results card">
      <DetailedResultItem
        v-for="(question, index) in triviaStore.questions"
        :key="question.question"
        :question="question"
        :index="index"
      />
    </div>
  </main>
</template>
<script setup>
import DetailedResultItem from '@/components/DetailedResultItem.vue'
import Navigation from '@/components/Navigation.vue'
import PageTitle from '@/components/PageTitle.vue'
import { useTriviaStore } from '@/stores/trivia'
const triviaStore = useTriviaStore()

function navBack() {
  triviaStore.setPage('RESULT')
}
</script>
