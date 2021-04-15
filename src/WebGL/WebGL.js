import React from "react";
import "../WebGL/WebGL.css";
import { init } from "./init/init";

class WebGL extends React.Component {
  componentDidMount() {
    init("webgl");
  }

  render() {
    return (
      <div className="divCanvas">
        <canvas id="webgl" className="canvasGl"></canvas>
      </div>
    );
  }
}

export default WebGL;
