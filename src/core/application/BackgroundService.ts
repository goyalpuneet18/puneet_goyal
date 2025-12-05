import type { IParticle } from '../domain/IParticle';

export class BackgroundService {
    private particles: IParticle[] = [];
    private canvas: HTMLCanvasElement | null = null;
    private ctx: CanvasRenderingContext2D | null = null;
    private animationFrameId: number | null = null;
    private mouseX: number = 0;
    private mouseY: number = 0;

    constructor() { }

    public init(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.resize();
        window.addEventListener('resize', this.resize.bind(this));
    }

    public addParticle(particle: IParticle) {
        this.particles.push(particle);
    }

    public updateMouse(x: number, y: number) {
        this.mouseX = x;
        this.mouseY = y;
    }

    private resize() {
        if (this.canvas) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
    }

    public animate() {
        if (!this.ctx || !this.canvas) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            p.update(this.mouseX, this.mouseY);
            p.draw(this.ctx!);
        });

        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }

    public stop() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        window.removeEventListener('resize', this.resize.bind(this));
    }
}
