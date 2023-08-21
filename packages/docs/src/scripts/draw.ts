import {type Stars, generateStars} from './star';

const HUE = 217;

interface Config {
  width: number;
  height: number;
}

interface Area {
  main: [HTMLCanvasElement, CanvasRenderingContext2D];
  cache: [HTMLCanvasElement, CanvasRenderingContext2D];
}

export const drawCanvas = (
  canvas: HTMLCanvasElement | null,
  config: Config
): void => {
  if (!canvas) {
    return;
  }

  const {width, height} = config;

  const tmpCanvas = document.createElement('canvas');
  const tmp2dContext = tmpCanvas.getContext('2d')!;

  const area: Area = {
    main: [canvas, canvas.getContext('2d')!],
    cache: [tmpCanvas, tmp2dContext]
  };

  const stars = generateStars({width, height});

  drawCachedCanvas({area, width: 100, height: 100, stars});

  drawMainCanvas({area, width, height, stars});
};

// --- Helpers
interface DrawProps {
  area: Area;
  stars: Stars;
  width: number;
  height: number;
}

const drawMainCanvas = (options: DrawProps): void => {
  const {area, width, height, stars} = options;
  const [canvas, context] = area.main;
  const [cachedCanvas] = area.cache;

  canvas.width = width;
  canvas.height = height;

  context.globalCompositeOperation = 'source-over';
  context.globalAlpha = 0.8;
  context.fillStyle = `hsla(${HUE}, 64%, 6%, 1)`;
  context.fillRect(0, 0, width, height);
  context.globalCompositeOperation = 'lighter';

  for (let i = 1, l = stars.length; i < l; i++) {
    stars[i].draw(context, cachedCanvas);
  }

  window.requestAnimationFrame(() => drawMainCanvas(options));
};

const drawCachedCanvas = (options: DrawProps): void => {
  const {area, width, height} = options;
  const [canvas, context] = area.cache;

  canvas.width = width;
  canvas.height = height;

  const half = canvas.width / 2;

  context.fillStyle = gradient(context, half);
  context.beginPath();
  context.arc(half, half, half, 0, Math.PI * 2);
  context.fill();
};

const gradient = (
  context: CanvasRenderingContext2D,
  size: number
): CanvasGradient => {
  const fill = context.createRadialGradient(size, size, 0, size, size, size);

  fill.addColorStop(0.025, '#fff');
  fill.addColorStop(0.1, `hsl(${HUE}, 61%, 33%)`);
  fill.addColorStop(0.25, `hsl(${HUE}, 64%, 6%)`);
  fill.addColorStop(1, 'transparent');

  return fill;
};
