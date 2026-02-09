import React, { useState } from 'react';
import './Platform.css';
import RetailCheckoutAnimation from '../Animations/RetailCheckoutAnimation';
import RestaurantAnimation from '../Animations/RestaurantAnimation';

// Feature pills data
const features = [
    { icon: '🍽️', label: 'Table Management' },
    { icon: '💳', label: 'POS Billing' },
    { icon: '📦', label: 'Inventory Control' },
    { icon: '👥', label: 'Customer Management' },
    { icon: '📊', label: 'Reports & Analytics' },
    { icon: '🏭', label: 'Manufacturing' },
];

// Legend items
const legendItems = [
    { color: 'warehouse', label: 'Restaurants & Cafes' },
    { color: 'restaurant', label: 'Retail Stores' },
    { color: 'delivery', label: 'Manufacturing' },
    { color: 'analytics', label: 'Administration' },
];

const Platform = () => {
    const [activeAnimation, setActiveAnimation] = useState('retail');

    return (
        <section className="platform" id="platform">
            <div className="platform-container">
                {/* Section Header */}
                <div className="platform-header">
                    <h2 className="platform-title">Your Complete Business Ecosystem. One Platform.</h2>
                    <p className="platform-subtitle">
                        From <span className="highlight">billing to inventory</span> —
                        manage every aspect of your business with real-time visibility and control.
                    </p>
                    {/* Animation Toggle */}
                    <div className="animation-toggle" style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '15px' }}>
                        <button
                            onClick={() => setActiveAnimation('retail')}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '20px',
                                background: activeAnimation === 'retail' ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'rgba(255,255,255,0.1)',
                                color: '#fff',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '500',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            🛒 Retail
                        </button>
                        <button
                            onClick={() => setActiveAnimation('restaurant')}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '20px',
                                background: activeAnimation === 'restaurant' ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'rgba(255,255,255,0.1)',
                                color: '#fff',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '500',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            🍽️ Restaurant
                        </button>
                    </div>
                </div>

                {/* Animation Visualization */}
                <div className="platform-visual">
                    {activeAnimation === 'restaurant' ? (
                        <RestaurantAnimation />
                    ) : (
                        <RetailCheckoutAnimation />
                    )}
                </div>

                {/* Feature Pills */}
                <div className="platform-features">
                    {features.map((feature, index) => (
                        <div key={index} className="platform-feature-pill">
                            <span className="platform-feature-icon">{feature.icon}</span>
                            <span>{feature.label}</span>
                        </div>
                    ))}
                </div>

                {/* Legend */}
                <div className="platform-legend">
                    {legendItems.map((item, index) => (
                        <div key={index} className="legend-item">
                            <span className={`legend-dot ${item.color}`}></span>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Platform;

