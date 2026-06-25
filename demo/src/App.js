import React, { useState } from 'react'
import Toggle from '../../src'
import {
  Outer,
  Inner,
  Section,
  SectionTitle,
  Row,
  Label,
  Button
} from './styles'

const stylesGreen = {
  track: (defaults) => ({
    ...defaults,
    border: '0px',
    background: '#c6eca9',
    boxShadow: '0 0 0 1px #c6eca9',
    ['&:hover']: {
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
    ['&:hover']: {
      border: '0',
      boxShadow: '0 0 0 1px #f6dad8, 0 0 0 2px #a6544e'
    }
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
    ['&:hover']: {
      background: '#ad6cdf',
      border: '0px',
      boxShadow: '0 0 0 1px #cca3eb, 0 0 0 2px #be8be5'
    }
  }),
  thumb: (defaults) => ({
    ...defaults,
    background: '#f3eafa',
    ['&:hover']: {
      background: '#fbf8fe'
    }
  })
}

const App = () => {
  const [controlled, setControlled] = useState(false)

  return (
    <Outer>
      <Inner>
        <Section>
          <SectionTitle>Default</SectionTitle>
          <Row>
            <Toggle />
            <Label>Basic toggle</Label>
          </Row>
        </Section>

        <Section>
          <SectionTitle>Custom content</SectionTitle>
          <Row>
            <Toggle text={'OK'} defaultSize={'40px'}>
              <Toggle.Left>OFF</Toggle.Left>
              <Toggle.Right>ON</Toggle.Right>
            </Toggle>
          </Row>
        </Section>

        <Section>
          <SectionTitle>Custom styles</SectionTitle>
          <Row>
            <Toggle padding={'5px'} styles={stylesPurple} />
            <Label>Purple</Label>
          </Row>
          <Row>
            <Toggle
              defaultSize={'30px'}
              styles={[stylesRed, stylesGreen]}
            />
            <Label>Red / Green</Label>
          </Row>
        </Section>

        <Section>
          <SectionTitle>Controlled</SectionTitle>
          <Row>
            <Toggle
              value={controlled}
              onChange={({ value }) => setControlled(value)}
            />
            <Button onClick={() => setControlled(!controlled)}>
              Toggle externally
            </Button>
          </Row>
        </Section>
      </Inner>
    </Outer>
  )
}

export default App
