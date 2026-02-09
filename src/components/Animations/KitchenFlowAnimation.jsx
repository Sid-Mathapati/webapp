import React, { useRef, useEffect } from 'react';

/**
 * KitchenFlowAnimation Component
 * Canvas-based animation showing restaurant kitchen workflow
 */
const KitchenFlowAnimation = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Set canvas size
        const dpr = window.devicePixelRatio || 1;
        const width = 400;
        const height = 200;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(dpr, dpr);

        // Colors
        const colors = {
            background: '#1A365D',
            primary: '#E85D04',
            secondary: '#FF8C42',
            white: '#FFFFFF',
            text: 'rgba(255, 255, 255, 0.8)',
        };

        // Workflow stages
        const stages = [
            { x: 50, label: 'Order', icon: '📋' },
            { x: 130, label: 'Kitchen', icon: '👨‍🍳' },
            { x: 210, label: 'Prep', icon: '🍳' },
            { x: 290, label: 'Ready', icon: '✅' },
            { x: 370, label: 'Serve', icon: '🍽️' },
        ];

        const centerY = height / 2;

        // Moving orders
        const orders = [];
        for (let i = 0; i < 4; i++) {
            orders.push({
                progress: i * 0.25,
                speed: 0.003,
                size: 10,
            });
        }

        let time = 0;

        // Animation loop
        const animate = () => {
            time += 0.016;
            ctx.clearRect(0, 0, width, height);

            // Background
            ctx.fillStyle = colors.background;
            ctx.fillRect(0, 0, width, height);

            // Draw connecting line
            ctx.beginPath();
            ctx.moveTo(50, centerY);
            ctx.lineTo(370, centerY);
            ctx.strokeStyle = 'rgba(232, 93, 4, 0.3)';
            ctx.lineWidth = 3;
            ctx.stroke();

            // Draw stages
            stages.forEach((stage, i) => {
                // Stage circle
                ctx.beginPath();
                ctx.arc(stage.x, centerY, 25, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.fill();
                ctx.strokeStyle = colors.primary;
                ctx.lineWidth = 2;
                ctx.stroke();

                // Icon
                ctx.font = '20px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(stage.icon, stage.x, centerY);

                // Label
                ctx.font = '10px Arial';
                ctx.fillStyle = colors.text;
                ctx.fillText(stage.label, stage.x, centerY + 40);
            });

            // Draw moving orders
            ctx.shadowColor = colors.primary;
            ctx.shadowBlur = 10;

            orders.forEach((order) => {
                order.progress += order.speed;
                if (order.progress > 1) order.progress = 0;

                const x = 50 + order.progress * 320;

                // Order indicator
                ctx.beginPath();
                ctx.arc(x, centerY, order.size, 0, Math.PI * 2);
                ctx.fillStyle = colors.primary;
                ctx.fill();

                // Inner dot
                ctx.beginPath();
                ctx.arc(x, centerY, 4, 0, Math.PI * 2);
                ctx.fillStyle = colors.white;
                ctx.fill();
            });

            ctx.shadowBlur = 0;

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="kitchen-flow-animation"
            style={{ borderRadius: '12px' }}
        />
    );
};

export default KitchenFlowAnimation;
