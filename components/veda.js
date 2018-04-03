import { throttle } from 'lodash';
import constants from 'constants';

export default () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return null;
  }
  if (window.veda) {
    return window.veda;
  }

  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.opacity = '0.5';
  canvas.style.zIndex = '-1';
  document.body.appendChild(canvas);

  const isPc = window.innerWidth > constants.mobile;

  const Veda = require('vedajs').default; // TODO:Fix vedajs
  const veda = new Veda({
    pixelRatio: isPc ? 2 : 4,
    frameskip: isPc ? 2 : 4,
  });
  veda.setCanvas(canvas);

  window.veda = veda;
  window.addEventListener('resize', throttle(() => {
    veda.resize(window.innerWidth, window.innerHeight);
  }));

  return veda;
};
