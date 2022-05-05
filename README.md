# Toggle

A simple React toggle component. Features:  ✅ Custom styles  ✅ Custom track and thumb content  ✅ Controlled component  ✅ Styled components theme support

![gif](https://user-images.githubusercontent.com/7522770/163215309-a50ca6ad-38de-4539-98d5-37abf631642a.gif)

### Installation

```sh
npm install @juice789/react-toggle
```

### Demo

Open storybook demo: <a href="https://juice789.github.io/react-toggle/">Open demo</a>

### Usage

```xml
import Toggle from '@juice789/react-toggle'

<Toggle />

<Toggle text={<>thumb<br />txt</>} defaultSize={'50px'} >
  <Toggle.Left>I'm off</Toggle.Left>
  <Toggle.Right>I'm on</Toggle.Right>
</Toggle>

```

### Props

all props are optional

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

### Styles object

Override any css rule of the component.

The keys of the styles object may be: 'container', 'track', 'thumbOuter', 'thumb', 'trackContent'.
A value of the object should a function that returns a valid css style in object format.
The default style rules of the specific component is passed to the function as the first parameter. All other props are passed as the second parameter.
Check out the Storybook demo for example code.

Quick example:

```javascript
const styles = {
  track: (defaults, props) => ({
    ...defaults,
    background: 'rebeccapurple',
    fontSize: '12px'
  }),
  trackContent: (defaults, props) => ({
    ...defaults,
    color: props.theme.mainColor, //ThemeProvider theme
    fontWeight: 'bold'
  })
}
```

## License

MIT
