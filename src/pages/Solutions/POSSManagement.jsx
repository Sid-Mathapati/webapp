import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LogoCarousel from '../../components/LogoCarousel/LogoCarousel';
import './POSSManagement.css';

const POSSManagement = () => {
    const navigate = useNavigate();

    return (
        <main id="main-content" className="main-content poss-dark-theme">
            {/* Hero Section */}
            <section className="poss-hero">
                <div className="poss-hero-content">
                    <h1>Restaurant billing software that is 10x faster</h1>
                    <p>A 3-click billing process that is smart, efficient, and user-friendly! It's time for you to upgrade to StoreZen restaurant billing software.</p>
                    <button className="poss-cta-primary" onClick={() => navigate('/talk-to-us')}>
                        Take a free demo
                    </button>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <span style={{ color: 'var(--color-text-secondary)', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: 'var(--color-primary)' }}>●</span> 75,000+ happy customers
                        </span>
                    </div>
                </div>
                <div className="poss-hero-image">
                    <img src="images/poss/hero.png" alt="Petpooja Style POS" />
                </div>
            </section>

            <LogoCarousel />

            {/* Section: An all-rounder */}
            <section className="poss-section">
                <div className="poss-section-header">
                    <h2>An all-rounder restaurant billing software</h2>
                </div>

                {/* Feature 1 */}
                <div className="poss-feature-row">
                    <div className="poss-feature-text">
                        <h3>Customizable bill format</h3>
                        <p>Print your restaurant logo, create bill break-ups, edit customer details or add a dynamic QR code for payments right at the billing counter - everything is possible with StoreZen restaurant POS software.</p>
                    </div>
                    <div className="poss-feature-img-container bg-peach">
                        <img src="images/poss/receipt.png" alt="Customizable Bill" />
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="poss-feature-row reverse">
                    <div className="poss-feature-text">
                        <h3>Multi-terminal billing</h3>
                        <p>In need of multiple billing terminals for your different areas and menus? Don't worry! StoreZen POS lets you easily create multiple billing counters and sync them with one master station.</p>
                    </div>
                    <div className="poss-feature-img-container bg-blue">
                        <img src="images/poss/multi_terminal.png" alt="Multi-terminal" />
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="poss-feature-row">
                    <div className="poss-feature-text">
                        <h3>Station-wise KOT printing</h3>
                        <p>Got different cooking stations? Assign a unique printer to every station and send KOTs to the respective stations. Smoothly sync them all with the master POS.</p>
                    </div>
                    <div className="poss-feature-img-container bg-green">
                        <img src="images/poss/kot.png" alt="KOT Printing" />
                    </div>
                </div>

                {/* Feature 4 */}
                <div className="poss-feature-row reverse">
                    <div className="poss-feature-text">
                        <h3>Table and area management</h3>
                        <p>Big restaurants, big problems. Minimise your problems by making your area and table management simple. Configure different dine-in areas with their respective menus and customisable seating arrangements.</p>
                    </div>
                    <div className="poss-feature-img-container bg-rose">
                        <img src="images/poss/table_management.png" alt="Table Management" />
                    </div>
                </div>

                {/* Feature 5 */}
                <div className="poss-feature-row">
                    <div className="poss-feature-text">
                        <h3>Configure taxes & discounts</h3>
                        <p>Switch to a restaurant billing software that lets you easily configure and levy different taxes, update tax rates and offer discounts depending on your service types and business needs!</p>
                    </div>
                    <div className="poss-feature-img-container bg-peach">
                        <img src="images/poss/taxes_discounts.png" alt="Taxes and Discounts" />
                    </div>
                </div>
            </section>

            {/* Section: Powerful Billing Features */}
            <section className="poss-billing-features">
                <div className="poss-section-header">
                    <h2>Powerful billing features</h2>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px' }}>Advanced tools designed to make your billing counter the most efficient part of your restaurant.</p>
                </div>
                <div className="billing-features-grid">
                    <div className="billing-feature-card">
                        <div className="billing-icon-box"><img src="images/poss/taxes_discounts.png" alt="Split Billing" /></div>
                        <h4>Split Billing</h4>
                        <p>Divide bills by items, persons, or equal amounts seamlessly for large groups.</p>
                    </div>
                    <div className="billing-feature-card">
                        <div className="billing-icon-box"><img src="images/poss/icon_cloud_kitchen.png" alt="Offline Billing" /></div>
                        <h4>Offline Billing</h4>
                        <p>Bills don't wait for the internet. Keep orders moving and sync automatically when online.</p>
                    </div>
                    <div className="billing-feature-card">
                        <div className="billing-icon-box"><img src="images/poss/multi_terminal.png" alt="Multi-Pay" /></div>
                        <h4>Mixed Payments</h4>
                        <p>Accept Cash, Card, and UPI payments simultaneously for a single bill.</p>
                    </div>
                    <div className="billing-feature-card">
                        <div className="billing-icon-box"><img src="images/poss/taxes_discounts.png" alt="Smart Discounts" style={{ filter: 'hue-rotate(45deg)' }} /></div>
                        <h4>Smart Discounts</h4>
                        <p>Apply automated or manual discounts with custom rules and manager approval.</p>
                    </div>
                    <div className="billing-feature-card">
                        <div className="billing-icon-box"><img src="images/poss/table_management.png" alt="Bill Parking" /></div>
                        <h4>Bill Parking</h4>
                        <p>Pause any bill to handle a different customer and resume it instantly with zero data loss.</p>
                    </div>
                    <div className="billing-feature-card">
                        <div className="billing-icon-box"><img src="images/poss/icon_chains.png" alt="Anti-Fraud Audit" /></div>
                        <h4>Anti-Fraud Audit</h4>
                        <p>Track every single void, edit, or reprint with manager alerts to prevent pilferage.</p>
                    </div>
                </div>
            </section>

            {/* Quick & Simple Section */}
            <section className="poss-quick-section">
                <div className="poss-section-header">
                    <h2>Quick & simple</h2>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px' }}>StoreZen restaurant billing software works easily with any existing infrastructure</p>
                </div>
                <div className="poss-quick-container">
                    <div className="poss-quick-visual">
                        <img src="images/poss/terminal.png" alt="POS Hardware" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid var(--color-border-light)' }} />
                    </div>
                    <div className="poss-quick-grid">
                        <div className="poss-quick-item">
                            <span className="poss-quick-icon"></span>
                            <span className="poss-quick-label">Hardware Agnostic</span>
                            <p className="poss-quick-desc">Use any existing computers, laptops, or tablets. StoreZen runs perfectly on your current equipment.</p>
                        </div>
                        <div className="poss-quick-item">
                            <span className="poss-quick-icon">🖥️</span>
                            <span className="poss-quick-label">Cross-Platform</span>
                            <p className="poss-quick-desc">Compatible with Windows, Android, macOS, and iOS for maximum flexibility across all your stations.</p>
                        </div>
                        <div className="poss-quick-item">
                            <span className="poss-quick-icon">⌨️</span>
                            <span className="poss-quick-label">Touch & Keyboard Optmized</span>
                            <p className="poss-quick-desc">Blistering-fast interface designed for high-speed touch input or traditional keyboard billing.</p>
                        </div>
                        <div className="poss-quick-item">
                            <span className="poss-quick-icon">🤳</span>
                            <span className="poss-quick-label">QR & Self-Ordering</span>
                            <p className="poss-quick-desc">Empower customers to order and pay via QR codes, reducing wait times and waiter workload.</p>
                        </div>
                        <div className="poss-quick-item">
                            <span className="poss-quick-icon">📱</span>
                            <span className="poss-quick-label">Digital E-Receipts</span>
                            <p className="poss-quick-desc">Go paperless and collect customer data with receipts sent directly via WhatsApp or SMS.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Do a lot more Section */}
            <section className="poss-section">
                <div className="poss-section-header">
                    <h2>Do a lot more with one restaurant POSS</h2>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px' }}>StoreZen is the all-in-one restaurant billing POS system that handles all your operations.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div className="poss-feature-card">
                        <h4>Online Order Management</h4>
                        <p style={{ color: 'var(--color-text-secondary)', marginTop: '1rem' }}>A POS system that provides you with the complete picture of your online order sales and aggregator commissions.</p>
                        <Link to="/features/tracking" style={{ color: 'var(--color-primary)', fontWeight: '600', marginTop: '1.5rem', display: 'block' }}>Explore all features →</Link>
                    </div>
                    <div className="poss-feature-card">
                        <h4>Inventory Management</h4>
                        <p style={{ color: 'var(--color-text-secondary)', marginTop: '1rem' }}>Track your inventory purchases, recipe costs, and raw material price trends with StoreZen inventory software.</p>
                        <Link to="/inventory" style={{ color: 'var(--color-primary)', fontWeight: '600', marginTop: '1.5rem', display: 'block' }}>Explore all features →</Link>
                    </div>
                    <div className="poss-feature-card">
                        <h4>CRM Management</h4>
                        <p style={{ color: 'var(--color-text-secondary)', marginTop: '1rem' }}>Create customer data pools and provide customized customer experience to all of them! Earn their loyalty with reward points.</p>
                        <Link to="/stock" style={{ color: 'var(--color-primary)', fontWeight: '600', marginTop: '1.5rem', display: 'block' }}>Explore all features →</Link>
                    </div>
                    <div className="poss-feature-card">
                        <h4>Menu Management</h4>
                        <p style={{ color: 'var(--color-text-secondary)', marginTop: '1rem' }}>Create and customise different online menus for your restaurant as per your needs! Toggle items based on stock.</p>
                        <Link to="/features/analytics" style={{ color: 'var(--color-primary)', fontWeight: '600', marginTop: '1.5rem', display: 'block' }}>Explore all features →</Link>
                    </div>
                    <div className="poss-feature-card">
                        <h4>Rights & Reports</h4>
                        <p style={{ color: 'var(--color-text-secondary)', marginTop: '1rem' }}>Access 50+ business reports and regulate staff rights to avoid fraud and pilferage from a single dashboard.</p>
                        <Link to="/features/analytics" style={{ color: 'var(--color-primary)', fontWeight: '600', marginTop: '1.5rem', display: 'block' }}>Explore all features →</Link>
                    </div>
                </div>
            </section>

            {/* Section: Outlet Types (Dedicated Images Final) */}
            <section className="poss-outlet-section">
                <div className="poss-section-header">
                    <h2>Powering every food business</h2>
                </div>
                <div className="poss-outlet-grid">
                    {[
                        { name: 'Food courts & canteens', path: 'food-court', icon: 'images/poss/icon_food_court.png' },
                        { name: 'Cafe', path: 'cafe', icon: 'images/poss/icon_cafe.png' },
                        { name: 'Fine dine', path: 'fine-dine', icon: 'images/poss/icon_fine_dine.png' },
                        { name: 'Bar & brewery', path: 'bar', icon: 'images/poss/icon_bar.png' },
                        { name: 'Pizzeria', path: 'pizza', icon: 'images/poss/icon_pizza.png' },
                        { name: 'QSR', path: 'qsr', icon: 'images/poss/icon_qsr.png' },
                        { name: 'Desserts', path: 'desserts', icon: 'images/poss/icon_desserts.png' },
                        { name: 'Large chains', path: 'large-chains', icon: 'images/poss/icon_chains.png' },
                        { name: 'Bakery', path: 'bakery', icon: 'images/poss/icon_bakery.png' },
                        { name: 'Cloud kitchens', path: 'cloud-kitchen', icon: 'images/poss/icon_cloud_kitchen.png' }
                    ].map(outlet => (
                        <Link
                            key={outlet.name}
                            to={`/poss/${outlet.path}`}
                            className="outlet-card"
                        >
                            <div className="outlet-icon-container">
                                <img src={outlet.icon} alt={outlet.name} />
                            </div>
                            <span>{outlet.name}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="poss-section">
                <div className="poss-section-header">
                    <h2>See why 75,000+ brands trust us</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                    <div style={{ background: 'var(--color-bg-card)', padding: '3rem', borderRadius: '16px', border: '1px solid var(--color-border)', position: 'relative' }}>
                        <div style={{ color: 'var(--color-primary)', fontSize: '40px', position: 'absolute', top: '20px', left: '20px', opacity: 0.2 }}>“</div>
                        <p style={{ fontSize: '18px', lineHeight: '28px', color: 'var(--color-text-primary)', fontStyle: 'italic' }}>"The speed of billing is unmatched. We used to have queues on weekends, now it's a breeze. The 3-click process is real."</p>
                        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-bg-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>R</div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '16px' }}>Rohan Mehta</h4>
                                <span style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>Owner, The Burger Club</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ background: 'var(--color-bg-card)', padding: '3rem', borderRadius: '16px', border: '1px solid var(--color-border)', position: 'relative' }}>
                        <div style={{ color: 'var(--color-primary)', fontSize: '40px', position: 'absolute', top: '20px', left: '20px', opacity: 0.2 }}>“</div>
                        <p style={{ fontSize: '18px', lineHeight: '28px', color: 'var(--color-text-primary)', fontStyle: 'italic' }}>"Inventory tracking saved us. We were losing 10% stock to wastage. Now we track every gram. Highly recommended."</p>
                        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-bg-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>S</div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '16px' }}>Sneha Kapoor</h4>
                                <span style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>Manager, Chai Point</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ backgroundColor: 'rgba(214, 57, 57, 0.05)', padding: '100px 2rem', textAlign: 'center', borderTop: '1px solid rgba(214, 57, 57, 0.1)' }}>
                <h2 style={{ fontSize: '36px', fontWeight: '600', marginBottom: '24px' }}>Ready to upgrade your restaurant?</h2>
                <button className="poss-cta-primary" onClick={() => navigate('/talk-to-us')}>
                    Schedule a free demo
                </button>
            </section>
        </main>
    );
};

export default POSSManagement;
