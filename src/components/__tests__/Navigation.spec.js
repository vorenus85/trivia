import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import Navigation from '../Navigation.vue'
import { createTestingPinia } from '@pinia/testing'
import { useTriviaStore } from '@/stores/trivia'

describe('Navigation.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Navigation, {
      global: {
        plugins: [createTestingPinia()]
      },
      props: {
        navTo: 'TEST_PAGE'
      }
    })

    expect(wrapper.find('button.navigation').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('calls navBack and updates the store when clicked', async () => {
    const mockSetPage = vi.fn()
    const wrapper = mount(Navigation, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            createSpy: vi.fn
          })
        ]
      },
      props: {
        navTo: 'TEST_PAGE'
      }
    })

    const triviaStore = useTriviaStore()
    triviaStore.setPage = mockSetPage

    await wrapper.find('button.navigation').trigger('click')

    expect(mockSetPage).toHaveBeenCalledWith('TEST_PAGE')
  })
})
