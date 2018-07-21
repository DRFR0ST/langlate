import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Langlate extends Component {

  /**
   * @description Retruns translated text raw.
   * @param {object} text Text translations.
   * @param {string} language Displayed language.
   * @returns {string}
   */
  static raw(text, language = Object.keys(text)[0]) {
    return translate(language, text);
  }

  render() {
    return (
      <React.Fragment>
        {translate(this.props.language, this.props.text)}
      </React.Fragment>
    );
  }
}

/**
 * @description Retruns the proper text translation.
 * @param {object} text Text translations.
 * @param {string} language Displayed language.
 * @returns {string}
 */
function translate(language, text) {
  if (!text instanceof Object || text === undefined)
    throw Error("The property text is not an object.");
  for (let i = 0; i < Object.keys(text).length; i++) {
    const key = Object.keys(text)[i];
    if (!language) language = key;
    if (key === language) {
      return text[key];
    }
  }
}

Langlate.defaultProps = {
  language: null
};

Langlate.propTypes = {
  language: PropTypes.string,
  text: PropTypes.object.isRequired
};
