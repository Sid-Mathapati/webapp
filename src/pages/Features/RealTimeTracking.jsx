import React from 'react';
import '../../styles/Pages.css';

const RealTimeTracking = () => {
    return (
        <div className="page-container">
            <section className="page-hero">
                <h1>Live Dashboard</h1>
                <p>Real-time visibility into your business performance, anywhere, anytime.</p>
            </section>

            <div className="page-content">
                <section className="page-section">
                    <div className="page-text">
                        <h3>Pulse of Your Business</h3>
                        <p>
                            Get instant visibility into your key business metrics with our real-time dashboard.
                            Monitor sales as they happen, track live order status, and see inventory movements instantly.
                        </p>
                        <p>
                            Whether you're onsite or on vacation, the pulse of your business is always at your fingertips
                            via our cloud-based platform.
                        </p>
                    </div>
                    <div className="page-image">
                        <img src="images/illustrations/hero-dashboard.png" alt="Real-time Business Dashboard" />
                    </div>
                </section>

                <section className="page-section">
                    <div className="page-text">
                        <h3>Key Metrics</h3>
                        <ul>
                            <li><strong>Live Sales Ticker</strong>: Watch revenue grow in real-time.</li>
                            <li><strong>Order Status</strong>: Track orders from placement to delivery.</li>
                            <li><strong>Staff Activity</strong>: Monitor login times and sales by staff member.</li>
                            <li><strong>Cash Flow</strong>: Track cash and digital payments instantly.</li>
                            <li><strong>Mobile Access</strong>: Fully responsive dashboard for monitoring on the go.</li>
                        </ul>
                    </div>
                    <div className="page-image">
                        <img src="images/illustrations/pos-billing.png" alt="Live Transactions View" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RealTimeTracking;
