import { describe, it, expect, test } from 'vitest'
import { pages, difficulties, categories } from '../index.js'

describe('It should be correct page names', () => {
  test.each`
    name                | value
    ${'start'}          | ${'START'}
    ${'difficulty'}     | ${'DIFFICULTY'}
    ${'questions'}      | ${'QUESTIONS'}
    ${'result'}         | ${'RESULT'}
    ${'detailedResult'} | ${'DETAILED_RESULTS'}
  `('page: $name, should be: $value', ({ name, value }) => {
    const actualResult = pages[name]

    expect(actualResult).toBe(value)
  })

  it('pages matches the array snapshot', () => {
    expect(pages).toMatchSnapshot()
  })
})

describe('difficulties', () => {
  test('should contain three difficulty levels', () => {
    expect(difficulties).toHaveLength(3)
  })

  test('should have correct properties for each difficulty level', () => {
    const expectedDifficulties = [
      { key: 'easy', title: 'Easy', questions: 8, time: 12 },
      { key: 'medium', title: 'Medium', questions: 10, time: 10 },
      { key: 'hard', title: 'Hard', questions: 12, time: 8 }
    ]

    expectedDifficulties.forEach((expected, index) => {
      const difficulty = difficulties[index]
      expect(difficulty.key).toBe(expected.key)
      expect(difficulty.title).toBe(expected.title)
      expect(difficulty.questions).toBe(expected.questions)
      expect(difficulty.time).toBe(expected.time)
    })
  })

  test('should have time and questions as numbers', () => {
    difficulties.forEach((difficulty) => {
      expect(typeof difficulty.questions).toBe('number')
      expect(typeof difficulty.time).toBe('number')
    })
  })

  it('difficulties matches the array snapshot', () => {
    expect(difficulties).toMatchSnapshot()
  })
})

describe('Categories tests', () => {
  it('should be 6 quiz categories', () => {
    expect(categories.length).toBe(6)
  })

  it('quiz categories matches the array snapshot', () => {
    const quizCategories = categories

    expect(quizCategories).toMatchSnapshot()
  })
})
