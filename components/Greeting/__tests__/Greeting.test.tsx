import React from "react";
import { Router } from "react-router-dom";
import { render, cleanup, RenderResult } from "@testing-library/react";
import { createMemoryHistory } from "history";
import "jest-styled-components";

import { ThemeProvider } from "styled-components";
import { theme } from "Utility/resets.style";

import Greeting from "../Greeting";

afterEach(cleanup);

const { getByTestId }: RenderResult = render(
  <ThemeProvider theme={theme}>
    <Router history={createMemoryHistory()}>
      <Greeting />
    </Router>
  </ThemeProvider>
);

test("<Greeting />", () => {
  const [h1, flexed] = [getByTestId(`h1`), getByTestId(`flexed`)];

  expect(h1.textContent).toBe(`Hello World!`);
  // - Jest and styled components seem to be having internal issues right now via their git issues - //
  // expect(flexed).toHaveStyleRule(`display`, `flex`);
  // expect(flexed).toHaveStyleRule(`justify-content`, `space-between`);
});
