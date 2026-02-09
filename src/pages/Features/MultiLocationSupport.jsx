import React from 'react';
import '../../styles/Pages.css';

const MultiLocationSupport = () => {
    return (
        <div className="page-container">
            <section className="page-hero">
                <h1>Multi-Location & Enterprise</h1>
                <p>Scale your business effortlessly. Manage 2 stores or 200 from one unified platform.</p>
            </section>

            <div className="page-content">
                <section className="page-section">
                    <div className="page-text">
                        <h3>Centralized Headquarters</h3>
                        <p>
                            Get a consolidated view of your entire empire. Our multi-tenant architecture allows you to
                            manage pricing, products, and inventory for all branches from a master panel.
                        </p>
                        <p>
                            Standardize operations while allowing branch-level flexibility where needed.
                            Push updates to all stores instantly.
                        </p>
                    </div>
                    <div className="page-image">
                        <img src="images/illustrations/inventory-management.png" alt="Centralized Enterprise Dashboard" />
                    </div>
                </section>

                <section className="page-section">
                    <div className="page-text">
                        <h3>Enterprise Features</h3>
                        <ul>
                            <li><strong>Master Catalog</strong>: Centrally managed product and price lists.</li>
                            <li><strong>Inter-Branch Transfers</strong>: Seamless stock movement between locations.</li>
                            <li><strong>Consolidated Reports</strong>: Compare branch performance side-by-side.</li>
                            <li><strong>Regional Pricing</strong>: Set different price tiers for different regions.</li>
                            <li><strong>Franchise Management</strong>: Specialized tools for franchise operations.</li>
                        </ul>
                    </div>
                    <div className="page-image">
                        <img src="images/illustrations/analytics-reports.png" alt="Multi-Branch Performance Comparison" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MultiLocationSupport;
