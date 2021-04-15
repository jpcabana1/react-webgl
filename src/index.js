import React from "react";
import ReactDOM from "react-dom";
import WebGL from "./WebGL/WebGL";

ReactDOM.render(
  <div style={{ display: "grid", placeItems: "center" }}>
    <WebGL />
  </div>,
  document.getElementById("root")
);
