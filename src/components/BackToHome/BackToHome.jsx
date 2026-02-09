import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BackToHome.css';

const BackToHome = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Do not show on home page
    if (location.pathname === '/') {
        return null;
    }

    return (
        <button
            className="back-to-home-btn"
            onClick={() => navigate('/')}
            aria-label="Back to Home"
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className="back-text">Back to Home</span>
        </button>
    );
};

export default BackToHome;
