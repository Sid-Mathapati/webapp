import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

// Industry solutions with illustrations
const industrySolutions = [
    {
        icon: '🍽️',
        title: 'For Restaurants & Cafes',
        description: 'Complete restaurant management with table matrix, live orders, waiter console, and KOT management. Perfect for dine-in, takeaway, and delivery.',
        features: ['Table Management', 'KOT System', 'Waiter App', 'Menu Builder'],
        image: '/images/illustrations/restaurant-management.png',
        href: '/industries/restaurants',
        color: '#E85454',
    },
    {
        icon: '🏭',
        title: 'For Manufacturing',
        description: 'Manage raw materials, recipes, production runs, and finished goods tracking. Full production lifecycle management.',
        features: ['Bill of Materials', 'Production Tracking', 'Quality Control', 'Batch Management'],
        image: '/images/illustrations/manufacturing.png',
        href: '/industries/manufacturing',
        color: '#3B82F6',
    },
    {
        icon: '👥',
        title: 'For Customer Loyalty',
        description: 'Build lasting relationships with your customers through loyalty programs, purchase history, and targeted promotions.',
        features: ['Loyalty Points', 'Purchase History', 'Customer Groups', 'SMS/Email Marketing'],
        image: '/images/illustrations/customer-management.png',
        href: '/features/customers',
        color: '#22C55E',
    },
];

const Solutions = () => {
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
            { threshold: 0.15 }
        );

        const cards = sectionRef.current?.querySelectorAll('.industry-card');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="solutions" id="solutions" ref={sectionRef}>
            <div className="solutions-container">
                {/* Section Header */}
                <div className="solutions-header">
                    <span className="section-badge">🎯 INDUSTRY SOLUTIONS</span>
                    <h2 className="solutions-title">
                        Built for <span className="highlight">Every Industry</span>
                    </h2>
                    <p className="solutions-subtitle">
                        Whether you run a restaurant, retail store, or manufacturing unit,
                        StoreZen adapts to your unique business needs.
                    </p>
                </div>

                {/* Industry Cards Grid */}
                <div className="industry-grid">
                    {industrySolutions.map((solution, index) => (
                        <div
                            key={index}
                            className="industry-card animate-on-scroll"
                            style={{ '--accent-color': solution.color }}
                        >
                            <div className="industry-image">
                                <img
                                    src={solution.image}
                                    alt={solution.title}
                                    loading="lazy"
                                />
                            </div>
                            <div className="industry-content">
                                <span className="industry-icon">{solution.icon}</span>
                                <h3 className="industry-title">{solution.title}</h3>
                                <p className="industry-description">{solution.description}</p>

                                <div className="industry-features">
                                    {solution.features.map((feature, fIndex) => (
                                        <span key={fIndex} className="industry-feature">
                                            ✓ {feature}
                                        </span>
                                    ))}
                                </div>

                                <Link to={solution.href} className="industry-link">
                                    Explore Solution
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
