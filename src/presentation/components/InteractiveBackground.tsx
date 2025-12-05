import React, { useEffect, useRef } from 'react';
import { useServices } from '../ServiceContext';
import { ParticleImpl } from '../../infrastructure/ParticleImpl';

export const InteractiveBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { backgroundService } = useServices();

    useEffect(() => {
        if (canvasRef.current) {
            backgroundService.init(canvasRef.current);

            const particleCount = 250;
            for (let i = 0; i < particleCount; i++) {
                const size = Math.random() * 3 + 1;
                const alpha = Math.random() * 0.2 + 0.05;
                const color = `rgba(255, 255, 255, ${alpha})`;

                backgroundService.addParticle(new ParticleImpl(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight,
                    0, 0,
                    size,
                    color
                ));
            }

            // Start animation loop
            const handleMouseMove = (e: MouseEvent) => {
                backgroundService.updateMouse(e.clientX, e.clientY);
            };
            window.addEventListener('mousemove', handleMouseMove);

            backgroundService.animate();

            return () => {
                backgroundService.stop();
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, [backgroundService]);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background: '#000' }} />;
};
