import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { useTriviaStore } from '@/stores/trivia'
import Navigation from '@/components/Navigation.vue'
import PageTitle from '@/components/PageTitle.vue'
import SelectButton from '@/components/SelectButton.vue'
import QuestionsView from '@/views/QuestionsView.vue'

vi.mock('@/stores/trivia', () => ({
  useTriviaStore: vi.fn()
}))

describe('QuestionsView.vue', () => {
  let wrapper
  let mockStore

  beforeEach(() => {
    // Mock Trivia Store
    mockStore = {
      selectedLanguage: 'en',
      selectedCategoryId: '14',
      selectedDifficulty: 'easy',
      selectedQuestionsAmount: 10,
      selectedTime: 30,
      setPage: vi.fn(),
      setQuestions: vi.fn(),
      setAnswer: vi.fn()
    }
    useTriviaStore.mockReturnValue(mockStore)

    // Mock fetch API
    /*
    fetchMock = vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          results: [
            {
              question: 'Question 1?',
              correct_answer: 'Correct Answer',
              incorrect_answers: ['Wrong 1', 'Wrong 2', 'Wrong 3']
            }
          ]
        })
    })
        */

    // Initialize Pinia
    setActivePinia(createPinia())

    // Mount the component
    wrapper = mount(QuestionsView, {
      global: {
        stubs: {
          Navigation: {
            template: '<div></div>'
          },
          PageTitle: {
            props: ['title'],
            template: `<div>{{title}}</div>`
          },
          SelectButton,
          CircleProgressBar: {
            template: '<div></div>'
          }
        }
      }
    })
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('renders navigation and page title components', () => {
    const navigation = wrapper.findComponent(Navigation)
    const pageTitle = wrapper.findComponent(PageTitle)

    expect(navigation.exists()).toBe(true)
    expect(pageTitle.exists()).toBe(true)
  })
})
