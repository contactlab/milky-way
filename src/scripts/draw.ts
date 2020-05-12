import {generateStars, Stars} from './star';

export function drawCanvas(canvas: Canvas, config: Config): void {
  const {width, height, hue = 217, maxStars = 1400} = config;

  const tempCanvas = document.createElement('canvas') as Canvas;
  const tempContext = tempCanvas.getContext('2d') as Context;

  const area: DrawingArea = {
    main: [canvas, canvas.getContext('2d') as Context],
    cache: [tempCanvas, tempContext]
  };

  const stars = generateStars(maxStars, {
    width,
    height,
    limit: maxStars
  });

  drawCachedCanvas(area, {
    width: 100,
    height: 100,
    hue
  });

  drawMainCanvas(stars, area, {
    width,
    height,
    hue
  });
}

function drawMainCanvas(
  stars: Stars,
  area: DrawingArea,
  options: DrawMethodOptions
): void {
  const {width, height, hue} = options;
  const [canvas, context] = area.main;
  const [cachedCanvas] = area.cache;

  canvas.width = width;
  canvas.height = height;

  context.globalCompositeOperation = 'source-over';
  context.globalAlpha = 0.8;
  context.fillStyle = `hsla(${hue}, 64%, 6%, 1)`;
  context.fillRect(0, 0, width, height);
  context.globalCompositeOperation = 'lighter';

  for (let i = 1, l = stars.length; i < l; i++) {
    stars[i].draw(context, cachedCanvas);
  }

  window.requestAnimationFrame(() => drawMainCanvas(stars, area, options));
}

function drawCachedCanvas(area: DrawingArea, options: DrawMethodOptions): void {
  const {width, height, hue} = options;
  const [canvas, context] = area.cache;

  canvas.width = width;
  canvas.height = height;

  const half = canvas.width / 2;
  const gradient = getGradient(context, {size: half, hue});

  context.fillStyle = gradient;
  context.beginPath();
  context.arc(half, half, half, 0, Math.PI * 2);
  context.fill();
}

// --- helpers
function getGradient(
  context: CanvasRenderingContext2D,
  {size, hue}: {size: number; hue: number}
): CanvasGradient {
  const fill = context.createRadialGradient(size, size, 0, size, size, size);

  fill.addColorStop(0.025, '#fff');
  fill.addColorStop(0.1, `hsl(${hue}, 61%, 33%)`);
  fill.addColorStop(0.25, `hsl(${hue}, 64%, 6%)`);
  fill.addColorStop(1, 'transparent');

  return fill;
}

// --- types
export type Canvas = HTMLCanvasElement;
export type Context = CanvasRenderingContext2D;

export interface DrawingArea {
  main: [Canvas, Context];
  cache: [Canvas, Context];
}

interface DrawMethodOptions {
  width: number;
  height: number;
  hue: number;
}

interface Config {
  width: number;
  height: number;
  hue?: number;
  maxStars?: number;
}
