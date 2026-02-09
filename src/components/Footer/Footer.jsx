import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Footer links data
const footerData = {
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
    ],
    product: [
        { label: 'Inventory Management', href: '/inventory' },
        { label: 'Restaurant Management', href: '/restaurant' },
        { label: 'Billing & POS', href: '/orders' },
        { label: 'Manufacturing', href: '/industries/manufacturing' },
        { label: 'Pricing', href: '/pricing' },
    ],
    contact: {
        address: 'Spice Garden Road, Marathahalli,Bangalore 560037 India',
        phone: '+91-7892-95-3480',
        email: 'contact@storezen.app',
    },
};

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                {/* Footer Main */}
                <div className="footer-main">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <div className="footer-logo-icon">
                                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 4L36 12V28L20 36L4 28V12L20 4Z"
                                        fill="var(--color-primary)"
                                        stroke="var(--color-text-primary)"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M20 4V20M20 20L36 12M20 20L4 12M20 20V36"
                                        stroke="var(--color-text-primary)"
                                        strokeWidth="2"
                                    />
                                    <circle cx="20" cy="20" r="6" fill="var(--color-secondary)" />
                                </svg>
                            </div>
                            <span className="footer-logo-text">Store<span>Zen</span></span>
                        </Link>

                        <p className="footer-description">
                            A multi-tenant SaaS platform for restaurants, retail stores, pharmacies,
                            jewellery stores, and manufacturers. Complete business management in one platform.
                        </p>

                        <div className="footer-certification">
                            <span className="certification-icon">🏆</span>
                            <span className="certification-text">
                                <strong>ISO 27001:2022</strong>
                                Certified
                            </span>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="footer-column">
                        <h4 className="footer-column-title">Company</h4>
                        <ul className="footer-links">
                            {footerData.company.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.href} className="footer-link">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Links */}
                    <div className="footer-column">
                        <h4 className="footer-column-title">Product</h4>
                        <ul className="footer-links">
                            {footerData.product.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.href} className="footer-link">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-column">
                        <h4 className="footer-column-title">Contact</h4>

                        <div className="footer-contact-item">
                            <span className="footer-contact-icon">📍</span>
                            <span className="footer-contact-text">
                                {footerData.contact.address}
                            </span>
                        </div>

                        <div className="footer-contact-item">
                            <span className="footer-contact-icon">📞</span>
                            <span className="footer-contact-text">
                                <a href={`tel:${footerData.contact.phone}`}>
                                    {footerData.contact.phone}
                                </a>
                            </span>
                        </div>

                        <div className="footer-contact-item">
                            <span className="footer-contact-icon">✉️</span>
                            <span className="footer-contact-text">
                                <a href={`mailto:${footerData.contact.email}`}>
                                    {footerData.contact.email}
                                </a>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2026 StoreZen. All rights reserved.
                    </p>

                    <div className="footer-social">
                        <a href="#" className="footer-social-link" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>

                        <a href="#" className="footer-social-link" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </a>

                        <a href="#" className="footer-social-link" aria-label="Twitter">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>

                        <a href="#" className="footer-social-link" aria-label="YouTube">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                                <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
