import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

describe('Header', () => {
  let wrapper

  it('render Header correctly', () => {
    wrapper = mount(Header)
    const headerElem = wrapper.find('.header')
    expect(headerElem.exists()).toBe(true)
    const planet1 = wrapper.find('.planet-1')
    expect(planet1.exists()).toBe(true)
    const planet2 = wrapper.find('.planet-2')
    expect(planet2.exists()).toBe(true)
    const planet3 = wrapper.find('.planet-3')
    expect(planet3.exists()).toBe(true)
    const planet4 = wrapper.find('.planet-4')
    expect(planet4.exists()).toBe(true)
  })
})
