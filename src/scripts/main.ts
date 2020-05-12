import {drawCanvas, Canvas} from './draw';

(function run(window: Window): void {
  const {document} = window;
  window.addEventListener('resize', () => setAppHeight(window));
  document.addEventListener('DOMContentLoaded', () => renderCanvas(window));
})(window);

function setAppHeight(window: Window): void {
  const root = window.document.documentElement;
  root.style.setProperty('--app-height', `${window.innerHeight}px`);
}

function renderCanvas(window: Window): void {
  drawCanvas(document.getElementById('canvas') as Canvas, {
    width: window.innerWidth,
    height: window.innerHeight
  });
}
