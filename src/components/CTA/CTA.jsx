import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CTA.css';

const benefits = [
    { icon: '✓', text: 'No credit card required' },
    { icon: '✓', text: '15 days full access' },
    { icon: '✓', text: 'Free onboarding support' },
    { icon: '✓', text: 'Cancel anytime' },
];

const CTA = () => {
    const navigate = useNavigate();
    return (
        <section className="cta" id="cta">
            {/* Animated Background Elements */}
            <div className="cta-bg-pattern"></div>
            <div className="cta-glow left"></div>
            <div className="cta-glow right"></div>

            <div className="cta-container">
                <span className="cta-badge">🎁 LIMITED TIME OFFER</span>

                <h2 className="cta-title">
                    Start Your <span className="highlight">15-Day Free Trial</span> Today
                </h2>

                <p className="cta-subtitle">
                    Join 500+ businesses already using StoreZen to streamline their operations.
                    Get started in minutes with our easy setup wizard.
                </p>

                <div className="cta-benefits">
                    {benefits.map((benefit, index) => (
                        <span key={index} className="cta-benefit">
                            <span className="benefit-icon">{benefit.icon}</span>
                            {benefit.text}
                        </span>
                    ))}
                </div>

                <div className="cta-buttons">
                    <button className="cta-button primary" onClick={() => navigate('/talk-to-us')}>
                        Start Free Trial
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button className="cta-button secondary" onClick={() => navigate('/talk-to-us')}>
                        Book a Demo
                    </button>
                </div>

                <p className="cta-note">
                    💬 Questions? <span role="button" onClick={() => navigate('/talk-to-us')} style={{ cursor: 'pointer', textDecoration: 'underline', color: 'var(--color-primary)' }}>Talk to our team</span>
                </p>
            </div>
        </section>
    );
};

export default CTA;
