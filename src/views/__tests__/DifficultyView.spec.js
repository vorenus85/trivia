import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import DifficultyView from '@/views/DifficultyView.vue'
import PageTitle from '@/components/PageTitle.vue'
import SelectButton from '@/components/SelectButton.vue'

const difficulties = [
  {
    key: 'easy',
    title: 'Könnyű',
    hint: '8 kérdést kapsz amikre 12 másodperc időd lesz válaszolni'
  },
  {
    key: 'medium',
    title: 'Közepes',
    hint: '10 kérdést kapsz amikre 10 másodperc időd lesz válaszolni'
  },
  { key: 'hard', title: 'Nehéz', hint: '12 kérdést kapsz amikre 8 másodperc időd lesz válaszolni' }
]

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
          PageTitle: {
            props: ['title'],
            template: `<div>{{title}}</div>`
          },
          SelectButton: {
            props: ['id', 'title', 'hint'],
            template: `<button @click="$emit('on-select', id)">{{ title }}</button>`
          },
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
    expect(pageTitle.props('title')).toBe('Válassz nehézséget.')
  })

  it('renders a SelectButton for each difficulty', () => {
    const buttons = wrapper.findAllComponents(SelectButton)
    expect(buttons.length).toBe(difficulties.length)
    difficulties.forEach((difficulty, index) => {
      expect(buttons[index].props('id')).toBe(difficulty.key)
      expect(buttons[index].props('title')).toBe(difficulty.title)
      expect(buttons[index].props('hint')).toBe(difficulty.hint)
    })
  })
})
