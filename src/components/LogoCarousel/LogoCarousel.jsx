import React from 'react';
import './LogoCarousel.css';

const LogoCarousel = () => {
    return (
        <section className="logo-carousel-section">
            <h3 className="logo-carousel-title">Trusted by Leading Brands</h3>
            <div className="logo-carousel-container">
                <div className="logo-carousel-track">
                    {/* Reusing logos logic instead of broken image */}
                    {[
                        { name: 'Restaurant 1', icon: '🍽️' },
                        { name: 'Retail Store', icon: '🏪' },
                        { name: 'Pharmacy', icon: '💊' },
                        { name: 'Jeweller', icon: '💎' },
                        { name: 'Cafe', icon: '☕' },
                        { name: 'Bakery', icon: '🥐' },
                        { name: 'Fashion', icon: '👗' },
                        { name: 'Electronics', icon: '📱' },
                        { name: 'Restaurant 1', icon: '🍽️' },
                        { name: 'Retail Store', icon: '🏪' },
                        { name: 'Pharmacy', icon: '💊' },
                        { name: 'Jeweller', icon: '💎' },
                        { name: 'Cafe', icon: '☕' },
                        { name: 'Bakery', icon: '🥐' },
                        { name: 'Fashion', icon: '👗' },
                        { name: 'Electronics', icon: '📱' },
                    ].map((client, index) => (
                        <div key={index} className="client-logo-item" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            margin: '0 2rem',
                            fontSize: '1.2rem',
                            color: 'var(--color-text-secondary)',
                            minWidth: '150px'
                        }}>
                            <span style={{ fontSize: '2rem', marginRight: '0.5rem' }}>{client.icon}</span>
                            <span>{client.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoCarousel;
