import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import ResultActions from '../ResultActions.vue'

describe('ResultActions', () => {
  let wrapper

  it('render correctly', () => {
    wrapper = mount(ResultActions, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              trivia: {
                selectedLanguage: 'en'
              }
            }
          })
        ]
      },
      props: { showPlayAgain: true, showViewAnswers: true }
    })
    expect(wrapper.find('button#navToStart').exists()).toBe(true)
    expect(wrapper.find('button#navToDetailedResults').exists()).toBe(true)
  })

  it('nor renter button if props are false', () => {
    wrapper = mount(ResultActions, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              trivia: {
                selectedLanguage: 'en'
              }
            }
          })
        ]
      },
      props: { showPlayAgain: false, showViewAnswers: false }
    })
    expect(wrapper.find('button#navToStart').exists()).toBe(false)
    expect(wrapper.find('button#navToDetailedResults').exists()).toBe(false)
  })

  it('emits navToStart event with when clicked', async () => {
    wrapper = mount(ResultActions, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              trivia: {
                selectedLanguage: 'en'
              }
            }
          })
        ]
      },
      props: { showPlayAgain: true, showViewAnswers: false }
    })

    await wrapper.find('#navToStart').trigger('click')
    expect(wrapper.emitted('navToStart')).toHaveLength(1)
  })

  it('emits navToDetailedResults event with when clicked', async () => {
    wrapper = mount(ResultActions, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              trivia: {
                selectedLanguage: 'en'
              }
            }
          })
        ]
      },
      props: { showPlayAgain: false, showViewAnswers: true }
    })

    await wrapper.find('#navToDetailedResults').trigger('click')
    expect(wrapper.emitted('navToDetailedResults')).toHaveLength(1)
  })
})
