(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./.storybook sync ^\\.[\\\\/](?:(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.js)$":function(module,exports,__webpack_require__){var map={"./Toggle.stories.js":"./.storybook/Toggle.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./.storybook sync ^\\.[\\\\/](?:(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.js)$"},"./.storybook/Toggle.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Toggle_stories_Default})),__webpack_require__.d(__webpack_exports__,"OnChangeEvent",(function(){return Toggle_stories_OnChangeEvent})),__webpack_require__.d(__webpack_exports__,"OnChangeEvent2",(function(){return Toggle_stories_OnChangeEvent2})),__webpack_require__.d(__webpack_exports__,"CustomContent",(function(){return Toggle_stories_CustomContent})),__webpack_require__.d(__webpack_exports__,"ControlledComponent",(function(){return Toggle_stories_ControlledComponent})),__webpack_require__.d(__webpack_exports__,"Styling",(function(){return Toggle_stories_Styling})),__webpack_require__.d(__webpack_exports__,"Demo",(function(){return Toggle_stories_Demo}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons_index_es=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),defaultStyles={container:function container(){return{position:"relative"}},track:function track(_ref){var _ref2,styles=_ref.styles;return(_ref2={display:"flex",background:"#3a3747",borderRadius:styles.defaultSize,width:"calc("+styles.defaultSize+" * 2)",height:styles.defaultSize}).display="flex",_ref2.justifyContent="space-between",_ref2.alignItems="center",_ref2.position="relative",_ref2.cursor="pointer",_ref2.border="1px solid #3a3747",_ref2.transition="background 0.2s ease",_ref2[":hover"]={background:"#3a3747",border:"1px solid #6e66a6"},_ref2},thumbOuter:function thumbOuter(_ref3){var styles=_ref3.styles;return{display:"flex",position:"absolute",alignItems:"center",justifyContent:"center",width:styles.defaultSize,height:styles.defaultSize}},thumb:function thumb(_ref4){var _ref5,styles=_ref4.styles;return(_ref5={transition:"transform 0.2s ease",position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",userSelect:"none",transform:"translateX(\n    "+(_ref4.on?"calc(100% + "+styles.padding+")":"0%")+"\n  )",textAlign:"center",background:"#6e66a6",width:"calc("+styles.defaultSize+" - "+styles.padding+")",height:"calc("+styles.defaultSize+" - "+styles.padding+")"}).background="#6e66a6",_ref5.color="#faf9f8",_ref5.borderRadius=styles.defaultSize,_ref5.fontSize="0.7rem",_ref5},trackContent:function trackContent(){return{display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none",width:"50%",height:"100%",fontSize:"0.7rem",color:"#efedeb"}}},styles_makeComponent=function makeComponent(key){return styled_components_browser_esm.b.div((function(props){var _props$styles;return null!=props&&null!==(_props$styles=props.styles)&&void 0!==_props$styles&&_props$styles[key]?Object(styled_components_browser_esm.a)(props.styles[key](defaultStyles[key](props),props)):Object(styled_components_browser_esm.a)(defaultStyles[key](props))}))},Container=styles_makeComponent("container"),Track=styles_makeComponent("track"),ThumbOuter=styles_makeComponent("thumbOuter"),Thumb=styles_makeComponent("thumb"),TrackContent=styles_makeComponent("trackContent"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var src_Toggle=function Toggle(_ref){var _ref$onChange=_ref.onChange,onChange=void 0===_ref$onChange?function(){}:_ref$onChange,_ref$children=_ref.children,children=void 0===_ref$children?[]:_ref$children,_ref$isOn=_ref.isOn,isOn=void 0!==_ref$isOn&&_ref$isOn,_ref$remap=_ref.remap,remap=void 0===_ref$remap?{1:"1",0:"0"}:_ref$remap,_ref$text=_ref.text,text=void 0===_ref$text?"":_ref$text,_ref$styles=_ref.styles,styles=void 0===_ref$styles?{}:_ref$styles,_ref$defaultSize=_ref.defaultSize,defaultSize=void 0===_ref$defaultSize?"25px":_ref$defaultSize,_ref$padding=_ref.padding,padding=void 0===_ref$padding?"0px":_ref$padding,value=_ref.value,_useState2=_slicedToArray(Object(react.useState)(isOn),2),on=_useState2[0],toggle=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(!1),2),ready=_useState4[0],setReady=_useState4[1];Object(react.useEffect)((function(){ready?onChange({value:on?remap[1]:remap[0]}):setReady(!0)}),[on]);var _on=void 0===value?on?1:0:value?1:0,_styles=styles instanceof Array?styles[_on?0:1]:styles;return _styles.defaultSize=defaultSize,_styles.padding=padding,Object(jsx_runtime.jsx)(Container,{styles:_styles,children:Object(jsx_runtime.jsxs)(Track,{onClick:function onClick(){void 0===value?toggle(!on):onChange({value:!value})},styles:_styles,children:[Object(jsx_runtime.jsx)(ThumbOuter,{styles:_styles,children:Object(jsx_runtime.jsx)(Thumb,{styles:_styles,on:_on,children:text})}),Object(jsx_runtime.jsx)(TrackContent,{styles:_styles,children:children[0]||null}),Object(jsx_runtime.jsx)(TrackContent,{styles:_styles,children:children[1]||null})]})})};src_Toggle.displayName="Toggle",src_Toggle.Left=react_default.a.Fragment,src_Toggle.Right=react_default.a.Fragment,src_Toggle.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},children:{defaultValue:{value:"[]",computed:!1},required:!1},isOn:{defaultValue:{value:"false",computed:!1},required:!1},remap:{defaultValue:{value:"{ 1: '1', 0: '0' }",computed:!1},required:!1},text:{defaultValue:{value:"''",computed:!1},required:!1},styles:{defaultValue:{value:"{}",computed:!1},required:!1},defaultSize:{defaultValue:{value:"'25px'",computed:!1},required:!1},padding:{defaultValue:{value:"'0px'",computed:!1},required:!1}}};var _templateObject,_templateObject2,src=src_Toggle;function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function Toggle_stories_slicedToArray(arr,i){return function Toggle_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Toggle_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function Toggle_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Toggle_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Toggle_stories_arrayLikeToArray(o,minLen)}(arr,i)||function Toggle_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Toggle_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\index.js"]={name:"Toggle",docgenInfo:src_Toggle.__docgenInfo,path:"src\\index.js"});__webpack_exports__.default={parameters:{storySource:{source:"import React, { useEffect, useState } from 'react'\r\nimport styled from 'styled-components'\r\nimport { FontAwesomeIcon } from '@fortawesome/react-fontawesome'\r\nimport {\r\n  faCheck,\r\n  faTimes,\r\n  faSun,\r\n  faMoon\r\n} from '@fortawesome/free-solid-svg-icons'\r\n\r\nimport Toggle from '../src'\r\n\r\nexport default {\r\n  component: Toggle\r\n}\r\n\r\nexport const Default = () => (\r\n  <>\r\n    <Toggle />\r\n    <br />\r\n    <a href=\"https://github.com/juice789/react-toggle\">\r\n      Go to Github repository\r\n    </a>\r\n    <br />\r\n    <br />\r\n    <a href=\"https://www.npmjs.com/package/@juice789/react-toggle\">\r\n      Go to NPM package\r\n    </a>\r\n  </>\r\n)\r\n\r\nexport const OnChangeEvent = () => (\r\n  <>\r\n    <Toggle\r\n      onChange={(x) =>\r\n        (document.getElementById('textarea1').value = JSON.stringify(x))\r\n      }\r\n    />\r\n    <br />\r\n    <textarea cols={15} rows={10} id={'textarea1'}></textarea>\r\n  </>\r\n)\r\n\r\nexport const OnChangeEvent2 = () => (\r\n  <>\r\n    <Toggle\r\n      onChange={(x) =>\r\n        (document.getElementById('textarea2').value = JSON.stringify(x))\r\n      }\r\n      remap={{ 1: 'turned on', 0: 'turned off' }}\r\n    />\r\n    <br />\r\n    <textarea cols={15} rows={10} id={'textarea2'}></textarea>\r\n  </>\r\n)\r\n\r\nexport const CustomContent = () => (\r\n  <Toggle text={'OK'}>\r\n    <Toggle.Left>4</Toggle.Left>\r\n    <Toggle.Right>2</Toggle.Right>\r\n  </Toggle>\r\n)\r\n\r\nexport const ControlledComponent = () => {\r\n  const [toggleValue, setToggleValue] = useState(true)\r\n  return (\r\n    <>\r\n      <Toggle\r\n        value={toggleValue}\r\n        onChange={({ value }) => setToggleValue(value)}\r\n      />\r\n      <br />\r\n      <button onClick={() => setToggleValue(!toggleValue)}>Press me!</button>\r\n    </>\r\n  )\r\n}\r\n\r\nexport const Styling = () => {\r\n  const stylesOff = {\r\n    track: (defaults) => ({\r\n      ...defaults,\r\n      border: '1px solid #c6eca9',\r\n      background: '#c6eca9',\r\n      [':hover']: {\r\n        border: '1px solid #537638'\r\n      },\r\n      ['> div']: {\r\n        [':nth-child(2)']: {\r\n          color: '#1b9e2c'\r\n        },\r\n        [':nth-child(3)']: {\r\n          color: '#c77265'\r\n        }\r\n      }\r\n    }),\r\n    trackContent: (defaults) => ({\r\n      ...defaults,\r\n      fontSize: '1rem'\r\n    }),\r\n    thumb: (defaults) => ({\r\n      ...defaults,\r\n      background: '#537638'\r\n    })\r\n  }\r\n\r\n  const stylesOn = {\r\n    track: (defaults) => ({\r\n      ...defaults,\r\n      border: '1px solid #f6dad8',\r\n      background: '#f6dad8',\r\n      [':hover']: {\r\n        border: '1px solid #a6544e'\r\n      },\r\n      ['> div']: {\r\n        [':nth-child(2)']: {\r\n          color: '#1b9e2c'\r\n        },\r\n        [':nth-child(3)']: {\r\n          color: '#c77265'\r\n        }\r\n      }\r\n    }),\r\n    trackContent: (defaults) => ({\r\n      ...defaults,\r\n      fontSize: '1rem'\r\n    }),\r\n    thumb: (defaults) => ({\r\n      ...defaults,\r\n      background: '#a6544e'\r\n    })\r\n  }\r\n\r\n  const stylesPurple = {\r\n    track: (defaults) => ({\r\n      ...defaults,\r\n      border: '0px',\r\n      background: '#8954b2',\r\n      boxShadow: '0 0 0 1px #cca3eb',\r\n      [':hover']: {\r\n        background: '#ad6cdf',\r\n        border: '0px',\r\n        boxShadow: '0 0 0 1px #cca3eb, 0 0 0 2px #be8be5'\r\n      },\r\n      ['> div']: {\r\n        color: '#c77265'\r\n      }\r\n    }),\r\n    trackContent: (defaults) => ({\r\n      ...defaults,\r\n      fontSize: '1rem'\r\n    }),\r\n    thumb: (defaults) => ({\r\n      ...defaults,\r\n      background: '#f3eafa',\r\n      [':hover']: {\r\n        background: '#fbf8fe'\r\n      }\r\n    })\r\n  }\r\n\r\n  return (\r\n    <>\r\n      <Toggle\r\n        padding={'10px'}\r\n        defaultSize={'40px'}\r\n        styles={[stylesOff, stylesOn]}\r\n      >\r\n        <Toggle.Left>\r\n          <FontAwesomeIcon icon={faCheck} />\r\n        </Toggle.Left>\r\n        <Toggle.Right>\r\n          <FontAwesomeIcon icon={faTimes} />\r\n        </Toggle.Right>\r\n      </Toggle>\r\n      <br />\r\n      <Toggle padding={'5px'} styles={stylesPurple} />\r\n    </>\r\n  )\r\n}\r\n\r\nconst ToggleOuter = styled.div`\r\n  display: flex;\r\n`\r\n\r\nconst ToggleCol = styled.div`\r\n  display: flex;\r\n  flex-direction: column;\r\n  > * {\r\n    margin: 0.5rem;\r\n  }\r\n`\r\n\r\nexport const Demo = () => {\r\n  const styles1 = {\r\n    track: (defaults) => ({\r\n      ...defaults,\r\n      border: '0px',\r\n      boxShadow: '0 0 0 1px #3a3747',\r\n      [':hover']: {\r\n        border: '0px',\r\n        boxShadow: '0 0 0 1px #3a3747'\r\n      },\r\n      ['> div']: {\r\n        fontSize: '0.8rem',\r\n        [':nth-child(2)']: {\r\n          color: '#1b9e2c'\r\n        },\r\n        [':nth-child(3)']: {\r\n          color: '#c77265'\r\n        }\r\n      }\r\n    })\r\n  }\r\n\r\n  const stylesBlack = {\r\n    track: (defaults) => ({\r\n      ...defaults,\r\n      border: '0px',\r\n      boxShadow: '0 0 0 1px #333',\r\n      background: '#efefef',\r\n      [':hover']: {\r\n        border: '0px',\r\n        boxShadow: '0 0 0 1px #333'\r\n      },\r\n      ['> div']: {\r\n        fontSize: '0.8rem',\r\n        [':nth-child(2)']: {\r\n          color: '#333'\r\n        },\r\n        [':nth-child(3)']: {\r\n          color: '#333'\r\n        }\r\n      }\r\n    }),\r\n    thumb: (defaults) => ({\r\n      ...defaults,\r\n      background: '#333'\r\n    })\r\n  }\r\n\r\n  const stylesWhite = {\r\n    track: (defaults) => ({\r\n      ...defaults,\r\n      border: '0px',\r\n      boxShadow: '0 0 0 1px #333',\r\n      background: '#333',\r\n      [':hover']: {\r\n        border: '0px',\r\n        boxShadow: '0 0 0 1px #333'\r\n      },\r\n      ['> div']: {\r\n        fontSize: '0.8rem',\r\n        [':nth-child(2)']: {\r\n          color: '#efefef'\r\n        },\r\n        [':nth-child(3)']: {\r\n          color: '#efefef'\r\n        }\r\n      }\r\n    }),\r\n    thumb: (defaults) => ({\r\n      ...defaults,\r\n      background: '#efefef'\r\n    })\r\n  }\r\n\r\n  const stylesGreen = {\r\n    track: (defaults) => ({\r\n      ...defaults,\r\n      border: '0px',\r\n      background: '#c6eca9',\r\n      boxShadow: '0 0 0 1px #c6eca9',\r\n      [':hover']: {\r\n        border: '0',\r\n        boxShadow: '0 0 0 1px #c6eca9, 0 0 0 2px #537638'\r\n      }\r\n    }),\r\n    thumb: (defaults) => ({\r\n      ...defaults,\r\n      background: '#537638'\r\n    })\r\n  }\r\n\r\n  const stylesRed = {\r\n    track: (defaults) => ({\r\n      ...defaults,\r\n      border: '0px',\r\n      background: '#f6dad8',\r\n      boxShadow: '0 0 0 1px #f6dad8',\r\n      [':hover']: {\r\n        border: '0',\r\n        boxShadow: '0 0 0 1px #f6dad8, 0 0 0 2px #a6544e'\r\n      }\r\n    }),\r\n    thumb: (defaults) => ({\r\n      ...defaults,\r\n      background: '#a6544e'\r\n    })\r\n  }\r\n\r\n  const [value, toggle] = useState(false)\r\n\r\n  useEffect(() => {\r\n    setTimeout(() => {\r\n      toggle(!value)\r\n    }, 1000)\r\n  }, [value])\r\n\r\n  return (\r\n    <ToggleOuter>\r\n      <ToggleCol>\r\n        <Toggle\r\n          defaultSize={'24px'}\r\n          value={value}\r\n          styles={[stylesRed, stylesGreen]}\r\n        >\r\n          <Toggle.Left></Toggle.Left>\r\n          <Toggle.Right></Toggle.Right>\r\n        </Toggle>\r\n        <Toggle\r\n          defaultSize={'24px'}\r\n          value={!value}\r\n          styles={[stylesRed, stylesGreen]}\r\n        >\r\n          <Toggle.Left></Toggle.Left>\r\n          <Toggle.Right></Toggle.Right>\r\n        </Toggle>\r\n      </ToggleCol>\r\n\r\n      <ToggleCol>\r\n        <Toggle\r\n          defaultSize={'24px'}\r\n          padding={'8px'}\r\n          value={value}\r\n          styles={styles1}\r\n        >\r\n          <Toggle.Left>\r\n            <FontAwesomeIcon icon={faCheck} />\r\n          </Toggle.Left>\r\n          <Toggle.Right>\r\n            <FontAwesomeIcon icon={faTimes} />\r\n          </Toggle.Right>\r\n        </Toggle>\r\n        <Toggle\r\n          defaultSize={'24px'}\r\n          padding={'8px'}\r\n          value={!value}\r\n          styles={styles1}\r\n        >\r\n          <Toggle.Left>\r\n            <FontAwesomeIcon icon={faCheck} />\r\n          </Toggle.Left>\r\n          <Toggle.Right>\r\n            <FontAwesomeIcon icon={faTimes} />\r\n          </Toggle.Right>\r\n        </Toggle>\r\n      </ToggleCol>\r\n\r\n      <ToggleCol>\r\n        <Toggle defaultSize={'24px'} value={value} styles={[stylesBlack, stylesWhite]}>\r\n          <Toggle.Left>\r\n            <FontAwesomeIcon icon={faSun} />\r\n          </Toggle.Left>\r\n          <Toggle.Right>\r\n            <FontAwesomeIcon icon={faMoon} />\r\n          </Toggle.Right>\r\n        </Toggle>\r\n        <Toggle defaultSize={'24px'} value={!value} styles={[stylesBlack, stylesWhite]}>\r\n          <Toggle.Left>\r\n            <FontAwesomeIcon icon={faSun} />\r\n          </Toggle.Left>\r\n          <Toggle.Right>\r\n            <FontAwesomeIcon icon={faMoon} />\r\n          </Toggle.Right>\r\n        </Toggle>\r\n      </ToggleCol>\r\n    </ToggleOuter>\r\n  )\r\n}\r\n",locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:30},startBody:{col:23,line:17},endBody:{col:1,line:30}},"on-change-event":{startLoc:{col:29,line:32},endLoc:{col:1,line:42},startBody:{col:29,line:32},endBody:{col:1,line:42}},"on-change-event-2":{startLoc:{col:30,line:44},endLoc:{col:1,line:55},startBody:{col:30,line:44},endBody:{col:1,line:55}},"custom-content":{startLoc:{col:29,line:57},endLoc:{col:1,line:62},startBody:{col:29,line:57},endBody:{col:1,line:62}},"controlled-component":{startLoc:{col:35,line:64},endLoc:{col:1,line:76},startBody:{col:35,line:64},endBody:{col:1,line:76}},styling:{startLoc:{col:23,line:78},endLoc:{col:1,line:179},startBody:{col:23,line:78},endBody:{col:1,line:179}},demo:{startLoc:{col:20,line:193},endLoc:{col:1,line:379},startBody:{col:20,line:193},endBody:{col:1,line:379}}}}},component:src};var Toggle_stories_Default=function Default(){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(src,{}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("a",{href:"https://github.com/juice789/react-toggle",children:"Go to Github repository"}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("a",{href:"https://www.npmjs.com/package/@juice789/react-toggle",children:"Go to NPM package"})]})},Toggle_stories_OnChangeEvent=function OnChangeEvent(){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(src,{onChange:function onChange(x){return document.getElementById("textarea1").value=JSON.stringify(x)}}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("textarea",{cols:15,rows:10,id:"textarea1"})]})},Toggle_stories_OnChangeEvent2=function OnChangeEvent2(){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(src,{onChange:function onChange(x){return document.getElementById("textarea2").value=JSON.stringify(x)},remap:{1:"turned on",0:"turned off"}}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("textarea",{cols:15,rows:10,id:"textarea2"})]})},Toggle_stories_CustomContent=function CustomContent(){return Object(jsx_runtime.jsxs)(src,{text:"OK",children:[Object(jsx_runtime.jsx)(src.Left,{children:"4"}),Object(jsx_runtime.jsx)(src.Right,{children:"2"})]})};Toggle_stories_CustomContent.displayName="CustomContent";var Toggle_stories_ControlledComponent=function ControlledComponent(){var _useState2=Toggle_stories_slicedToArray(Object(react.useState)(!0),2),toggleValue=_useState2[0],setToggleValue=_useState2[1];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(src,{value:toggleValue,onChange:function onChange(_ref){var value=_ref.value;return setToggleValue(value)}}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("button",{onClick:function onClick(){return setToggleValue(!toggleValue)},children:"Press me!"})]})},Toggle_stories_Styling=function Styling(){var stylesOff={track:function track(defaults){var _div,_Object$assign;return Object.assign({},defaults,((_Object$assign={border:"1px solid #c6eca9",background:"#c6eca9"})[":hover"]={border:"1px solid #537638"},_Object$assign["> div"]=((_div={})[":nth-child(2)"]={color:"#1b9e2c"},_div[":nth-child(3)"]={color:"#c77265"},_div),_Object$assign))},trackContent:function trackContent(defaults){return Object.assign({},defaults,{fontSize:"1rem"})},thumb:function thumb(defaults){return Object.assign({},defaults,{background:"#537638"})}},stylesOn={track:function track(defaults){var _div2,_Object$assign2;return Object.assign({},defaults,((_Object$assign2={border:"1px solid #f6dad8",background:"#f6dad8"})[":hover"]={border:"1px solid #a6544e"},_Object$assign2["> div"]=((_div2={})[":nth-child(2)"]={color:"#1b9e2c"},_div2[":nth-child(3)"]={color:"#c77265"},_div2),_Object$assign2))},trackContent:function trackContent(defaults){return Object.assign({},defaults,{fontSize:"1rem"})},thumb:function thumb(defaults){return Object.assign({},defaults,{background:"#a6544e"})}},stylesPurple={track:function track(defaults){var _Object$assign3;return Object.assign({},defaults,((_Object$assign3={border:"0px",background:"#8954b2",boxShadow:"0 0 0 1px #cca3eb"})[":hover"]={background:"#ad6cdf",border:"0px",boxShadow:"0 0 0 1px #cca3eb, 0 0 0 2px #be8be5"},_Object$assign3["> div"]={color:"#c77265"},_Object$assign3))},trackContent:function trackContent(defaults){return Object.assign({},defaults,{fontSize:"1rem"})},thumb:function thumb(defaults){var _Object$assign4;return Object.assign({},defaults,((_Object$assign4={background:"#f3eafa"})[":hover"]={background:"#fbf8fe"},_Object$assign4))}};return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)(src,{padding:"10px",defaultSize:"40px",styles:[stylesOff,stylesOn],children:[Object(jsx_runtime.jsx)(src.Left,{children:Object(jsx_runtime.jsx)(index_es.a,{icon:free_solid_svg_icons_index_es.a})}),Object(jsx_runtime.jsx)(src.Right,{children:Object(jsx_runtime.jsx)(index_es.a,{icon:free_solid_svg_icons_index_es.d})})]}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)(src,{padding:"5px",styles:stylesPurple})]})},ToggleOuter=styled_components_browser_esm.b.div(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  display: flex;\n"]))),ToggleCol=styled_components_browser_esm.b.div(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  > * {\n    margin: 0.5rem;\n  }\n"]))),Toggle_stories_Demo=function Demo(){var styles1={track:function track(defaults){var _div3,_Object$assign5;return Object.assign({},defaults,((_Object$assign5={border:"0px",boxShadow:"0 0 0 1px #3a3747"})[":hover"]={border:"0px",boxShadow:"0 0 0 1px #3a3747"},_Object$assign5["> div"]=((_div3={fontSize:"0.8rem"})[":nth-child(2)"]={color:"#1b9e2c"},_div3[":nth-child(3)"]={color:"#c77265"},_div3),_Object$assign5))}},stylesBlack={track:function track(defaults){var _div4,_Object$assign6;return Object.assign({},defaults,((_Object$assign6={border:"0px",boxShadow:"0 0 0 1px #333",background:"#efefef"})[":hover"]={border:"0px",boxShadow:"0 0 0 1px #333"},_Object$assign6["> div"]=((_div4={fontSize:"0.8rem"})[":nth-child(2)"]={color:"#333"},_div4[":nth-child(3)"]={color:"#333"},_div4),_Object$assign6))},thumb:function thumb(defaults){return Object.assign({},defaults,{background:"#333"})}},stylesWhite={track:function track(defaults){var _div5,_Object$assign7;return Object.assign({},defaults,((_Object$assign7={border:"0px",boxShadow:"0 0 0 1px #333",background:"#333"})[":hover"]={border:"0px",boxShadow:"0 0 0 1px #333"},_Object$assign7["> div"]=((_div5={fontSize:"0.8rem"})[":nth-child(2)"]={color:"#efefef"},_div5[":nth-child(3)"]={color:"#efefef"},_div5),_Object$assign7))},thumb:function thumb(defaults){return Object.assign({},defaults,{background:"#efefef"})}},stylesGreen={track:function track(defaults){var _Object$assign8;return Object.assign({},defaults,((_Object$assign8={border:"0px",background:"#c6eca9",boxShadow:"0 0 0 1px #c6eca9"})[":hover"]={border:"0",boxShadow:"0 0 0 1px #c6eca9, 0 0 0 2px #537638"},_Object$assign8))},thumb:function thumb(defaults){return Object.assign({},defaults,{background:"#537638"})}},stylesRed={track:function track(defaults){var _Object$assign9;return Object.assign({},defaults,((_Object$assign9={border:"0px",background:"#f6dad8",boxShadow:"0 0 0 1px #f6dad8"})[":hover"]={border:"0",boxShadow:"0 0 0 1px #f6dad8, 0 0 0 2px #a6544e"},_Object$assign9))},thumb:function thumb(defaults){return Object.assign({},defaults,{background:"#a6544e"})}},_useState4=Toggle_stories_slicedToArray(Object(react.useState)(!1),2),value=_useState4[0],toggle=_useState4[1];return Object(react.useEffect)((function(){setTimeout((function(){toggle(!value)}),1e3)}),[value]),Object(jsx_runtime.jsxs)(ToggleOuter,{children:[Object(jsx_runtime.jsxs)(ToggleCol,{children:[Object(jsx_runtime.jsxs)(src,{defaultSize:"24px",value:value,styles:[stylesRed,stylesGreen],children:[Object(jsx_runtime.jsx)(src.Left,{}),Object(jsx_runtime.jsx)(src.Right,{})]}),Object(jsx_runtime.jsxs)(src,{defaultSize:"24px",value:!value,styles:[stylesRed,stylesGreen],children:[Object(jsx_runtime.jsx)(src.Left,{}),Object(jsx_runtime.jsx)(src.Right,{})]})]}),Object(jsx_runtime.jsxs)(ToggleCol,{children:[Object(jsx_runtime.jsxs)(src,{defaultSize:"24px",padding:"8px",value:value,styles:styles1,children:[Object(jsx_runtime.jsx)(src.Left,{children:Object(jsx_runtime.jsx)(index_es.a,{icon:free_solid_svg_icons_index_es.a})}),Object(jsx_runtime.jsx)(src.Right,{children:Object(jsx_runtime.jsx)(index_es.a,{icon:free_solid_svg_icons_index_es.d})})]}),Object(jsx_runtime.jsxs)(src,{defaultSize:"24px",padding:"8px",value:!value,styles:styles1,children:[Object(jsx_runtime.jsx)(src.Left,{children:Object(jsx_runtime.jsx)(index_es.a,{icon:free_solid_svg_icons_index_es.a})}),Object(jsx_runtime.jsx)(src.Right,{children:Object(jsx_runtime.jsx)(index_es.a,{icon:free_solid_svg_icons_index_es.d})})]})]}),Object(jsx_runtime.jsxs)(ToggleCol,{children:[Object(jsx_runtime.jsxs)(src,{defaultSize:"24px",value:value,styles:[stylesBlack,stylesWhite],children:[Object(jsx_runtime.jsx)(src.Left,{children:Object(jsx_runtime.jsx)(index_es.a,{icon:free_solid_svg_icons_index_es.c})}),Object(jsx_runtime.jsx)(src.Right,{children:Object(jsx_runtime.jsx)(index_es.a,{icon:free_solid_svg_icons_index_es.b})})]}),Object(jsx_runtime.jsxs)(src,{defaultSize:"24px",value:!value,styles:[stylesBlack,stylesWhite],children:[Object(jsx_runtime.jsx)(src.Left,{children:Object(jsx_runtime.jsx)(index_es.a,{icon:free_solid_svg_icons_index_es.c})}),Object(jsx_runtime.jsx)(src.Right,{children:Object(jsx_runtime.jsx)(index_es.a,{icon:free_solid_svg_icons_index_es.b})})]})]})]})};Toggle_stories_Demo.displayName="Demo",Toggle_stories_Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook\\Toggle.stories.js"]={name:"Default",docgenInfo:Toggle_stories_Default.__docgenInfo,path:".storybook\\Toggle.stories.js"}),Toggle_stories_OnChangeEvent.__docgenInfo={description:"",methods:[],displayName:"OnChangeEvent"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook\\Toggle.stories.js"]={name:"OnChangeEvent",docgenInfo:Toggle_stories_OnChangeEvent.__docgenInfo,path:".storybook\\Toggle.stories.js"}),Toggle_stories_OnChangeEvent2.__docgenInfo={description:"",methods:[],displayName:"OnChangeEvent2"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook\\Toggle.stories.js"]={name:"OnChangeEvent2",docgenInfo:Toggle_stories_OnChangeEvent2.__docgenInfo,path:".storybook\\Toggle.stories.js"}),Toggle_stories_CustomContent.__docgenInfo={description:"",methods:[],displayName:"CustomContent"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook\\Toggle.stories.js"]={name:"CustomContent",docgenInfo:Toggle_stories_CustomContent.__docgenInfo,path:".storybook\\Toggle.stories.js"}),Toggle_stories_ControlledComponent.__docgenInfo={description:"",methods:[],displayName:"ControlledComponent"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook\\Toggle.stories.js"]={name:"ControlledComponent",docgenInfo:Toggle_stories_ControlledComponent.__docgenInfo,path:".storybook\\Toggle.stories.js"}),Toggle_stories_Styling.__docgenInfo={description:"",methods:[],displayName:"Styling"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook\\Toggle.stories.js"]={name:"Styling",docgenInfo:Toggle_stories_Styling.__docgenInfo,path:".storybook\\Toggle.stories.js"}),Toggle_stories_Demo.__docgenInfo={description:"",methods:[],displayName:"Demo"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook\\Toggle.stories.js"]={name:"Demo",docgenInfo:Toggle_stories_Demo.__docgenInfo,path:".storybook\\Toggle.stories.js"})},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./.storybook sync ^\\.[\\\\/](?:(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.js)$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,2,3]]]);