import React from 'react';
import '../../styles/Pages.css';

const TermsAndConditions = () => {
    return (
        <div className="page-container">
            <section className="page-hero">
                <h1>Terms & Conditions</h1>
                <p>Please read our terms of service carefully.</p>
            </section>
            
            <div className="page-content">
                <section className="page-section">
                    <div className="page-text">
                        <h3>Overview</h3>
                        <p>
                            Welcome to our Terms & Conditions page. Here at StoreZen, we believe in transparency and 
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
                            <li><strong>User Obligations</strong>: Detailed information about User Obligations.</li>
                            <li><strong>Limitations</strong>: Detailed information about Limitations.</li>
                            <li><strong>Governing Law</strong>: Detailed information about Governing Law.</li>
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

export default TermsAndConditions;
