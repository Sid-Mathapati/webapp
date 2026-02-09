import React, { useEffect, useRef } from 'react';
import './Features.css';

// Feature data with illustrations
const features = [
    {
        icon: '💳',
        title: 'POS & Billing',
        description: 'Fast checkout with invoice generation, payment tracking (cash, card, UPI), and complete billing history.',
        image: '/webapp/images/illustrations/pos-billing.png',
    },
    {
        icon: '📦',
        title: 'Inventory Management',
        description: 'Track stock levels across locations, get low stock alerts, and automate reordering to never run out.',
        image: '/webapp/images/illustrations/inventory-management.png',
    },
    {
        icon: '📊',
        title: 'Reports & Analytics',
        description: 'Comprehensive business insights with sales, inventory, and customer analytics dashboards.',
        image: '/webapp/images/illustrations/analytics-reports.png',
    },
];

const Features = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = sectionRef.current?.querySelectorAll('.feature-card');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="features" id="features" ref={sectionRef}>
            <div className="features-container">
                {/* Section Header */}
                <div className="features-header">
                    <span className="section-badge">✨ SMART POS FEATURES</span>
                    <h2 className="features-title">
                        A Business POS Made for<br />
                        <span className="highlight">All Your Needs</span>
                    </h2>
                    <p className="features-subtitle">
                        A quick and easy-to-use business billing software that makes
                        managing high order volumes butter smooth
                    </p>
                </div>

                {/* Features Section - Alternating Layout like Petpooja */}
                <div className="features-alternating">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature-card animate-on-scroll ${index % 2 === 1 ? 'reverse' : ''}`}
                        >
                            <div className="feature-content">
                                <span className="feature-icon">{feature.icon}</span>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                                <a href="#" className="feature-link">
                                    Learn More
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                            <div className="feature-image">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
