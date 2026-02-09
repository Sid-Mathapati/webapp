import React from 'react';
import '../../styles/Pages.css';

const AboutUs = () => {
    return (
        <div className="page-container">
            <section className="page-hero">
                <h1>About Us</h1>
                <p>Empowering businesses with intelligent management solutions since 2026.</p>
            </section>
            
            <div className="page-content">
                <section className="page-section">
                    <div className="page-text">
                        <h3>Overview</h3>
                        <p>
                            Welcome to our About Us page. Here at StoreZen, we believe in transparency and 
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
                            <li><strong>Our Story</strong>: Detailed information about Our Story.</li>
                            <li><strong>Our Team</strong>: Detailed information about Our Team.</li>
                            <li><strong>Our Mission</strong>: Detailed information about Our Mission.</li>
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

export default AboutUs;
