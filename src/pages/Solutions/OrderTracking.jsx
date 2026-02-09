import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Pages.css';

const OrderTracking = () => {
    const navigate = useNavigate();
    return (
        <div className="page-container">
            <section className="page-hero">
                <h1>Billing & Point of Sale</h1>
                <p>Lightning-fast cloud POS built for speed, reliability, and ease of use.</p>
            </section>

            <div className="page-content">
                <section className="page-section">
                    <div className="page-text">
                        <h3>Streamlined Checkout Experience</h3>
                        <p>
                            Process sales in seconds, not minutes. Our intuitive POS interface is designed for minimal clicks,
                            allowing your staff to serve customers faster during peak hours.
                        </p>
                        <p>
                            Accept all payment modes—cash, cards, UPI, and digital wallets.
                            The system works online and offline, ensuring your business never stops.
                        </p>
                    </div>
                    <div className="page-image">
                        <img src="images/illustrations/pos-billing.png" alt="Point of Sale Interface" />
                    </div>
                </section>

                <section className="page-section">
                    <div className="page-text">
                        <h3>Powerful Billing Features</h3>
                        <p>
                            Handle complex billing scenarios with ease, from multiple taxes to discounts and split payments.
                        </p>
                        <ul>
                            <li><strong>Touch-Optimized</strong>: Designed for speed on tablets and touchscreens.</li>
                            <li><strong>Flexible Payments</strong>: Split bills, merge tables, and accept mixed payments.</li>
                            <li><strong>Offline Mode</strong>: Continue billing even when the internet goes down.</li>
                            <li><strong>Custom Invoices</strong>: Professional receipts with your logo and branding.</li>
                            <li><strong>Daily Sales Reports</strong>: Automated end-of-day summary via email.</li>
                        </ul>
                    </div>
                    <div className="page-image">
                        <img src="/webapp/images/illustrations/analytics-reports.png" alt="Billing Analytics" />
                    </div>
                </section>

                <section className="page-section">
                    <div className="page-text">
                        <h3>We're Here to Help</h3>
                        <p>
                            Transitioning to a new POS is significant. We provide complete setup assistance,
                            menu migration, and staff training to ensure a smooth launch.
                        </p>
                        <button className="pricing-cta primary" onClick={() => navigate('/talk-to-us')} style={{ marginTop: '1rem', width: 'auto', padding: '0.8rem 2rem' }}>
                            Schedule a Demo
                        </button>
                    </div>
                    <div className="page-image">
                        <img src="/webapp/images/illustrations/customer-support-demo.png" alt="Support Team assisting with POS" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default OrderTracking;
