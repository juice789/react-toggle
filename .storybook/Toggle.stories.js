import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faTimes,
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons'

import Toggle from '../src'

export default {
  component: Toggle
}

export const Default = () => (
  <>
    <Toggle />
    <br />
    <a href="https://github.com/juice789/react-toggle">
      Go to Github repository
    </a>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/@juice789/react-toggle">
      Go to NPM package
    </a>
  </>
)

export const OnChangeEvent = () => (
  <>
    <Toggle
      onChange={(x) =>
        (document.getElementById('textarea1').value = JSON.stringify(x))
      }
    />
    <br />
    <textarea cols={15} rows={10} id={'textarea1'}></textarea>
  </>
)

export const OnChangeEvent2 = () => (
  <>
    <Toggle
      onChange={(x) =>
        (document.getElementById('textarea2').value = JSON.stringify(x))
      }
      remap={{ 1: 'turned on', 0: 'turned off' }}
    />
    <br />
    <textarea cols={15} rows={10} id={'textarea2'}></textarea>
  </>
)

export const CustomContent = () => (
  <Toggle text={'OK'}>
    <Toggle.Left>4</Toggle.Left>
    <Toggle.Right>2</Toggle.Right>
  </Toggle>
)

export const ControlledComponent = () => {
  const [toggleValue, setToggleValue] = useState(true)
  return (
    <>
      <Toggle
        value={toggleValue}
        onChange={({ value }) => setToggleValue(value)}
      />
      <br />
      <button onClick={() => setToggleValue(!toggleValue)}>Press me!</button>
    </>
  )
}

export const Styling = () => {
  const stylesOff = {
    track: (defaults) => ({
      ...defaults,
      border: '1px solid #c6eca9',
      background: '#c6eca9',
      [':hover']: {
        border: '1px solid #537638'
      },
      ['> div']: {
        [':nth-child(2)']: {
          color: '#1b9e2c'
        },
        [':nth-child(3)']: {
          color: '#c77265'
        }
      }
    }),
    trackContent: (defaults) => ({
      ...defaults,
      fontSize: '1rem'
    }),
    thumb: (defaults) => ({
      ...defaults,
      background: '#537638'
    })
  }

  const stylesOn = {
    track: (defaults) => ({
      ...defaults,
      border: '1px solid #f6dad8',
      background: '#f6dad8',
      [':hover']: {
        border: '1px solid #a6544e'
      },
      ['> div']: {
        [':nth-child(2)']: {
          color: '#1b9e2c'
        },
        [':nth-child(3)']: {
          color: '#c77265'
        }
      }
    }),
    trackContent: (defaults) => ({
      ...defaults,
      fontSize: '1rem'
    }),
    thumb: (defaults) => ({
      ...defaults,
      background: '#a6544e'
    })
  }

  const stylesPurple = {
    track: (defaults) => ({
      ...defaults,
      border: '0px',
      background: '#8954b2',
      boxShadow: '0 0 0 1px #cca3eb',
      [':hover']: {
        background: '#ad6cdf',
        border: '0px',
        boxShadow: '0 0 0 1px #cca3eb, 0 0 0 2px #be8be5'
      },
      ['> div']: {
        color: '#c77265'
      }
    }),
    trackContent: (defaults) => ({
      ...defaults,
      fontSize: '1rem'
    }),
    thumb: (defaults) => ({
      ...defaults,
      background: '#f3eafa',
      [':hover']: {
        background: '#fbf8fe'
      }
    })
  }

  return (
    <>
      <Toggle
        padding={'10px'}
        defaultSize={'40px'}
        styles={[stylesOff, stylesOn]}
      >
        <Toggle.Left>
          <FontAwesomeIcon icon={faCheck} />
        </Toggle.Left>
        <Toggle.Right>
          <FontAwesomeIcon icon={faTimes} />
        </Toggle.Right>
      </Toggle>
      <br />
      <Toggle padding={'5px'} styles={stylesPurple} />
    </>
  )
}

const ToggleOuter = styled.div`
  display: flex;
`

const ToggleCol = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin: 0.5rem;
  }
