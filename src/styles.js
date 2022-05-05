import styled, { css } from 'styled-components'

const container = () => ({
  position: 'relative'
})

const track = ({ styles }) => ({
  display: 'flex',
  background: '#3a3747',
  borderRadius: styles.defaultSize,
  width: `calc(${styles.defaultSize} * 2)`,
  height: styles.defaultSize,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  cursor: 'pointer',
  border: '1px solid #3a3747',
  transition: 'background 0.2s ease',
  [':hover']: {
    background: '#3a3747',
    border: '1px solid #6e66a6'
  }
})

const thumbOuter = ({ styles }) => ({
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  width: styles.defaultSize,
  height: styles.defaultSize
})

const thumb = ({ styles, on }) => ({
  transition: 'transform 0.2s ease',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  transform: `translateX(
    ${on ? 'calc(100% + ' + styles.padding + ')' : '0%'}
  )`,
  textAlign: 'center',
  background: '#6e66a6',
  width: `calc(${styles.defaultSize + ' - ' + styles.padding})`,
  height: `calc(${styles.defaultSize + ' - ' + styles.padding})`,
  background: '#6e66a6',
  color: '#faf9f8',
  borderRadius: styles.defaultSize,
  fontSize: '0.7rem'
})

const trackContent = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  width: '50%',
  height: '100%',
  fontSize: '0.7rem',
  color: '#efedeb'
})

const defaultStyles = {
  container,
  track,
  thumbOuter,
  thumb,
  trackContent
}

const makeComponent = (key) =>
  styled.div((props) =>
    props?.styles?.[key]
      ? css(props.styles[key](defaultStyles[key](props), props))
      : css(defaultStyles[key](props))
  )

export const Container = makeComponent('container')
export const Track = makeComponent('track')
export const ThumbOuter = makeComponent('thumbOuter')
export const Thumb = makeComponent('thumb')
export const TrackContent = makeComponent('trackContent')
