import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import DetailedResultItem from '../DetailedResultItem.vue'

describe('DetailedResultItem.vue', () => {
  let wrapper
  let mockStore

  beforeEach(() => {
    // Set up a mocked Pinia store
    mockStore = {
      questions: [
        {
          type: 'multiple',
          difficulty: 'easy',
          category: 'General Knowledge',
          question: 'How much is the fish?',
          correct_answer: 8,
          incorrect_answers: [6, 7, 9],
          answers: [6, 7, 8, 9]
        }
      ],
      answers: [8]
    }

    // Initialize Pinia
    setActivePinia(createPinia())

    // Mock useTriviaStore dynamically inside the beforeEach block
    vi.doMock('@/stores/trivia', () => ({
      useTriviaStore: () => mockStore
    }))

    // Mount the DetailedResultItem component with a stub for SelectButton
    wrapper = mount(DetailedResultItem, {
      global: {
        stubs: {
          SelectButton: {
            template: '<button class="select-button" />' // Simple stub template
          }
        }
      },
      props: {
        question: {
          type: 'multiple',
          difficulty: 'easy',
          category: 'General Knowledge',
          question: 'How much is the fish?',
          correct_answer: 8,
          incorrect_answers: [6, 7, 9],
          answers: [6, 7, 8, 9]
        },
        index: 0
      }
    })
  })

  // Test initial rendering
  it('renders correctly with props', () => {
    expect(wrapper.find('.accordion-title').html()).toContain('How much is the fish?')
    expect(wrapper.findAll('.select-button')).toHaveLength(4)
  })

  // Test toggle functionality
  it('toggles the accordion on click', async () => {
    const accordion = wrapper.find('.accordion')
    expect(accordion.classes()).not.toContain('opened')
    await accordion.trigger('click')
    expect(accordion.classes()).toContain('opened')
  })

  // Test correct class application based on `isCorrect` and `givenAnswer`
  it('applies correct styling when the answer is correct', () => {
    const accordion = wrapper.find('.accordion')
    expect(accordion.classes()).toContain('bg-green-50')
  })
  /*
  it('applies incorrect styling when the answer is wrong', async () => {
    await wrapper.setProps({
      question: {
        type: 'multiple',
        difficulty: 'easy',
        category: 'General Knowledge',
        question: 'How much is the fish?',
        correct_answer: 9,
        incorrect_answers: [6, 7, 8],
        answers: [6, 7, 8, 9]
      }
    })
    await wrapper.vm.$forceUpdate() // Trigger a re-render

    const accordion = wrapper.find('.accordion')
    console.log(accordion.classes())
    expect(accordion.classes()).toContain('bg-red-100')
  })
*/
  /*
  it('applies default styling when no answer is given', async () => {
    await wrapper.setProps({
      question: {
        type: 'multiple',
        difficulty: 'easy',
        category: 'General Knowledge',
        question: 'How much is the fish?',
        correct_answer: 9,
        incorrect_answers: [6, 7, 8],
        answers: [6, 7, 8, 9]
      }
    })
    await wrapper.vm.$nextTick()

    const accordion = wrapper.find('.accordion')
    expect(accordion.classes()).toContain('bg-stone-100')
  })
  */
})
