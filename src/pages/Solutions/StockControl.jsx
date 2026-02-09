import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Pages.css';

const StockControl = () => {
    const navigate = useNavigate();
    return (
        <div className="page-container">
            <section className="page-hero">
                <h1>Customer & Loyalty (CRM)</h1>
                <p>Turn first-time visitors into loyal regulars with integrated CRM and loyalty programs.</p>
            </section>

            <div className="page-content">
                <section className="page-section">
                    <div className="page-text">
                        <h3>Build Lasting Relationships</h3>
                        <p>
                            Capture customer details automatically at checkout. Build a comprehensive database
                            of preferences, order history, and special dates to personalize every interaction.
                        </p>
                        <p>
                            Identify your VIP customers and reward them with points or exclusive offers,
                            driving repeat business and increasing lifetime value.
                        </p>
                    </div>
                    <div className="page-image">
                        <img src="/webapp/images/illustrations/customer-management.png" alt="Customer Relationship Management" />
                    </div>
                </section>

                <section className="page-section">
                    <div className="page-text">
                        <h3>Loyalty & Engagement</h3>
                        <p>
                            Run targeted campaigns based on customer behavior. increased retention means higher revenue.
                        </p>
                        <ul>
                            <li><strong>Points Program</strong>: Configurable loyalty points for every purchase.</li>
                            <li><strong>Customer Profiles</strong>: Detailed view of history and preferences.</li>
                            <li><strong>Digital Wallet</strong>: Pre-paid accounts for regular customers.</li>
                            <li><strong>Feedback System</strong>: Collect and manage customer feedback.</li>
                            <li><strong>Birthday Automation</strong>: Send automated offers on special days.</li>
                        </ul>
                    </div>
                    <div className="page-image">
                        <img src="/webapp/images/illustrations/analytics-reports.png" alt="Customer Insights" />
                    </div>
                </section>

                <section className="page-section">
                    <div className="page-text">
                        <h3>24/7 Priority Support</h3>
                        <p>
                            Have questions about setting up loyalty tiers? Our support team is just a click away
                            to help you design the perfect program for your business.
                        </p>
                        <button className="pricing-cta primary" onClick={() => navigate('/talk-to-us')} style={{ marginTop: '1rem', width: 'auto', padding: '0.8rem 2rem' }}>
                            Talk to an Expert
                        </button>
                    </div>
                    <div className="page-image">
                        <img src="/webapp/images/illustrations/customer-support-demo.png" alt="Support Team with CRM" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default StockControl;
