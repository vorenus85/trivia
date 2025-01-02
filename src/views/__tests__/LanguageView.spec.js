import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import LanguageView from '@/views/LanguageView.vue'
import PageTitle from '@/components/PageTitle.vue'
import { createTestingPinia } from '@pinia/testing'
import { useTriviaStore } from '@/stores/trivia'

// Set up mocked store
const mockStore = {
  setLanguage: vi.fn(),
  setPage: vi.fn()
}
vi.doMock('@/stores/trivia', () => ({
  useTriviaStore: () => mockStore
}))

describe('LanguageSelection.vue', () => {
  it('renders correctly with title and language options', () => {
    const wrapper = mount(LanguageView, {
      global: {
        stubs: {
          PageTitle: {
            props: ['title'],
            template: `<div>{{title}}</div>`
          }
        }
      }
    })

    expect(wrapper.findComponent(PageTitle).exists()).toBe(true)
    expect(wrapper.find('.languages').exists()).toBe(true)
    expect(wrapper.findAll('.language-item').length).toBe(2)
  })

  it('calls chooseLanguage when English is clicked', async () => {
    const wrapper = mount(LanguageView, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            createSpy: vi.fn
          })
        ]
      }
    })

    const triviaStore = useTriviaStore()
    triviaStore.setLanguage = mockSetLanguage
    triviaStore.setPage = mockSetPage

    await wrapper.find('.language-item:nth-child(1)').trigger('click')

    expect(mockSetLanguage).toHaveBeenCalledWith('en')
    expect(mockSetPage).toHaveBeenCalledWith('CATEGORY')
  })

  it('calls chooseLanguage when Hungarian is clicked', async () => {
    const mockSetLanguage = vi.fn()
    const mockSetPage = vi.fn()
    const wrapper = mount(LanguageView, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            createSpy: vi.fn
          })
        ]
      }
    })

    const triviaStore = useTriviaStore()
    triviaStore.setLanguage = mockSetLanguage
    triviaStore.setPage = mockSetPage

    await wrapper.find('.language-item:nth-child(2)').trigger('click')

    expect(mockSetLanguage).toHaveBeenCalledWith('hu')
    expect(mockSetPage).toHaveBeenCalledWith('CATEGORY')
  })
})
