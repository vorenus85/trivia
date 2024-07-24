import { describe, it, expect, beforeAll } from 'vitest'

import { mount } from '@vue/test-utils'
import Category from '../Category.vue'

describe('Category', () => {
  let wrapper
  const defaultProp = { category: 'Science', categoryId: 'science' }

  beforeAll(() => {
    wrapper = mount(Category, {
      props: { category: defaultProp.category, categoryId: defaultProp.categoryId }
    })
  })

  it('should render component properly', () => {
    const title = wrapper.find('.category-title')
    expect(title.text()).toBe(defaultProp.category)
  })

  it('emits onSelectCategory with categoryId when clicked', async () => {
    const categoryId = 'category'
    const wrapper = mount(Category, {
      props: { category: 'Sample Category', categoryId }
    })
    await wrapper.find('.category-title').trigger('click')
    expect(wrapper.emitted().onSelectCategory).toBeTruthy()
    expect(wrapper.emitted().onSelectCategory[0]).toEqual([categoryId])
  })
})
