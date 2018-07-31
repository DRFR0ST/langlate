import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * @class
 * @description React Component which makes translating easier.
 */
export default class Langlate extends Component {
  /**
   * @description Retruns translated text raw.
   * @param {object} text Text translations.
   * @param {string} language Displayed language.
   * @returns {string}
   */
  static raw(text, language) {
    if (language === undefined || language === null) {
      if (text !== undefined) language = Object.keys(text)[0];
      else throw Error("The language is not specified.");
    }
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
  if (text === undefined || !text instanceof Object)
    throw Error("The text property is not an object.");

  if (Object.keys(text).length > 0) {
    if (language === null) language = Object.keys(text)[0];
    for (let i = 0; i < Object.keys(text).length; i++) {
      const key = Object.keys(text)[i];
      if (typeof key != "string") key = Object.keys(text)[0];
      if (!language) language = key;
      if (key === language) {
        return text[key];
      }
    }
  } else {
    throw Error("The text property is empty.");
  }
}

Langlate.defaultProps = {
  language: null
};

Langlate.propTypes = {
  language: PropTypes.string,
  text: PropTypes.object.isRequired
};