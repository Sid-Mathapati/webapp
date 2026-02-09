import React from 'react';
import '../../styles/Pages.css';

const FoodManufacturing = () => {
    return (
        <div className="page-container">
            <section className="page-hero">
                <h1>Manufacturing & Production</h1>
                <p>Complete production management for raw materials, recipes, and finished goods.</p>
            </section>

            <div className="page-content">
                <section className="page-section">
                    <div className="page-text">
                        <h3>Production Management</h3>
                        <p>
                            Manage your entire manufacturing process from raw materials to finished goods.
                            Create detailed recipes, track material consumption, and monitor production runs.
                        </p>
                    </div>
                    <div className="page-image">
                        <img src="/webapp/images/illustrations/manufacturing.png" alt="Manufacturing & Production Flow" />
                    </div>
                </section>

                <section className="page-section">
                    <div className="page-text">
                        <h3>Key Features</h3>
                        <ul>
                            <li><strong>Recipe Management</strong>: Define recipes with precise material requirements.</li>
                            <li><strong>Batch Tracking</strong>: Track production batches with lot numbers and expiry dates.</li>
                            <li><strong>Cost Auditing</strong>: Accurate costing based on material consumption and wastage.</li>
                            <li><strong>Inventory Control</strong>: Real-time stock updates for raw materials and finished goods.</li>
                            <li><strong>Production Planning</strong>: Schedule and manage production runs efficiently.</li>
                        </ul>
                    </div>
                    <div className="page-image">
                        <img src="/webapp/images/illustrations/inventory-management.png" alt="Material Inventory Control" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FoodManufacturing;
