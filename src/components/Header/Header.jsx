import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import Dropdown from './Dropdown';

// Navigation data
const navigationData = {
    solutions: {
        title: 'EXPLORE SOLUTIONS',
        items: [
            {
                icon: '📦',
                title: 'Inventory Management',
                description: 'Track stock levels with low stock alerts and reordering',
                href: '/inventory',
            },
            {
                icon: '🍽️',
                title: 'POSS',
                description: 'Table matrix, live orders, and waiter console',
                href: '/poss',
            },
            {
                icon: '💳',
                title: 'Billing & POSS',
                description: 'Fast checkout with multi-payment support',
                href: '/orders',
            },
            {
                icon: '🏭',
                title: 'Manufacturing',
                description: 'Materials, recipes, and production tracking',
                href: '/industries/manufacturing',
            },
        ],
    },
    industries: {
        title: 'EXPLORE INDUSTRIES',
        items: [
            {
                icon: '🍕',
                title: 'Restaurants & Cafes',
                description: 'Full table management and POSS billing',
                href: '/industries/restaurants',
            },
            {
                icon: '🏪',
                title: 'Retail Stores',
                description: 'Electronics, pharmacy, and jewellery stores',
                href: '/industries/retail',
            },
            {
                icon: '🏭',
                title: 'Manufacturing',
                description: 'Raw materials and finished goods management',
                href: '/industries/manufacturing',
            },
        ],
    },
    features: {
        title: 'KEY FEATURES',
        items: [
            {
                icon: '🏢',
                title: 'Multi-location Support',
                description: 'Manage all branches from one dashboard',
                href: '/features/multi-location',
            },
            {
                icon: '👥',
                title: 'Customer & Loyalty',
                description: 'Customer database and loyalty programs',
                href: '/stock',
            },
            {
                icon: '📈',
                title: 'Reports & Analytics',
                description: 'Sales, inventory, and business insights',
                href: '/features/analytics',
            },
        ],
    },
};

const Header = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setIsMobileMenuOpen(false);
                setOpenDropdown(null);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Toggle mobile dropdown
    const toggleMobileDropdown = (key) => {
        setOpenDropdown(openDropdown === key ? null : key);
    };

    // Handle CTA click
    const handleCtaClick = () => {
        setIsMobileMenuOpen(false);
        navigate('/talk-to-us');
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                {/* Logo */}
                <Link to="/" className="header-logo">
                    <div className="logo-icon">
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
                    <span className="logo-text">Store<span>Zen</span></span>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation */}
                <nav className={`header-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        {/* Solutions Dropdown */}
                        <li className={`nav-item ${openDropdown === 'solutions' ? 'open' : ''}`}>
                            <span
                                className="nav-link"
                                onClick={() => toggleMobileDropdown('solutions')}
                            >
                                Solutions
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </span>
                            <Dropdown data={navigationData.solutions} />
                        </li>

                        {/* Industries Dropdown */}
                        <li className={`nav-item ${openDropdown === 'industries' ? 'open' : ''}`}>
                            <span
                                className="nav-link"
                                onClick={() => toggleMobileDropdown('industries')}
                            >
                                Industries
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </span>
                            <Dropdown data={navigationData.industries} />
                        </li>

                        {/* Features Dropdown */}
                        <li className={`nav-item ${openDropdown === 'features' ? 'open' : ''}`}>
                            <span
                                className="nav-link"
                                onClick={() => toggleMobileDropdown('features')}
                            >
                                Features
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </span>
                            <Dropdown data={navigationData.features} />
                        </li>

                        {/* Contact Link */}
                        <li className="nav-item">
                            <Link to="/talk-to-us" className="nav-link">Contact</Link>
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <button className="header-cta" onClick={handleCtaClick}>
                        Request a Demo
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
