import React from 'react';
import '../../styles/Pages.css';

const RetailStores = () => {
    return (
        <div className="page-container">
            <section className="page-hero">
                <h1>Retail Stores</h1>
                <p>Complete retail management for electronics, pharmacy, jewellery, and supermarkets.</p>
            </section>

            <div className="page-content">
                <section className="page-section">
                    <div className="page-text">
                        <h3>Built for Your Industry</h3>
                        <p>
                            Whether you run an electronics store, pharmacy, or supermarket,
                            StoreZen adapts to your specific business needs with industry-specific configurations.
                        </p>
                        <p>
                            Manage products, track inventory, process sales, and build customer relationships—all
                            from one unified platform designed for retail excellence.
                        </p>
                    </div>
                    <div className="page-image">
                        <img src="images/illustrations/pos-billing.png" alt="Retail POS System" />
                    </div>
                </section>

                <section className="page-section">
                    <div className="page-text">
                        <h3>Key Features</h3>
                        <ul>
                            <li><strong>Smart Billing</strong>: Barcode scanning, quick search, and multi-payment modes.</li>
                            <li><strong>Inventory Management</strong>: Real-time stock tracking with low stock alerts.</li>
                            <li><strong>Customer CRM</strong>: Build a loyal customer base with integrated profiles and history.</li>
                            <li><strong>Loyalty Programs</strong>: Reward repeat shoppers automatically.</li>
                            <li><strong>Multi-Location</strong>: Manage all your stores from one headquarters.</li>
                        </ul>
                    </div>
                    <div className="page-image">
                        <img src="images/illustrations/customer-management.png" alt="Retail Customer CRM" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RetailStores;
