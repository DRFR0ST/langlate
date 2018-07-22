# Langlate
### React Component which makes translating easier.

## Install
- Download package via `npm i langlate`
- Import using `import Langlate from 'langlate'` or `var Langlate = require('langlate')`

## Usage
You can use langlate as a React Component or get the translation returned by the `raw` function.

#### React Component
`<Langlate text={object} language={string} \>`

#### Function
`Langlate.raw(object text, string language);`

##### Arguments
- 'text' contains language keys and corresponding translations.
- 'language' is the language key.

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

    const howdy = {
      en_US: "How are you?",
      pl_PL: "Jak się masz?",
      de_DE: "Wie gehts dir?",
      es_ES: "¿Cómo estás?"
    }

    return (
      <div>
        <h2>
          <Langlate language={"en_US"} text={helloWorld} />
          { Langlate.raw(howdy, "de_DE") }
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
