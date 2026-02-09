import React from 'react';
import './FloatingIcons.css';

/**
 * FloatingIcons Component
 * CSS-only decorative floating icons for visual interest
 */
const FloatingIcons = () => {
    const icons = [
        { icon: '📦', delay: 0, x: '10%', y: '20%' },
        { icon: '🍴', delay: 1, x: '85%', y: '15%' },
        { icon: '📊', delay: 2, x: '15%', y: '70%' },
        { icon: '🏪', delay: 0.5, x: '80%', y: '75%' },
        { icon: '🛒', delay: 1.5, x: '50%', y: '10%' },
        { icon: '📋', delay: 2.5, x: '90%', y: '45%' },
        { icon: '🍕', delay: 3, x: '5%', y: '45%' },
        { icon: '📈', delay: 1.2, x: '70%', y: '30%' },
    ];

    return (
        <div className="floating-icons">
            {icons.map((item, index) => (
                <span
                    key={index}
                    className="floating-icon"
                    style={{
                        left: item.x,
                        top: item.y,
                        animationDelay: `${item.delay}s`,
                    }}
                >
                    {item.icon}
                </span>
            ))}
        </div>
    );
};

export default FloatingIcons;
