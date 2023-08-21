import {drawCanvas} from './draw';

// --- Execute
window.addEventListener('resize', function () {
  const root = document.documentElement;

  root.style.setProperty('--app-height', `${this.innerHeight}px`);
});

document.addEventListener('DOMContentLoaded', () => {
  drawCanvas(document.querySelector<HTMLCanvasElement>('#canvas'), {
    width: window.innerWidth,
    height: window.innerHeight
  });
});
