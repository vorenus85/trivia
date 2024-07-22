import { describe, it, expect, beforeAll } from 'vitest'

import { mount } from '@vue/test-utils'
import ChooseCategory from '../../views/ChooseCategory.vue'

describe('ChooseCategory', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(ChooseCategory)
  })

  it('render component title properly', () => {
    expect(wrapper.find('h3').text()).toContain('Choose a category')
  })

  it('render 6 categories', () => {
    const categories = wrapper.vm.quiz.categories

    expect(categories.length).toBe(6)
  })

  it('render all six quiz categories', () => {
    const categories = wrapper.vm.quiz.categories

    expect(categories[0].title).toBe('Film / Series')
    expect(categories[1].title).toBe('Gastronomy')
    expect(categories[2].title).toBe('History')
    expect(categories[3].title).toBe('Science')
    expect(categories[4].title).toBe('Sport')
    expect(categories[5].title).toBe('Mixed')
  })
})
