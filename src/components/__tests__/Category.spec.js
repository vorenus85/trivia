import { describe, it, expect, beforeAll } from 'vitest'

import { mount } from '@vue/test-utils'
import Category from '../Category.vue'

describe('Category', () => {
  let wrapper
  const defaultProp = { title: 'Science', key: 'science' }

  beforeAll(() => {
    wrapper = mount(Category, { props: { title: defaultProp.title, key: defaultProp.key } })
  })

  it('should render component properly', () => {
    const category = wrapper.find('.category-title')
    expect(category.text()).toBe(defaultProp.title)
  })
})
