import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Navigation from '../Navigation.vue'

describe('Navigation', () => {
  let wrapper

  it('render navigation button', () => {
    wrapper = mount(Navigation)
    expect(wrapper.find('button.navigation').exists()).toBe(true)
  })
})
