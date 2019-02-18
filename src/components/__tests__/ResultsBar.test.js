import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import ResultsBar from "../Battles/ResultsBar";

afterEach(cleanup);

test("<ResultsBar />", () => {
  const { debug, getByText } = render(<ResultsBar />);

  // debug();
  const resultsLabel = getByText("%");

  //asserts counter-button is a buttonw
  expect(resultsLabel.tagName).toBe("DIV");
  //assert counter-button starts at 0
  expect(resultsLabel.textContent).toBe("%");
});
