import React from "react";

import * as S from "./Greeting.style";

function Greeting(): JSX.Element {
  return (
    <>
      <h1 data-testid="h1">Hello World!</h1>
      <S.Div data-testid="flexed">
        <span>Space</span>
        <span>Between</span>
        <span>Testing</span>
      </S.Div>
    </>
  );
}

export default Greeting;
