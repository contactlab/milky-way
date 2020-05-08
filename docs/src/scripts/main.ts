import {drawCanvas, Canvas} from './draw';

(function run(window: Window): void {
  document.addEventListener('DOMContentLoaded', () => renderCanvas(window));
})(window);

function renderCanvas(window: Window): void {
  drawCanvas(document.getElementById('canvas') as Canvas, {
    width: window.innerWidth,
    height: window.innerHeight
  });
}
