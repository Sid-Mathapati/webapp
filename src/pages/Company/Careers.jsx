import React from 'react';
import '../../styles/Pages.css';

const Careers = () => {
    return (
        <div className="page-container">
            <section className="page-hero">
                <h1>Careers</h1>
                <p>Join us in building the future of business operations.</p>
            </section>
            
            <div className="page-content">
                <section className="page-section">
                    <div className="page-text">
                        <h3>Overview</h3>
                        <p>
                            Welcome to our Careers page. Here at StoreZen, we believe in transparency and 
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
                            <li><strong>Open Positions</strong>: Detailed information about Open Positions.</li>
                            <li><strong>Culture</strong>: Detailed information about Culture.</li>
                            <li><strong>Benefits</strong>: Detailed information about Benefits.</li>
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

export default Careers;
