# Langlate
### React Component which makes multilingualism easier.

## Install
- Download package via `npm i langlate`
- Import using `var Langlate = require('langlate')` or for ES6 `import Langlate from 'langlate'`

## Usage
You can use langlate as a React Component or get the translation returned by the `raw` method as a string.

#### Component
`<Langlate text={object} language={string} \>`

#### Function
`Langlate.raw(object text, string language);`

##### Arguments
- 'text' [object] contains language keys and corresponding translations. (e.g. `{ en_US: "Hello World" }`)
- 'language' [string] is the language in which the translation will be returned. (e.g. `"en_US"`)

## Documentation & Demo
Can be found here - [documentation and demo](https://drfr0st.github.io/react-langlate/)

## Example
```jsx
import React from "react";
import { render } from "react-dom";
import Langlate from "langlate";

class Demo extends React.Component {
  render() {
    /** Object containing translations. */
    const helloWorld = {
        en_US: "Hello World",
        pl_PL: "Witaj Świecie",
        de_DE: "Hallo Welt",
        es_ES: "Hola Mundo"
    };

    return (
        <h2>
          <Langlate language={"en_US"} text={helloWorld} />
        </h2>
    );
  }
}

render(<Demo />, document.getElementById("app"));
```

Give it a try on [codesandbox.io](https://codesandbox.io/s/lx2kp45vl9)

## Build instructions
After cloning the repo, install all dependencies using `npm install`.

Run the development mode:
`npm run dev`

Run just the docs:
`npm run docs`

Run just the library:
`npm run lib`

Deploy the production-ready docs:
`npm run docs:prod`

Test the library:
`npm test`
