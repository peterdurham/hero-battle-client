import React from "react";
import { render } from "react-testing-library";
import { Battle } from "../Battles/Battle";

test("<Battle />", () => {
  const { debug, getByTestId } = render(<Battle />);

  // renders 2 character tags
  const hero1 = getByTestId("hero1");
  expect(hero1.tagName).toBe("DIV");

  // renders 2 character images

  // clicking div selects character
});
