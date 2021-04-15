import { React, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

class Paint extends Component {
  constructor(props) {
    super(props);
    this.handleClickClear = this.handleClickClear.bind(this);
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");

    let mousedown = false;
    canvas.addEventListener("mousedown", () => {
      mousedown = true;
      ctx.beginPath();
      ctx.lineWidth = 4;
    });
    canvas.addEventListener("mouseup", () => {
      mousedown = false;
    });
    canvas.addEventListener("mousemove", (e) => {
      if (mousedown) {
        ctx.lineTo(e.clientX - 340, e.clientY);
        ctx.stroke();
      }
    });
  }

  handleClickClear = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  render() {
    return (
      <div>
        <canvas
          style={{ border: "solid" }}
          ref="canvas"
          width="800"
          height="600"
        ></canvas>
        <Button variant="outline-dark" onClick={this.handleClickClear}>
          Clear
        </Button>
      </div>
    );
  }
}

export default Paint;
