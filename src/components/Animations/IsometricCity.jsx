import React, { useEffect, useRef } from 'react';
import './IsometricCity.css';

/**
 * IsometricCity Component
 * SVG-based isometric city visualization for inventory/restaurant management
 * Similar to ZenDMS style with buildings, warehouses, trucks
 */
const IsometricCity = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Add animation classes after mount
        const elements = containerRef.current?.querySelectorAll('.animate-element');
        elements?.forEach((el, i) => {
            el.style.animationDelay = `${i * 0.1}s`;
        });
    }, []);

    return (
        <div className="isometric-city" ref={containerRef}>
            <svg
                viewBox="0 0 800 500"
                xmlns="http://www.w3.org/2000/svg"
                className="isometric-svg"
            >
                {/* Definitions */}
                <defs>
                    {/* Gradients */}
                    <linearGradient id="groundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F5F0EB" />
                        <stop offset="100%" stopColor="#EDE5DC" />
                    </linearGradient>

                    <linearGradient id="buildingLight" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#F0EBE5" />
                    </linearGradient>

                    <linearGradient id="buildingSide" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#E8E0D8" />
                        <stop offset="100%" stopColor="#D8D0C8" />
                    </linearGradient>

                    <linearGradient id="roofGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#E5DDD5" />
                        <stop offset="100%" stopColor="#F0EBE5" />
                    </linearGradient>

                    <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D8D0C5" />
                        <stop offset="100%" stopColor="#C8C0B5" />
                    </linearGradient>

                    {/* Shadow filter */}
                    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#00000015" />
                    </filter>

                    {/* Glow for active elements */}
                    <filter id="activeGlow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Background */}
                <rect width="800" height="500" fill="#FAF7F2" />

                {/* Roads */}
                <g className="roads">
                    {/* Main curved road */}
                    <path
                        d="M 50 400 Q 200 380 350 350 Q 500 320 650 280 Q 750 250 800 220"
                        fill="none"
                        stroke="url(#roadGradient)"
                        strokeWidth="35"
                        strokeLinecap="round"
                    />
                    {/* Secondary road */}
                    <path
                        d="M 400 500 Q 380 400 420 300 Q 450 200 500 100"
                        fill="none"
                        stroke="url(#roadGradient)"
                        strokeWidth="30"
                        strokeLinecap="round"
                    />
                </g>

                {/* === WAREHOUSE (Left) === */}
                <g className="warehouse animate-element" filter="url(#softShadow)" transform="translate(60, 260)">
                    {/* Main building base */}
                    <path d="M 0 60 L 80 20 L 180 70 L 100 110 Z" fill="url(#roofGradient)" />
                    <path d="M 0 60 L 0 120 L 100 160 L 100 110 Z" fill="url(#buildingSide)" />
                    <path d="M 100 110 L 100 160 L 180 120 L 180 70 Z" fill="url(#buildingLight)" />

                    {/* Warehouse extension */}
                    <path d="M 100 50 L 150 30 L 210 55 L 160 75 Z" fill="url(#roofGradient)" />
                    <path d="M 100 50 L 100 95 L 160 115 L 160 75 Z" fill="url(#buildingSide)" />
                    <path d="M 160 75 L 160 115 L 210 95 L 210 55 Z" fill="url(#buildingLight)" />

                    {/* Loading dock */}
                    <rect x="20" y="85" width="30" height="25" fill="#D0C8C0" rx="2" />
                    <rect x="60" y="85" width="30" height="25" fill="#D0C8C0" rx="2" />

                    {/* Roof details */}
                    <path d="M 30 45 L 50 35 L 50 50 L 30 60 Z" fill="#E0D8D0" />
                    <circle cx="140" cy="40" r="8" fill="#E0D8D0" />
                </g>

                {/* === RESTAURANT (Center-Bottom) === */}
                <g className="restaurant animate-element" filter="url(#softShadow)" transform="translate(280, 320)">
                    {/* Main building */}
                    <path d="M 0 40 L 60 10 L 140 45 L 80 75 Z" fill="url(#roofGradient)" />
                    <path d="M 0 40 L 0 100 L 80 130 L 80 75 Z" fill="url(#buildingSide)" />
                    <path d="M 80 75 L 80 130 L 140 100 L 140 45 Z" fill="url(#buildingLight)" />

                    {/* Kitchen extension */}
                    <path d="M 80 60 L 120 45 L 170 65 L 130 80 Z" fill="url(#roofGradient)" />
                    <path d="M 80 60 L 80 95 L 130 110 L 130 80 Z" fill="url(#buildingSide)" />
                    <path d="M 130 80 L 130 110 L 170 95 L 170 65 Z" fill="url(#buildingLight)" />

                    {/* Windows */}
                    <rect x="15" y="55" width="20" height="15" fill="#8B8580" rx="1" opacity="0.6" />
                    <rect x="45" y="55" width="20" height="15" fill="#8B8580" rx="1" opacity="0.6" />
                    <rect x="90" y="75" width="15" height="12" fill="#8B8580" rx="1" opacity="0.6" />

                    {/* Sign */}
                    <rect x="25" y="40" width="35" height="8" fill="#E85D04" rx="2" />

                    {/* Outdoor seating area */}
                    <ellipse cx="20" cy="115" rx="15" ry="8" fill="#D8D0C5" />
                    <line x1="20" y1="115" x2="20" y2="100" stroke="#C8C0B5" strokeWidth="2" />
                </g>

                {/* === OFFICE BUILDING (Right) === */}
                <g className="office animate-element" filter="url(#softShadow)" transform="translate(550, 150)">
                    {/* Tall building */}
                    <path d="M 0 100 L 40 80 L 90 100 L 50 120 Z" fill="url(#roofGradient)" />
                    <path d="M 0 100 L 0 200 L 50 220 L 50 120 Z" fill="url(#buildingSide)" />
                    <path d="M 50 120 L 50 220 L 90 200 L 90 100 Z" fill="url(#buildingLight)" />

                    {/* Windows grid */}
                    {[0, 1, 2, 3, 4].map((row) => (
                        <g key={row}>
                            <rect x="10" y={115 + row * 18} width="10" height="8" fill="#8B8580" opacity="0.5" />
                            <rect x="25" y={115 + row * 18} width="10" height="8" fill="#8B8580" opacity="0.5" />
                            <rect x="55" y={115 + row * 18} width="10" height="8" fill="#8B8580" opacity="0.5" />
                            <rect x="70" y={115 + row * 18} width="10" height="8" fill="#8B8580" opacity="0.5" />
                        </g>
                    ))}

                    {/* Roof structure */}
                    <rect x="35" y="70" width="20" height="20" fill="#E0D8D0" rx="2" />
                </g>

                {/* === SMALL STORE (Right-Bottom) === */}
                <g className="store animate-element" filter="url(#softShadow)" transform="translate(620, 300)">
                    <path d="M 0 30 L 35 15 L 75 33 L 40 48 Z" fill="url(#roofGradient)" />
                    <path d="M 0 30 L 0 70 L 40 85 L 40 48 Z" fill="url(#buildingSide)" />
                    <path d="M 40 48 L 40 85 L 75 70 L 75 33 Z" fill="url(#buildingLight)" />

                    {/* Storefront */}
                    <rect x="8" y="42" width="25" height="18" fill="#A09890" rx="2" />
                    <rect x="45" y="50" width="20" height="15" fill="#A09890" rx="2" />
                </g>

                {/* === STORAGE UNITS === */}
                <g className="storage animate-element" filter="url(#softShadow)" transform="translate(480, 280)">
                    {/* Storage container 1 */}
                    <path d="M 0 20 L 25 10 L 55 22 L 30 32 Z" fill="#E0D8D0" />
                    <path d="M 0 20 L 0 40 L 30 50 L 30 32 Z" fill="#D0C8C0" />
                    <path d="M 30 32 L 30 50 L 55 40 L 55 22 Z" fill="#E8E0D8" />

                    {/* Storage container 2 */}
                    <path d="M 35 15 L 60 5 L 90 17 L 65 27 Z" fill="#E0D8D0" />
                    <path d="M 35 15 L 35 35 L 65 45 L 65 27 Z" fill="#D0C8C0" />
                    <path d="M 65 27 L 65 45 L 90 35 L 90 17 Z" fill="#E8E0D8" />
                </g>

                {/* === DELIVERY TRUCK === */}
                <g className="truck animate-element truck-animation" transform="translate(200, 370)">
                    {/* Truck body */}
                    <path d="M 0 15 L 20 8 L 50 18 L 30 25 Z" fill="#E8E0D8" />
                    <path d="M 0 15 L 0 30 L 30 37 L 30 25 Z" fill="#D8D0C8" />
                    <path d="M 30 25 L 30 37 L 50 30 L 50 18 Z" fill="#F0EBE5" />

                    {/* Cab */}
                    <path d="M 50 20 L 62 15 L 75 20 L 63 25 Z" fill="#E85D04" />
                    <path d="M 50 20 L 50 32 L 63 37 L 63 25 Z" fill="#D95200" />
                    <path d="M 63 25 L 63 37 L 75 32 L 75 20 Z" fill="#FF8C42" />

                    {/* Wheels */}
                    <ellipse cx="20" cy="38" rx="6" ry="3" fill="#4A4540" />
                    <ellipse cx="60" cy="38" rx="6" ry="3" fill="#4A4540" />
                </g>

                {/* === FORKLIFT === */}
                <g className="forklift animate-element" transform="translate(130, 310)">
                    <path d="M 0 12 L 12 7 L 25 12 L 13 17 Z" fill="#FFB366" />
                    <path d="M 0 12 L 0 22 L 13 27 L 13 17 Z" fill="#E85D04" />
                    <path d="M 13 17 L 13 27 L 25 22 L 25 12 Z" fill="#FF8C42" />
                    {/* Fork */}
                    <rect x="-5" y="20" width="15" height="2" fill="#A09890" />
                    <ellipse cx="10" cy="28" rx="4" ry="2" fill="#4A4540" />
                </g>

                {/* === WIND TURBINES === */}
                <g className="turbine animate-element" transform="translate(380, 140)">
                    <line x1="0" y1="0" x2="0" y2="60" stroke="#D0C8C0" strokeWidth="3" />
                    <g className="turbine-blades" style={{ transformOrigin: '0px 0px' }}>
                        <line x1="0" y1="0" x2="0" y2="-25" stroke="#E8E0D8" strokeWidth="2" />
                        <line x1="0" y1="0" x2="22" y2="12" stroke="#E8E0D8" strokeWidth="2" />
                        <line x1="0" y1="0" x2="-22" y2="12" stroke="#E8E0D8" strokeWidth="2" />
                    </g>
                    <circle cx="0" cy="0" r="4" fill="#D0C8C0" />
                </g>

                <g className="turbine animate-element" transform="translate(420, 120)">
                    <line x1="0" y1="0" x2="0" y2="50" stroke="#D0C8C0" strokeWidth="2" />
                    <g className="turbine-blades" style={{ transformOrigin: '0px 0px', animationDelay: '0.5s' }}>
                        <line x1="0" y1="0" x2="0" y2="-20" stroke="#E8E0D8" strokeWidth="2" />
                        <line x1="0" y1="0" x2="17" y2="10" stroke="#E8E0D8" strokeWidth="2" />
                        <line x1="0" y1="0" x2="-17" y2="10" stroke="#E8E0D8" strokeWidth="2" />
                    </g>
                    <circle cx="0" cy="0" r="3" fill="#D0C8C0" />
                </g>

                {/* === TREES === */}
                <g className="trees">
                    {/* Tree 1 */}
                    <g transform="translate(520, 380)">
                        <ellipse cx="0" cy="0" rx="12" ry="8" fill="#B8B0A5" />
                        <line x1="0" y1="8" x2="0" y2="20" stroke="#A09890" strokeWidth="3" />
                    </g>
                    {/* Tree 2 */}
                    <g transform="translate(700, 350)">
                        <ellipse cx="0" cy="0" rx="10" ry="6" fill="#B8B0A5" />
                        <line x1="0" y1="6" x2="0" y2="15" stroke="#A09890" strokeWidth="2" />
                    </g>
                    {/* Tree 3 */}
                    <g transform="translate(680, 390)">
                        <ellipse cx="0" cy="0" rx="8" ry="5" fill="#C0B8AD" />
                        <line x1="0" y1="5" x2="0" y2="12" stroke="#A09890" strokeWidth="2" />
                    </g>
                    {/* Tree 4 */}
                    <g transform="translate(180, 400)">
                        <ellipse cx="0" cy="0" rx="10" ry="7" fill="#B8B0A5" />
                        <line x1="0" y1="7" x2="0" y2="16" stroke="#A09890" strokeWidth="2" />
                    </g>
                </g>

                {/* === WATER TOWER === */}
                <g className="water-tower animate-element" transform="translate(160, 200)">
                    <ellipse cx="15" cy="0" rx="15" ry="8" fill="#E0D8D0" />
                    <path d="M 5 0 L 5 15 L 25 15 L 25 0" fill="none" stroke="#D0C8C0" strokeWidth="3" />
                    <line x1="5" y1="15" x2="5" y2="60" stroke="#C8C0B5" strokeWidth="2" />
                    <line x1="25" y1="15" x2="25" y2="60" stroke="#C8C0B5" strokeWidth="2" />
                    <line x1="10" y1="35" x2="20" y2="35" stroke="#C8C0B5" strokeWidth="1" />
                    <line x1="8" y1="50" x2="22" y2="50" stroke="#C8C0B5" strokeWidth="1" />
                </g>

                {/* === HELICOPTER PAD === */}
                <g className="helipad animate-element" transform="translate(650, 250)">
                    <ellipse cx="20" cy="12" rx="25" ry="15" fill="#D0C8C0" opacity="0.5" />
                    <text x="20" y="16" fontSize="12" fill="#A09890" textAnchor="middle" fontWeight="bold">H</text>
                </g>

                {/* === MOVING DOTS (Data Flow) === */}
                <g className="data-flow">
                    <circle className="flow-dot" r="4" fill="#E85D04">
                        <animateMotion
                            dur="8s"
                            repeatCount="indefinite"
                            path="M 100 360 Q 200 340 350 310 Q 500 280 650 240"
                        />
                    </circle>
                    <circle className="flow-dot" r="3" fill="#FF8C42">
                        <animateMotion
                            dur="6s"
                            repeatCount="indefinite"
                            path="M 400 480 Q 390 380 410 300 Q 440 200 480 120"
                            begin="2s"
                        />
                    </circle>
                    <circle className="flow-dot" r="3" fill="#E85D04">
                        <animateMotion
                            dur="10s"
                            repeatCount="indefinite"
                            path="M 150 340 Q 300 300 450 280 Q 600 250 700 220"
                            begin="4s"
                        />
                    </circle>
                </g>

                {/* === LOGO BRANDING === */}
                <g transform="translate(30, 450)">
                    <text
                        fontSize="18"
                        fontWeight="bold"
                        fill="#E85D04"
                        fontFamily="'Roboto Condensed', sans-serif"
                    >
                        Store
                    </text>
                    <text
                        x="50"
                        fontSize="18"
                        fontWeight="bold"
                        fill="#1A365D"
                        fontFamily="'Roboto Condensed', sans-serif"
                    >
                        Zen
                    </text>
                </g>
            </svg>
        </div>
    );
};

export default IsometricCity;
