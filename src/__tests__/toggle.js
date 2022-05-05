/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import Toggle from '../index'

it('default component', () => {
  const { container } = render(<Toggle />)
  expect(container.firstChild).toMatchSnapshot()
})

it('set to on', () => {
  const { container } = render(<Toggle isOn={true} />)
  expect(container.firstChild).toMatchSnapshot()
})

it('controlled', () => {
  let val = true
  const {
    container: { firstChild },
    rerender
  } = render(<Toggle value={val} />)
  expect(firstChild).toMatchSnapshot()
  const Thumb = firstChild.querySelector('div').querySelector('div').firstChild
  expect(Thumb).toHaveStyleRule('transform', 'translateX( calc(100% + 0px) )')
  val = false
  rerender(<Toggle value={val} />)
  expect(Thumb).toHaveStyleRule('transform', 'translateX( 0% )')
})

it('custom styles', () => {
  const styles = {
    track: (defaults) => ({
      ...defaults,
      background: 'green'
    }),
    thumb: (defaults) => ({
      ...defaults,
      fontSize: '20px'
    })
  }
  const {
    container: { firstChild }
  } = render(<Toggle text={'YO'} styles={styles} />)

  expect(firstChild).toMatchSnapshot()
})

it('custom components', () => {
  const {
    container: { firstChild }
  } = render(
    <Toggle text={'HI'}>
      <Toggle.Left>1</Toggle.Left>
      <Toggle.Right>2</Toggle.Right>
    </Toggle>
  )
  expect(firstChild).toMatchSnapshot()
})
