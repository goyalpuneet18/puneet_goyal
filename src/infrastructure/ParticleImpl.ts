import type { IParticle } from '../core/domain/IParticle';

export class ParticleImpl implements IParticle {
    public x: number;
    public y: number;
    public vx: number;
    public vy: number;
    public size: number;
    public color: string;
    private originalX: number;
    private originalY: number;
    private friction: number = 0.95;
    private ease: number = 0.1;

    constructor(
        x: number,
        y: number,
        vx: number,
        vy: number,
        size: number,
        color: string
    ) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.vx = vx;
        this.vy = vy;
        this.size = size;
        this.color = color;
    }


    update(mouseX: number, mouseY: number) {

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDistance = 120;

        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;

        if (distance < forceDistance) {
            const force = (forceDistance - distance) / forceDistance;
            const repulsionStrength = 2;
            this.vx -= forceDirectionX * force * repulsionStrength;
            this.vy -= forceDirectionY * force * repulsionStrength;
        }

        const returnDx = this.originalX - this.x;
        const returnDy = this.originalY - this.y;
        this.vx += returnDx * this.ease * 0.02;
        this.vy += returnDy * this.ease * 0.02;

        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;

        const visibleRadius = 250;
        let alpha = 0;
        if (distance < visibleRadius) {
            alpha = 1 - (distance / visibleRadius);
            alpha = alpha * alpha;
        }

        this.currentAlpha = alpha;
    }

    private currentAlpha: number = 0;

    draw(ctx: CanvasRenderingContext2D) {
        if (this.currentAlpha <= 0.01) return;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255, 255, 255, ${this.currentAlpha * 0.5})`;
        ctx.fill();
    }
}
