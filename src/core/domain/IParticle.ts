export interface IParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  update(mouseX: number, mouseY: number): void;
  draw(ctx: CanvasRenderingContext2D): void;
}
