import { createElement } from "react";
import { render } from "react-dom";

import App from "Component/App/App";

const ROOT: HTMLDivElement = document.querySelector(`#root`);

render(createElement(App), ROOT);
