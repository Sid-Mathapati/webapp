import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

// Rotating words for the hero title
const rotatingWords = ['Restaurants', 'Retail Stores', 'Pharmacies', 'Manufacturers', 'Jewellers'];

// Trust metrics
const trustMetrics = [
    { value: '500+', label: 'Businesses' },
    { value: '15', label: 'Days Free Trial' },
    { value: '24/7', label: 'Support' },
];

// Client logos for carousel
const clientLogos = [
    { name: 'Restaurant 1', icon: '🍽️' },
    { name: 'Retail Store', icon: '🏪' },
    { name: 'Pharmacy', icon: '💊' },
    { name: 'Jeweller', icon: '💎' },
    { name: 'Cafe', icon: '☕' },
    { name: 'Bakery', icon: '🥐' },
    { name: 'Fashion', icon: '👗' },
    { name: 'Electronics', icon: '📱' },
];

const Hero = () => {
    const navigate = useNavigate();
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Rotate words every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);

            setTimeout(() => {
                setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
                setIsAnimating(false);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero" id="hero">
            <div className="hero-container">
                {/* Left Content */}
                <div className="hero-content">
                    <span className="hero-badge">🚀 #1 Business Management Platform</span>

                    <h1 className="hero-title">
                        <span className="hero-title-line">Complete Business Management for</span>
                        <span className="hero-rotating-word">
                            <span className={`rotating-word ${isAnimating ? 'exit' : ''}`}>
                                {rotatingWords[currentWordIndex]}
                            </span>
                        </span>
                    </h1>

                    <p className="hero-subtitle">
                        Multi-tenant SaaS Platform Built for Your Industry
                    </p>

                    <p className="hero-description">
                        Manage your entire business with{' '}
                        <span className="highlight">POS billing</span>,{' '}
                        <span className="highlight">inventory control</span>, and{' '}
                        <span className="highlight">customer management</span>—plus table management
                        for restaurants and production tracking for manufacturers.
                    </p>

                    <div className="hero-cta-group">
                        <button className="hero-cta primary" onClick={() => navigate('/talk-to-us')}>
                            Start Free Trial
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button className="hero-cta secondary" onClick={() => navigate('/talk-to-us')}>
                            Book a Demo
                        </button>
                    </div>

                    {/* Trust Metrics */}
                    <div className="hero-trust">
                        <div className="trust-logos">
                            {trustMetrics.map((metric, index) => (
                                <span key={index} className="trust-logo">
                                    <strong>{metric.value}</strong> {metric.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Visual - Software Mockup */}
                <div className="hero-visual">
                    <div className="hero-mockup">
                        <img
                            src="/webapp/images/illustrations/pos-billing.png"
                            alt="StoreZen Dashboard - Business Management Software"
                            className="hero-mockup-image"
                        />
                        <div className="hero-mockup-glow"></div>
                    </div>
                </div>
            </div>

            {/* Client Logo Carousel */}
            <div className="hero-clients">
                <p className="clients-label">Trusted by 500+ businesses across industries</p>
                <div className="clients-carousel-wrapper">
                    <div className="clients-carousel">
                        {/* Duplicate logos for seamless infinite scroll */}
                        {[...clientLogos, ...clientLogos].map((client, index) => (
                            <div key={index} className="client-logo">
                                <span className="client-icon">{client.icon}</span>
                                <span className="client-name">{client.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
