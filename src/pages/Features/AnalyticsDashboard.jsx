import React from 'react';
import '../../styles/Pages.css';

const AnalyticsDashboard = () => {
    return (
        <div className="page-container">
            <section className="page-hero">
                <h1>Reports & Analytics</h1>
                <p>Turn data into growth with deep insights into sales, inventory, and customer behavior.</p>
            </section>

            <div className="page-content">
                <section className="page-section">
                    <div className="page-text">
                        <h3>Data-Driven Decisions</h3>
                        <p>
                            Transform raw data into actionable insights. Our analytics engine
                            processes your sales, inventory, and customer data to surface trends and opportunities.
                        </p>
                        <p>
                            Identify your best-selling products, peak busy hours, and higher-value customers
                            to optimize your business strategy effectively.
                        </p>
                    </div>
                    <div className="page-image">
                        <img src="/webapp/images/illustrations/analytics-reports.png" alt="Advanced Analytics Dashboard" />
                    </div>
                </section>

                <section className="page-section">
                    <div className="page-text">
                        <h3>Comprehensive Reports</h3>
                        <ul>
                            <li><strong>Sales Analytics</strong>: Revenue trends, product performance, and category analysis.</li>
                            <li><strong>Inventory Insights</strong>: Stock turnover, dead stock analysis, and shrinkage reports.</li>
                            <li><strong>Customer Intelligence</strong>: Purchase patterns, frequency, and lifetime value.</li>
                            <li><strong>Profit Margins</strong>: Accurate COGS and gross margin calculations per item.</li>
                            <li><strong>Daily Digest</strong>: Automated email summaries of key business metrics.</li>
                        </ul>
                    </div>
                    <div className="section-illustration">
                        <img src="/webapp/images/illustrations/analytics-reports.png" alt="Analytics Dashboard" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;
