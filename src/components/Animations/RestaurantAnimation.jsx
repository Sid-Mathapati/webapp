import React, { useEffect, useRef, useState } from 'react';
import './RestaurantAnimation.css';

const RestaurantAnimation = () => {
    const canvasRef = useRef(null);
    const stateRef = useRef({
        clock: 0,
        tables: [
            { id: 0, x: -80, y: -60, state: 'IDLE', stateTimer: 0, chairs: [null, null] },
            { id: 1, x: 80, y: -60, state: 'IDLE', stateTimer: 60, chairs: [null, null] },
            { id: 2, x: -80, y: 60, state: 'IDLE', stateTimer: 120, chairs: [null, null] },
            { id: 3, x: 80, y: 60, state: 'IDLE', stateTimer: 180, chairs: [null, null] },
        ],
        customers: [],
        waiters: [],
        processedTables: 0,
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;

        // Config
        const config = {
            scale: 1.8,
            isoAngle: Math.PI / 6,
        };

        // Premium color palette
        const palette = {
            floor: ['#2D2D44', '#252538'],
            wall: ['#1A1A2E', '#16213E'],
            table: '#8B4513',
            tableTop: '#A0522D',
            chair: '#654321',
            skin: ['#FDBF6F', '#E8B298', '#D4A574', '#C68642', '#8D5524'],
            hair: ['#2C1810', '#4A3728', '#8B4513', '#1A1A1A', '#D4A574'],
            shirts: ['#E53E3E', '#3182CE', '#38A169', '#805AD5', '#DD6B20', '#D53F8C'],
            waiterShirt: '#FFFFFF',
            waiterApron: '#1A202C',
            qrCode: '#FFFFFF',
            phone: '#2D3748',
            food: {
                burger: '#D4A574',
                bun: '#F6AD55',
                fries: '#ECC94B',
                coke: '#E53E3E',
                cokeGlass: '#63B3ED',
            },
        };

        // Isometric projection
        const toIso = (x, y, z) => {
            const isoX = (x - y) * Math.cos(config.isoAngle) * config.scale;
            const isoY = (x + y) * Math.sin(config.isoAngle) * config.scale - z * config.scale;
            return {
                x: canvas.width / 2 + isoX,
                y: canvas.height / 2 + isoY + 50,
            };
        };

        // Shade color
        const shadeColor = (color, percent) => {
            const num = parseInt(color.replace('#', ''), 16);
            const amt = Math.round(2.55 * percent);
            const R = Math.max(0, Math.min(255, (num >> 16) + amt));
            const G = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amt));
            const B = Math.max(0, Math.min(255, (num & 0x0000ff) + amt));
            return `#${((1 << 24) | (R << 16) | (G << 8) | B).toString(16).slice(1)}`;
        };

        // Draw floor
        const drawFloor = () => {
            const floorGrad = ctx.createLinearGradient(0, canvas.height, canvas.width, 0);
            floorGrad.addColorStop(0, palette.floor[0]);
            floorGrad.addColorStop(1, palette.floor[1]);
            ctx.fillStyle = floorGrad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Floor tiles
            ctx.strokeStyle = 'rgba(255,255,255,0.05)';
            ctx.lineWidth = 1;
            for (let i = -200; i <= 200; i += 40) {
                for (let j = -200; j <= 200; j += 40) {
                    const p1 = toIso(i, j, 0);
                    const p2 = toIso(i + 40, j, 0);
                    const p3 = toIso(i + 40, j + 40, 0);
                    const p4 = toIso(i, j + 40, 0);
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.lineTo(p3.x, p3.y);
                    ctx.lineTo(p4.x, p4.y);
                    ctx.closePath();
                    ctx.stroke();
                }
            }

            // Entrance Mat (Customers Spawn Here)
            const s = config.scale;
            const matX = 0;
            const matY = 180;
            const matW = 50;
            const matH = 30;

            const m1 = toIso(matX - matW, matY - matH, 0.1);
            const m2 = toIso(matX + matW, matY - matH, 0.1);
            const m3 = toIso(matX + matW, matY + matH, 0.1);
            const m4 = toIso(matX - matW, matY + matH, 0.1);

            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.beginPath();
            ctx.moveTo(m1.x, m1.y);
            ctx.lineTo(m2.x, m2.y);
            ctx.lineTo(m3.x, m3.y);
            ctx.lineTo(m4.x, m4.y);
            ctx.fill();

            ctx.strokeStyle = '#4A5568';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.fillStyle = '#718096';
            ctx.textAlign = 'center';
            ctx.font = `italic ${10 * s}px sans-serif`;
            ctx.fillText('ENTRY', m1.x + (m3.x - m1.x) / 2, m1.y + (m3.y - m1.y) / 2);
        };

        // Draw sphere
        const drawSphere = (x, y, z, r, color) => {
            const pos = toIso(x, y, z);
            const rs = r * config.scale;
            const grad = ctx.createRadialGradient(
                pos.x - rs * 0.3, pos.y - rs * 0.3, rs * 0.1,
                pos.x, pos.y, rs
            );
            grad.addColorStop(0, shadeColor(color, 30));
            grad.addColorStop(0.5, color);
            grad.addColorStop(1, shadeColor(color, -30));
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, rs, 0, Math.PI * 2);
            ctx.fill();
        };

        // Draw cylinder
        const drawCylinder = (x, y, z, r, h, color) => {
            const pos = toIso(x, y, z);
            const rs = r * config.scale;
            const hs = h * config.scale;
            const grad = ctx.createLinearGradient(pos.x - rs, pos.y, pos.x + rs, pos.y);
            grad.addColorStop(0, shadeColor(color, -25));
            grad.addColorStop(0.5, color);
            grad.addColorStop(1, shadeColor(color, -25));
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.roundRect(pos.x - rs, pos.y - hs, rs * 2, hs, rs);
            ctx.fill();
        };

        // Draw round table
        const drawRoundTable = (x, y) => {
            const s = config.scale;
            // Table leg
            drawCylinder(x, y, 0, 6, 25, '#5D4037');
            // Table top
            const topPos = toIso(x, y, 28);
            const tableGrad = ctx.createRadialGradient(
                topPos.x, topPos.y, 0,
                topPos.x, topPos.y, 35 * s
            );
            tableGrad.addColorStop(0, '#A1887F');
            tableGrad.addColorStop(0.7, '#8D6E63');
            tableGrad.addColorStop(1, '#6D4C41');
            ctx.fillStyle = tableGrad;
            ctx.beginPath();
            ctx.ellipse(topPos.x, topPos.y, 35 * s, 20 * s, 0, 0, Math.PI * 2);
            ctx.fill();
            // Table edge
            ctx.strokeStyle = '#5D4037';
            ctx.lineWidth = 3;
            ctx.stroke();
        };

        // Draw chair
        const drawChair = (x, y, angle) => {
            const s = config.scale;
            const pos = toIso(x, y, 0);
            // Chair legs
            drawCylinder(x - 4, y - 4, 0, 2, 14, '#5D4037');
            drawCylinder(x + 4, y - 4, 0, 2, 14, '#5D4037');
            drawCylinder(x - 4, y + 4, 0, 2, 14, '#5D4037');
            drawCylinder(x + 4, y + 4, 0, 2, 14, '#5D4037');
            // Seat
            const seatPos = toIso(x, y, 15);
            ctx.fillStyle = '#8D6E63';
            ctx.beginPath();
            ctx.ellipse(seatPos.x, seatPos.y, 10 * s, 6 * s, 0, 0, Math.PI * 2);
            ctx.fill();
            // Backrest
            const backX = x + Math.cos(angle) * 8;
            const backY = y + Math.sin(angle) * 8;
            drawCylinder(backX, backY, 15, 8, 18, '#6D4C41');
        };

        // Linear interpolation
        const lerp = (a, b, t) => a + (b - a) * t;

        // Soft Shadow
        const drawShadow = (x, y, size, opacity = 0.12) => {
            const pos = toIso(x, y, 0);
            const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, size * config.scale);
            grad.addColorStop(0, `rgba(45, 55, 72, ${opacity})`);
            grad.addColorStop(1, 'rgba(45, 55, 72, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.ellipse(pos.x, pos.y, size * config.scale, size * 0.5 * config.scale, 0, 0, Math.PI * 2);
            ctx.fill();
        };

        // Premium Cylinder
        const drawPremiumCylinder = (x, y, z, r, h, color) => {
            const pos = toIso(x, y, z);
            const rs = r * config.scale;
            const hs = h * config.scale;

            // Multi-stop gradient for 3D volume
            const grad = ctx.createLinearGradient(pos.x - rs * 1.2, pos.y, pos.x + rs * 1.2, pos.y);
            grad.addColorStop(0, shadeColor(color, -35));
            grad.addColorStop(0.25, shadeColor(color, -10));
            grad.addColorStop(0.5, color);
            grad.addColorStop(0.75, shadeColor(color, -10));
            grad.addColorStop(1, shadeColor(color, -35));

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.roundRect(pos.x - rs, pos.y - hs, rs * 2, hs, rs);
            ctx.fill();

            // Subtle rim highlight
            ctx.strokeStyle = 'rgba(255,255,255,0.15)';
            ctx.lineWidth = 1;
            ctx.stroke();
        };

        // Draw Status Bubble
        const drawStatusBubble = (x, y, z, type) => {
            const s = config.scale;
            const pos = toIso(x, y, z + 22); // Above head

            // Bobbing effect
            const bob = Math.sin(stateRef.current.clock * 0.1) * 2;
            const bubbleY = pos.y + bob;

            // Bubble shape
            ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
            ctx.shadowColor = 'rgba(0,0,0,0.1)';
            ctx.shadowBlur = 4;
            ctx.beginPath();
            ctx.roundRect(pos.x + 8 * s, bubbleY - 20 * s, 18 * s, 16 * s, 5);
            ctx.fill();
            ctx.shadowBlur = 0;

            // Tail
            ctx.beginPath();
            ctx.moveTo(pos.x + 8 * s, bubbleY - 10 * s);
            ctx.lineTo(pos.x + 2 * s, bubbleY - 4 * s);
            ctx.lineTo(pos.x + 12 * s, bubbleY - 4 * s);
            ctx.fill();

            // Icon
            ctx.font = `${10 * s}px sans-serif`; // Use standard font for emojis
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            let icon = '';
            if (type === 'SCANNING') icon = '🤔';
            if (type === 'ORDERING') icon = '🗣️';
            if (type === 'ORDER_PENDING') icon = '📝';
            if (type === 'WAITING') icon = '⏳';
            if (type === 'EATING') icon = '🍔';
            if (type === 'BILLING') icon = '🧾';
            if (type === 'PAYMENT') icon = '💳';

            if (icon) ctx.fillText(icon, pos.x + 17 * s, bubbleY - 12 * s);
        };

        // 3D Character (Cute Chibi Style - Human Proportions)
        const drawCharacter = (x, y, z, skinIdx, hairIdx, shirtColor, pantsColor, facing, isWalking, walkCycle, isShopkeeper, actionState) => {
            const s = config.scale;
            const bounce = isWalking ? Math.abs(Math.sin(walkCycle)) * 1.5 : 0;
            // Idle breathing bounce if not walking
            const idleBounce = !isWalking ? Math.sin(stateRef.current.clock * 0.05) * 0.5 : 0;
            const zOff = z + bounce + idleBounce;

            const skin = palette.skin[skinIdx % palette.skin.length];
            const skinDark = shadeColor(skin, -20);
            const skinLight = shadeColor(skin, 12);
            const hair = palette.hair[hairIdx % palette.hair.length];

            // Walking animation
            const legSwing = isWalking ? Math.sin(walkCycle) * 3 : 0;
            const armSwing = isWalking ? Math.sin(walkCycle) * 2 : 0;

            // === 1. SHADOW ===
            const shadowPos = toIso(x, y, 0);
            // ... (rest of drawing code)
            // I will use reference to original code for body parts but inject bubble at end

            // ... [We need to keep the drawing logic intact, so I will paste the body code back or be careful]
            // Since the tool asks for replacement, I must provide the full content or use multi_replace.
            // I will use the whole function to be safe and insert the bubble call at the end.

            // === 1. SHADOW ===
            ctx.fillStyle = 'rgba(0,0,0,0.15)';
            ctx.beginPath();
            ctx.ellipse(shadowPos.x, shadowPos.y, 8 * s, 4 * s, 0, 0, Math.PI * 2);
            ctx.fill();

            // === 2. LEGS ===
            const isSitting = !isWalking && z > 5;

            if (isWalking) {
                drawCylinder(x - 4, y + legSwing * 0.2, zOff, 5, 16, pantsColor);
                drawCylinder(x + 4, y - legSwing * 0.2, zOff, 5, 16, pantsColor);
                const shoeL = toIso(x - 4, y + legSwing * 0.2, zOff - 1);
                const shoeR = toIso(x + 4, y - legSwing * 0.2, zOff - 1);
                ctx.fillStyle = '#2D3748';
                ctx.beginPath();
                ctx.ellipse(shoeL.x, shoeL.y, 5 * s, 3 * s, 0, 0, Math.PI * 2);
                ctx.ellipse(shoeR.x, shoeR.y, 5 * s, 3 * s, 0, 0, Math.PI * 2);
                ctx.fill();
            } else if (isSitting) {
                drawCylinder(x - 4, y + 2, zOff + 8, 5, 12, pantsColor);
                drawCylinder(x + 4, y + 2, zOff + 8, 5, 12, pantsColor);
            }

            // === 3. BODY (Torso) ===
            const bodyZ = zOff + 16;
            const torsoPos = toIso(x, y, bodyZ);
            const torsoH = 18 * s;
            const torsoW = 11 * s;

            const torsoGrad = ctx.createLinearGradient(
                torsoPos.x - torsoW, torsoPos.y,
                torsoPos.x + torsoW, torsoPos.y
            );
            torsoGrad.addColorStop(0, shadeColor(shirtColor, -25));
            torsoGrad.addColorStop(0.4, shirtColor);
            torsoGrad.addColorStop(0.6, shirtColor);
            torsoGrad.addColorStop(1, shadeColor(shirtColor, -25));

            ctx.fillStyle = torsoGrad;
            ctx.beginPath();
            ctx.roundRect(torsoPos.x - torsoW, torsoPos.y - torsoH, torsoW * 2, torsoH, [8, 8, 6, 6]);
            ctx.fill();

            if (isShopkeeper) {
                ctx.fillStyle = palette.waiterApron;
                ctx.beginPath();
                ctx.roundRect(torsoPos.x - torsoW + 2, torsoPos.y - torsoH + 8, torsoW * 2 - 4, torsoH - 8, 3);
                ctx.fill();
            }

            // === 4. ARMS ===
            const armZ = bodyZ + 4;
            let leftHandPos = { x: x - 10 - armSwing, y: y, z: armZ - 2 };
            let rightHandPos = { x: x + 10 + armSwing, y: y, z: armZ - 2 };
            let isHoldingPhone = false;

            if (actionState === 'SCANNING' || actionState === 'ORDERING') {
                leftHandPos = { x: x - 4, y: y + 5, z: armZ + 5 };
                rightHandPos = { x: x + 4, y: y + 5, z: armZ + 5 };
                isHoldingPhone = true;
            } else if (actionState === 'EATING') {
                const eatCycle = Math.sin(stateRef.current.clock * 0.1);
                rightHandPos = { x: x + 6, y: y + 5, z: armZ + 8 + eatCycle * 4 };
                leftHandPos = { x: x - 8, y: y + 2, z: armZ + 2 };
            } else if (isSitting) {
                leftHandPos = { x: x - 10, y: y + 2, z: armZ + 2 };
                rightHandPos = { x: x + 10, y: y + 2, z: armZ + 2 };
            }

            drawCylinder(x - 11, y, armZ + 5, 3.5, 9, shirtColor);
            drawCylinder(leftHandPos.x, leftHandPos.y, leftHandPos.z + 2, 3, 7, skin);
            drawCylinder(x + 11, y, armZ + 5, 3.5, 9, shirtColor);
            drawCylinder(rightHandPos.x, rightHandPos.y, rightHandPos.z + 2, 3, 7, skin);

            drawSphere(leftHandPos.x, leftHandPos.y, leftHandPos.z, 3.5, skin);
            drawSphere(rightHandPos.x, rightHandPos.y, rightHandPos.z, 3.5, skin);

            if (isHoldingPhone) {
                const phonePos = toIso(x, y + 8, armZ + 6);
                ctx.fillStyle = palette.phone;
                ctx.beginPath();
                ctx.roundRect(phonePos.x - 5 * s, phonePos.y - 8 * s, 10 * s, 14 * s, 2);
                ctx.fill();
                ctx.fillStyle = actionState === 'SCANNING' ? '#68D391' : '#63B3ED';
                ctx.beginPath();
                ctx.roundRect(phonePos.x - 4 * s, phonePos.y - 7 * s, 8 * s, 10 * s, 1);
                ctx.fill();
            }

            // === 5. HEAD ===
            const headZ = bodyZ + 20;
            const headR = 13;
            drawSphere(x, y, headZ, headR, skin);

            const headPos = toIso(x, y, headZ);
            let lookOff = 0;
            if (facing === 'RIGHT') lookOff = 3;
            else if (facing === 'LEFT') lookOff = -3;
            else if (facing === 'DOWN') lookOff = 0;

            const hairGrad = ctx.createRadialGradient(
                headPos.x - 3, headPos.y - 6 * s, 2,
                headPos.x, headPos.y, headR * s * 1.1
            );
            hairGrad.addColorStop(0, shadeColor(hair, 20));
            hairGrad.addColorStop(0.5, hair);
            hairGrad.addColorStop(1, shadeColor(hair, -30));

            ctx.fillStyle = hairGrad;
            ctx.beginPath();
            ctx.arc(headPos.x, headPos.y - 2 * s, headR * s * 1.05, Math.PI * 1.15, Math.PI * 1.85);
            ctx.quadraticCurveTo(headPos.x + headR * s * 0.7, headPos.y - headR * s, headPos.x + headR * s * 0.9, headPos.y + 1 * s);
            ctx.lineTo(headPos.x - headR * s * 0.9, headPos.y + 1 * s);
            ctx.quadraticCurveTo(headPos.x - headR * s * 0.7, headPos.y - headR * s, headPos.x, headPos.y - 2 * s);
            ctx.fill();

            // === 7. FACE ===
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.ellipse(headPos.x - 4 * s + lookOff, headPos.y + 2 * s, 3 * s, 3.5 * s, 0, 0, Math.PI * 2);
            ctx.ellipse(headPos.x + 4 * s + lookOff, headPos.y + 2 * s, 3 * s, 3.5 * s, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#5D4E37';
            ctx.beginPath();
            ctx.arc(headPos.x - 4 * s + lookOff, headPos.y + 2.5 * s, 2 * s, 0, Math.PI * 2);
            ctx.arc(headPos.x + 4 * s + lookOff, headPos.y + 2.5 * s, 2 * s, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#1A202C';
            ctx.beginPath();
            ctx.arc(headPos.x - 4 * s + lookOff, headPos.y + 2.5 * s, 1.2 * s, 0, Math.PI * 2);
            ctx.arc(headPos.x + 4 * s + lookOff, headPos.y + 2.5 * s, 1.2 * s, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = shadeColor(skin, -40);
            ctx.lineWidth = 1.5;
            ctx.lineCap = 'round';
            ctx.beginPath();
            if (isShopkeeper) {
                ctx.arc(headPos.x + lookOff * 0.2, headPos.y + 7 * s, 3 * s, 0.2, Math.PI - 0.2);
            } else if (actionState === 'EATING') {
                ctx.fillStyle = '#333';
                ctx.ellipse(headPos.x + lookOff, headPos.y + 7 * s, 2 * s, 2 * s, 0, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.arc(headPos.x + lookOff * 0.2, headPos.y + 7 * s, 2 * s, 0.3, Math.PI - 0.3);
                ctx.stroke();
            }

            // Draw Status Bubble
            if (!isWalking && actionState && actionState !== 'IDLE') {
                drawStatusBubble(x, y, headZ + 5, actionState);
            }
        };

        // Draw QR code on table
        const drawQRCode = (x, y) => {
            const s = config.scale;
            const pos = toIso(x, y, 29);
            // QR background
            ctx.fillStyle = '#FFF';
            ctx.beginPath();
            ctx.roundRect(pos.x - 6 * s, pos.y - 4 * s, 12 * s, 8 * s, 1);
            ctx.fill();
            // QR pattern
            ctx.fillStyle = '#1A1A1A';
            const qrSize = 1.5 * s;
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 3; j++) {
                    if ((i + j) % 2 === 0) {
                        ctx.fillRect(pos.x - 5 * s + i * 2.5 * s, pos.y - 3 * s + j * 2 * s, qrSize, qrSize);
                    }
                }
            }
        };

        // Draw water bottles
        const drawWaterBottles = (x, y) => {
            const s = config.scale;
            // Bottle 1
            const b1 = toIso(x - 12, y + 8, 30);
            ctx.fillStyle = '#90CDF4';
            ctx.beginPath();
            ctx.roundRect(b1.x - 2 * s, b1.y - 10 * s, 4 * s, 10 * s, [2, 2, 1, 1]);
            ctx.fill();
            ctx.fillStyle = '#3182CE';
            ctx.fillRect(b1.x - 2 * s, b1.y - 10 * s, 4 * s, 2 * s);
            // Bottle 2
            const b2 = toIso(x + 12, y + 8, 30);
            ctx.fillStyle = '#90CDF4';
            ctx.beginPath();
            ctx.roundRect(b2.x - 2 * s, b2.y - 10 * s, 4 * s, 10 * s, [2, 2, 1, 1]);
            ctx.fill();
            ctx.fillStyle = '#3182CE';
            ctx.fillRect(b2.x - 2 * s, b2.y - 10 * s, 4 * s, 2 * s);
        };

        // Draw utensil holder
        const drawUtensilHolder = (x, y) => {
            const s = config.scale;
            const pos = toIso(x + 15, y - 10, 29);
            // Holder
            ctx.fillStyle = '#4A5568';
            ctx.beginPath();
            ctx.roundRect(pos.x - 4 * s, pos.y - 8 * s, 8 * s, 8 * s, 2);
            ctx.fill();
            // Utensils
            ctx.strokeStyle = '#A0AEC0';
            ctx.lineWidth = 1.5;
            // Fork
            ctx.beginPath();
            ctx.moveTo(pos.x - 2 * s, pos.y - 8 * s);
            ctx.lineTo(pos.x - 2 * s, pos.y - 14 * s);
            ctx.stroke();
            // Spoon
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y - 8 * s);
            ctx.lineTo(pos.x, pos.y - 15 * s);
            ctx.stroke();
            // Chopsticks
            ctx.strokeStyle = '#8B4513';
            ctx.beginPath();
            ctx.moveTo(pos.x + 1.5 * s, pos.y - 8 * s);
            ctx.lineTo(pos.x + 2.5 * s, pos.y - 16 * s);
            ctx.moveTo(pos.x + 2.5 * s, pos.y - 8 * s);
            ctx.lineTo(pos.x + 3.5 * s, pos.y - 16 * s);
            ctx.stroke();
        };

        // Draw food items
        const drawFood = (x, y) => {
            const s = config.scale;
            // Burger
            const burgerPos = toIso(x - 10, y - 5, 30);
            // Bottom bun
            ctx.fillStyle = palette.food.bun;
            ctx.beginPath();
            ctx.ellipse(burgerPos.x, burgerPos.y, 5 * s, 3 * s, 0, 0, Math.PI * 2);
            ctx.fill();
            // Patty
            ctx.fillStyle = palette.food.burger;
            ctx.beginPath();
            ctx.ellipse(burgerPos.x, burgerPos.y - 2 * s, 5 * s, 2.5 * s, 0, 0, Math.PI * 2);
            ctx.fill();
            // Top bun
            ctx.fillStyle = palette.food.bun;
            ctx.beginPath();
            ctx.arc(burgerPos.x, burgerPos.y - 5 * s, 5 * s, Math.PI, 0);
            ctx.fill();
            // Sesame seeds
            ctx.fillStyle = '#FFF';
            ctx.beginPath();
            ctx.arc(burgerPos.x - 2 * s, burgerPos.y - 6 * s, 0.5 * s, 0, Math.PI * 2);
            ctx.arc(burgerPos.x + 2 * s, burgerPos.y - 7 * s, 0.5 * s, 0, Math.PI * 2);
            ctx.fill();

            // Fries
            const friesPos = toIso(x + 5, y - 5, 30);
            ctx.fillStyle = '#E53E3E';
            ctx.beginPath();
            ctx.roundRect(friesPos.x - 4 * s, friesPos.y - 6 * s, 8 * s, 6 * s, 1);
            ctx.fill();
            ctx.fillStyle = palette.food.fries;
            for (let i = 0; i < 5; i++) {
                ctx.fillRect(friesPos.x - 3 * s + i * 1.5 * s, friesPos.y - 10 * s, 1 * s, 5 * s);
            }

            // Coke
            const cokePos = toIso(x + 15, y, 30);
            ctx.fillStyle = palette.food.cokeGlass;
            ctx.globalAlpha = 0.7;
            ctx.beginPath();
            ctx.roundRect(cokePos.x - 3 * s, cokePos.y - 12 * s, 6 * s, 12 * s, 2);
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.fillStyle = '#7C3AED';
            ctx.beginPath();
            ctx.roundRect(cokePos.x - 2.5 * s, cokePos.y - 10 * s, 5 * s, 8 * s, 1);
            ctx.fill();
            // Straw
            ctx.strokeStyle = '#FFF';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(cokePos.x, cokePos.y - 12 * s);
            ctx.lineTo(cokePos.x + 2 * s, cokePos.y - 18 * s);
            ctx.stroke();
        };

        // Draw waiter
        const drawWaiter = (x, y, carryingFood, targetTable) => {
            const s = config.scale;
            const skin = palette.skin[2];
            const skinDark = shadeColor(skin, -20);

            // Shadow
            const shadowPos = toIso(x, y, 0);
            ctx.fillStyle = 'rgba(0,0,0,0.2)';
            ctx.beginPath();
            ctx.ellipse(shadowPos.x, shadowPos.y, 12 * s, 6 * s, 0, 0, Math.PI * 2);
            ctx.fill();

            // Legs
            drawCylinder(x - 4, y, 0, 4, 18, '#1A202C');
            drawCylinder(x + 4, y, 0, 4, 18, '#1A202C');
            // Shoes
            drawSphere(x - 4, y, -1, 4, '#1A1A1A');
            drawSphere(x + 4, y, -1, 4, '#1A1A1A');

            // Body
            const bodyZ = 18;
            const torsoPos = toIso(x, y, bodyZ);
            ctx.fillStyle = palette.waiterShirt;
            ctx.beginPath();
            ctx.roundRect(torsoPos.x - 10 * s, torsoPos.y - 16 * s, 20 * s, 16 * s, 6);
            ctx.fill();

            // Apron
            ctx.fillStyle = palette.waiterApron;
            ctx.beginPath();
            ctx.roundRect(torsoPos.x - 8 * s, torsoPos.y - 10 * s, 16 * s, 10 * s, 2);
            ctx.fill();

            // Arms
            drawCylinder(x - 12, y, bodyZ + 4, 3.5, 12, palette.waiterShirt);
            drawCylinder(x + 12, y, bodyZ + 4, 3.5, 12, palette.waiterShirt);

            // Tray with food
            if (carryingFood) {
                const trayPos = toIso(x, y - 15, bodyZ + 14);
                // Tray
                ctx.fillStyle = '#718096';
                ctx.beginPath();
                ctx.ellipse(trayPos.x, trayPos.y, 18 * s, 10 * s, 0, 0, Math.PI * 2);
                ctx.fill();
                // Food on tray (simplified)
                ctx.fillStyle = palette.food.bun;
                ctx.beginPath();
                ctx.arc(trayPos.x - 8 * s, trayPos.y - 4 * s, 4 * s, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = palette.food.fries;
                ctx.fillRect(trayPos.x, trayPos.y - 6 * s, 6 * s, 5 * s);
                ctx.fillStyle = palette.food.coke;
                ctx.beginPath();
                ctx.roundRect(trayPos.x + 8 * s, trayPos.y - 8 * s, 4 * s, 8 * s, 1);
                ctx.fill();
            }

            // Hands
            drawSphere(x - 14, y - 8, bodyZ + 2, 3.5, skin);
            drawSphere(x + 14, y - 8, bodyZ + 2, 3.5, skin);

            // Neck & Head
            const neckPos = toIso(x, y, bodyZ + 14);
            ctx.fillStyle = skin;
            ctx.beginPath();
            ctx.ellipse(neckPos.x, neckPos.y, 3 * s, 2 * s, 0, 0, Math.PI * 2);
            ctx.fill();

            const headZ = bodyZ + 18;
            drawSphere(x, y, headZ, 10, skin);

            const headPos = toIso(x, y, headZ);
            // Hair
            ctx.fillStyle = '#1A1A1A';
            ctx.beginPath();
            ctx.arc(headPos.x, headPos.y - 2 * s, 10 * s * 1.05, Math.PI * 1.1, Math.PI * 1.9);
            ctx.quadraticCurveTo(headPos.x + 9 * s, headPos.y - 10 * s, headPos.x + 10 * s, headPos.y);
            ctx.lineTo(headPos.x - 10 * s, headPos.y);
            ctx.fill();

            // Face
            ctx.fillStyle = '#FFF';
            ctx.beginPath();
            ctx.ellipse(headPos.x - 3 * s, headPos.y + 1 * s, 2 * s, 1.5 * s, 0, 0, Math.PI * 2);
            ctx.ellipse(headPos.x + 3 * s, headPos.y + 1 * s, 2 * s, 1.5 * s, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#1A1A1A';
            ctx.beginPath();
            ctx.arc(headPos.x - 3 * s, headPos.y + 1.5 * s, 1 * s, 0, Math.PI * 2);
            ctx.arc(headPos.x + 3 * s, headPos.y + 1.5 * s, 1 * s, 0, Math.PI * 2);
            ctx.fill();
            // Smile
            ctx.strokeStyle = skinDark;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.arc(headPos.x, headPos.y + 4 * s, 3 * s, 0.1, Math.PI - 0.1);
            ctx.stroke();
        };

        // Draw bill receipt
        const drawReceipt = (x, y) => {
            const s = config.scale;
            const pos = toIso(x, y - 5, 32);
            ctx.fillStyle = '#FFF';
            ctx.beginPath();
            ctx.roundRect(pos.x - 6 * s, pos.y - 10 * s, 12 * s, 14 * s, 1);
            ctx.fill();
            // Text lines
            ctx.fillStyle = '#1A1A1A';
            for (let i = 0; i < 4; i++) {
                ctx.fillRect(pos.x - 4 * s, pos.y - 8 * s + i * 3 * s, 8 * s, 1 * s);
            }
            // Total
            ctx.fillStyle = '#E53E3E';
            ctx.font = 'bold 8px sans-serif';
            ctx.fillText('₹450', pos.x - 3 * s, pos.y + 2 * s);
        };

        // Draw card payment
        const drawCardPayment = (x, y) => {
            const s = config.scale;
            const pos = toIso(x, y, 32);
            // Card terminal
            ctx.fillStyle = '#2D3748';
            ctx.beginPath();
            ctx.roundRect(pos.x - 5 * s, pos.y - 6 * s, 10 * s, 8 * s, 2);
            ctx.fill();
            // Screen
            ctx.fillStyle = '#48BB78';
            ctx.beginPath();
            ctx.roundRect(pos.x - 4 * s, pos.y - 5 * s, 8 * s, 4 * s, 1);
            ctx.fill();
            // Card
            ctx.fillStyle = '#ECC94B';
            ctx.beginPath();
            ctx.roundRect(pos.x - 8 * s, pos.y - 3 * s, 6 * s, 4 * s, 1);
            ctx.fill();
        };

        // Draw kitchen
        const drawKitchen = () => {
            const s = config.scale;
            const kitchenX = 0;
            const kitchenY = -120;
            const pos = toIso(kitchenX, kitchenY, 0);

            // Kitchen counter
            ctx.fillStyle = '#4A5568';
            ctx.beginPath();
            ctx.roundRect(pos.x - 60 * s, pos.y - 25 * s, 120 * s, 25 * s, 4);
            ctx.fill();

            // Sign
            ctx.fillStyle = '#1A202C';
            ctx.beginPath();
            ctx.roundRect(pos.x - 30 * s, pos.y - 45 * s, 60 * s, 18 * s, 3);
            ctx.fill();
            ctx.fillStyle = '#FFF';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('KITCHEN', pos.x, pos.y - 32 * s);
            ctx.textAlign = 'left';

            // Kitchen door
            ctx.fillStyle = '#2D3748';
            ctx.beginPath();
            ctx.roundRect(pos.x - 15 * s, pos.y - 25 * s, 30 * s, 25 * s, 2);
            ctx.fill();
        };



        // Wait, I need to be careful about where I am splicing.
        // The previous code block ended at line 747 which is the end of `updateState`.
        // I need to replace from the `useState` definition (line 6) OR just update the `render` and `updateState` inside `useEffect`.
        // The `drawTableScene` also needs to be updated to NOT draw people.

        // Let's replace `drawTableScene`, `render`, `STATES`, `updateState`.

        // ... (Drawing functions for table props remain) ...

        // Draw table scene (JUST PROPS)
        const drawTableScene = (table) => {
            const { x, y, state: tableState } = table;

            drawRoundTable(x, y);
            drawQRCode(x, y);
            drawWaterBottles(x, y);
            drawUtensilHolder(x, y);

            // Draw Chairs
            // Draw Chairs
            const chairPositions = [
                { cx: x - 50, cy: y, angle: 0 },
                { cx: x + 50, cy: y, angle: Math.PI },
            ];
            chairPositions.forEach(pos => drawChair(pos.cx, pos.cy, pos.angle));

            // Draw food/receipt/terminal based on table state
            if (tableState === 'EATING' || tableState === 'BILLING' || tableState === 'PAYMENT') {
                drawFood(x, y);
            }
            if (tableState === 'BILLING') drawReceipt(x, y);
            if (tableState === 'PAYMENT') drawCardPayment(x + 10, y);
        };

        // Render function
        const render = () => {
            const state = stateRef.current;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFloor();
            drawKitchen();

            // Tables
            const sortedTables = [...state.tables].sort((a, b) => a.y - b.y);
            sortedTables.forEach(table => drawTableScene(table));

            // Entities (Customers and Waiters) sorted by Y for depth
            const entities = [
                ...state.customers.map(c => ({ ...c, type: 'customer' })),
                ...state.waiters.map(w => ({ ...w, type: 'waiter' }))
            ].sort((a, b) => a.y - b.y);

            entities.forEach(entity => {
                let facing = 'DOWN';
                let isWalking = entity.isWalking;
                let actionState = entity.actionState;

                if (entity.type === 'waiter') {
                    // Waiter logic
                    isWalking = entity.state === 'MOVING' || entity.state === 'RETURNING';

                    if (entity.targetX > entity.x) facing = 'RIGHT';
                    else if (entity.targetX < entity.x) facing = 'LEFT';
                    else facing = 'DOWN';

                    if (entity.task === 'DELIVER_FOOD') actionState = 'DELIVERING';
                    else if (entity.task === 'TAKE_ORDER' && entity.state === 'ACTING') actionState = 'TAKING_ORDER';
                    else actionState = 'IDLE';

                    if (entity.state === 'RETURNING') actionState = 'IDLE';
                } else {
                    // Customer logic
                    if (isWalking && entity.targetX) {
                        // Infer facing from movement
                        const dx = entity.targetX - entity.x;
                        const dy = entity.targetY - entity.y;
                        if (Math.abs(dx) > Math.abs(dy)) {
                            facing = dx > 0 ? 'RIGHT' : 'LEFT';
                        } else {
                            facing = dy > 0 ? 'DOWN' : 'UP';
                        }
                    } else if (entity.state === 'SITTING') {
                        if (entity.chairIdx === 0) facing = 'RIGHT';
                        if (entity.chairIdx === 1) facing = 'LEFT';
                    }
                }

                drawCharacter(
                    entity.x, entity.y, entity.z || 0,
                    entity.skinIdx, entity.hairIdx,
                    entity.shirtColor, entity.pantsColor,
                    facing,
                    isWalking,
                    state.clock * 0.2, // Walk cycle
                    entity.type === 'waiter', // isShopkeeper
                    actionState
                );
            });

            // UI Overlay
            ctx.fillStyle = 'rgba(26, 32, 44, 0.8)';
            ctx.beginPath();
            ctx.roundRect(canvas.width - 150, 15, 135, 50, 8);
            ctx.fill();
            ctx.fillStyle = '#FFF';
            ctx.font = 'bold 11px Inter, sans-serif';
            ctx.fillText('🍽️ Restaurant Mode', canvas.width - 140, 35);
            ctx.font = '10px Inter, sans-serif';
            ctx.fillStyle = '#A0AEC0';
            ctx.fillText(`Happy Customers: ${state.processedTables * 4}`, canvas.width - 140, 52);
        };


        // Constants
        const TABLE_STATE_DURATIONS = {
            IDLE: 60, // Time before customers might arrive
            OCCUPIED: 600, // Total dining time managed by sub-states
            CLEANUP: 60
        };

        // Customer sub-states
        // WALKING_IN -> SITTING (SCANNING -> ORDERING -> WAITING -> EATING -> BILLING -> PAYMENT) -> WALKING_OUT

        const updateState = () => {
            const prev = stateRef.current;
            let newTables = [...prev.tables];
            let newCustomers = [...prev.customers];
            let newWaiters = [...prev.waiters];
            let newProcessed = prev.processedTables;

            // 1. Spawner: Add customers to empty tables
            if (prev.clock % 120 === 0) {
                const emptyTable = newTables.find(t => t.state === 'IDLE' && t.chairs.every(c => c === null));
                if (emptyTable) {
                    emptyTable.state = 'RESERVED';
                    // Spawn 2 customers
                    const startX = 0;
                    const startY = 180;
                    for (let i = 0; i < 2; i++) {
                        const targetChair = {
                            0: { x: emptyTable.x - 50, y: emptyTable.y },
                            1: { x: emptyTable.x + 50, y: emptyTable.y }
                        }[i];

                        newCustomers.push({
                            id: Date.now() + i,
                            x: startX + (Math.random() - 0.5) * 40,
                            y: startY + i * 20,
                            z: 0,
                            targetX: targetChair.x,
                            targetY: targetChair.y,
                            state: 'WALKING_IN',
                            isWalking: true,
                            tableId: emptyTable.id,
                            chairIdx: i,
                            skinIdx: Math.floor(Math.random() * 5),
                            hairIdx: Math.floor(Math.random() * 5),
                            shirtColor: palette.shirts[Math.floor(Math.random() * palette.shirts.length)],
                            pantsColor: palette.floor[0],
                            actionState: 'IDLE',
                            diningTimer: 0
                        });
                    }
                }
            }

            // 2. Update Customers
            newCustomers = newCustomers.map(c => {
                let nextC = { ...c };
                if (c.state === 'WALKING_IN') {
                    const dx = c.targetX - c.x;
                    const dy = c.targetY - c.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 2) {
                        nextC.state = 'SITTING';
                        nextC.isWalking = false;
                        nextC.x = c.targetX;
                        nextC.y = c.targetY;
                        nextC.z = 10;
                        const table = newTables.find(t => t.id === c.tableId);
                        if (table && table.state === 'RESERVED') {
                            table.state = 'SCANNING';
                            table.stateTimer = 0;
                        }
                    } else {
                        nextC.x += (dx / dist) * 1.5;
                        nextC.y += (dy / dist) * 1.5;
                    }
                } else if (c.state === 'SITTING') {
                    const table = newTables.find(t => t.id === c.tableId);
                    if (table) {
                        // Sync action state
                        if (table.state === 'SCANNING') nextC.actionState = 'SCANNING';
                        else if (table.state === 'ORDERING') nextC.actionState = 'ORDERING';
                        else if (table.state === 'ORDER_PENDING') nextC.actionState = 'ORDER_PENDING';
                        else if (table.state === 'WAITING') nextC.actionState = c.chairIdx === 0 ? 'WAITING' : 'IDLE';
                        else if (table.state === 'EATING') nextC.actionState = 'EATING';
                        else if (table.state === 'BILLING' && c.chairIdx === 0) nextC.actionState = 'BILLING';
                        else if (table.state === 'PAYMENT' && c.chairIdx === 0) nextC.actionState = 'PAYMENT';
                        else nextC.actionState = 'IDLE';

                        if (table.state === 'FINISHED') {
                            nextC.state = 'WALKING_OUT';
                            nextC.isWalking = true;
                            nextC.z = 0;
                            nextC.targetX = 0;
                            nextC.targetY = 200;
                        }
                    }
                } else if (c.state === 'WALKING_OUT') {
                    const dx = c.targetX - c.x;
                    const dy = c.targetY - c.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 2) return null;
                    nextC.x += (dx / dist) * 1.5;
                    nextC.y += (dy / dist) * 1.5;
                }
                return nextC;
            }).filter(Boolean);

            // 3. Update Tables
            newTables = newTables.map(t => {
                let nextT = { ...t };
                // States that advance automatically by timer
                const autoAdvanceStates = ['SCANNING', 'ORDERING', 'WAITING', 'EATING', 'BILLING', 'PAYMENT'];

                if (autoAdvanceStates.includes(t.state)) {
                    // WAITING is now special: only advances if waiter delivers (handled below)
                    // No, WAITING represents "Cooking", so it can advance to "READY_TO_SERVE" or similar? 
                    // Let's say WAITING is cooking time. After time, it calls for waiter.
                    // But we want waiter to trigger EATING.
                    // So tables freeze in 'WAITING' until waiter delivers.
                    // Tables freeze in 'ORDER_PENDING' until waiter takes order.

                    if (t.state === 'WAITING' || t.state === 'ORDER_PENDING') {
                        // Do not auto-advance timer for transition, wait for waiter interactions
                    } else {
                        nextT.stateTimer++;
                        const durations = { SCANNING: 100, ORDERING: 150, EATING: 400, BILLING: 100, PAYMENT: 120 };
                        if (nextT.stateTimer > durations[t.state]) {
                            if (t.state === 'SCANNING') nextT.state = 'ORDERING';
                            else if (t.state === 'ORDERING') nextT.state = 'ORDER_PENDING';
                            else if (t.state === 'EATING') nextT.state = 'BILLING';
                            else if (t.state === 'BILLING') nextT.state = 'PAYMENT';
                            else if (t.state === 'PAYMENT') {
                                nextT.state = 'FINISHED';
                                newProcessed++;
                            }
                            nextT.stateTimer = 0;
                        }
                    }
                } else if (t.state === 'FINISHED') {
                    if (!newCustomers.some(c => c.tableId === t.id)) {
                        nextT.state = 'IDLE';
                    }
                }
                return nextT;
            });

            // 4. Update Waiters
            // A: Assign tasks
            newTables.forEach(t => {
                // Task 1: Take Order
                if (t.state === 'ORDER_PENDING') {
                    // Check if waiter assigned
                    if (!newWaiters.some(w => w.targetTable === t.id && w.task === 'TAKE_ORDER')) {
                        // Spawn Waiter
                        newWaiters.push({
                            id: Date.now() + Math.random(),
                            x: 0, y: -120,
                            targetX: t.x - 30, targetY: t.y, // Stand next to table
                            task: 'TAKE_ORDER',
                            targetTable: t.id,
                            state: 'MOVING',
                            carryingFood: false,
                            timer: 0,
                            skinIdx: 2, hairIdx: 0, shirtColor: '#FFFFFF', pantsColor: '#1A202C'
                        });
                    }
                }
                // Task 2: Deliver Food (triggered after WAITING has been active for a bit?)
                // Let's assume as soon as it enters WAITING, kitchen starts. Let's add a "COOKING" timer.
                // Simplified: If WAITING, assign waiter to deliver.
                if (t.state === 'WAITING') {
                    if (!newWaiters.some(w => w.targetTable === t.id && w.task === 'DELIVER_FOOD')) {
                        newWaiters.push({
                            id: Date.now() + Math.random(),
                            x: 0, y: -120,
                            targetX: t.x, targetY: t.y,
                            task: 'DELIVER_FOOD',
                            targetTable: t.id,
                            state: 'MOVING',
                            carryingFood: true,
                            timer: 0,
                            skinIdx: 3, hairIdx: 1, shirtColor: '#FFFFFF', pantsColor: '#1A202C' // Diff waiter
                        });
                    }
                }
            });

            // B: Move/Act Waiters
            newWaiters = newWaiters.map(w => {
                let nextW = { ...w };
                const dx = nextW.targetX - nextW.x;
                const dy = nextW.targetY - nextW.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (nextW.state === 'MOVING') {
                    if (dist < 5) {
                        nextW.state = 'ACTING';
                        nextW.timer = 0;
                    } else {
                        nextW.x += (dx / dist) * 2;
                        nextW.y += (dy / dist) * 2;
                    }
                } else if (nextW.state === 'ACTING') {
                    nextW.timer++;
                    if (nextW.task === 'TAKE_ORDER') {
                        if (nextW.timer > 60) { // Take order for 1s
                            // Update Table
                            const tIdx = newTables.findIndex(t => t.id === w.targetTable);
                            if (tIdx !== -1) newTables[tIdx].state = 'WAITING'; // Now waiting for food
                            nextW.state = 'RETURNING';
                            nextW.targetX = 0; nextW.targetY = -120;
                        }
                    } else if (nextW.task === 'DELIVER_FOOD') {
                        // Instant delivery
                        const tIdx = newTables.findIndex(t => t.id === w.targetTable);
                        if (tIdx !== -1) newTables[tIdx].state = 'EATING';
                        nextW.state = 'RETURNING';
                        nextW.carryingFood = false;
                        nextW.targetX = 0; nextW.targetY = -120;
                    }
                } else if (nextW.state === 'RETURNING') {
                    if (dist < 5) return null;
                    nextW.x += (dx / dist) * 2;
                    nextW.y += (dy / dist) * 2;
                }

                return nextW;
            }).filter(Boolean);

            stateRef.current = {
                ...prev,
                clock: prev.clock + 1,
                tables: newTables,
                customers: newCustomers,
                waiters: newWaiters,
                processedTables: newProcessed
            };
        };



        // Animation loop
        const animate = () => {
            updateState();
            render();
            animationId = requestAnimationFrame(animate);
        };

        // Canvas setup
        const resizeCanvas = () => {
            const container = canvas.parentElement;
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <div className="restaurant-animation-container">
            <canvas ref={canvasRef} className="restaurant-canvas" />
        </div>
    );
};

export default RestaurantAnimation;
