import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import DetailedResultsView from '@/views/DetailedResultsView.vue'
import PageTitle from '@/components/PageTitle.vue'

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

    wrapper = mount(DetailedResultsView, {
      global: {
        stubs: {
          PageTitle,
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
    expect(pageTitle.props('title')).toBe('Detailed results')
  })
})
