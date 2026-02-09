import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LogoCarousel from '../../components/LogoCarousel/LogoCarousel';
import './InventoryManagement.css';

const InventoryManagement = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main id="main-content" className="main-content inv-dark-theme">
            {/* Hero Section */}
            <section className="inv-hero">
                <div className="inv-hero-content">
                    <h1>Smarter inventory software for modern kitchens</h1>
                    <p>Track every gram of your raw material, optimize procurement, and eliminate wastage with StoreZen's advanced MRP and stock management system.</p>
                    <button className="inv-cta-primary" onClick={() => navigate('/talk-to-us')}>
                        Get a Free Demo
                    </button>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <span style={{ color: 'var(--color-text-secondary)', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#FF7B00' }}>●</span> Real-time stock sync
                        </span>
                        <span style={{ color: 'var(--color-text-secondary)', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#FF7B00' }}>●</span> Automated reordering
                        </span>
                    </div>
                </div>
                <div className="inv-hero-image">
                    <img src="images/illustrations/inventory-management.png" alt="Smart Inventory Concept" />
                </div>
            </section>

            <LogoCarousel />

            {/* Section: Centralized stock control */}
            <section className="inv-section">
                <div className="inv-section-header">
                    <h2>Everything in sync, everywhere</h2>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>Manage multiple warehouses, central kitchens, and outlets from a single dashboard. Real-time consumption tracking ensures you never run out of stock.</p>
                </div>

                {/* Feature 1: Real-time tracking */}
                <div className="inv-feature-row">
                    <div className="inv-feature-text">
                        <h3>Automated Stock Deductions</h3>
                        <p>StoreZen automatically identifies and deducts stock for every item sold at the POS. Link your menus to recipes and watch your inventory update in real-time as orders fly out of the kitchen.</p>
                    </div>
                    <div className="inv-feature-img-container bg-amber">
                        <img src="images/illustrations/pos-billing.png" alt="POS Inventory Integration" />
                    </div>
                </div>

                {/* Feature 2: Manufacturing/MRP */}
                <div className="inv-feature-row reverse">
                    <div className="inv-feature-text">
                        <h3>Advanced Manufacturing (MRP)</h3>
                        <p>Manage raw material lots, track production batches, and monitor finished goods. Our MRP module helps you design blueprints (recipes) and track engineering costs down to the last rupee.</p>
                    </div>
                    <div className="inv-feature-img-container bg-cyan">
                        <img src="images/illustrations/manufacturing.png" alt="MRP and Manufacturing" />
                    </div>
                </div>

                {/* Feature 3: Procurement */}
                <div className="inv-feature-row">
                    <div className="inv-feature-text">
                        <h3>Seamless Procurement Lifecycle</h3>
                        <p>From generating Purchase Orders to tracking inward material lots, automate your entire supply chain. StoreZen alerts you when stocks hit reorder points and helps you manage vendor debts efficiently.</p>
                    </div>
                    <div className="inv-feature-img-container bg-indigo">
                        <img src="images/illustrations/analytics-reports.png" alt="Procurement Analytics" />
                    </div>
                </div>
            </section>

            {/* Powerful Features Grid */}
            <section className="inv-grid-section">
                <div className="inv-section-header">
                    <h2>Built for operational excellence</h2>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px' }}>Powerful tools to help you manage costs and scale your business.</p>
                </div>
                <div className="inv-features-grid">
                    <div className="inv-feature-card">
                        <div className="inv-icon-box"><img src="images/poss/kot.png" alt="Recipe BOM" /></div>
                        <h4>Recipe BOM</h4>
                        <p>Design multi-level Bill of Materials. Track raw materials and indirect costs for every menu item.</p>
                    </div>
                    <div className="inv-feature-card">
                        <div className="inv-icon-box"><img src="images/poss/taxes_discounts.png" alt="Low Stock Alerts" style={{ filter: 'hue-rotate(320deg) saturate(1.5)' }} /></div>
                        <h4>Smart Alerts</h4>
                        <p>Get instant WhatsApp or Email alerts when supplies hit their minimum reorder threshold.</p>
                    </div>
                    <div className="inv-feature-card">
                        <div className="inv-icon-box"><img src="images/poss/icon_fine_dine.png" alt="Wastage Tracking" /></div>
                        <h4>Wastage & Variance</h4>
                        <p>Record daily wastage and compare theoretical vs. actual stock to identify pilferage patterns.</p>
                    </div>
                    <div className="inv-feature-card">
                        <div className="inv-icon-box"><img src="images/poss/icon_chains.png" alt="Supplier CRM" /></div>
                        <h4>Supplier Management</h4>
                        <p>Centralize your vendor data, track payment history, and monitor delivery lead times.</p>
                    </div>
                    <div className="inv-feature-card">
                        <div className="inv-icon-box"><img src="images/poss/receipt.png" alt="Digital POs" /></div>
                        <h4>Digital POs & Inward</h4>
                        <p>Eliminate paper trials. Create, approve, and send purchase orders directly to vendor portals.</p>
                    </div>
                    <div className="inv-feature-card">
                        <div className="inv-icon-box"><img src="images/poss/multi_terminal.png" alt="Multi-outlet Sync" /></div>
                        <h4>Multi-outlet Sync</h4>
                        <p>Transfer stock between outlets and track inter-branch movements with complete audit trails.</p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ backgroundColor: 'rgba(255, 123, 0, 0.05)', padding: '100px 2rem', textAlign: 'center', borderTop: '1px solid rgba(255, 123, 0, 0.1)' }}>
                <h2 style={{ fontSize: '36px', fontWeight: '600', marginBottom: '24px' }}>Stop guessing. Start tracking.</h2>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>Join 75,000+ brands that use StoreZen to power their kitchen operations.</p>
                <button className="inv-cta-primary" onClick={() => navigate('/talk-to-us')}>
                    Schedule a Free Walkthrough
                </button>
            </section>
        </main>
    );
};

export default InventoryManagement;
