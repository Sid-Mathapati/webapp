import React from 'react';
import './LogoCarousel.css';

const LogoCarousel = () => {
    return (
        <section className="logo-carousel-section">
            <h3 className="logo-carousel-title">Trusted by Leading Brands</h3>
            <div className="logo-carousel-container">
                <div className="logo-carousel-track">
                    {/* Duplicate images to create seamless infinite scroll */}
                    <img src="images/client-logos.png" alt="Client Logos" className="logo-strip" />
                    <img src="images/client-logos.png" alt="Client Logos" className="logo-strip" />
                </div>
            </div>
        </section>
    );
};

export default LogoCarousel;
