import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import SelectButton from '@/components/SelectButton.vue'

describe('SelectButton.vue', () => {
  it('renders title and hint correctly', () => {
    const wrapper = mount(SelectButton, {
      props: {
        title: 'Test Title',
        hint: 'Test Hint',
        id: '123'
      }
    })

    // Title is rendered as HTML
    expect(wrapper.html()).toContain('Test Title')
    // Hint is rendered in a <small> tag
    expect(wrapper.find('small').text()).toBe('Test Hint')
  })

  it('adds skeleton class when value is true', () => {
    const wrapper = mount(SelectButton, {
      props: {
        title: 'Test Title',
        id: '123',
        value: true
      }
    })

    const textContent = wrapper.find('.text-content')
    expect(textContent.classes()).toContain('skeleton')
  })

  it('does not add skeleton class when value is false', () => {
    const wrapper = mount(SelectButton, {
      props: {
        title: 'Test Title',
        id: '123',
        value: false
      }
    })

    const textContent = wrapper.find('.text-content')
    expect(textContent.classes()).not.toContain('skeleton')
  })

  it('renders the correct size class', () => {
    const wrapper = mount(SelectButton, {
      props: {
        title: 'Test Title',
        id: '123',
        size: 'small'
      }
    })

    const wrapperDiv = wrapper.find('.select-button-wrapper')
    expect(wrapperDiv.classes()).toContain('small')
  })

  it('emits onSelect event with correct id when clicked', async () => {
    const wrapper = mount(SelectButton, {
      props: {
        title: 'Test Title',
        id: '123'
      }
    })

    await wrapper.find('.select-button').trigger('click')
    expect(wrapper.emitted('onSelect')).toHaveLength(1)
    expect(wrapper.emitted('onSelect')[0]).toEqual(['123'])
  })

  it('renders the image only when hint is provided', () => {
    const wrapperWithHint = mount(SelectButton, {
      props: {
        title: 'Test Title',
        hint: 'Test Hint',
        id: '123'
      }
    })

    const wrapperWithoutHint = mount(SelectButton, {
      props: {
        title: 'Test Title',
        id: '123'
      }
    })

    expect(wrapperWithHint.find('img').exists()).toBe(true)
    expect(wrapperWithoutHint.find('img').exists()).toBe(false)
  })

  it('renders title as HTML', () => {
    const wrapper = mount(SelectButton, {
      props: {
        title: '<strong>HTML Title</strong>',
        id: '123'
      }
    })

    expect(wrapper.find('span').html()).toContain('<strong>HTML Title</strong>')
  })
})
