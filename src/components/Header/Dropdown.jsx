import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ data }) => {
    if (!data) return null;

    return (
        <div className="dropdown">
            <div className="dropdown-section">
                {data.title && <div className="dropdown-title">{data.title}</div>}
                <ul className="dropdown-list">
                    {data.items?.map((item, index) => (
                        <li key={index}>
                            <Link to={item.href || '#'} className="dropdown-item">
                                <span className="dropdown-icon">{item.icon}</span>
                                <div className="dropdown-content">
                                    <div className="dropdown-item-title">{item.title}</div>
                                    {item.description && (
                                        <div className="dropdown-item-desc">{item.description}</div>
                                    )}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Featured Case Study */}
            {data.featured && (
                <div className="dropdown-section dropdown-featured">
                    <div className="dropdown-title">FEATURED</div>
                    <Link to={data.featured.href || '#'} className="dropdown-item featured-item">
                        <span className="featured-tag">{data.featured.tag}</span>
                        <div className="featured-title">{data.featured.title}</div>
                        <div className="featured-link">Read story →</div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
