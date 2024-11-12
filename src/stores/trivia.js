import { defineStore } from 'pinia'

export const useTriviaStore = defineStore('trivia', {
  state: () => ({
    page: 'START',
    difficulty: null,
    timePerAnswer: 10,
    questionsAmount: 10,
    category: null,
    questions: [],
    answers: []
  }),
  getters: {
    selectedQuestionsAmount: (state) => state.questionsAmount,
    selectedTime: (state) => state.timePerAnswer,
    selectedCategory: (state) => state.category,
    selectedDifficulty: (state) => state.difficulty,
    activePage: (state) => state.page,
    selectedQuestions: (state) => state.questions,
    getAnswers: (state) => state.answers
  },
  actions: {
    initNewGame() {
      this.setQuestionsAmount(10)
      this.clearAnswers()
      this.setTimePerAnswer(10)
      this.setTimePerAnswer(10)
      this.setCategory(null)
      this.setQuestions([])
      this.setDifficulty(null)
    },
    setQuestionsAmount(amount) {
      this.questionsAmount = amount
    },
    setAnswer(answer) {
      this.answers.push(answer)
    },
    clearAnswers() {
      this.answers = []
    },
    setTimePerAnswer(newValue) {
      this.timePerAnswer = newValue
    },
    setCategory(category) {
      this.category = category
    },
    setPage(page) {
      this.page = page
    },
    setQuestions(questions) {
      this.questions = questions
    },
    setDifficulty(difficulty) {
      this.difficulty = difficulty
    }
  }
})
