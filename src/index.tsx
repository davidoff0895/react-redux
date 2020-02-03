import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/hello";

ReactDOM.render(
  <Hello firstName="Chris" lastName="Parker" />,
  document.getElementById("app")
);
