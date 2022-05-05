import React, { useEffect, useState } from 'react'
import { Container, Track, ThumbOuter, Thumb, TrackContent } from './styles'

const Toggle = ({
  onChange = () => {},
  children = [],
  isOn = false,
  remap = { 1: '1', 0: '0' },
  text = '',
  styles = {},
  defaultSize = '25px',
  padding = '0px',
  value
}) => {
  const [on, toggle] = useState(isOn)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    !ready ? setReady(true) : onChange({ value: on ? remap['1'] : remap['0'] })
  }, [on])

  const onClick = () => {
    value === undefined ? toggle(!on) : onChange({ value: !value })
  }

  const _on = value === undefined ? (on ? 1 : 0) : value ? 1 : 0

  const _styles = styles instanceof Array ? styles[_on ? 0 : 1] : styles

  _styles.defaultSize = defaultSize
  _styles.padding = padding

  return (
    <Container styles={_styles}>
      <Track onClick={onClick} styles={_styles}>
        <ThumbOuter styles={_styles}>
          <Thumb styles={_styles} on={_on}>
            {text}
          </Thumb>
        </ThumbOuter>
        <TrackContent styles={_styles}>{children[0] || null}</TrackContent>
        <TrackContent styles={_styles}>{children[1] || null}</TrackContent>
      </Track>
    </Container>
  )
}

Toggle.Left = React.Fragment
Toggle.Right = React.Fragment

export default Toggle
