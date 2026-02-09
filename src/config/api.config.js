/**
 * API Configuration
 * =================
 * Configure your backend API endpoints here.
 * Change the INQUIRY_ENDPOINT to point to your backend server.
 */

export const API_CONFIG = {
  // Default endpoint for inquiry form submissions
  INQUIRY_ENDPOINT: "http://localhost:3000/api/inquiries/submit",

  // Request timeout in milliseconds
  TIMEOUT: 10000,

  // Retry attempts for failed requests
  RETRY_ATTEMPTS: 3,
};

/**
 * Submit inquiry form data to the backend
 * @param {Object} formData - The form data to submit
 * @returns {Promise<Object>} - Response from the server
 */
export const submitInquiry = async (formData) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

  try {
    const response = await fetch(API_CONFIG.INQUIRY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);

    if (error.name === 'AbortError') {
      throw new Error('Request timed out. Please try again.');
    }

    throw error;
  }
};

export default API_CONFIG;
