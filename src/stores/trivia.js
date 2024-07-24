import { defineStore } from 'pinia'

export const useTriviaStore = defineStore('trivia', {
  state: () => ({
    page: null,
    difficulty: null,
    category: null,
    questions: []
  }),
  getters: {
    selectedCategory: (state) => state.category,
    selectedDifficulty: (state) => state.difficulty,
    activePage: (state) => state.page,
    selectedQuestions: (state) => state.questions
  },
  actions: {
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
