import Langlate from "../lib/index.jsx";
import React from "react";
import { mount } from "enzyme";

const helloWorld = {
  en_US: "Hello World",
  pl_PL: "Witaj Świecie",
  de_DE: "Hallo Welt"
};

test("Langlate.Raw returns the proper translation", () => {
  expect(Langlate.raw(helloWorld, "en_US")).toBe("Hello World");
});

test("Langlate component renders the translation in it", () => {
  const wrapper = mount(<Langlate text={helloWorld} language="en_US" />);
  expect(wrapper.text()).toBe("Hello World");
});
