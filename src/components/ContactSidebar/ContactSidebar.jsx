import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactSidebar.css';

const ContactSidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="contact-sidebar">
            <button
                className="contact-sidebar-button"
                onClick={() => navigate('/talk-to-us')}
                aria-label="Contact Us"
            >
                <span className="contact-sidebar-text">Contact Us</span>
            </button>
        </div>
    );
};

export default ContactSidebar;
