import React, { useState } from 'react';
import '../../styles/Global.css'; // Assuming uppercase G based on user file listing, or I'll check. Actually previous viewed file was src/styles/global.css (lowercase).
import '../../components/InquiryModal/InquiryModal.css'; // Reuse form styles if possible, or add new ones.
import { submitInquiry } from '../../config/api.config';

// Country codes for phone number
const countryCodes = [
    { code: '+91', country: 'IN' },
    { code: '+1', country: 'US' },
    { code: '+44', country: 'UK' },
    { code: '+971', country: 'UAE' },
    { code: '+65', country: 'SG' },
    { code: '+61', country: 'AU' },
];

const TalkToUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        businessType: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile number is required';
        }
        if (!formData.businessType) {
            newErrors.businessType = 'Please select your business type';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
                businessType: formData.businessType,
                message: formData.message || ""
            };

            await submitInquiry(payload);
            setSubmitStatus({ type: 'success', message: 'Thank you! Your inquiry has been submitted successfully.' });

            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    businessType: '',
                    message: '',
                });
                setSubmitStatus(null);
            }, 3000);

        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error.message || 'Something went wrong. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="page-container">
            <div className="page-content">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Let's Connect</h1>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem' }}>
                        Choose how you would like to get in touch with us.
                    </p>
                </div>

                <div className="contact-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    {/* Option 1: Talk on Phone */}
                    <div className="contact-card" style={{
                        background: 'var(--color-bg-card)',
                        padding: '3rem',
                        borderRadius: '24px',
                        border: '1px solid var(--color-border)',
                        height: '100%'
                    }}>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            background: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '2rem',
                            color: '#3B82F6'
                        }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <h2 style={{ marginBottom: '1rem' }}>Talk to an Expert</h2>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            Need immediate assistance? Our support team is available 24/7 to help you with any queries or technical issues.
                        </p>

                        <div className="contact-details">
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Sales Inquiry</label>
                                <a href="tel:+919876543210" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-text-primary)', textDecoration: 'none' }}>+91 98765 43210</a>
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Support Line</label>
                                <a href="tel:+919876543211" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-text-primary)', textDecoration: 'none' }}>+91 98765 43211</a>
                            </div>
                            <div>
                                <label style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Email Us</label>
                                <a href="mailto:sales@storezen.com" style={{ fontSize: '1.2rem', color: 'var(--color-primary)', textDecoration: 'none' }}>sales@storezen.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Option 2: Submit Inquiry */}
                    <div className="contact-card" style={{
                        background: 'var(--color-bg-card)',
                        padding: '3rem',
                        borderRadius: '24px',
                        border: '1px solid var(--color-border)'
                    }}>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            background: 'rgba(34, 197, 94, 0.1)',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '2rem',
                            color: '#22C55E'
                        }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <h2 style={{ marginBottom: '1rem' }}>Submit an Inquiry</h2>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            Fill out the form below and our team will get back to you within 24 hours with a personalized demo.
                        </p>

                        <form className="inquiry-form" onSubmit={handleSubmit} style={{ display: 'block' }}>
                            <div className="form-group" style={{ marginBottom: '1rem' }}>
                                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name <span style={{ color: 'var(--color-primary)' }}>*</span></label>
                                <input type="text" name="name" className="form-input" style={{ width: '100%', padding: '0.8rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: 'white' }} value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                                {errors.name && <span style={{ color: '#ff4d4d', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                            </div>

                            <div className="form-group" style={{ marginBottom: '1rem' }}>
                                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address <span style={{ color: 'var(--color-primary)' }}>*</span></label>
                                <input type="email" name="email" className="form-input" style={{ width: '100%', padding: '0.8rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: 'white' }} value={formData.email} onChange={handleChange} placeholder="sid@example.com" />
                                {errors.email && <span style={{ color: '#ff4d4d', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                            </div>

                            <div className="form-group" style={{ marginBottom: '1rem' }}>
                                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Mobile Number <span style={{ color: 'var(--color-primary)' }}>*</span></label>
                                <input type="tel" name="mobile" className="form-input" style={{ width: '100%', padding: '0.8rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: 'white' }} value={formData.mobile} onChange={handleChange} placeholder="9876543210" />
                                {errors.mobile && <span style={{ color: '#ff4d4d', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.mobile}</span>}
                            </div>

                            <div className="form-group" style={{ marginBottom: '1rem' }}>
                                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Business Type <span style={{ color: 'var(--color-primary)' }}>*</span></label>
                                <select name="businessType" value={formData.businessType} onChange={handleChange} style={{ width: '100%', padding: '0.8rem', background: '#1a1a1a', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: 'white' }}>
                                    <option value="">Select business type</option>
                                    <option value="Restaurant">Restaurant</option>
                                    <option value="Cafe">Cafe</option>
                                    <option value="QSR">QSR</option>
                                    <option value="Manufacturing">Food Manufacturing</option>
                                    <option value="Retail">Retail Store</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.businessType && <span style={{ color: '#ff4d4d', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.businessType}</span>}
                            </div>

                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                                <textarea name="message" className="form-input" style={{ width: '100%', padding: '0.8rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: 'white', minHeight: '120px', resize: 'vertical' }} value={formData.message} onChange={handleChange} placeholder="Tell us more about your requirements..." />
                            </div>

                            {submitStatus && <div style={{ marginBottom: '1rem', padding: '1rem', borderRadius: '8px', background: submitStatus.type === 'error' ? 'rgba(255, 77, 77, 0.1)' : 'rgba(34, 197, 94, 0.1)', color: submitStatus.type === 'error' ? '#ff4d4d' : '#22C55E', border: `1px solid ${submitStatus.type === 'error' ? '#ff4d4d' : '#22C55E'}` }}>{submitStatus.message}</div>}

                            <button type="submit" disabled={isSubmitting} className="inv-cta-primary" style={{
                                width: '100%',
                                padding: '1rem',
                                fontWeight: '600',
                                opacity: isSubmitting ? 0.7 : 1,
                                cursor: isSubmitting ? 'not-allowed' : 'pointer'
                            }}>
                                {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TalkToUs;
