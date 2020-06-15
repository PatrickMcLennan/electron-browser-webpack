import React, { createElement } from "react";
import ReactDOM, { render } from "react-dom";

import App from "Component/App/App";

const ROOT: HTMLDivElement = document.querySelector(`#root`);

if (process.env.NODE_ENV !== `production`) {
  import(`react-axe`)
    .then((axe) => {
      axe.default(React, ReactDOM, 1000);
      return render(createElement(App), ROOT);
    })
    .catch((error) => console.error(error));
} else render(createElement(App), ROOT);
