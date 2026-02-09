import React, { useEffect } from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import '../../styles/Pages.css';
import '../../styles/RestaurantPage.css';

const outletData = {
    'fine-dine': {
        title: "Fine Dine POSS",
        subtitle: "Elegant management for exquisite dining experiences.",
        description: "Orchestrate your floor with precision. Manage courses, wine pairing, and tableside ordering with a POS designed for high-touch service. Ensure your VIPs get the attention they deserve with integrated guest profiling.",
        features: [
            { title: "Table Management", desc: "Visual floor plan with real-time status indicators." },
            { title: "Course Management", desc: "Fire courses to the kitchen at the perfect moment." },
            { title: "Reservation System", desc: "Integrated booking management to maximize covers." },
            { title: "Guest Profiles", desc: "Track preferences and allergies for VIP service." }
        ],
        icon: "🍷",
        iconImage: "/webapp/images/icons/outlets/fine-dine-icon.png",
        color: "#722F37",
        image: "/webapp/images/outlets/fine-dine.png"
    },
    'cafe': {
        title: "Cafe & Coffee Shop POSS",
        subtitle: "Brew success with every cup.",
        description: "Speed and customization are key. Handle complex modifier chains (soy milk, extra hot, no foam) with a tap and keep the line moving. Our system is built to handle the morning rush efficiently.",
        features: [
            { title: "Quick Modifiers", desc: "Fastest workflow for custom drink orders." },
            { title: "Label Printing", desc: "Auto-print sticky labels for cups to eliminate errors." },
            { title: "Loyalty Integration", desc: "Digital punch cards to keep regulars engaged." },
            { title: "Inventory", desc: "Track coffee beans and milk usage by the gram/ml." }
        ],
        icon: "☕",
        iconImage: "/webapp/images/icons/outlets/cafe-icon.png",
        color: "#6F4E37",
        image: "/webapp/images/outlets/cafe-shop.png"
    },
    'qsr': {
        title: "QSR & Fast Food POSS",
        subtitle: "Built for speed. Engineered for volume.",
        description: "Slash wait times and boost throughput. Our interface is optimized for minimum clicks, ensuring your team keeps up with the lunch rush without breaking a sweat.",
        features: [
            { title: "Kiosk Mode", desc: "Self-ordering kiosks to reduce queue length." },
            { title: "Kitchen Display System", desc: "Paperless workflow to speed up order prep." },
            { title: "Combo Management", desc: "Easy upselling of meals and add-ons." },
            { title: "Token Display", desc: "Automated order ready notifications for pickup." }
        ],
        icon: "🍔",
        iconImage: "/webapp/images/icons/outlets/qsr-icon.png",
        color: "#FF9933",
        image: "/webapp/images/outlets/qsr-fastfood.png"
    },
    'pizza': {
        title: "Pizza POSS Software",
        subtitle: "Manage the dough, toppings, and delivery.",
        description: "The most advanced pizza builder in the industry. Handle half-and-half, crust types, and complicated topping logic effortlessly while tracking your delivery fleet in real-time.",
        features: [
            { title: "Pizza Builder", desc: "Visual customizable half-half and toppings selector." },
            { title: "Delivery Tracking", desc: "Live driver tracking and optimized routing." },
            { title: "Third-party Integration", desc: "All your aggregator orders in one dashboard." },
            { title: "Inventory", desc: "Recipe management based on size and crust type." }
        ],
        icon: "🍕",
        iconImage: "/webapp/images/icons/outlets/pizza-icon.png",
        color: "#FF4500",
        image: "/webapp/images/outlets/pizza-outlet.png"
    },
    'bakery': {
        title: "Bakery & Confectionery POSS",
        subtitle: "Sweeten your operations.",
        description: "Manage productions, expiry dates, and pre-orders seamlessly. From daily breads to custom celebration cakes, we have the tools to ensure freshness and profitability.",
        features: [
            { title: "Shelf Life Tracking", desc: "Alerts for expiring batches to reduce waste." },
            { title: "Custom Orders", desc: "Advance booking module for birthday cakes." },
            { title: "Production Planning", desc: "Daily production sheets based on sales data." },
            { title: "Scale Integration", desc: "Direct integration with weighing scales." }
        ],
        icon: "🍰",
        iconImage: "/webapp/images/icons/outlets/bakery-icon.png",
        color: "#FF69B4",
        image: "/webapp/images/outlets/bakery-shop.png"
    },
    'cloud-kitchen': {
        title: "Cloud Kitchen Management",
        subtitle: "One kitchen, multiple brands.",
        description: "Run multiple virtual brands from a single kitchen. Centralized menu management and aggregated reporting for maximum efficiency across all your delivery channels.",
        features: [
            { title: "Multi-Brand Support", desc: "Manage different brands from one screen." },
            { title: "Aggregator Hub", desc: "Zomato, Swiggy, and direct orders in one place." },
            { title: "Food Costing", desc: "Granular cost control across all brands." },
            { title: "Centralized Reports", desc: "Combined or separate analytics for each brand." }
        ],
        icon: "☁️",
        iconImage: "/webapp/images/icons/outlets/cloud-kitchen-icon.png",
        color: "#4ECDC4",
        image: "/webapp/images/outlets/cloud-kitchen.png"
    }
};

