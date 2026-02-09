import React, { useEffect, useRef, useState } from 'react';
import './RetailCheckoutAnimation.css';

const RetailCheckoutAnimation = () => {
    const canvasRef = useRef(null);
    const [stats, setStats] = useState({ customers: 0, transactions: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Premium Color Palette (Matching Gemini Reference)
        const palette = {
            // Environment
            floor: '#E8ECF4',
            floorHighlight: '#F0F4FC',
            wall: '#D4DCF0',
            wallAccent: '#CBD5EB',

            // Furniture
            counterDark: '#4A5568',
            counterMid: '#5A6A80',
            counterRim: '#4FD1C5', // Teal accent
            counterTop: '#E2E8F0',

            // Tech Elements
            screenGlow: 'rgba(99, 179, 237, 0.3)',
            screenBorder: '#90CDF4',

            // Character Skins
            skin: ['#FFDFC4', '#E8C4A8', '#D4A574', '#C19660'],

            // Character Hair
            hair: ['#2D3748', '#5D4037', '#8B5A2B', '#D4A574'],

            // Clothing (Pastel)
            shirts: ['#F687B3', '#68D391', '#90CDF4', '#F6AD55', '#B794F4'],
            pants: ['#2D3748', '#4A5568', '#553C9A'],

            // Decor
            shelfWood: '#D69E2E',
            plantGreen: '#48BB78',
            plantPot: '#FFFAF0',

            // UI
            uiGlow: '#63B3ED'
        };

        const state = {
            customers: [],
            transaction: { state: 'WAITING', timer: 0 },
            bill: { visible: false, height: 0 },
            clock: 0
        };

        // Configuration
        const config = {
            scale: 1.4,
            isoAngle: 0.5,
            centerX: 0,
            centerY: 0
        };

        // --- MATH UTILS ---
        const toIso = (x, y, z) => {
            const isoX = (x - y) * Math.cos(config.isoAngle);
            const isoY = (x + y) * Math.sin(config.isoAngle) - z;
            return {
                x: config.centerX + isoX * config.scale,
                y: config.centerY + isoY * config.scale
            };
        };

        const lerp = (a, b, t) => a + (b - a) * t;

        // --- PREMIUM 3D DRAWING FUNCTIONS ---

        // Soft Shadow (Ambient Occlusion style)
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

        // 3D Sphere with Volumetric Shading (for heads)
        const drawSphere = (x, y, z, radius, color, highlightAngle = -0.4) => {
            const pos = toIso(x, y, z);
            const r = radius * config.scale;

            // Multiple gradient layers for realistic volume
            const highlightX = pos.x + r * Math.cos(highlightAngle) * 0.4;
            const highlightY = pos.y + r * Math.sin(highlightAngle) * 0.4;

            // Main volume gradient
            const grad = ctx.createRadialGradient(highlightX, highlightY, r * 0.1, pos.x, pos.y, r);
            grad.addColorStop(0, '#FFFFFF');
            grad.addColorStop(0.15, color);
            grad.addColorStop(0.7, color);
            grad.addColorStop(1, shadeColor(color, -40));

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
            ctx.fill();

            // Rim light (subtle)
            ctx.strokeStyle = 'rgba(255,255,255,0.15)';
            ctx.lineWidth = 1;
            ctx.stroke();
        };

        // Rounded 3D Box (Claymorphism style)
        const drawRoundedBox = (x, y, z, w, d, h, radius, color, topColor) => {
            const s = config.scale;

            // Get corner positions
            const p1 = toIso(x, y, z);           // Front-left bottom
            const p2 = toIso(x + w, y, z);       // Front-right bottom
            const p3 = toIso(x + w, y + d, z);   // Back-right bottom
            const p4 = toIso(x, y + d, z);       // Back-left bottom

            const hs = h * s;

            // Right Face (darker)
            ctx.fillStyle = shadeColor(color, -15);
            ctx.beginPath();
            ctx.moveTo(p2.x, p2.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.lineTo(p3.x, p3.y - hs);
            ctx.lineTo(p2.x, p2.y - hs);
            ctx.closePath();
            ctx.fill();

            // Front Face (base color)
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(p3.x, p3.y);
            ctx.lineTo(p4.x, p4.y);
            ctx.lineTo(p4.x, p4.y - hs);
            ctx.lineTo(p3.x, p3.y - hs);
            ctx.closePath();
            ctx.fill();

            // Top Face (lighter)
            ctx.fillStyle = topColor || shadeColor(color, 20);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y - hs);
            ctx.lineTo(p2.x, p2.y - hs);
            ctx.lineTo(p3.x, p3.y - hs);
            ctx.lineTo(p4.x, p4.y - hs);
            ctx.closePath();
            ctx.fill();

            // Highlight edges
            ctx.strokeStyle = 'rgba(255,255,255,0.2)';
            ctx.lineWidth = 1;
            ctx.stroke();
        };

        // Curved Counter (Premium Style)
        const drawCurvedCounter = (x, y, z, w, d, h) => {
            const s = config.scale;
            const pos = toIso(x, y, z);
            const ws = w * s;
            const ds = d * s * 0.5; // Depth appears as height in iso
            const hs = h * s;

            // Main body with gradient
            const bodyGrad = ctx.createLinearGradient(pos.x - ws / 2, pos.y, pos.x + ws / 2, pos.y);
            bodyGrad.addColorStop(0, palette.counterDark);
            bodyGrad.addColorStop(0.5, palette.counterMid);
            bodyGrad.addColorStop(1, palette.counterDark);

            // Body (curved rectangle shape)
            ctx.fillStyle = bodyGrad;
            ctx.beginPath();
            ctx.roundRect(pos.x - ws / 2, pos.y - hs, ws, hs, [20, 20, 10, 10]);
            ctx.fill();

            // Teal Rim (Top edge accent)
            ctx.fillStyle = palette.counterRim;
            ctx.beginPath();
            ctx.roundRect(pos.x - ws / 2 - 4, pos.y - hs - 4, ws + 8, 8, 20);
            ctx.fill();

            // Counter Top Surface (Oval illusion)
            ctx.fillStyle = palette.counterTop;
            ctx.beginPath();
            ctx.ellipse(pos.x, pos.y - hs - 2, ws / 2, ds, 0, 0, Math.PI * 2);
            ctx.fill();

            // Subtle shadow under rim
            ctx.strokeStyle = 'rgba(0,0,0,0.1)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.ellipse(pos.x, pos.y - hs + 5, ws / 2 - 5, ds - 5, 0, 0, Math.PI);
            ctx.stroke();
        };

        // 3D Character (Cute Chibi Style - Human Proportions)
        const drawCharacter = (x, y, z, skinIdx, hairIdx, shirtColor, pantsColor, facing, isWalking, walkCycle, isShopkeeper) => {
            const s = config.scale;
            const bounce = isWalking ? Math.abs(Math.sin(walkCycle)) * 1.5 : 0;
            const zOff = z + bounce;

            const skin = palette.skin[skinIdx % palette.skin.length];
            const skinDark = shadeColor(skin, -20);
            const skinLight = shadeColor(skin, 12);
            const hair = palette.hair[hairIdx % palette.hair.length];

            // Walking animation
            const legSwing = isWalking ? Math.sin(walkCycle) * 3 : 0;
            const armSwing = isWalking ? Math.sin(walkCycle) * 2 : 0;

            // === 1. SHADOW ===
            drawShadow(x, y, 0, 16, 0.3);

            // === 2. LEGS (Simple, Human-like) ===
            if (!isShopkeeper) {
                // Left Leg
                drawPremiumCylinder(x - 4, y + legSwing * 0.2, zOff, 5, 16, pantsColor);
                // Right Leg
                drawPremiumCylinder(x + 4, y - legSwing * 0.2, zOff, 5, 16, pantsColor);

                // Shoes (Simple rounded)
                const shoeL = toIso(x - 4, y + legSwing * 0.2, zOff - 1);
                const shoeR = toIso(x + 4, y - legSwing * 0.2, zOff - 1);

                ctx.fillStyle = '#2D3748';
                ctx.beginPath();
                ctx.ellipse(shoeL.x, shoeL.y, 5.5 * s, 3 * s, 0, 0, Math.PI * 2);
                ctx.ellipse(shoeR.x, shoeR.y, 5.5 * s, 3 * s, 0, 0, Math.PI * 2);
                ctx.fill();

                // Shoe highlight
                ctx.fillStyle = '#4A5568';
                ctx.beginPath();
                ctx.ellipse(shoeL.x, shoeL.y - 1 * s, 4 * s, 2 * s, 0, 0, Math.PI * 2);
                ctx.ellipse(shoeR.x, shoeR.y - 1 * s, 4 * s, 2 * s, 0, 0, Math.PI * 2);
                ctx.fill();
            }

            // === 3. BODY (Torso) ===
            const bodyZ = zOff + 16;
            const torsoPos = toIso(x, y, bodyZ);
            const torsoH = 18 * s;
            const torsoW = 11 * s;

            // Torso gradient
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

            // Collar
            ctx.fillStyle = shadeColor(shirtColor, -10);
            ctx.beginPath();
            ctx.arc(torsoPos.x, torsoPos.y - torsoH + 3 * s, 5 * s, 0, Math.PI);
            ctx.fill();

            // Shopkeeper Vest
            if (isShopkeeper) {
                ctx.fillStyle = '#DD6B20';
                ctx.beginPath();
                ctx.roundRect(torsoPos.x - torsoW + 2, torsoPos.y - torsoH + 5, torsoW - 4, torsoH - 8, 3);
                ctx.fill();
                ctx.beginPath();
                ctx.roundRect(torsoPos.x + 2, torsoPos.y - torsoH + 5, torsoW - 4, torsoH - 8, 3);
                ctx.fill();
                // Name tag
                ctx.fillStyle = '#FFF';
                ctx.beginPath();
                ctx.roundRect(torsoPos.x + 2 * s, torsoPos.y - torsoH + 8, 8 * s, 5 * s, 2);
                ctx.fill();
            }

            // === 4. ARMS (Shorter, closer to body) ===
            const armZ = bodyZ + 4;

            // Left Arm (shirt sleeve)
            const leftArmX = x - 10 - armSwing;
            drawPremiumCylinder(leftArmX + 2, y, armZ + 4, 4, 8, shirtColor);
            // Left Forearm (skin)
            drawPremiumCylinder(leftArmX, y, armZ, 3.5, 6, skin);

            // Right Arm (shirt sleeve)
            const rightArmX = x + 10 + armSwing;
            drawPremiumCylinder(rightArmX - 2, y, armZ + 4, 4, 8, shirtColor);
            // Right Forearm (skin)
            drawPremiumCylinder(rightArmX, y, armZ, 3.5, 6, skin);

            // === HANDS (Simple spheres - no monkey fingers!) ===
            drawSphere(leftArmX - 1, y, armZ - 2, 4, skin);
            drawSphere(rightArmX + 1, y, armZ - 2, 4, skin);

            // === 5. NECK ===
            const neckPos = toIso(x, y, bodyZ + 16);
            ctx.fillStyle = skin;
            ctx.beginPath();
            ctx.ellipse(neckPos.x, neckPos.y, 4 * s, 3 * s, 0, 0, Math.PI * 2);
            ctx.fill();

            // === 6. HEAD (Chibi style - large but not too large) ===
            const headZ = bodyZ + 20;
            const headR = 13;
            drawSphere(x, y, headZ, headR, skin);

            const headPos = toIso(x, y, headZ);
            const lookOff = facing === 'RIGHT' ? 3 : (facing === 'LEFT' ? -3 : 0);

            // === 7. HAIR (Simple, clean) ===
            const hairGrad = ctx.createRadialGradient(
                headPos.x - 3, headPos.y - 6 * s, 2,
                headPos.x, headPos.y, headR * s * 1.1
            );
            hairGrad.addColorStop(0, shadeColor(hair, 20));
            hairGrad.addColorStop(0.5, hair);
            hairGrad.addColorStop(1, shadeColor(hair, -30));

            ctx.fillStyle = hairGrad;
            ctx.beginPath();
            // Hair cap shape
            ctx.arc(headPos.x, headPos.y - 2 * s, headR * s * 1.05, Math.PI * 1.15, Math.PI * 1.85);
            ctx.quadraticCurveTo(headPos.x + headR * s * 0.7, headPos.y - headR * s, headPos.x + headR * s * 0.9, headPos.y + 1 * s);
            ctx.lineTo(headPos.x - headR * s * 0.9, headPos.y + 1 * s);
            ctx.quadraticCurveTo(headPos.x - headR * s * 0.7, headPos.y - headR * s, headPos.x, headPos.y - 2 * s);
            ctx.fill();

            // === 8. FACE (Human-like) ===

            // Upper Eyelids (gives human shape to eyes)
            ctx.fillStyle = skinDark;
            ctx.beginPath();
            ctx.ellipse(headPos.x - 3.5 * s + lookOff, headPos.y + 1.5 * s, 2.8 * s, 1.5 * s, -0.1, Math.PI, Math.PI * 2);
            ctx.ellipse(headPos.x + 3.5 * s + lookOff, headPos.y + 1.5 * s, 2.8 * s, 1.5 * s, 0.1, Math.PI, Math.PI * 2);
            ctx.fill();

            // Eye whites (almond shaped for human look)
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.ellipse(headPos.x - 3.5 * s + lookOff, headPos.y + 2 * s, 2.5 * s, 2 * s, 0, 0, Math.PI * 2);
            ctx.ellipse(headPos.x + 3.5 * s + lookOff, headPos.y + 2 * s, 2.5 * s, 2 * s, 0, 0, Math.PI * 2);
            ctx.fill();

            // Iris (warm brown - human color)
            ctx.fillStyle = '#6B5344';
            ctx.beginPath();
            ctx.arc(headPos.x - 3.5 * s + lookOff, headPos.y + 2.2 * s, 1.5 * s, 0, Math.PI * 2);
            ctx.arc(headPos.x + 3.5 * s + lookOff, headPos.y + 2.2 * s, 1.5 * s, 0, Math.PI * 2);
            ctx.fill();

            // Pupils (small, centered)
            ctx.fillStyle = '#1A1A1A';
            ctx.beginPath();
            ctx.arc(headPos.x - 3.5 * s + lookOff, headPos.y + 2.2 * s, 0.8 * s, 0, Math.PI * 2);
            ctx.arc(headPos.x + 3.5 * s + lookOff, headPos.y + 2.2 * s, 0.8 * s, 0, Math.PI * 2);
            ctx.fill();

            // Eye highlights (small, natural)
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(headPos.x - 3.5 * s + lookOff + 0.5, headPos.y + 1.7 * s, 0.6 * s, 0, Math.PI * 2);
            ctx.arc(headPos.x + 3.5 * s + lookOff + 0.5, headPos.y + 1.7 * s, 0.6 * s, 0, Math.PI * 2);
            ctx.fill();

            // Eyebrows (natural curved lines above eyes)
            ctx.strokeStyle = shadeColor(hair, -30);
            ctx.lineWidth = 2.5;
            ctx.lineCap = 'round';
            // Left eyebrow
            ctx.beginPath();
            ctx.moveTo(headPos.x - 5.5 * s + lookOff, headPos.y - 0.5 * s);
            ctx.quadraticCurveTo(headPos.x - 3.5 * s + lookOff, headPos.y - 1.5 * s, headPos.x - 1.5 * s + lookOff, headPos.y - 0.8 * s);
            ctx.stroke();
            // Right eyebrow
            ctx.beginPath();
            ctx.moveTo(headPos.x + 1.5 * s + lookOff, headPos.y - 0.8 * s);
            ctx.quadraticCurveTo(headPos.x + 3.5 * s + lookOff, headPos.y - 1.5 * s, headPos.x + 5.5 * s + lookOff, headPos.y - 0.5 * s);
            ctx.stroke();

            // Nose (vertical line with tip - more human)
            ctx.strokeStyle = skinDark;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(headPos.x + lookOff * 0.3, headPos.y + 3 * s);
            ctx.lineTo(headPos.x + lookOff * 0.3, headPos.y + 5 * s);
            ctx.stroke();
            // Nose tip
            ctx.fillStyle = skinDark;
            ctx.beginPath();
            ctx.arc(headPos.x + lookOff * 0.3, headPos.y + 5.5 * s, 1 * s, 0, Math.PI * 2);
            ctx.fill();
            // Nostrils (subtle)
            ctx.fillStyle = shadeColor(skin, -35);
            ctx.beginPath();
            ctx.arc(headPos.x - 1 * s + lookOff * 0.3, headPos.y + 5.8 * s, 0.4 * s, 0, Math.PI * 2);
            ctx.arc(headPos.x + 1 * s + lookOff * 0.3, headPos.y + 5.8 * s, 0.4 * s, 0, Math.PI * 2);
            ctx.fill();

            // Mouth/Lips (more human shaped)
            // Upper lip line
            ctx.strokeStyle = shadeColor(skin, -35);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(headPos.x - 2.5 * s + lookOff * 0.2, headPos.y + 7.5 * s);
            ctx.quadraticCurveTo(headPos.x + lookOff * 0.2, headPos.y + 7 * s, headPos.x + 2.5 * s + lookOff * 0.2, headPos.y + 7.5 * s);
            ctx.stroke();

            // Lips (subtle color)
            ctx.fillStyle = 'rgba(180, 120, 120, 0.3)';
            ctx.beginPath();
            ctx.ellipse(headPos.x + lookOff * 0.2, headPos.y + 8 * s, 2 * s, 0.8 * s, 0, 0, Math.PI * 2);
            ctx.fill();

            // Smile line
            ctx.strokeStyle = shadeColor(skin, -30);
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            if (isShopkeeper) {
                ctx.arc(headPos.x + lookOff * 0.2, headPos.y + 7.5 * s, 2.5 * s, 0.15, Math.PI - 0.15);
            } else {
                ctx.arc(headPos.x + lookOff * 0.2, headPos.y + 7.8 * s, 1.5 * s, 0.2, Math.PI - 0.2);
            }
            ctx.stroke();

            // Ears (Human shaped - C curve)
            ctx.fillStyle = skin;
            ctx.strokeStyle = skinDark;
            ctx.lineWidth = 1;
            // Left ear
            ctx.beginPath();
            ctx.ellipse(headPos.x - headR * s + 1.5, headPos.y + 1 * s, 2 * s, 3 * s, -0.15, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            // Right ear
            ctx.beginPath();
            ctx.ellipse(headPos.x + headR * s - 1.5, headPos.y + 1 * s, 2 * s, 3 * s, 0.15, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        };

        // Premium Cylinder with volumetric shading
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

        // Basic Cylinder (for non-character uses)
        const drawCylinder = (x, y, z, r, h, color) => {
            const pos = toIso(x, y, z);
            const rs = r * config.scale;
            const hs = h * config.scale;

            const grad = ctx.createLinearGradient(pos.x - rs, pos.y, pos.x + rs, pos.y);
            grad.addColorStop(0, shadeColor(color, -20));
            grad.addColorStop(0.5, color);
            grad.addColorStop(1, shadeColor(color, -20));

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.roundRect(pos.x - rs, pos.y - hs, rs * 2, hs, rs);
            ctx.fill();
        };

        // Shopping Cart (Realistic Metal Frame)
        const drawCart = (x, y) => {
            const s = config.scale;
            const cartX = x + 28;
            const pos = toIso(cartX, y, 0);

            // === WHEELS (4 wheels) ===
            const wheelColor = '#4A5568';
            // Front wheels
            drawSphere(cartX - 10, y + 5, 4, 3.5, wheelColor);
            drawSphere(cartX + 10, y + 5, 4, 3.5, wheelColor);
            // Back wheels
            drawSphere(cartX - 10, y - 5, 4, 3.5, wheelColor);
            drawSphere(cartX + 10, y - 5, 4, 3.5, wheelColor);

            // Wheel axles
            ctx.strokeStyle = '#718096';
            ctx.lineWidth = 2;
            const axleF = toIso(cartX, y + 5, 4);
            const axleB = toIso(cartX, y - 5, 4);
            ctx.beginPath();
            ctx.moveTo(axleF.x - 12 * s, axleF.y);
            ctx.lineTo(axleF.x + 12 * s, axleF.y);
            ctx.moveTo(axleB.x - 12 * s, axleB.y);
            ctx.lineTo(axleB.x + 12 * s, axleB.y);
            ctx.stroke();

            // === CART BODY (Wire mesh look) ===
            const basketBottom = toIso(cartX, y, 8);
            const basketW = 22 * s;
            const basketH = 18 * s;
            const basketD = 14 * s;

            // Back panel (mesh)
            ctx.strokeStyle = '#A0AEC0';
            ctx.lineWidth = 1.5;
            ctx.fillStyle = 'rgba(226, 232, 240, 0.3)';

            // Draw mesh basket
            ctx.beginPath();
            ctx.roundRect(basketBottom.x - basketW, basketBottom.y - basketH - basketD * 0.3, basketW * 2, basketH, 4);
            ctx.fill();
            ctx.stroke();

            // Mesh lines (horizontal)
            ctx.strokeStyle = 'rgba(160, 174, 192, 0.6)';
            ctx.lineWidth = 1;
            for (let i = 1; i < 4; i++) {
                ctx.beginPath();
                ctx.moveTo(basketBottom.x - basketW + 3, basketBottom.y - basketH - basketD * 0.3 + i * (basketH / 4));
                ctx.lineTo(basketBottom.x + basketW - 3, basketBottom.y - basketH - basketD * 0.3 + i * (basketH / 4));
                ctx.stroke();
            }
            // Mesh lines (vertical)
            for (let i = 1; i < 5; i++) {
                ctx.beginPath();
                ctx.moveTo(basketBottom.x - basketW + i * (basketW * 2 / 5), basketBottom.y - basketH - basketD * 0.3 + 3);
                ctx.lineTo(basketBottom.x - basketW + i * (basketW * 2 / 5), basketBottom.y - basketD * 0.3 - 3);
                ctx.stroke();
            }

            // === HANDLE ===
            ctx.strokeStyle = '#E53E3E';
            ctx.lineWidth = 4;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(basketBottom.x - basketW, basketBottom.y - basketH - basketD * 0.3);
            ctx.quadraticCurveTo(
                basketBottom.x - basketW - 8 * s, basketBottom.y - basketH - basketD * 0.3 - 10 * s,
                basketBottom.x - basketW - 4 * s, basketBottom.y - basketH - basketD * 0.3 - 18 * s
            );
            ctx.stroke();

            // Handle grip
            ctx.strokeStyle = '#1A202C';
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(basketBottom.x - basketW - 4 * s, basketBottom.y - basketH - basketD * 0.3 - 18 * s);
            ctx.lineTo(basketBottom.x - basketW - 4 * s, basketBottom.y - basketH - basketD * 0.3 - 22 * s);
            ctx.stroke();

            // === ITEMS INSIDE ===
            // Orange box (cereal?)
            const item1Pos = toIso(cartX - 8, y, 12);
            ctx.fillStyle = '#F6AD55';
            ctx.shadowColor = 'rgba(0,0,0,0.1)';
            ctx.shadowBlur = 4;
            ctx.beginPath();
            ctx.roundRect(item1Pos.x - 6 * s, item1Pos.y - 10 * s, 12 * s, 10 * s, 2);
            ctx.fill();
            ctx.shadowBlur = 0;
            // Label
            ctx.fillStyle = '#DD6B20';
            ctx.fillRect(item1Pos.x - 4 * s, item1Pos.y - 8 * s, 8 * s, 3 * s);

            // Blue bottle
            const item2Pos = toIso(cartX + 5, y - 2, 12);
            ctx.fillStyle = '#63B3ED';
            ctx.beginPath();
            ctx.roundRect(item2Pos.x - 4 * s, item2Pos.y - 14 * s, 8 * s, 14 * s, [4, 4, 2, 2]);
            ctx.fill();
            // Cap
            ctx.fillStyle = '#2B6CB0';
            ctx.fillRect(item2Pos.x - 2 * s, item2Pos.y - 16 * s, 4 * s, 3 * s);

            // Green item
            const item3Pos = toIso(cartX + 2, y + 4, 10);
            ctx.fillStyle = '#68D391';
            ctx.beginPath();
            ctx.ellipse(item3Pos.x, item3Pos.y - 4 * s, 5 * s, 4 * s, 0, 0, Math.PI * 2);
            ctx.fill();

            // Pink box
            const item4Pos = toIso(cartX - 2, y - 4, 14);
            ctx.fillStyle = '#F687B3';
            ctx.beginPath();
            ctx.roundRect(item4Pos.x - 5 * s, item4Pos.y - 8 * s, 10 * s, 8 * s, 2);
            ctx.fill();
        };

        // Wall Shelves
        const drawShelves = (x, y, z) => {
            // Shelf unit background
            drawRoundedBox(x, y, z, 50, 15, 80, 4, '#ECC94B', '#F6E05E');

            // Shelves
            drawRoundedBox(x + 5, y + 2, z + 25, 40, 10, 3, 2, '#FFF', '#FFF');
            drawRoundedBox(x + 5, y + 2, z + 50, 40, 10, 3, 2, '#FFF', '#FFF');

            // Products
            drawRoundedBox(x + 10, y + 3, z + 28, 10, 8, 12, 2, '#F687B3', '#F9A8C9');
            drawRoundedBox(x + 25, y + 3, z + 28, 10, 8, 15, 2, '#63B3ED', '#90CDF4');
            drawRoundedBox(x + 12, y + 3, z + 53, 8, 6, 10, 2, '#68D391', '#9AE6B4');
            drawRoundedBox(x + 28, y + 3, z + 53, 12, 8, 8, 2, '#B794F4', '#D6BCFA');
        };

        // Plant Pot
        const drawPlant = (x, y) => {
            // Pot
            drawCylinder(x, y, 0, 12, 18, palette.plantPot);

            // Trunk
            drawCylinder(x, y, 18, 3, 25, '#8B5A2B');

            // Leaves (Fan out)
            const leafPos = toIso(x, y, 50);
            ctx.fillStyle = palette.plantGreen;
            for (let i = 0; i < 6; i++) {
                ctx.beginPath();
                ctx.ellipse(leafPos.x, leafPos.y, 22 * config.scale, 6 * config.scale, (i * Math.PI) / 3, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        // POS System with Premium Holographic Screen
        const drawPOSSystem = (x, y, z) => {
            const s = config.scale;
            const pos = toIso(x, y, z);

            // === STAND BASE ===
            // Base plate
            drawRoundedBox(x - 12, y - 8, z, 24, 16, 4, 3, '#1A202C', '#2D3748');

            // Articulated Arm (cylinder + joint)
            drawCylinder(x, y, z + 4, 3, 8, '#2D3748');
            drawSphere(x, y, z + 12, 4, '#4A5568');
            drawCylinder(x - 2, y, z + 14, 2, 12, '#2D3748');

            // === MONITOR HOUSING ===
            const monitorPos = toIso(x - 5, y, z + 28);

            // Monitor Back (3D depth)
            ctx.fillStyle = '#1A202C';
            ctx.beginPath();
            ctx.roundRect(monitorPos.x - 38 * s, monitorPos.y - 28 * s, 76 * s, 38 * s, 6);
            ctx.fill();

            // Monitor Bezel (Dark frame)
            const bezelGrad = ctx.createLinearGradient(
                monitorPos.x - 35 * s, monitorPos.y,
                monitorPos.x + 35 * s, monitorPos.y
            );
            bezelGrad.addColorStop(0, '#2D3748');
            bezelGrad.addColorStop(0.5, '#4A5568');
            bezelGrad.addColorStop(1, '#2D3748');
            ctx.fillStyle = bezelGrad;
            ctx.beginPath();
            ctx.roundRect(monitorPos.x - 36 * s, monitorPos.y - 26 * s, 72 * s, 34 * s, 4);
            ctx.fill();

            // === HOLOGRAPHIC GLASS DISPLAY ===
            const screenX = monitorPos.x - 32 * s;
            const screenY = monitorPos.y - 22 * s;
            const screenW = 64 * s;
            const screenH = 28 * s;

            // Glass Background (Multi-layer transparency)
            const glassGrad = ctx.createLinearGradient(screenX, screenY, screenX, screenY + screenH);
            glassGrad.addColorStop(0, 'rgba(99, 179, 237, 0.35)');
            glassGrad.addColorStop(0.5, 'rgba(129, 199, 245, 0.25)');
            glassGrad.addColorStop(1, 'rgba(99, 179, 237, 0.35)');

            // Outer glow
            ctx.shadowColor = '#63B3ED';
            ctx.shadowBlur = 20;
            ctx.fillStyle = glassGrad;
            ctx.beginPath();
            ctx.roundRect(screenX, screenY, screenW, screenH, 3);
            ctx.fill();
            ctx.shadowBlur = 0;

            // Glass border (glowing edge)
            ctx.strokeStyle = 'rgba(144, 205, 244, 0.8)';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Inner highlight (top edge light reflection)
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(screenX + 5, screenY + 2);
            ctx.lineTo(screenX + screenW - 5, screenY + 2);
            ctx.stroke();

            // === UI CONTENT ===
            // "POS" Label with glow
            ctx.fillStyle = '#FFFFFF';
            ctx.shadowColor = '#63B3ED';
            ctx.shadowBlur = 8;
            ctx.font = 'bold 11px Inter, sans-serif';
            ctx.fillText('POS', screenX + 5, screenY + 14);
            ctx.shadowBlur = 0;

            // Separator line
            ctx.fillStyle = 'rgba(255,255,255,0.5)';
            ctx.fillRect(screenX + 5, screenY + 18, screenW - 10, 1);

            // Data rows (animated scan effect)
            const scanOffset = (state.clock % 60) / 60;
            ctx.fillStyle = 'rgba(255,255,255,0.7)';
            ctx.fillRect(screenX + 8, screenY + 22, 35 * s * (0.7 + scanOffset * 0.3), 2);
            ctx.fillStyle = 'rgba(255,255,255,0.5)';
            ctx.fillRect(screenX + 8, screenY + 26, 28 * s, 2);
            ctx.fillStyle = 'rgba(255,255,255,0.4)';
            ctx.fillRect(screenX + 8, screenY + 30, 20 * s, 2);

            // Price/Total (Right aligned)
            ctx.fillStyle = '#48BB78';
            ctx.font = 'bold 10px monospace';
            ctx.textAlign = 'right';
            ctx.fillText('₹1,250', screenX + screenW - 8, screenY + 28);
            ctx.textAlign = 'left';

            // Barcode icon
            ctx.fillStyle = 'rgba(255,255,255,0.6)';
            for (let i = 0; i < 6; i++) {
                const bw = (i % 2 === 0) ? 2 : 1;
                ctx.fillRect(screenX + screenW - 35 + i * 4, screenY + 8, bw, 8);
            }

            // === FLOATING HOLOGRAPHIC LABEL ===
            const labelY = monitorPos.y - 38 * s;

            // Floating "POS" tag
            ctx.fillStyle = 'rgba(26, 32, 44, 0.85)';
            ctx.shadowColor = 'rgba(0,0,0,0.3)';
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.roundRect(monitorPos.x - 18 * s, labelY, 36 * s, 12 * s, 3);
            ctx.fill();
            ctx.shadowBlur = 0;

            ctx.fillStyle = '#FFF';
            ctx.font = 'bold 9px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('POS', monitorPos.x, labelY + 9 * s);
            ctx.textAlign = 'left';

            // Connection line (dotted)
            ctx.strokeStyle = 'rgba(99, 179, 237, 0.5)';
            ctx.setLineDash([2, 3]);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(monitorPos.x, labelY + 12 * s);
            ctx.lineTo(monitorPos.x, screenY);
            ctx.stroke();
            ctx.setLineDash([]);
        };

        // Payment Terminal
        const drawPaymentTerminal = (x, y, z) => {
            // Pole
            drawCylinder(x, y, z, 4, 30, '#1A202C');

            // Terminal Head
            drawRoundedBox(x - 8, y - 8, z + 30, 16, 16, 10, 3, '#2D3748', '#4A5568');

            // Screen
            const pos = toIso(x, y, z + 42);
            ctx.fillStyle = '#4FD1C5';
            ctx.beginPath();
            ctx.ellipse(pos.x, pos.y, 6 * config.scale, 4 * config.scale, 0, 0, Math.PI * 2);
            ctx.fill();

            // Signal waves during payment
            if (state.transaction.state === 'PAYMENT') {
                ctx.strokeStyle = palette.uiGlow;
                ctx.lineWidth = 1.5;
                for (let i = 1; i <= 3; i++) {
                    ctx.beginPath();
                    ctx.arc(pos.x + 10 * config.scale, pos.y - 5, i * 5, -0.8, 0.8);
                    ctx.stroke();
                }
            }
        };

        // Color helper
        const shadeColor = (col, amt) => {
            if (col[0] !== '#') return col;
            let c = col.slice(1);
            let num = parseInt(c, 16);
            let r = Math.min(255, Math.max(0, (num >> 16) + amt));
            let g = Math.min(255, Math.max(0, ((num >> 8) & 0xFF) + amt));
            let b = Math.min(255, Math.max(0, (num & 0xFF) + amt));
            return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        };

        // --- CUSTOMER CLASS ---
        class Customer {
            constructor(id) {
                this.id = id;
                this.x = -200 - (id * 55);
                this.y = 50;
                this.targetX = 10 - (id * 50);
                this.skinIdx = Math.floor(Math.random() * 4);
                this.hairIdx = Math.floor(Math.random() * 4);
                this.shirtColor = palette.shirts[id % palette.shirts.length];
                this.pantsColor = palette.pants[id % palette.pants.length];
                this.walking = false;
                this.walkCycle = 0;
            }

            update() {
                const dx = this.targetX - this.x;
                if (Math.abs(dx) > 2) {
                    this.x += 1.8;
                    this.walking = true;
                    this.walkCycle += 0.15;
                } else {
                    this.x = this.targetX;
                    this.walking = false;
                }
            }
        }

        // Initialize customers
        for (let i = 0; i < 4; i++) {
            state.customers.push(new Customer(i));
        }

        // --- RENDER LOOP ---
        const render = () => {
            state.clock++;

            // Resize handling
            if (canvas.width !== canvas.offsetWidth || canvas.height !== canvas.offsetHeight) {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
            }

            // Update center position
            config.centerX = canvas.width / 2;
            config.centerY = canvas.height / 2 + 80;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 1. BACKGROUND (Gradient Floor)
            const floorGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            floorGrad.addColorStop(0, palette.floorHighlight);
            floorGrad.addColorStop(1, palette.floor);
            ctx.fillStyle = floorGrad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Wall (Left perspective)
            ctx.fillStyle = palette.wall;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(config.centerX - 100, config.centerY - 180);
            ctx.lineTo(config.centerX - 100, config.centerY + 100);
            ctx.lineTo(0, canvas.height);
            ctx.closePath();
            ctx.fill();

            // Entrance Arch
            ctx.fillStyle = palette.counterDark;
            ctx.beginPath();
            ctx.roundRect(30, 60, 90, 180, [0, 40, 40, 0]);
            ctx.fill();
            ctx.fillStyle = '#FFF';
            ctx.font = 'bold 22px Inter, sans-serif';
            ctx.fillText('(0:)', 50, 120);

            // 2. STATE LOGIC
            state.transaction.timer++;
            const activeC = state.customers[0];

            switch (state.transaction.state) {
                case 'WAITING':
                    if (activeC && activeC.x >= activeC.targetX - 5) {
                        state.transaction.state = 'SCANNING';
                        state.transaction.timer = 0;
                    }
                    break;
                case 'SCANNING':
                    if (state.transaction.timer > 60) {
                        state.transaction.state = 'BILLING';
                        state.transaction.timer = 0;
                        state.bill.visible = true;
                        state.bill.height = 0;
                    }
                    break;
                case 'BILLING':
                    if (state.bill.height < 20) state.bill.height += 0.8;
                    if (state.transaction.timer > 50) {
                        state.transaction.state = 'PAYMENT';
                        state.transaction.timer = 0;
                    }
                    break;
                case 'PAYMENT':
                    if (state.transaction.timer > 60) {
                        state.transaction.state = 'EXIT';
                        state.bill.visible = false;
                        activeC.targetX = 350;
                        setStats(p => ({ ...p, customers: p.customers + 1 }));
                    }
                    break;
                case 'EXIT':
                    if (activeC.x > 300) {
                        const old = state.customers.shift();
                        old.x = -250;
                        old.targetX = 10 - (3 * 50);
                        state.customers.push(old);
                        state.customers.forEach((c, i) => c.targetX = 10 - (i * 50));
                        state.transaction.state = 'WAITING';
                    }
                    break;
            }

            // 3. DRAW SCENE (Back to Front)

            // Environment Props
            drawPlant(-120, 100);
            drawShelves(120, -120, 0);

            // Shopkeeper (Behind Counter)
            drawShadow(55, -30, 16);
            drawCharacter(55, -30, 0, 1, 0, '#63B3ED', '#2D3748', 'FRONT', false, 0, true);

            // Counter & POS
            drawCurvedCounter(60, -35, 0, 100, 35, 35);
            drawPOSSystem(80, -45, 35);
            drawPaymentTerminal(40, 15, 0);

            // Bill Animation
            if (state.bill.visible) {
                const billPos = toIso(75, -25, 40);
                ctx.fillStyle = '#FFF';
                ctx.shadowColor = 'rgba(0,0,0,0.2)';
                ctx.shadowBlur = 5;
                ctx.fillRect(billPos.x, billPos.y - state.bill.height * config.scale, 8 * config.scale, state.bill.height * config.scale);
                ctx.shadowBlur = 0;
            }

            // Customers (Sorted)
            const sortedCustomers = [...state.customers].sort((a, b) => (a.y + a.x) - (b.y + b.x));
            sortedCustomers.forEach(c => {
                c.update();
                drawShadow(c.x, c.y, 16);
                drawCart(c.x, c.y);
                drawCharacter(c.x, c.y, 0, c.skinIdx, c.hairIdx, c.shirtColor, c.pantsColor, 'RIGHT', c.walking, c.walkCycle, false);
            });

            // 4. UI OVERLAY
            ctx.fillStyle = 'rgba(255,255,255,0.85)';
            ctx.font = '600 12px Inter, sans-serif';
            ctx.fillText('WEDNESDAY, FEB 4, 2026', canvas.width - 180, 35);

            ctx.fillStyle = '#FFF';
            ctx.shadowColor = palette.uiGlow;
            ctx.shadowBlur = 10;
            ctx.font = '600 16px Inter, sans-serif';
            ctx.fillText('15:05:50 IST', canvas.width - 140, 55);
            ctx.shadowBlur = 0;

            ctx.fillStyle = 'rgba(255,255,255,0.5)';
            ctx.font = '10px Inter, sans-serif';
            ctx.fillText('TEOLCK', canvas.width - 100, 75);

            animationFrameId = requestAnimationFrame(render);
        };

        render();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="retail-checkout-container" style={{ background: 'linear-gradient(135deg, #E8ECF4 0%, #D4DCF0 100%)' }}>
            <canvas ref={canvasRef} className="retail-checkout-canvas" />
        </div>
    );
};

export default RetailCheckoutAnimation;
