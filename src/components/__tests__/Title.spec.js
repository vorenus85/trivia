import { describe, it, expect, beforeAll } from 'vitest'

import { mount } from '@vue/test-utils'
import Title from '../Title.vue'

describe('Title', () => {
  let wrapper
  const defaultProp = { title: 'Please choose a category' }

  beforeAll(() => {
    wrapper = mount(Title, { props: { title: defaultProp.title } })
  })

  it('should render component properly', () => {
    const title = wrapper.find('.page-title h3')
    expect(title.text()).toBe(defaultProp.title)
  })
})
