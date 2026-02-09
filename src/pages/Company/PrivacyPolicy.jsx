import React from 'react';
import '../../styles/Pages.css';

const PrivacyPolicy = () => {
    return (
        <div className="page-container">
            <section className="page-hero">
                <h1>Privacy Policy</h1>
                <p>We are committed to protecting your data and privacy.</p>
            </section>
            
            <div className="page-content">
                <section className="page-section">
                    <div className="page-text">
                        <h3>Overview</h3>
                        <p>
                            Welcome to our Privacy Policy page. Here at StoreZen, we believe in transparency and 
                            providing the best possible resources for our users.
                        </p>
                        <p>
                            Explore the details below to understand how we can help you achieve your goals.
                        </p>
                    </div>
                    <div className="page-image">
                        ℹ️
                    </div>
                </section>

                <section className="page-section">
                    <div className="page-text">
                        <h3>Key Points</h3>
                        <ul>
                            <li><strong>Data Collection</strong>: Detailed information about Data Collection.</li>
                            <li><strong>Usage</strong>: Detailed information about Usage.</li>
                            <li><strong>Security</strong>: Detailed information about Security.</li>
                        </ul>
                    </div>
                    <div className="page-image">
                        📄
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
