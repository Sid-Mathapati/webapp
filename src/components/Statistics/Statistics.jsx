import React, { useState, useEffect, useRef } from 'react';
import './Statistics.css';

// Statistics data
const stats = [
    {
        value: 15,
        suffix: '',
        label: 'Days Free Trial',
        description: 'Full access to all features, no credit card',
    },
    {
        value: 24,
        suffix: '/7',
        label: 'Dedicated Support',
        description: 'Round-the-clock customer assistance',
    },
    {
        value: 500,
        suffix: '+',
        label: 'Businesses Served',
        description: 'Trusted by growing businesses',
    },
    {
        value: 50,
        suffix: '+',
        label: 'Optional Features',
        description: 'Marketplace add-ons available instantly',
    },
    {
        value: 2,
        suffix: '',
        label: 'Weeks to Launch',
        description: 'Average implementation time',
    },
    {
        value: 99,
        suffix: '%',
        label: 'Uptime Guaranteed',
        description: 'Reliable cloud infrastructure',
    },
];

const StatItem = ({ stat, isVisible }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (isVisible && !hasAnimated.current) {
            hasAnimated.current = true;

            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                    setDisplayValue(stat.value);
                    clearInterval(timer);
                } else {
                    setDisplayValue(stat.value % 1 !== 0 ? parseFloat(current.toFixed(1)) : Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isVisible, stat.value]);

    return (
        <div className="stat-item">
            <div className="stat-value">
                {displayValue}
                {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
            </div>
            <div className="stat-content">
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
            </div>
        </div>
    );
};

const Statistics = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="statistics" id="statistics" ref={sectionRef}>
            {/* Decorative Elements */}
            <div className="statistics-decoration top-left"></div>
            <div className="statistics-decoration bottom-right"></div>

            <div className="statistics-container">
                {/* Section Header */}
                <div className="statistics-header">
                    <h2 className="statistics-title">Why Businesses Choose Us</h2>
                    <p className="statistics-subtitle">
                        Trusted by restaurants, retail stores, pharmacies, and manufacturers across India.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="statistics-grid">
                    {stats.map((stat, index) => (
                        <StatItem key={index} stat={stat} isVisible={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
