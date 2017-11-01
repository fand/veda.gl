import Veda from 'vedajs';

const veda = new Veda({
  pixelRatio: 2,
  frameskip: 2,
});

export const init = canvas => veda.setCanvas(canvas);

export { veda };