const OutletDetail = () => {
    const navigate = useNavigate();
    const { outletType } = useParams();
    const data = outletData[outletType];

    // Scroll to top on mount or when outletType changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [outletType]);

    if (!data) {
        return <Navigate to="/poss" replace />;
    }

    return (
        <div className="page-container">
            <section className="page-hero" style={{ paddingTop: '2rem' }}>
                <div className="page-hero-content">
                    <Link to="/poss" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--color-text-secondary)',
                        marginBottom: '2rem',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                    }}>
                        <span>←</span> Back to POSS
                    </Link>

                    <div style={{ marginBottom: '1rem' }}>
                        <img
                            src={data.iconImage}
                            alt={`${data.title} Icon`}
                            style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = `<span style="font-size: 3.5rem;">${data.icon}</span>`;
                            }}
                        />
                    </div>
                    <h1 style={{ color: data.color, lineHeight: '1.2' }}>{data.title}</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', marginTop: '1rem', maxWidth: '600px' }}>
                        {data.subtitle}
                    </p>
                    <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '550px' }}>
                        {data.description}
                    </p>
                    <button className="pricing-cta primary" onClick={() => navigate('/talk-to-us')} style={{
                        marginTop: '2.5rem',
                        width: 'auto',
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        backgroundColor: data.color
                    }}>
                        Get a Free Demo
                    </button>
                </div>
                <div className="page-hero-image">
                    {/* Placeholder illustration until user uploads images */}
                    <div style={{
                        width: '80%',
                        height: '500px',
                        margin: '0 auto',
                        background: `linear-gradient(135deg, ${data.color}20 0%, rgba(255,255,255,0.05) 100%)`,
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${data.color}40`,
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={data.image}
                            alt={`${data.title} Illustration`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = `<span style="font-size: 5rem; opacity: 0.3;">${data.icon}</span>`;
                            }}
                        />
                    </div>
                </div>
            </section>

            <div className="page-content">
                <section style={{ marginBottom: '6rem' }}>
                    <div className="section-title" style={{ textAlign: 'left', marginBottom: '3rem' }}>
                        Specialized Features for <span style={{ color: data.color }}>{data.title.split(' ')[0]}</span>
                    </div>
                    <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        {data.features.map((feature, index) => (
                            <div key={index} className="feature-card" style={{
                                borderTop: `4px solid ${data.color}`,
                                background: 'var(--color-bg-card)'
                            }}>
                                <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>{feature.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="cta-section" style={{
                    textAlign: 'center',
                    padding: '5rem 2rem',
                    background: `linear-gradient(180deg, ${data.color}15 0%, transparent 100%)`,
                    borderRadius: '30px',
                    border: `1px solid ${data.color}30`
                }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Ready to optimize your operations?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', color: 'var(--color-text-secondary)' }}>
                        Join thousands of {data.title.toLowerCase()} owners who trust StoreZen.
                    </p>
                    <button className="pricing-cta primary" onClick={() => navigate('/talk-to-us')} style={{
                        width: 'auto',
                        padding: '1rem 3rem',
                        backgroundColor: data.color
                    }}>
                        Start Free Trial
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OutletDetail;
