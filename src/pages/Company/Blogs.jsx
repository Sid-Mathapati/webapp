import React from 'react';
import '../../styles/Pages.css';

const Blogs = () => {
    return (
        <div className="page-container">
            <section className="page-hero">
                <h1>Supply Chain Blogs</h1>
                <p>Insights, trends, and best practices for modern supply chain management.</p>
            </section>
            
            <div className="page-content">
                <section className="page-section">
                    <div className="page-text">
                        <h3>Overview</h3>
                        <p>
                            Welcome to our Supply Chain Blogs page. Here at StoreZen, we believe in transparency and 
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
                            <li><strong>Industry Trends</strong>: Detailed information about Industry Trends.</li>
                            <li><strong>Case Studies</strong>: Detailed information about Case Studies.</li>
                            <li><strong>Tech Updates</strong>: Detailed information about Tech Updates.</li>
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

export default Blogs;