`

export const Demo = () => {
  const styles1 = {
    track: (defaults) => ({
      ...defaults,
      border: '0px',
      boxShadow: '0 0 0 1px #3a3747',
      [':hover']: {
        border: '0px',
        boxShadow: '0 0 0 1px #3a3747'
      },
      ['> div']: {
        fontSize: '0.8rem',
        [':nth-child(2)']: {
          color: '#1b9e2c'
        },
        [':nth-child(3)']: {
          color: '#c77265'
        }
      }
    })
  }

  const stylesBlack = {
    track: (defaults) => ({
      ...defaults,
      border: '0px',
      boxShadow: '0 0 0 1px #333',
      background: '#efefef',
      [':hover']: {
        border: '0px',
        boxShadow: '0 0 0 1px #333'
      },
      ['> div']: {
        fontSize: '0.8rem',
        [':nth-child(2)']: {
          color: '#333'
        },
        [':nth-child(3)']: {
          color: '#333'
        }
      }
    }),
    thumb: (defaults) => ({
      ...defaults,
      background: '#333'
    })
  }

  const stylesWhite = {
    track: (defaults) => ({
      ...defaults,
      border: '0px',
      boxShadow: '0 0 0 1px #333',
      background: '#333',
      [':hover']: {
        border: '0px',
        boxShadow: '0 0 0 1px #333'
      },
      ['> div']: {
        fontSize: '0.8rem',
        [':nth-child(2)']: {
          color: '#efefef'
        },
        [':nth-child(3)']: {
          color: '#efefef'
        }
      }
    }),
    thumb: (defaults) => ({
      ...defaults,
      background: '#efefef'
    })
  }

  const stylesGreen = {
    track: (defaults) => ({
      ...defaults,
      border: '0px',
      background: '#c6eca9',
      boxShadow: '0 0 0 1px #c6eca9',
      [':hover']: {
        border: '0',
        boxShadow: '0 0 0 1px #c6eca9, 0 0 0 2px #537638'
      }
    }),
    thumb: (defaults) => ({
      ...defaults,
      background: '#537638'
    })
  }

  const stylesRed = {
    track: (defaults) => ({
      ...defaults,
      border: '0px',
      background: '#f6dad8',
      boxShadow: '0 0 0 1px #f6dad8',
      [':hover']: {
        border: '0',
        boxShadow: '0 0 0 1px #f6dad8, 0 0 0 2px #a6544e'
      }
    }),
    thumb: (defaults) => ({
      ...defaults,
      background: '#a6544e'
    })
  }

  const [value, toggle] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      toggle(!value)
    }, 1000)
  }, [value])

  return (
    <ToggleOuter>
      <ToggleCol>
        <Toggle
          defaultSize={'24px'}
          value={value}
          styles={[stylesRed, stylesGreen]}
        >
          <Toggle.Left></Toggle.Left>
          <Toggle.Right></Toggle.Right>
        </Toggle>
        <Toggle
          defaultSize={'24px'}
          value={!value}
          styles={[stylesRed, stylesGreen]}
        >
          <Toggle.Left></Toggle.Left>
          <Toggle.Right></Toggle.Right>
        </Toggle>
      </ToggleCol>

      <ToggleCol>
        <Toggle
          defaultSize={'24px'}
          padding={'8px'}
          value={value}
          styles={styles1}
        >
          <Toggle.Left>
            <FontAwesomeIcon icon={faCheck} />
          </Toggle.Left>
          <Toggle.Right>
            <FontAwesomeIcon icon={faTimes} />
          </Toggle.Right>
        </Toggle>
        <Toggle
          defaultSize={'24px'}
          padding={'8px'}
          value={!value}
          styles={styles1}
        >
          <Toggle.Left>
            <FontAwesomeIcon icon={faCheck} />
          </Toggle.Left>
          <Toggle.Right>
            <FontAwesomeIcon icon={faTimes} />
          </Toggle.Right>
        </Toggle>
      </ToggleCol>

      <ToggleCol>
        <Toggle defaultSize={'24px'} value={value} styles={[stylesBlack, stylesWhite]}>
          <Toggle.Left>
            <FontAwesomeIcon icon={faSun} />
          </Toggle.Left>
          <Toggle.Right>
            <FontAwesomeIcon icon={faMoon} />
          </Toggle.Right>
        </Toggle>
        <Toggle defaultSize={'24px'} value={!value} styles={[stylesBlack, stylesWhite]}>
          <Toggle.Left>
            <FontAwesomeIcon icon={faSun} />
          </Toggle.Left>
          <Toggle.Right>
            <FontAwesomeIcon icon={faMoon} />
          </Toggle.Right>
        </Toggle>
      </ToggleCol>
    </ToggleOuter>
  )
}
