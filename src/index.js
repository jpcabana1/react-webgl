import React from "react";
import ReactDOM from "react-dom";
import WebGL from "./WebGL/WebGL";
import Paint from "./Paint/Paint";
ReactDOM.render(
  <div style={{ display: "grid", placeItems: "center" }}>
    <Paint />
  </div>,
  document.getElementById("root")
);
