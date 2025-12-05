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
        // Swarm behavior: particles have an original position they want to return to,
        // but are pushed away by the mouse.

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDistance = 120; // Interaction radius

        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;

        if (distance < forceDistance) {
            const force = (forceDistance - distance) / forceDistance;
            // Gentler repulsion - Reduced from 5 to 2
            const repulsionStrength = 2;
            this.vx -= forceDirectionX * force * repulsionStrength;
            this.vy -= forceDirectionY * force * repulsionStrength;
        }

        // Return to original position (spring force)
        const returnDx = this.originalX - this.x;
        const returnDy = this.originalY - this.y;
        // Slower return - Reduced ease factor
        this.vx += returnDx * this.ease * 0.02;
        this.vy += returnDy * this.ease * 0.02;

        // Apply friction
        this.vx *= this.friction;
        this.vy *= this.friction;

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Spotlight logic: Calculate alpha based on distance
        // Visible radius slightly larger than force radius for smooth fade
        const visibleRadius = 250;
        let alpha = 0;
        if (distance < visibleRadius) {
            // Map distance 0..visibleRadius to alpha 1..0
            alpha = 1 - (distance / visibleRadius);
            // Ease the alpha for smoother falloff
            alpha = alpha * alpha;
        }

        // Store alpha for draw
        this.currentAlpha = alpha;
    }

    // Add currentAlpha property
    private currentAlpha: number = 0;

    draw(ctx: CanvasRenderingContext2D) {
        if (this.currentAlpha <= 0.01) return; // Don't draw if invisible

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Parse the base color to apply new alpha. 
        // Assuming color is rgba(r, g, b, a) or similar.
        // For simplicity, let's assume white particles and just use rgba(255, 255, 255, alpha)
        // Or better, extract RGB from the stored color string if needed, but we set them to white/grey.

        // Let's just use white with the calculated alpha, scaled by the particle's max opacity (which was random)
        // Actually, let's just use white for now as per "shades of grey/white" requirement, 
        // but modulated by the spotlight alpha.

        ctx.fillStyle = `rgba(255, 255, 255, ${this.currentAlpha * 0.5})`; // Max opacity 0.5
        ctx.fill();
    }
}
