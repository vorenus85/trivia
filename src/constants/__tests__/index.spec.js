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
      { label: 'EASY', title: 'Easy', questions: 6, timeLength: 10 },
      { label: 'MEDIUM', title: 'Medium', questions: 8, timeLength: 8 },
      { label: 'HARD', title: 'Hard', questions: 10, timeLength: 6 }
    ]

    expectedDifficulties.forEach((expected, index) => {
      const difficulty = difficulties[index]
      expect(difficulty.label).toBe(expected.label)
      expect(difficulty.title).toBe(expected.title)
      expect(difficulty.questions).toBe(expected.questions)
      expect(difficulty.timeLength).toBe(expected.timeLength)
    })
  })

  test('should contain unique labels', () => {
    const labels = difficulties.map((d) => d.label)
    const uniqueLabels = new Set(labels)
    expect(uniqueLabels.size).toBe(difficulties.length)
  })

  test('should have timeLength and questions as numbers', () => {
    difficulties.forEach((difficulty) => {
      expect(typeof difficulty.questions).toBe('number')
      expect(typeof difficulty.timeLength).toBe('number')
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
