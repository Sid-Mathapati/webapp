/**
 * Animation Utilities
 * ===================
 * Helper functions for scroll-based animations and counters
 */

/**
 * Initialize scroll-based animations using Intersection Observer
 * @param {string} selector - CSS selector for elements to animate
 * @param {Object} options - Intersection Observer options
 */
export const initScrollAnimations = (selector = '.animate-on-scroll', options = {}) => {
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, defaultOptions);

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return observer;
};

/**
 * Animate a number counting up
 * @param {HTMLElement} element - Element to update
 * @param {number} target - Target number
 * @param {number} duration - Animation duration in ms
 * @param {string} suffix - Optional suffix (e.g., '%', '+')
 * @param {string} prefix - Optional prefix (e.g., '$')
 */
export const animateCounter = (element, target, duration = 2000, suffix = '', prefix = '') => {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const updateCounter = () => {
        current += increment;

        if (current >= target) {
            element.textContent = `${prefix}${target}${suffix}`;
            return;
        }

        // Handle decimals
        const displayValue = target % 1 !== 0
            ? current.toFixed(1)
            : Math.floor(current);

        element.textContent = `${prefix}${displayValue}${suffix}`;
        requestAnimationFrame(updateCounter);
    };

    requestAnimationFrame(updateCounter);
};

/**
 * Initialize counters that animate on scroll
 * @param {string} selector - CSS selector for counter elements
 */
export const initCounterAnimations = (selector = '.counter') => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseFloat(element.dataset.target);
                const suffix = element.dataset.suffix || '';
                const prefix = element.dataset.prefix || '';
                const duration = parseInt(element.dataset.duration) || 2000;

                animateCounter(element, target, duration, suffix, prefix);
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.5 });

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return observer;
};

/**
 * Smooth scroll to element
 * @param {string} targetId - Element ID to scroll to
 * @param {number} offset - Offset from top in pixels
 */
export const smoothScrollTo = (targetId, offset = 0) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
    });
};

/**
 * Debounce function for scroll handlers
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 */
export const debounce = (func, wait = 100) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

/**
 * Throttle function for scroll handlers
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit in ms
 */
export const throttle = (func, limit = 100) => {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

export default {
    initScrollAnimations,
    animateCounter,
    initCounterAnimations,
    smoothScrollTo,
    debounce,
    throttle,
};
