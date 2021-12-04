import React from "react";
import ReactDOM from "react-dom";
import RouterSwitch from "./RouterSwitch";
import { LevelContextProvider } from "./store/LevelProvider";

ReactDOM.render(
  <LevelContextProvider>
    <RouterSwitch />
  </LevelContextProvider>,
  document.getElementById("root")
);
