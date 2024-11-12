import { defineStore } from 'pinia'

export const useTriviaStore = defineStore('trivia', {
  state: () => ({
    page: 'START',
    difficulty: null,
    timePerAnswer: 10,
    category: null,
    questions: []
  }),
  getters: {
    selectedTime: (state) => state.timePerAnswer,
    selectedCategory: (state) => state.category,
    selectedDifficulty: (state) => state.difficulty,
    activePage: (state) => state.page,
    selectedQuestions: (state) => state.questions
  },
  actions: {
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
