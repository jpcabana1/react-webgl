import GLC from "../GLCommander/GLCommander";

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
  GLC.clear(1.0, 0.0, 0.0, 1.0);
};
