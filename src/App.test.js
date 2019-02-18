import React from "react";
import { render, wait, waitForElement } from "react-testing-library";
import App from "./App";

it("renders without crashing", () => {
  const { getByText } = render(<App />);
  expect(getByText("Hero Battle")).toBeInTheDocument();

  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
