import { setActivePinia, createPinia } from 'pinia'
import { useTriviaStore } from '../trivia'
import { beforeEach, describe, expect, it } from 'vitest'

describe('useTriviaStore', () => {
  let triviaStore

  beforeEach(() => {
    setActivePinia(createPinia())
    triviaStore = useTriviaStore()
  })

  // Test initial state
  it('should have the correct initial state', () => {
    expect(triviaStore.page).toBe('START')
    expect(triviaStore.difficulty).toBeNull()
    expect(triviaStore.timePerAnswer).toBe(10)
    expect(triviaStore.questionsAmount).toBe(10)
    expect(triviaStore.category).toBeNull()
    expect(triviaStore.questions).toEqual([])
    expect(triviaStore.answers).toEqual([])
    expect(triviaStore.completionPercent).toBeNull()
    expect(triviaStore.correctAnswers).toBeNull()
    expect(triviaStore.wrongAnswers).toBeNull()
    expect(triviaStore.score).toBeNull()
  })

  // Test getters
  it('should correctly compute getters', () => {
    expect(triviaStore.selectedQuestionsAmount).toBe(10)
    expect(triviaStore.selectedTime).toBe(10)
    expect(triviaStore.selectedCategory).toBeNull()
    expect(triviaStore.selectedDifficulty).toBeNull()
    expect(triviaStore.activePage).toBe('START')
    expect(triviaStore.selectedQuestions).toEqual([])
    expect(triviaStore.getAnswers).toEqual([])
  })

  // Test actions
  it('should update questions amount', () => {
    triviaStore.setQuestionsAmount(20)
    expect(triviaStore.questionsAmount).toBe(20)
  })

  it('should add an answer', () => {
    triviaStore.setAnswer('Answer 1')
    expect(triviaStore.answers).toEqual(['Answer 1'])
  })

  it('should clear answers', () => {
    triviaStore.setAnswer('Answer 1')
    triviaStore.setAnswer('Answer 2')
    triviaStore.clearAnswers()
    expect(triviaStore.answers).toEqual([])
  })

  it('should update time per answer', () => {
    triviaStore.setTimePerAnswer(15)
    expect(triviaStore.timePerAnswer).toBe(15)
  })

  it('should update category', () => {
    triviaStore.setCategory('History')
    expect(triviaStore.category).toBe('History')
  })

  it('should update page', () => {
    triviaStore.setPage('QUIZ')
    expect(triviaStore.page).toBe('QUIZ')
  })

  it('should initialize a new game', () => {
    triviaStore.setQuestionsAmount(20)
    triviaStore.setAnswer('Answer 1')
    triviaStore.initNewGame()
    expect(triviaStore.questionsAmount).toBe(10)
    expect(triviaStore.answers).toEqual([])
    expect(triviaStore.timePerAnswer).toBe(10)
    expect(triviaStore.category).toBeNull()
    expect(triviaStore.questions).toEqual([])
    expect(triviaStore.difficulty).toBeNull()
    expect(triviaStore.completionPercent).toBeNull()
    expect(triviaStore.correctAnswers).toBeNull()
    expect(triviaStore.wrongAnswers).toBeNull()
    expect(triviaStore.score).toBeNull()
  })
})
