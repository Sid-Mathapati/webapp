import React from 'react';
import '../../styles/Pages.css';

const ApiDocumentation = () => {
    return (
        <div className="page-container">
            <section className="page-hero">
                <h1>API Documentation</h1>
                <p>Comprehensive guides and references for developers.</p>
            </section>
            
            <div className="page-content">
                <section className="page-section">
                    <div className="page-text">
                        <h3>Overview</h3>
                        <p>
                            Welcome to our API Documentation page. Here at StoreZen, we believe in transparency and 
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
                            <li><strong>Getting Started</strong>: Detailed information about Getting Started.</li>
                            <li><strong>Endpoints</strong>: Detailed information about Endpoints.</li>
                            <li><strong>Authentication</strong>: Detailed information about Authentication.</li>
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

export default ApiDocumentation;
