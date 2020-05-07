const $canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = $canvas.getContext('2d') as CanvasRenderingContext2D;

const $copiedCanvas = document.createElement('canvas') as HTMLCanvasElement;
const copiedContext = $copiedCanvas.getContext(
  '2d'
) as CanvasRenderingContext2D;

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const HUE = 217;

const stars: Star[] = [];
const MAX_STARS = 1400;

function drawSecondCanvas(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
): void {
  canvas.width = 100;
  canvas.height = 100;

  const half = canvas.width / 2;
  const gradient2 = ctx.createRadialGradient(half, half, 0, half, half, half);

  gradient2.addColorStop(0.025, '#fff');
  gradient2.addColorStop(0.1, `hsl(${HUE}, 61%, 33%)`);
  gradient2.addColorStop(0.25, `hsl(${HUE}, 64%, 6%)`);
  gradient2.addColorStop(1, 'transparent');

  ctx.fillStyle = gradient2;
  ctx.beginPath();
  ctx.arc(half, half, half, 0, Math.PI * 2);
  ctx.fill();
}

function random(min: number, max?: number): number {
  let y = typeof max === 'undefined' ? min : max;
  let x = y === min ? 0 : min;

  if (x > y) {
    y = x;
    x = y;
  }

  return Math.floor(Math.random() * (y - x + 1)) + x;
}

function maxOrbit(x: number, y: number): number {
  const max = Math.max(x, y);
  const diameter = Math.round(Math.sqrt(max * max + max * max));

  return diameter / 2;
}

interface StarProps {
  width: number;
  height: number;
}

class Star {
  private orbitRadius: number;
  private radius: number;
  private orbitX: number;
  private orbitY: number;
  private timePassed: number;
  private speed: number;
  private alpha: number;

  constructor({width, height}: StarProps) {
    this.orbitRadius = random(maxOrbit(width, height));
    this.radius = random(60, this.orbitRadius) / 12;
    this.orbitX = width / 2;
    this.orbitY = height / 2;
    this.timePassed = random(0, MAX_STARS);
    this.speed = random(this.orbitRadius) / 50000;
    this.alpha = random(2, 10) / 10;
  }

  draw(secondCanvas: HTMLCanvasElement): void {
    const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
    const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
    const twinkle = random(10);

    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05;
    }

    context.globalAlpha = this.alpha;

    context.drawImage(
      secondCanvas,
      x - this.radius / 2,
      y - this.radius / 2,
      this.radius,
      this.radius
    );

    this.timePassed += this.speed;
  }
}

function drawMainCanvas(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
): void {
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 0.8;
  ctx.fillStyle = `hsla(${HUE}, 64%, 6%, 1)`;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.globalCompositeOperation = 'lighter';

  for (let i = 1, l = stars.length; i < l; i++) {
    stars[i].draw($copiedCanvas);
  }

  window.requestAnimationFrame(() => drawMainCanvas(canvas, ctx));
}

(function run(): void {
  let count = 0;

  for (let i = 0; i < MAX_STARS; i++) {
    count++;
    stars[count] = new Star({width: WIDTH, height: HEIGHT});
  }

  drawSecondCanvas($copiedCanvas, copiedContext);
  drawMainCanvas($canvas, context);
})();
