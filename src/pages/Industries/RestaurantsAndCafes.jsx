import React from 'react';
import '../../styles/Pages.css';

const RestaurantsAndCafes = () => {
    return (
        <div className="page-container">
            <section className="page-hero">
                <h1>Restaurants & Cafes</h1>
                <p>Complete restaurant management with table tracking, live orders, and POS billing.</p>
            </section>

            <div className="page-content">
                <section className="page-section">
                    <div className="page-text">
                        <h3>Table Management</h3>
                        <p>
                            Visualize your entire floor with our interactive table matrix.
                            Track table status in real-time—available, occupied, reserved, or cleaning.
                        </p>
                        <p>
                            Assign tables to waiters, manage reservations, and optimize seating capacity
                            to maximize your restaurant's efficiency.
                        </p>
                    </div>
                    <div className="page-image">
                        <img src="images/illustrations/restaurant-management.png" alt="Interactive Table Management" />
                    </div>
                </section>

                <section className="page-section">
                    <div className="page-text">
                        <h3>Key Features</h3>
                        <ul>
                            <li><strong>Live Order Tracking</strong>: Monitor all active orders across your restaurant in real-time.</li>
                            <li><strong>Waiter Console</strong>: Mobile-friendly interface for waiters to take orders and manage tables.</li>
                            <li><strong>KOT Management</strong>: Kitchen Order Tickets sent directly to the kitchen display.</li>
                            <li><strong>Bill Splitting</strong>: Split bills by items, seats, or custom amounts.</li>
                            <li><strong>POS Integration</strong>: Fast checkout with cash, card, and UPI payment options.</li>
                        </ul>
                    </div>
                    <div className="page-image">
                        <img src="images/illustrations/pos-billing.png" alt="POS & Billing System" />
                    </div>
                </section>

                <section className="page-section">
                    <div className="page-text">
                        <h3>Kitchen Efficiency</h3>
                        <p>
                            Improve your kitchen turnaround time with digital KOTs and order management.
                            Chefs get clear, organized orders, reducing errors and food wastage.
                        </p>
                    </div>
                    <div className="page-image">
                        <img src="images/illustrations/hero-dashboard.png" alt="Kitchen Display System" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RestaurantsAndCafes;
