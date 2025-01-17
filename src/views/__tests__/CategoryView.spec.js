import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import PageTitle from '@/components/PageTitle.vue'
import SelectButton from '@/components/SelectButton.vue'
import CategoryView from '@/views/CategoryView.vue'

const categories = [
  {
    key: 'general',
    id: '9',
    title: 'Általános tudás'
  },
  {
    key: 'animals',
    id: '27',
    title: 'Állatok'
  },
  {
    key: 'history',
    id: '23',
    title: 'Történelem'
  },
  {
    key: 'science',
    id: '17',
    title: 'Tudomány és természet'
  },
  {
    key: 'sports',
    id: '21',
    title: 'Sport'
  },
  {
    key: 'filmsTv',
    id: '14',
    title: 'Filmek és Sorozatok'
  }
]

// Set up mocked store
const mockStore = {
  setCategory: vi.fn(),
  setPage: vi.fn()
}
vi.doMock('@/stores/trivia', () => ({
  useTriviaStore: () => mockStore
}))

describe('CategoryView.vue', () => {
  let wrapper

  beforeEach(() => {
    // Initialize Pinia
    setActivePinia(createPinia())

    // Mount the component
    wrapper = mount(CategoryView, {
      global: {
        stubs: {
          PageTitle: {
            props: ['title'],
            template: `<div>{{title}}</div>`
          },
          // Stub SelectButton to emit `on-select` when clicked
          SelectButton: {
            props: ['id', 'title'],
            template: `<button @click="$emit('on-select', id)">{{ title }}</button>`
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
    expect(pageTitle.props('title')).toBe('Válassz kategóriát.')
  })

  it('renders a SelectButton for each category', () => {
    const buttons = wrapper.findAllComponents(SelectButton)
    expect(buttons.length).toBe(categories.length)
    categories.forEach((category, index) => {
      expect(buttons[index].props('id')).toBe(category.key)
    })
  })

  /*
  it('calls handleSelectCategory when a category is selected', async () => {
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(categories.length)

    // Simulate clicking the first category button
    await buttons[0].trigger('click')

    // Verify that the mocked store functions are called with the correct arguments
    expect(mockStore.setCategory).toHaveBeenCalledWith(categories[0].key)
    expect(mockStore.setPage).toHaveBeenCalledWith(pages.difficulty)
  })
    */
})
