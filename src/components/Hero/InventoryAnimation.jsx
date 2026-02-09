import React, { useRef, useEffect } from 'react';

/**
 * InventoryAnimation Component
 * Canvas-based animated visualization showing inventory flow
 * Similar to ZenDMS vehicle tracking but for inventory/restaurant management
 */
const InventoryAnimation = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Set canvas size with device pixel ratio for crisp rendering
        const dpr = window.devicePixelRatio || 1;
        const size = 450;
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        canvas.style.width = `${size}px`;
        canvas.style.height = `${size}px`;
        ctx.scale(dpr, dpr);

        // Colors from design system - Petpooja-inspired theme
        const colors = {
            background: '#1A365D',
            backgroundLight: '#2D4A7C',
            primary: '#D63939',
            secondary: '#E85454',
            glow: 'rgba(214, 57, 57, 0.5)',
            glowLight: 'rgba(214, 57, 57, 0.3)',
            particle: 'rgba(255, 255, 255, 0.3)',
            path: 'rgba(214, 57, 57, 0.4)',
            node: '#FFFFFF',
            grid: 'rgba(255, 255, 255, 0.03)',
        };

        const center = size / 2;
        const radius = size / 2 - 15;

        // Location nodes (fixed positions)
        const nodes = [
            { x: center, y: center, r: 14, type: 'warehouse', label: 'HQ' },
            { x: center - 130, y: center - 90, r: 9, type: 'restaurant' },
            { x: center + 110, y: center - 110, r: 9, type: 'restaurant' },
            { x: center + 140, y: center + 70, r: 9, type: 'store' },
            { x: center - 90, y: center + 120, r: 9, type: 'store' },
            { x: center - 160, y: center + 40, r: 7, type: 'delivery' },
            { x: center + 60, y: center + 150, r: 7, type: 'delivery' },
        ];

        // Path definitions (connections between nodes)
        const paths = [
            { from: 0, to: 1, curve: -40 },
            { from: 0, to: 2, curve: -30 },
            { from: 0, to: 3, curve: 30 },
            { from: 0, to: 4, curve: 40 },
            { from: 1, to: 5, curve: -20 },
            { from: 3, to: 6, curve: 20 },
        ];

        // Moving inventory items
        const items = [];
        for (let i = 0; i < 10; i++) {
            items.push({
                progress: Math.random(),
                speed: 0.002 + Math.random() * 0.002,
                pathIndex: Math.floor(Math.random() * paths.length),
                size: 5 + Math.random() * 4,
                opacity: 0.8 + Math.random() * 0.2,
            });
        }

        // Floating particles
        const particles = [];
        for (let i = 0; i < 30; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = 50 + Math.random() * (radius - 80);
            particles.push({
                x: center + Math.cos(angle) * dist,
                y: center + Math.sin(angle) * dist,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                opacity: 0.1 + Math.random() * 0.4,
                r: 1 + Math.random() * 2,
                pulseSpeed: 0.01 + Math.random() * 0.02,
                pulsePhase: Math.random() * Math.PI * 2,
            });
        }

        let dashOffset = 0;
        let time = 0;

        // Get point along quadratic bezier curve
        const getQuadraticPoint = (t, p0, p1, p2) => {
            const x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
            const y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;
            return { x, y };
        };

        // Animation loop
        const animate = () => {
            time += 0.016;

            // Clear canvas
            ctx.clearRect(0, 0, size, size);

            // Draw main circle background with gradient
            const bgGradient = ctx.createRadialGradient(center, center, 0, center, center, radius);
            bgGradient.addColorStop(0, colors.backgroundLight);
            bgGradient.addColorStop(1, colors.background);
            ctx.beginPath();
            ctx.arc(center, center, radius, 0, Math.PI * 2);
            ctx.fillStyle = bgGradient;
            ctx.fill();

            // Draw grid pattern (dots)
            ctx.fillStyle = colors.grid;
            for (let x = 25; x < size - 25; x += 18) {
                for (let y = 25; y < size - 25; y += 18) {
                    const dist = Math.sqrt((x - center) ** 2 + (y - center) ** 2);
                    if (dist < radius - 20) {
                        ctx.beginPath();
                        ctx.arc(x, y, 1, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            // Draw and animate paths
            dashOffset -= 0.5;
            paths.forEach((path) => {
                const from = nodes[path.from];
                const to = nodes[path.to];

                // Calculate control point for curve
                const midX = (from.x + to.x) / 2;
                const midY = (from.y + to.y) / 2;
                const perpX = -(to.y - from.y);
                const perpY = to.x - from.x;
                const len = Math.sqrt(perpX * perpX + perpY * perpY);
                const cpX = midX + (perpX / len) * path.curve;
                const cpY = midY + (perpY / len) * path.curve;

                ctx.beginPath();
                ctx.moveTo(from.x, from.y);
                ctx.quadraticCurveTo(cpX, cpY, to.x, to.y);
                ctx.strokeStyle = colors.path;
                ctx.lineWidth = 2;
                ctx.setLineDash([6, 12]);
                ctx.lineDashOffset = dashOffset;
                ctx.stroke();
                ctx.setLineDash([]);
            });

            // Update and draw particles
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                // Pulse opacity
                p.opacity = 0.2 + Math.sin(time * p.pulseSpeed * 60 + p.pulsePhase) * 0.15 + 0.15;

                // Bounce off circular boundary
                const dist = Math.sqrt((p.x - center) ** 2 + (p.y - center) ** 2);
                if (dist > radius - 20) {
                    const angle = Math.atan2(p.y - center, p.x - center);
                    p.vx = -Math.cos(angle) * Math.abs(p.vx);
                    p.vy = -Math.sin(angle) * Math.abs(p.vy);
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                ctx.fill();
            });

            // Draw moving inventory items along paths
            ctx.shadowColor = colors.glow;
            ctx.shadowBlur = 12;

            items.forEach((item) => {
                item.progress += item.speed;
                if (item.progress > 1) {
                    item.progress = 0;
                    item.pathIndex = Math.floor(Math.random() * paths.length);
                }

                const path = paths[item.pathIndex];
                const from = nodes[path.from];
                const to = nodes[path.to];

                // Calculate control point
                const midX = (from.x + to.x) / 2;
                const midY = (from.y + to.y) / 2;
                const perpX = -(to.y - from.y);
                const perpY = to.x - from.x;
                const len = Math.sqrt(perpX * perpX + perpY * perpY);
                const cp = {
                    x: midX + (perpX / len) * path.curve,
                    y: midY + (perpY / len) * path.curve,
                };

                const pos = getQuadraticPoint(item.progress, from, cp, to);

                // Draw package box (rounded square)
                ctx.fillStyle = colors.primary;
                const s = item.size;
                ctx.beginPath();
                ctx.roundRect(pos.x - s / 2, pos.y - s / 2, s, s, 2);
                ctx.fill();
            });

            ctx.shadowBlur = 0;

            // Draw location nodes
            nodes.forEach((node, index) => {
                // Glow effect
                const glowGradient = ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, node.r * 3
                );
                glowGradient.addColorStop(0, index === 0 ? colors.glow : colors.glowLight);
                glowGradient.addColorStop(1, 'transparent');
                ctx.fillStyle = glowGradient;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.r * 3, 0, Math.PI * 2);
                ctx.fill();

                // Node circle
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
                ctx.fillStyle = index === 0 ? colors.primary : colors.node;
                ctx.fill();

                // Pulsing ring for warehouse
                if (node.type === 'warehouse') {
                    const pulseRadius = node.r + 6 + Math.sin(time * 2) * 4;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(214, 57, 57, ${0.4 + Math.sin(time * 2) * 0.2})`;
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }

                // Inner icon for warehouse
                if (index === 0) {
                    ctx.fillStyle = colors.node;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div className="inventory-animation">
            <canvas ref={canvasRef} />
        </div>
    );
};

export default InventoryAnimation;
