import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import Battles from "../Battles/Battles";

afterEach(cleanup);

test("<Battles />", () => {
  const { debug, getByText } = render(<Battles />);

  // debug();
  const voteButton = getByText("SubmitVote");

  //asserts counter-button is a buttonw
  expect(voteButton.tagName).toBe("BUTTON");
  //assert counter-button starts at 0
  expect(voteButton.textContent).toBe("Submit Vote");
});
