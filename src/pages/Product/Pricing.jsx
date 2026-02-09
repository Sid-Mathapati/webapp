import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Pages.css';

const pricingPlans = [
    {
        name: 'Starter',
        description: 'Perfect for small businesses getting started',
        price: 'Free Trial',
        duration: '15 Days',
        features: [
            { name: 'POS & Billing', included: true },
            { name: 'Inventory Management', included: true },
            { name: 'Customer Database', included: true },
            { name: 'Basic Reports', included: true },
            { name: 'Email Support', included: true },
            { name: 'Multi-location', included: false },
            { name: 'Advanced Analytics', included: false },
            { name: 'Custom Features', included: false },
        ],
        cta: 'Start Free Trial',
        popular: false,
    },
    {
        name: 'Growth',
        description: 'For growing businesses with advanced needs',
        price: 'Custom',
        duration: 'Per Month',
        features: [
            { name: 'POS & Billing', included: true },
            { name: 'Inventory Management', included: true },
            { name: 'Customer Database', included: true },
            { name: 'Advanced Reports', included: true },
            { name: '24/7 Priority Support', included: true },
            { name: 'Multi-location (up to 5)', included: true },
            { name: 'Advanced Analytics', included: true },
            { name: 'Custom Features', included: false },
        ],
        cta: 'Book A Demo',
        popular: true,
    },
    {
        name: 'Enterprise',
        description: 'For large businesses with custom requirements',
        price: 'Custom',
        duration: 'Per Month',
        features: [
            { name: 'POS & Billing', included: true },
            { name: 'Inventory Management', included: true },
            { name: 'Customer Database', included: true },
            { name: 'Custom Reports', included: true },
            { name: 'Dedicated Account Manager', included: true },
            { name: 'Unlimited Locations', included: true },
            { name: 'Advanced Analytics', included: true },
            { name: 'Custom Feature Development', included: true },
        ],
        cta: 'Contact Sales',
        popular: false,
    },
];

const Pricing = () => {
    const navigate = useNavigate();
    return (
        <div className="page-container pricing-page">
            <section className="page-hero">
                <h1>Simple, Transparent Pricing</h1>
                <p>Start with a 15-day free trial. No credit card required.</p>
            </section>

            <div className="pricing-grid">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                    >
                        {plan.popular && (
                            <div className="popular-badge">🔥 POPULAR</div>
                        )}
                        <div className="pricing-header">
                            <h3 className="pricing-name">{plan.name}</h3>
                            <p className="pricing-description">{plan.description}</p>
                        </div>
                        <div className="pricing-price">
                            <span className="price-value">{plan.price}</span>
                            <span className="price-duration">{plan.duration}</span>
                        </div>
                        <ul className="pricing-features">
                            {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className={feature.included ? 'included' : 'excluded'}>
                                    <span className="feature-check">
                                        {feature.included ? '✓' : '—'}
                                    </span>
                                    {feature.name}
                                </li>
                            ))}
                        </ul>
                        <button
                            className={`pricing-cta ${plan.popular ? 'primary' : 'outline'}`}
                            onClick={() => navigate('/talk-to-us')}
                        >
                            {plan.cta}
                        </button>
                    </div>
                ))}
            </div>

            <section className="pricing-faq">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-grid">
                    <div className="faq-item">
                        <h4>What happens after the free trial?</h4>
                        <p>After 15 days, you can choose a plan that fits your needs. No automatic charges.</p>
                    </div>
                    <div className="faq-item">
                        <h4>Can I change plans anytime?</h4>
                        <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
                    </div>
                    <div className="faq-item">
                        <h4>Do you offer discounts for annual billing?</h4>
                        <p>Yes, annual subscriptions come with a 20% discount compared to monthly billing.</p>
                    </div>
                    <div className="faq-item">
                        <h4>What payment methods do you accept?</h4>
                        <p>We accept all major credit cards, UPI, net banking, and bank transfers.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
