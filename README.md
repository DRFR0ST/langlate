# Langlate
### React Component which makes translating easier.

## Example
```javascript
import React from "react";
import { render } from "react-dom";
import Langlate from "../../lib";

class Demo extends React.Component {
  render() {
    const demo: {
        en_US: "Demo shows Langlate in action.",
        pl_PL: "Demonstracja pokazuje Langlate w akcji.",
        de_DE: "Demo zeigt Langlate in Aktion.",
        es_ES: "Demostración muestra Langlate en acción."
    };

    return (
      <div>
        <h2>
          <Langlate language={"en_US"} text={demo} />
        </h2>
      </div>
    );
  }
}

render(<Demo />, document.getElementById("app"));
```

#### Project is not stable yet!

#### Project is published under the MIT License.
#### Feel free to copy, modify and publish.
