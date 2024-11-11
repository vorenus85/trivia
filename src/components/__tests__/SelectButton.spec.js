import { describe, it, expect, beforeAll } from 'vitest'

import { mount } from '@vue/test-utils'
import SelectButton from '../SelectButton.vue'

describe('SelectButton', () => {
  let wrapper
  const defaultProp = { title: 'Science', id: 'science' }

  beforeAll(() => {
    wrapper = mount(SelectButton, {
      props: { title: defaultProp.title, id: defaultProp.id }
    })
  })

  it('should render component properly', () => {
    const title = wrapper.find('.select-button')
    expect(title.text()).toBe(defaultProp.title)
  })

  it('emits onSelect with id when clicked', async () => {
    const id = 'category'
    const wrapper = mount(SelectButton, {
      props: { title: 'Sample Category', id }
    })
    await wrapper.find('.select-button').trigger('click')
    expect(wrapper.emitted().onSelect).toBeTruthy()
    expect(wrapper.emitted().onSelect[0]).toEqual([id])
  })
})
