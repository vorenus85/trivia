import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PageTitle from '../PageTitle.vue'

describe('PageTitle', () => {
  let wrapper

  it('renders title prop correctly', () => {
    const expectedResult = 'Page title'
    wrapper = mount(PageTitle, { props: { title: expectedResult } })
    const title = wrapper.find('.page-title h3')
    expect(title.text()).toBe(expectedResult)
  })

  it('applies skeleton class when value is true', () => {
    wrapper = mount(PageTitle, { props: { title: 'Example title', value: true } })
    const title = wrapper.find('.page-title h3')
    expect(title.classes()).toContain('skeleton')
  })

  it('does not apply skeleton class when value is false', () => {
    wrapper = mount(PageTitle, { props: { title: 'Example title', value: false } })
    const title = wrapper.find('.page-title h3')
    expect(title.classes()).not.toContain('skeleton')
  })

  it('renders counter and question slots correctly', () => {
    wrapper = mount(PageTitle, {
      slots: {
        counter: '<span class="counter-slot">Counter slot</span>',
        question: '<span class="question-slot">Question slot</span>'
      }
    })

    const counterSlot = wrapper.find('.counter-slot')
    const questionSlot = wrapper.find('.question-slot')

    expect(counterSlot.exists()).toBe(true)
    expect(counterSlot.html()).toContain('Counter slot')
    expect(questionSlot.exists()).toBe(true)
    expect(questionSlot.html()).toContain('Question slot')
  })
})
