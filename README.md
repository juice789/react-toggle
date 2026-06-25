# react-toggle

A simple React toggle component.

✅ Custom styles  
✅ Custom track and thumb content  
✅ Controlled component  
✅ Styled components theme support

### Demo

<a href="https://juice789.github.io/react-toggle/">Open demo</a>

### Installation

```sh
npm install @juice789/react-toggle
```

### Builds

Two builds are available depending on your needs:

| Import | styled-components |
| ------ | ----------------- |
| `@juice789/react-toggle` | bundled |
| `@juice789/react-toggle/themed` | external (peer) |

The **themed** build requires `styled-components >=5.1` to be installed in your project. This gives you a single shared instance of styled-components, which is necessary if you want to access your app's theme values in custom styles via `props.theme`.

The default build bundles its own isolated styled-components instance, so no extra install is needed — but `props.theme` will always be `{}` in custom styles, regardless of any `ThemeProvider` in your app.

### Usage

```jsx
import Toggle from '@juice789/react-toggle'

<Toggle />

<Toggle text={<>thumb<br />txt</>} defaultSize={'50px'}>
  <Toggle.Left>I'm off</Toggle.Left>
  <Toggle.Right>I'm on</Toggle.Right>
</Toggle>
```

### Props

All props are optional.

| name        | type            | description                                                                                                                                                             |
| ----------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isOn        | boolean         | Set initial state.                                                                                                                                                      |
| value       | boolean         | Use this to control the component. Overrides the isOn prop.                                                                                                             |
| text        | string or JSX   | Text displayed on the thumb.                                                                                                                                            |
| onChange    | function        | Change event handler. An object is passed to the callback on toggle: { value: '0' } or { value: '1' }                                                                   |
| remap       | object          | Remap the values of the object passed to the onChange callback. format:<br/>{<br/> '0': 'custom value on toggle off',<br/> '1': 'custom value on toggle on' <br/>}<br/> |
| styles      | object or array | Custom styles.<br/>Use a single object to style both on and off state.<br/>Use an array with two style objects to use different styles for the off and on states.       |
| defaultSize | css value       | Set this value to easily resize the component instead of setting custom style rules. Default: 25px.                                                                     |
| padding     | css value       | Set this value to easily set the track padding instead of setting style rules. Default: 0px.                                                                            |

### Complete styling example

Each key of the styles object accepts a function that receives the default styles as the first parameter and all props as the second. Return a CSS-in-JS object.

Use a single object to style both states, or an array of two objects for different off/on styles.

```javascript
const styles = {
  container: (defaults, props) => ({
    ...defaults,
    display: 'inline-block'
  }),
  track: (defaults, props) => ({
    ...defaults,
    background: '#8954b2',
    border: '0px',
    boxShadow: '0 0 0 1px #cca3eb',
    ['&:hover']: {
      background: '#ad6cdf',
      border: '0px',
      boxShadow: '0 0 0 1px #cca3eb, 0 0 0 2px #be8be5'
    }
  }),
  thumbOuter: (defaults, props) => ({
    ...defaults,
    padding: '2px'
  }),
  thumb: (defaults, props) => ({
    ...defaults,
    background: '#f3eafa',
    color: '#333',
    fontSize: '0.8rem',
    ['&:hover']: {
      background: '#fbf8fe'
    }
  }),
  trackContent: (defaults, props) => ({
    ...defaults,
    color: '#e0d4f0',
    fontWeight: 'bold',
    fontSize: '0.8rem'
  })
}

<Toggle
  isOn={false}
  text={'OK'}
  defaultSize={'40px'}
  padding={'5px'}
  styles={styles}
  onChange={({ value }) => console.log(value)}
  remap={{ 1: 'on', 0: 'off' }}
>
  <Toggle.Left>OFF</Toggle.Left>
  <Toggle.Right>ON</Toggle.Right>
</Toggle>
```

### Using the themed build

The `@juice789/react-toggle/themed` build uses your project's installed `styled-components` instance, which means style functions can access the active styled-components theme via `props.theme`.

Wrap your app with `ThemeProvider` from styled-components and pass your theme object:

```jsx
import { ThemeProvider } from 'styled-components'
import Toggle from '@juice789/react-toggle/themed'

const theme = {
  primary: '#6200ea',
  background: '#1e1e1e'
}

const App = () => (
  <ThemeProvider theme={theme}>
    <Toggle styles={{
      trackContent: (defaults, props) => ({
        ...defaults,
        color: props.theme.primary
      })
    }} />
  </ThemeProvider>
)
```

### License

MIT
