import React, { useState } from 'react';
import './FAQ.css';
import FAQItem from './FAQItem';

// FAQ data split into two columns
const faqData = {
    leftColumn: [
        {
            question: 'What industries does StoreZen support?',
            answer: 'StoreZen is built for <strong>restaurants, retail stores</strong> (electronics, electricals, pharmacy, jewellery), <strong>cafes, and manufacturers</strong>. Our multi-tenant architecture adapts to your specific business needs.',
        },
        {
            question: 'Do you offer table management for restaurants?',
            answer: 'Yes! Our restaurant module includes a <strong>visual table matrix</strong>, live order tracking, waiter console, KOT (Kitchen Order Tickets), bill splitting, and complete POS integration.',
        },
        {
            question: 'How does the subscription model work?',
            answer: 'We offer flexible <strong>subscription-based pricing</strong> with different tiers based on features and number of locations. All plans include core POS, inventory, and customer management.',
        },
        {
            question: 'Is there a free trial?',
            answer: 'Absolutely! We offer a <strong>15-day free trial</strong> with full access to all features. No credit card required to get started.',
        },
    ],
    rightColumn: [
        {
            question: 'Can I request custom features?',
            answer: 'Yes! We offer <strong>custom feature development</strong> based on your specific requirements. Our team works closely with you to build exactly what your business needs.',
        },
        {
            question: 'What support is available?',
            answer: 'We provide <strong>24/7 dedicated customer support</strong> via chat, email, and phone. Our team ensures you get help whenever you need it.',
        },
        {
            question: 'How do I get optional features?',
            answer: 'Our <strong>marketplace</strong> offers 50+ optional features that you can enable instantly. Request access, get approval, and start using immediately—no waiting period.',
        },
        {
            question: 'Do you support multi-location businesses?',
            answer: 'Yes! StoreZen is designed for <strong>multi-location businesses</strong> with centralized management, branch-wise reporting, and unified inventory across all your stores.',
        },
    ],
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState({ left: 0, right: null });

    const handleToggle = (column, index) => {
        setOpenIndex((prev) => ({
            ...prev,
            [column]: prev[column] === index ? null : index,
        }));
    };

    return (
        <section className="faq" id="faq">
            <div className="faq-container">
                {/* Section Header */}
                <div className="faq-header">
                    <h2 className="faq-title">
                        Frequently Asked <span className="highlight">Questions</span>
                    </h2>
                    <p className="faq-subtitle">
                        Everything you need to know about StoreZen
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="faq-grid">
                    {/* Left Column */}
                    <div className="faq-column">
                        {faqData.leftColumn.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex.left === index}
                                onToggle={() => handleToggle('left', index)}
                            />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="faq-column">
                        {faqData.rightColumn.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex.right === index}
                                onToggle={() => handleToggle('right', index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
