<template>
  <Navigation @click="navBack" />
  <PageTitle :value="loading" :title="activeQuestion.question">
    <template #question>
      <div class="question-counter text-primary mb-4 text-center">
        <strong>{{ triviaStore.categoryTitle }}</strong>
        <div>
          {{ translation[lang].question }} {{ activeQuestionIndex + 1 }}/{{ questionsAmount }}
        </div>
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
    <div class="answers grid grid-cols-2 card gap-2">
      <SelectButton
        :key="answer"
        v-for="answer in activeAnswers"
        :title="answer"
        :value="loading"
        :id="answer"
        @on-select="handleSelectAnswer(answer)"
      />
    </div>
  </main>
  <div class="mt-5 card p-5"></div>
</template>
<script setup>
import { CircleProgressBar } from 'circle-progress.vue'
import Navigation from '@/components/Navigation.vue'
import PageTitle from '@/components/PageTitle.vue'
import SelectButton from '@/components/SelectButton.vue'
import { useTriviaStore } from '@/stores/trivia'
import { translation } from '../constants'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const triviaStore = useTriviaStore()
const lang = computed(() => {
  return triviaStore.selectedLanguage
})
const questions = ref([])
const activeQuestionIndex = ref(0)
const activeQuestion = ref({ question: '' })
const activeAnswers = ref(['', '', '', ''])
const loading = ref(true)
const error = ref(null)
const colorUnfilled = ref('#6a5ae0')
const counter = ref(triviaStore.selectedTime)
const questionsAmount = ref(triviaStore.selectedQuestionsAmount)
let timeoutId = null // Variable to hold the timeout ID

const fetchQuestions = async () => {
  loading.value = true
  const language = triviaStore.selectedLanguage
  const categoryId = triviaStore.selectedCategoryId
  const difficulty = triviaStore.selectedDifficulty
  const amount = questionsAmount.value

  const cacheKey = `${categoryId}-${language}-${difficulty}`
  const cachedQuestions = sessionStorage.getItem(cacheKey)

  if (cachedQuestions) {
    triviaStore.setQuestions(JSON.parse(cachedQuestions))
    questions.value = JSON.parse(cachedQuestions)
    loading.value = false
    return
  }

  try {
    const apiUrl =
      import.meta.env.VITE_API_URL +
      `${language}/?amount=${amount}&categoryId=${categoryId}&difficulty=${difficulty}`
    console.log(apiUrl)
    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error('Failed to load trivias')
    }

    const data = await response.json()
    data.results.map((item) => {
      const answers = [item.correct_answer, ...item.incorrect_answers]
      return (item.answers = shuffleAnswers(answers))
    })
    questions.value = data.results
    triviaStore.setQuestions(data.results)
    sessionStorage.setItem(cacheKey, JSON.stringify(data.results))
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
  if (index === questionsAmount.value) {
    triviaStore.setPage('RESULT')
    return
  }

  if (!questions.value.length) {
    return
  }

  activeQuestion.value = questions.value[index]
  activeQuestionIndex.value = index
  activeAnswers.value = activeQuestion.value.answers
}

function shuffleAnswers(answers) {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[answers[i], answers[j]] = [answers[j], answers[i]]
  }
  return answers
}

function handleSelectAnswer(answer) {
  clearTimeout(timeoutId) // Clear the current timer when an answer is selected
  triviaStore.setAnswer(answer)
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
    triviaStore.setAnswer('')
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
<style scoped>
.circle-progress {
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
