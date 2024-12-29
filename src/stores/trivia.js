import { defineStore } from 'pinia'

export const useTriviaStore = defineStore('trivia', {
  state: () => ({
    page: 'START',
    difficulty: null,
    timePerAnswer: 10,
    questionsAmount: 10,
    language: 'en',
    categoryId: null,
    categoryTitle: null,
    questions: [],
    answers: [],
    completionPercent: null,
    correctAnswers: null,
    wrongAnswers: null,
    score: null
  }),
  getters: {
    selectedLanguage: (state) => state.language,
    selectedQuestionsAmount: (state) => state.questionsAmount,
    selectedTime: (state) => state.timePerAnswer,
    selectedCategoryId: (state) => state.categoryId,
    selectedCategoryTitle: (state) => state.categoryTitle,
    selectedDifficulty: (state) => state.difficulty,
    activePage: (state) => state.page,
    selectedQuestions: (state) => state.questions,
    getAnswers: (state) => state.answers,
    getCompletions: (state) => state.completionPercent,
    getCorrectAnswers: (state) => state.correctAnswers,
    getWrongAnswers: (state) => state.wrongAnswers,
    getScore: (state) => state.score
  },
  actions: {
    initNewGame() {
      this.setQuestionsAmount(10)
      this.setLanguage('en')
      this.clearAnswers()
      this.setTimePerAnswer(10)
      this.setCategory(null)
      this.setQuestions([])
      this.setDifficulty(null)
      this.setCompletion(null)
      this.setCorrectAnswers(null)
      this.setWrongAnswers(null)
      this.setScore(null)
    },
    setLanguage(lang) {
      this.language = lang
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
      this.categoryId = category.key
      this.categoryTitle = category.title
    },
    setPage(page) {
      this.page = page
    },
    setQuestions(questions) {
      this.questions = questions
    },
    setDifficulty(difficulty) {
      this.difficulty = difficulty
    },
    setCompletion(completionPercent) {
      this.completionPercent = completionPercent
    },
    setCorrectAnswers(correctAnswers) {
      this.correctAnswers = correctAnswers
    },
    setWrongAnswers(wrongAnswers) {
      this.wrongAnswers = wrongAnswers
    },
    setScore(score) {
      this.score = score
    }
  }
})
