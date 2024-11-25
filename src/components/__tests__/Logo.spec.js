import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Logo from '../Logo.vue'

describe('Logo', () => {
  let wrapper

  it('render Logo', () => {
    wrapper = mount(Logo)
    const logoElem = wrapper.find('.logo')
    expect(logoElem.exists()).toBe(true)
    expect(logoElem.text()).toBe('Trivia')
  })
})
