import React from 'react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-question" onClick={onToggle}>
                <span className="faq-icon">❓</span>
                <span className="faq-question-text">{question}</span>
                <span className="faq-toggle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </span>
            </button>

            <div className="faq-answer">
                <div className="faq-answer-content">
                    <p
                        className="faq-answer-text"
                        dangerouslySetInnerHTML={{ __html: answer }}
                    />
                </div>
            </div>
        </div>
    );
};

export default FAQItem;
