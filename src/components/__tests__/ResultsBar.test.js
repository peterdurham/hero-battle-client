import React from "react";
import { render, cleanup } from "react-testing-library";
import ResultsBar from "../Battles/ResultsBar";
import { MemoryRouter as Router } from "react-router-dom";
afterEach(cleanup);

test("<ResultsBar />", () => {
  const { debug, getByTestId } = render(
    <Router>
      <ResultsBar />
    </Router>
  );

  const resultsLabel = getByTestId("resultsbar");

  expect(resultsLabel.tagName).toBe("DIV");

  expect(resultsLabel.textContent).toMatch("%");
});
