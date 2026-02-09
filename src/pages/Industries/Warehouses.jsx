import React from 'react';
import '../../styles/Pages.css';

const Warehouses = () => {
    return (
        <div className="page-container">
            <section className="page-hero">
                <h1>Multi-Branch & Warehouse</h1>
                <p>Centralized control across all your store locations and warehouses.</p>
            </section>

            <div className="page-content">
                <section className="page-section">
                    <div className="page-text">
                        <h3>Unified Operations</h3>
                        <p>
                            Manage multiple store locations from a single dashboard.
                            Get a bird's eye view of inventory, sales, and performance across all your branches.
                        </p>
                        <p>
                            Our multi-tenant architecture ensures data isolation between branches
                            while providing consolidated reporting for business owners.
                        </p>
                    </div>
                    <div className="page-image">
                        <img src="images/illustrations/inventory-management.png" alt="Centralized Warehouse Management" />
                    </div>
                </section>

                <section className="page-section">
                    <div className="page-text">
                        <h3>Key Features</h3>
                        <ul>
                            <li><strong>Centralized Dashboard</strong>: Real-time view of all branch metrics.</li>
                            <li><strong>Stock Transfers</strong>: Seamlessly move inventory between locations.</li>
                            <li><strong>Aggregated Reports</strong>: Compare performance across branches.</li>
                            <li><strong>Access Control</strong>: Granular user permissions for each location.</li>
                            <li><strong>Supply Chain</strong>: Manage vendors and purchasing centralized.</li>
                        </ul>
                    </div>
                    <div className="page-image">
                        <img src="images/illustrations/analytics-reports.png" alt="Multi-Branch Analytics" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Warehouses;
