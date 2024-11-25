import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'

import ResultView from '@/views/ResultView.vue'
import PageTitle from '@/components/PageTitle.vue'
import SelectButton from '@/components/SelectButton.vue'
import ResultItem from '@/components/ResultItem.vue'

// Set up mocked store
const mockStore = {
  questionsAmount: 10,
  correctAnswers: 0,
  wrongAnswers: 10
}
vi.doMock('@/stores/trivia', () => ({
  useTriviaStore: () => mockStore
}))

describe('ResultView.vue', () => {
  let wrapper

  beforeEach(() => {
    // Initialize Pinia
    setActivePinia(createPinia())

    wrapper = mount(ResultView, {
      global: {
        stubs: {
          PageTitle,
          SelectButton,
          Navigation: {
            template: '<div></div>'
          },
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

  it('renders PageTitle with the correct title', () => {
    const pageTitle = wrapper.findComponent(PageTitle)
    expect(pageTitle.exists()).toBe(true)
    expect(pageTitle.props('title')).toBe('Your Score')
  })

  it('renders ResultItem components with correct props', () => {
    const resultItems = wrapper.findAllComponents(ResultItem)
    expect(resultItems.length).toBe(4)

    expect(resultItems[0].props()).toMatchObject({
      value: '100%', // Completion percentage
      title: 'Completion',
      color: 'primary'
    })
    expect(resultItems[1].props()).toMatchObject({
      value: 10, // Total questions
      title: 'Total Question',
      color: 'primary'
    })
    expect(resultItems[2].props()).toMatchObject({
      value: 0, // Correct answers
      title: 'Correct',
      color: 'success'
    })
    expect(resultItems[3].props()).toMatchObject({
      value: 10, // Wrong answers
      title: 'Wrong',
      color: 'danger'
    })
  })
})
