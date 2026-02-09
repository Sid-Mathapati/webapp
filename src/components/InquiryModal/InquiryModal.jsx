import React, { useState, useEffect } from 'react';
import './InquiryModal.css';
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

const InquiryModal = ({ isOpen, onClose }) => {
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

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile number is required';
        }

        if (!formData.businessType) {
            newErrors.businessType = 'Please select a business type';
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

            setSubmitStatus({ type: 'success', message: 'Thank you! Your demo has been booked.' });

            // Reset form after success
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    businessType: '',
                    message: '',
                });
                onClose();
                setSubmitStatus(null);
            }, 2000);

        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error.message || 'Something went wrong. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handle overlay click
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className={`modal-overlay ${isOpen ? 'open' : ''}`}
            onClick={handleOverlayClick}
        >
            <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                    <h2 className="modal-title">Book your Demo Now!</h2>
                    <button className="modal-close" onClick={onClose}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="modal-body">
                    <form className="inquiry-form" onSubmit={handleSubmit}>
                        {/* Name & Company */}
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">
                                    Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className={`form-input ${errors.name ? 'error' : ''}`}
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Company name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="companyName"
                                    className={`form-input ${errors.companyName ? 'error' : ''}`}
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email id <span className="required">*</span></label>
                            <input
                                type="email"
                                name="email"
                                className={`form-input ${errors.email ? 'error' : ''}`}
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="sid@example.com"
                            />
                            {errors.email && <span className="error-text">{errors.email}</span>}
                        </div>

                        {/* Phone Number */}
                        <div className="form-group">
                            <label className="form-label">Mobile Number <span className="required">*</span></label>
                            <input
                                type="tel"
                                name="mobile"
                                className={`form-input ${errors.mobile ? 'error' : ''}`}
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Enter mobile number"
                            />
                            {errors.mobile && <span className="error-text">{errors.mobile}</span>}
                        </div>

                        {/* Business Type */}
                        <div className="form-group">
                            <label className="form-label">Business Type <span className="required">*</span></label>
                            <select
                                name="businessType"
                                className={`form-input ${errors.businessType ? 'error' : ''}`}
                                value={formData.businessType}
                                onChange={handleChange}
                            >
                                <option value="">Select business type</option>
                                <option value="Restaurant">Restaurant</option>
                                <option value="Cafe">Cafe</option>
                                <option value="QSR">QSR</option>
                                <option value="Manufacturing">Food Manufacturing</option>
                                <option value="Retail">Retail Store</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.businessType && <span className="error-text">{errors.businessType}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">Message (optional)</label>
                            <textarea
                                name="message"
                                className="form-input"
                                style={{ minHeight: '80px', resize: 'vertical' }}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Any specific requirements?"
                            />
                        </div>

                        {/* Disclaimer */}
                        <p className="form-disclaimer">
                            Disclaimer: This form is only meant for business, do not apply for jobs.
                        </p>

                        {/* Submit Status */}
                        {submitStatus && (
                            <div className={`form-message ${submitStatus.type}`}>
                                {submitStatus.message}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="form-submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InquiryModal;
