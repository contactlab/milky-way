const LIMIT = 1400;

export type Stars = Star[];

interface StarProps {
  width: number;
  height: number;
}

export const generateStars = (options: StarProps): Stars => {
  const stars: Stars = [];

  for (let i = 0; i < LIMIT; i++) {
    stars[i] = new Star(options);
  }

  return stars;
};

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
    this.timePassed = random(0, LIMIT);
    this.speed = random(this.orbitRadius) / 50000;
    this.alpha = random(2, 10) / 10;
  }

  draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
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
      canvas,
      x - this.radius / 2,
      y - this.radius / 2,
      this.radius,
      this.radius
    );

    this.timePassed += this.speed;
  }
}

// --- Helpers
const random = (min: number, max?: number): number => {
  let y = typeof max === 'undefined' ? min : max;
  let x = y === min ? 0 : min;

  if (x > y) {
    y = x;
    x = y;
  }

  return Math.floor(Math.random() * (y - x + 1)) + x;
};

const maxOrbit = (x: number, y: number): number => {
  const max = Math.max(x, y);
  const diameter = Math.round(Math.sqrt(max * max + max * max));

  return diameter / 2;
};
