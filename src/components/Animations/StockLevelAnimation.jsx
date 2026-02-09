import React, { useState, useEffect } from 'react';
import './StockLevelAnimation.css';

/**
 * StockLevelAnimation Component
 * Animated bar chart showing real-time stock levels
 */
const StockLevelAnimation = () => {
    const [levels, setLevels] = useState([
        { name: 'Tomatoes', level: 75, color: '#E85D04' },
        { name: 'Onions', level: 45, color: '#FF8C42' },
        { name: 'Cheese', level: 88, color: '#38A169' },
        { name: 'Bread', level: 32, color: '#DD6B20' },
        { name: 'Chicken', level: 62, color: '#3182CE' },
        { name: 'Rice', level: 91, color: '#805AD5' },
    ]);

    // Simulate real-time stock changes
    useEffect(() => {
        const interval = setInterval(() => {
            setLevels((prev) =>
                prev.map((item) => ({
                    ...item,
                    level: Math.max(10, Math.min(95, item.level + (Math.random() - 0.5) * 15)),
                }))
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="stock-animation">
            <div className="stock-header">
                <span className="stock-title">Live Inventory Levels</span>
                <span className="stock-indicator pulse"></span>
            </div>

            <div className="stock-bars">
                {levels.map((item, index) => (
                    <div key={index} className="stock-bar-container">
                        <div className="stock-bar-label">
                            <span className="stock-bar-name">{item.name}</span>
                            <span className={`stock-bar-value ${item.level < 40 ? 'low' : ''}`}>
                                {Math.round(item.level)}%
                            </span>
                        </div>
                        <div className="stock-bar-track">
                            <div
                                className={`stock-bar-fill ${item.level < 40 ? 'low' : ''}`}
                                style={{
                                    width: `${item.level}%`,
                                    backgroundColor: item.level < 40 ? '#DC2626' : item.color,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="stock-legend">
                <span className="legend-item">
                    <span className="legend-dot low"></span>
                    Low Stock (&lt;40%)
                </span>
                <span className="legend-item">
                    <span className="legend-dot normal"></span>
                    Normal
                </span>
            </div>
        </div>
    );
};

export default StockLevelAnimation;
