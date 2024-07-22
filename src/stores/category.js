import { defineStore } from 'pinia'

export const useTriviaStore = defineStore('trivia', {
  state: () => ({
    category: null
  }),
  getters: {
    selectedCategory: (state) => state.category
  }
})
