import GLC from "../GLCommander/GLCommander";

let r = 0;
const render = () => {
  if (r < 1) {
    r += 0.001;
    GLC.clear(r, 0.0, 0.0, 1.0);
    window.requestAnimationFrame(render);
  }
};

export const init = (id) => {
  console.log(id);

  const canvas = document.querySelector(`#${id}`);
  console.log(canvas);

  if (!canvas) {
    return;
  }

  const gl = canvas.getContext("webgl");

  if (!gl) {
    return;
  }

  GLC.init(gl);
  GLC.clear(gl);
  window.requestAnimationFrame(render);
};
