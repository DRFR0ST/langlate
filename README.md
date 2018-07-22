# Langlate
### React Component which makes translating easier.

## Install
- Download package via `npm i langlate`
- Import using `var Langlate = require('langlate')` or for ES6 `import Langlate from 'langlate'`

## Usage
You can use langlate as a React Component or get the translation returned by the `raw` method.

#### React Component
`<Langlate text={object} language={string} \>`

#### Function
`Langlate.raw(object text, string language);`

##### Arguments
- 'text' contains language keys and corresponding translations. (e.g. `{ en_US: "Hello World" }`)
- 'language' is the language key. (e.g. `"en_US"`)

## Documentation & Demo
Can be found here - [documentation and demo](https://drfr0st.github.io/langlate/)

## Example
```jsx
import React from "react";
import { render } from "react-dom";
import Langlate from "langlate";

class Demo extends React.Component {
  render() {
    const helloWorld = {
        en_US: "Hello World",
        pl_PL: "Witaj Świecie",
        de_DE: "Hallo Welt",
        es_ES: "Hola Mundo"
    };

    return (
      <div>
        <h2>
          <Langlate language={"en_US"} text={helloWorld} />
        </h2>
      </div>
    );
  }
}

render(<Demo />, document.getElementById("app"));
```

Give it a try on [codesandbox.io](https://codesandbox.io/s/lx2kp45vl9)

Project is published under the MIT License.
Feel free to use it in any kind of way.
