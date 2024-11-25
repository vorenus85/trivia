import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ResultItem from '@/components/ResultItem.vue'

describe('ResultItem.vue', () => {
  it('renders value and title props correctly', () => {
    const wrapper = mount(ResultItem, {
      props: {
        value: 42,
        color: 'green',
        title: 'Test Title'
      }
    })

    // Check if value is displayed
    const valueElement = wrapper.find('span.font-medium.text-lg')
    expect(valueElement.text()).toBe('42')

    // Check if title is displayed
    expect(wrapper.text()).toContain('Test Title')
  })

  it('applies the correct color class to the indicator circle and value', () => {
    const wrapper = mount(ResultItem, {
      props: {
        value: '75%',
        color: 'blue',
        title: 'Blue Test'
      }
    })

    // Check the indicator circle's color class
    const indicator = wrapper.find('.indicator-circle')
    expect(indicator.classes()).toContain('bg-blue')

    // Check the value's text color class
    const valueElement = wrapper.find('span.font-medium.text-lg')
    expect(valueElement.classes()).toContain('text-blue')
  })

  it('renders correctly with numeric value prop', () => {
    const wrapper = mount(ResultItem, {
      props: {
        value: 100,
        color: 'red',
        title: 'Numeric Test'
      }
    })

    expect(wrapper.find('span.font-medium.text-lg').text()).toBe('100')
    expect(wrapper.text()).toContain('Numeric Test')
  })

  it('renders correctly with string value prop', () => {
    const wrapper = mount(ResultItem, {
      props: {
        value: 'Pass',
        color: 'yellow',
        title: 'String Test'
      }
    })

    expect(wrapper.find('span.font-medium.text-lg').text()).toBe('Pass')
    expect(wrapper.text()).toContain('String Test')
  })

  it('dynamically updates when props change', async () => {
    const wrapper = mount(ResultItem, {
      props: {
        value: 'Initial',
        color: 'gray',
        title: 'Initial Title'
      }
    })

    // Update props
    await wrapper.setProps({ value: 'Updated', color: 'purple', title: 'Updated Title' })

    // Check updated value
    expect(wrapper.find('span.font-medium.text-lg').text()).toBe('Updated')

    // Check updated title
    expect(wrapper.text()).toContain('Updated Title')

    // Check updated classes
    const indicator = wrapper.find('.indicator-circle')
    expect(indicator.classes()).toContain('bg-purple')
    const valueElement = wrapper.find('span.font-medium.text-lg')
    expect(valueElement.classes()).toContain('text-purple')
  })
})
