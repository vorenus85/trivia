import { describe, it, expect, beforeAll } from 'vitest'

import { mount } from '@vue/test-utils'
import PageTitle from '../PageTitle.vue'

describe('PageTitle', () => {
  let wrapper
  const defaultProp = { title: 'Please choose a category' }

  beforeAll(() => {
    wrapper = mount(PageTitle, { props: { title: defaultProp.title } })
  })

  it('should render component properly', () => {
    const title = wrapper.find('.page-title h3')
    expect(title.text()).toBe(defaultProp.title)
  })
})
