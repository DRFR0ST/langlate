# Langlate
### React Component which makes translating easier.

[Documentation and Demo](https://drfr0st.github.io/langlate/)

## Example
```jsx
import React from "react";
import { render } from "react-dom";
import Langlate from "../../lib";

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

Try it yourself on [codesandbox.io](https://codesandbox.io/s/lx2kp45vl9)

Project is published under the MIT License.
Feel free to use it in any kind of way.