import React from 'react'
import {shallow, render} from 'enzyme'
import Toggle from '../toggle'

test('the component renders with defaults', () => {
  const wrapper = render(<Toggle onToggle={() => {}}> CHILD HERE </Toggle>)

  expect(wrapper).toMatchSnapshotWithGlamor()
})

test('the onToggle function is called when the button is clicked', () => {
  const onToggle = jest.fn()
  const wrapper = shallow(<Toggle onToggle={onToggle}> CHILD HERE </Toggle>)

  wrapper.find('[data-test="button"]').simulate('click')
  expect(onToggle).toHaveBeenCalledTimes(1)
})
