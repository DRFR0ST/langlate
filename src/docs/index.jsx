import React from "react";
import { render } from "react-dom";
import Langlate from "../../lib";
import "./styles.css";

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: "en_US" // Default language.
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ language: event.target.value });
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

    return (
      <div>
        <h2>
          <Langlate language={this.state.language} text={langlations.demo} />
        </h2>

        <select
          onChange={e => this.handleChange(e)}
          value={this.state.language}
        >
          <option value="en_US">{Langlate.raw(langlations.enUS)}</option>
          <option value="pl_PL">{Langlate.raw(langlations.plPL)}</option>
          <option value="de_DE">{Langlate.raw(langlations.deDE)}</option>
          <option value="es_ES">{Langlate.raw(langlations.esES)}</option>
        </select>
      </div>
    );
  }
}

render(<Demo />, document.getElementById("app"));
