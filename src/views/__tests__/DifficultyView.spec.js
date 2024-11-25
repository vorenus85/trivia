import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { difficulties } from '@/constants'
import DifficultyView from '@/views/DifficultyView.vue'
import PageTitle from '@/components/PageTitle.vue'
import SelectButton from '@/components/SelectButton.vue'

// Set up mocked store
const mockStore = {}
vi.doMock('@/stores/trivia', () => ({
  useTriviaStore: () => mockStore
}))

describe('DetailedResultView.vue', () => {
  let wrapper

  beforeEach(() => {
    // Initialize Pinia
    setActivePinia(createPinia())

    wrapper = mount(DifficultyView, {
      global: {
        stubs: {
          PageTitle,
          SelectButton,
          Navigation: {
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
    expect(pageTitle.props('title')).toBe('Choose difficulty')
  })

  it('renders a SelectButton for each difficulty', () => {
    const buttons = wrapper.findAllComponents(SelectButton)
    expect(buttons.length).toBe(difficulties.length)
    difficulties.forEach((difficulty, index) => {
      expect(buttons[index].props('id')).toBe(difficulty.key)
      expect(buttons[index].props('title')).toBe(difficulty.title)
      expect(buttons[index].props('hint')).toBe(
        `Get ${difficulty.questions} questions, each with ${difficulty.time} seconds to answer.`
      )
    })
  })
})
