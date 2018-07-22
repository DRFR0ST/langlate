import React from "react";
import { render } from "react-dom";
import Langlate from "../../lib";
import "./styles.css";

import SyntaxHighlighter from "react-syntax-highlighter/prism";

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: "en_US" // Default language.
    };
  }

  render() {
    // All text translations.
    const langlations = {
      demo: {
        en_US: "Demo shows Langlate in action.",
        pl_PL: "Demonstracja pokazuje Langlate w akcji.",
        de_DE: "Demo zeigt Langlate in Aktion.",
        es_ES: "Demostración muestra Langlate en acción."
      },
      enUS: {
        en_US: "English",
        pl_PL: "Angielski",
        de_DE: "Englisch",
        es_ES: "Inglés"
      },
      plPL: {
        en_US: "Polish",
        pl_PL: "Polski",
        de_DE: "Polnisch",
        es_ES: "Polaco"
      },
      deDE: {
        en_US: "German",
        pl_PL: "Niemiecki",
        de_DE: "Deutsch",
        es_ES: "Alemán"
      },
      esES: {
        en_US: "Spanish",
        pl_PL: "Hiszpański",
        de_DE: "Spanisch",
        es_ES: "Español"
      }
    };

    const german = Langlate.raw(langlations.deDE, this.state.language);

    return (
      <React.Fragment>
        <div className="container">
          <div className="logo">
            <h1>LANGLATE</h1>
            <p>Translate easier.</p>
          </div>
          <div className="demo">
            <h2>
              <Langlate
                language={this.state.language}
                text={langlations.demo}
              />
            </h2>
            <hr />
            <br />
            <button
              className={this.state.language === "en_US" ? "active" : ""}
              onClick={e => this.setState({ language: "en_US" })}
            >
              <Langlate
                text={langlations.enUS}
                language={this.state.language}
              />
            </button>
            <button
              className={this.state.language === "pl_PL" ? "active" : ""}
              onClick={e => this.setState({ language: "pl_PL" })}
            >
              {Langlate.raw(langlations.plPL, this.state.language)}
            </button>
            <button
              className={this.state.language === "en_US" ? "de_DE" : ""}
              onClick={e => this.setState({ language: "de_DE" })}
            >
              {german}
            </button>
            <button
              className={this.state.language === "en_US" ? "es_ES" : ""}
              onClick={e => this.setState({ language: "es_ES" })}
            >
              <Langlate
                text={langlations.esES}
                language={this.state.language}
              />
            </button>
          </div>
          <br />
          <br />
          <h4># How to install?</h4>
          <SyntaxHighlighter
            language="jsx"
            className="codebox oneline"
          >{`npm i langlate@latest`}</SyntaxHighlighter>
          <br />
          <h4># Example</h4>
          <SyntaxHighlighter language="jsx" className="codebox">{`
          import React from "react";
          import { render } from "react-dom";
          import Langlate from "../../lib";

          class Demo extends React.Component {
            render() {
              const demo = {
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
          `}</SyntaxHighlighter>
          <p>
            Try it yourself on{" "}
            <a target="_blank" href="https://codesandbox.io/s/lx2kp45vl9">codesandbox.io</a>
          </p>
        </div>
        <div className="footer">
          Made with <span style={{ color: "#BD0000" }}>❤</span> by{" "}
          <a href="https://github.com/DRFR0ST">Mike Eling</a>
        </div>
      </React.Fragment>
    );
  }
}

render(<Demo />, document.getElementById("app"));
