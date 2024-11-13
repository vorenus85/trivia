<template>
  <Navigation @click="navBack" />
  <PageTitle :title="`Detailed results`" />
</template>
<script setup>
import Navigation from '@/components/Navigation.vue'
import PageTitle from '@/components/PageTitle.vue'
import { useTriviaStore } from '@/stores/trivia'
const triviaStore = useTriviaStore()

function navBack() {
  triviaStore.setPage('RESULT')
}
</script>
