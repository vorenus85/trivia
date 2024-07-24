import { describe, it, expect, test } from 'vitest'
import { pages, difficulty, difficultyLength, categories } from '../index.js'

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
})

describe('It should be correct difficulty names', () => {
  test.each`
    name        | value
    ${'easy'}   | ${'EASY'}
    ${'medium'} | ${'MEDIUM'}
    ${'hard'}   | ${'HARD'}
  `('difficulty: $name, should be: $value', ({ name, value }) => {
    const actualResult = difficulty[name]

    expect(actualResult).toBe(value)
  })
})

describe('It should be correct difficulty lengths', () => {
  test.each`
    name        | value
    ${'easy'}   | ${15}
    ${'medium'} | ${10}
    ${'hard'}   | ${6}
  `('difficultyLength: $name, should be: $value', ({ name, value }) => {
    const actualResult = difficultyLength[name]

    expect(actualResult).toBe(value)
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
