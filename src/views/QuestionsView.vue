<template>
  <Navigation @click="navBack" />
  <PageTitle :value="loading" :title="`${activeQuestion.question}`" class="text-md">
    <template #questionCounter>
      <div class="question-counter text-primary mb-2 text-center">
        Question {{ activeQuestionIndex + 1 }}/10
      </div>
    </template>
    <template #counter>
      <CircleProgressBar
        :value="counter"
        :max="triviaStore.selectedTime"
        :size="54"
        :colorFilled="colorUnfilled"
        :colorUnfilled="colorUnfilled"
        strokeWidth="10px"
        :startAngle="0"
        :rounded="true"
        :reversedFilling="true"
        class="progress absolute"
        ><span class="font-bold text-primary">{{ counter }}</span>
      </CircleProgressBar>
    </template>
  </PageTitle>
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
<script setup>
import { CircleProgressBar } from 'circle-progress.vue'
import Navigation from '@/components/Navigation.vue'
import PageTitle from '@/components/PageTitle.vue'
import SelectButton from '@/components/SelectButton.vue'
import { useTriviaStore } from '@/stores/trivia'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const triviaStore = useTriviaStore()
const questions = ref([])
const activeQuestionIndex = ref(0)
const activeQuestion = ref({ question: '' })
const activeAnswers = ref(['', '', '', ''])
const loading = ref(true)
const error = ref(null)
const colorUnfilled = ref('#6a5ae0')
const counter = ref(triviaStore.selectedTime)
let timeoutId = null // Variable to hold the timeout ID

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

function navBack() {
  triviaStore.setPage('DIFFICULTY')
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
  clearTimeout(timeoutId) // Clear the current timer when an answer is selected
  const newIndex = activeQuestionIndex.value + 1
  getQuestion(newIndex)
  counter.value = triviaStore.selectedTime // Reset the counter
  countDownTimer() // Start a new timer
}

function countDownTimer() {
  if (counter.value > 0) {
    timeoutId = setTimeout(() => {
      counter.value -= 1
      countDownTimer()
    }, 1000)
  } else {
    counter.value = triviaStore.selectedTime
    const newIndex = activeQuestionIndex.value + 1
    getQuestion(newIndex)
    countDownTimer()
  }
}

// Clear timeout on component unmount
onBeforeUnmount(() => {
  clearTimeout(timeoutId)
})

onMounted(async () => {
  await fetchQuestions()
  getQuestion(0)
  countDownTimer()
})
</script>
<style lang="scss">
.progress {
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
