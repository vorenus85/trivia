<script setup>
import Navigation from '@/components/Navigation.vue'
import PageTitle from '@/components/PageTitle.vue'
import SelectButton from '@/components/SelectButton.vue'
import { useTriviaStore } from '@/stores/trivia'
import { onMounted, ref } from 'vue'

const triviaStore = useTriviaStore()

function navBack() {
  triviaStore.setPage('DIFFICULTY')
}
const questions = ref([])
const activeQuestionIndex = ref(0)
const activeQuestion = ref({ question: '' })
const activeAnswers = ref(['', '', '', ''])
const loading = ref(true)
const error = ref(null)

const fetchQuestions = async () => {
  loading.value = true
  const category = triviaStore.selectedCategory
  const difficulty = triviaStore.selectedDifficulty

  const cacheKey = `${triviaStore.selectedCategory}-${triviaStore.selectedDifficulty}`
  const cachedQuestions = localStorage.getItem(cacheKey)

  if (cachedQuestions) {
    questions.value = JSON.parse(cachedQuestions)
    loading.value = false
    return
  }

  try {
    // https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple
    const apiUrl =
      import.meta.env.VITE_API_URL +
      `?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error('Failed to load trivias')
    }

    const data = await response.json()
    questions.value = data.results
    triviaStore.setQuestions(data.results)
    localStorage.setItem(cacheKey, JSON.stringify(data.results))
  } catch (error) {
    error.value = error.message
  } finally {
    loading.value = false
  }
}

function getQuestion(index) {
  if (!questions.value.length) {
    return
  }

  activeQuestion.value = questions.value[index]
  activeQuestionIndex.value = index
  const answers = [
    activeQuestion?.value?.correct_answer,
    ...activeQuestion?.value?.incorrect_answers
  ]
  activeAnswers.value = shuffleAnswers(answers)
}

function shuffleAnswers(answers) {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[answers[i], answers[j]] = [answers[j], answers[i]]
  }
  return answers
}

function handleSelectAnswer() {
  const newIndex = activeQuestionIndex.value + 1
  getQuestion(newIndex)
}

onMounted(async () => {
  await fetchQuestions()
  getQuestion(0)
})
</script>

<template>
  <Navigation @click="navBack" />
  <PageTitle :value="loading" :title="`${activeQuestion.question}`" class="text-md" />
  <main class="pt-5">
    <div class="answers flex flex-wrap card p-1">
      <SelectButton
        :key="answer"
        v-for="answer in activeAnswers"
        :title="answer"
        :value="loading"
        :id="answer"
        @on-select="handleSelectAnswer"
      />
    </div>
  </main>
</template>
