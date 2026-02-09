# StoreZen - Inventory & Restaurant Management Platform

## Implementation Plan

A single-page React website inspired by ZenDMS design for **Inventory Management & Restaurant Management** solutions.

---

## Project Overview

- **Type**: Marketing/Landing Page (NOT a web app)
- **Framework**: React with Vite
- **Styling**: Vanilla CSS with CSS Variables
- **Backend**: None required
- **Inquiry Form Endpoint**: `http://localhost:3000/inquiry` (configurable)

---

## Design System

### Color Palette

| Purpose | Hex Code | Usage |
|---------|----------|-------|
| Primary Accent | `#E85D04` | CTAs, buttons, highlights |
| Secondary Dark | `#1A365D` | Headings, dark backgrounds |
| Background | `#F8F9FA` | Main page background |
| Light Accent | `#FFF0EB` | Badge backgrounds, light sections |
| Text Primary | `#2D3748` | Body text |
| Text Secondary | `#718096` | Muted text |
| White | `#FFFFFF` | Cards, modals |
| Border | `#E2E8F0` | Input borders, dividers |

### Typography

| Element | Font Family | Size | Weight |
|---------|-------------|------|--------|
| H1 (Hero) | `Roboto Condensed` | 52px | 700 |
| H2 (Sections) | `Roboto Condensed` | 40px | 700 |
| H3 (Cards) | `Inter` | 24px | 600 |
| H4 (Subheadings) | `Inter` | 20px | 600 |
| Body | `Inter` | 16px | 400 |
| Small | `Inter` | 14px | 400 |
| Button | `Inter` | 14px | 600 |

### Design Tokens

```css
--border-radius-sm: 4px;
--border-radius-md: 8px;
--border-radius-lg: 12px;
--shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 25px rgba(0,0,0,0.15);
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--max-width: 1200px;
--header-height: 72px;
```

---

## Project Structure

```
webapp/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   └── Dropdown.jsx
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── Features/
│   │   │   ├── Features.jsx
│   │   │   ├── FeatureCard.jsx
│   │   │   └── Features.css
│   │   ├── Solutions/
│   │   │   ├── Solutions.jsx
│   │   │   └── Solutions.css
│   │   ├── Integrations/
│   │   │   ├── Integrations.jsx
│   │   │   └── Integrations.css
│   │   ├── Statistics/
│   │   │   ├── Statistics.jsx
│   │   │   └── Statistics.css
│   │   ├── FAQ/
│   │   │   ├── FAQ.jsx
│   │   │   ├── FAQItem.jsx
│   │   │   └── FAQ.css
│   │   ├── CTA/
│   │   │   ├── CTA.jsx
│   │   │   └── CTA.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── InquiryModal/
│   │   │   ├── InquiryModal.jsx
│   │   │   └── InquiryModal.css
│   │   └── ContactSidebar/
│   │       ├── ContactSidebar.jsx
│   │       └── ContactSidebar.css
│   ├── config/
│   │   └── api.config.js
│   ├── styles/
│   │   ├── variables.css
│   │   └── global.css
│   ├── utils/
│   │   └── animations.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## Page Sections

### 1. Header/Navigation

**Component**: `Header.jsx`

**Structure**:
- Logo (left): "StoreZen" text logo with icon
- Navigation (center):
  - **Solutions** dropdown:
    - Inventory Management
    - Restaurant Management
    - Order Tracking
    - Stock Control
  - **Industries** dropdown:
    - Restaurants & Cafes
    - Retail Stores
    - Food Manufacturing
    - Warehouses
  - **Features** dropdown:
    - Real-time Tracking
    - Analytics Dashboard
    - Multi-location Support
  - **Contact** link
- CTA Button (right): "Request a Demo"

**Behavior**:
- Sticky header on scroll
- Blur background effect when scrolled
- Dropdowns show on hover with fade animation
- Mobile: Hamburger menu

**CSS Details**:
- Height: 72px
- Background: rgba(255,255,255,0.95) + backdrop-blur
- Shadow on scroll: var(--shadow-sm)

---

### 2. Hero Section

**Component**: `Hero.jsx`

**Layout**:
- Left side (60%): Text content
- Right side (40%): Animated visual

**Content**:
```
Headline: "Smart Management Platform for [ROTATING_WORD]"
Subline: "That Need Complete Operational Visibility"

Rotating words: ["Restaurants", "Retail Stores", "Warehouses", "Food Chains"]
Rotation interval: 3000ms
Animation: Fade out up, fade in up

Description: "Real-time visibility and control across inventory, orders, and operations—whether you manage single or multi-location businesses. One unified platform."

CTA Button: "Request a Demo" (opens inquiry modal)

Trust badges section:
- Label: "TRUSTED BY INDUSTRY LEADERS"
- Logos (grayscale): 5 placeholder company names
  - "FreshMart", "CafeChain", "QuickBites", "StorePro", "FoodHub"
```

**Animated Visual (Right Side)**:
- Large dark circle (navy #1A365D)
- Floating dots/particles animation
- CSS keyframes: particles float and fade

**CSS Details**:
- Padding: 120px 0 80px
- Max-width container: 1200px
- Rotating text color: var(--primary-accent)

---

### 3. Features Section (Next-Gen Mastery)

**Component**: `Features.jsx`

**Section Header**:
```
Title: "Next-Gen Operational Mastery"
Subtitle: "Streamlined, Smart and Secure"
```

**Cards (3 columns)**:

**Card 1 - Automated**:
- Icon: Cloud/Gear icon
- Title: "Automated"
- Description: "Cloud-based auto-assignments, real-time stock updates, and intelligent reorder alerts for all your inventory needs."
- Background: Light

**Card 2 - AI-Powered**:
- Icon: Brain/AI icon
- Title: "AI-Powered"
- Description: "Smart demand forecasting, waste reduction alerts, and real-time anomaly detection to optimize operations."
- Background: Primary accent color

**Card 3 - IoT Enabled**:
- Icon: Sensor icon
- Title: "IoT Enabled"
- Description: "Temperature, humidity, and freshness tracking with IoT sensors—perfect for restaurants and food businesses."
- Background: Secondary dark color

**CSS Details**:
- Card border-radius: 12px
- Padding: 32px
- Icon size: 48px
- Hover: translateY(-4px) + shadow increase

---

### 4. End-to-End Solution Section

**Component**: `Solutions.jsx` (part 1)

**Layout**: Full-width with centered content

**Content**:
```
Title: "Built for End-to-End Operations"
Description: "StoreZen connects your orders, inventory, locations, and customers into a single real-time management control tower."
```

**Visual**: Simple flow diagram showing:
Orders → Inventory → Fulfillment → Analytics

---

### 5. Integrations Section

**Component**: `Integrations.jsx`

**Section Header**:
```
Title: "Integrates with your existing systems"
Subtitle: "API-first architecture. Go live in as fast as 2 weeks."
```

**Integration Grid (6 categories, 2 rows x 3 cols)**:

**1. POS Systems**:
- Square, Clover, Toast, Lightspeed

**2. Accounting**:
- Tally, QuickBooks, Zoho Books, Xero

**3. E-commerce/Delivery**:
- Shopify, WooCommerce, Zomato, Swiggy

**4. Notifications**:
- WhatsApp Business API, SMS, Email

**5. Hardware**:
- Barcode scanners, IoT sensors, Weighing scales

**6. Analytics**:
- Power BI, Tableau, Google Analytics

**CSS Details**:
- Card layout with icon + title + description
- Light background cards
- Subtle border

---

### 6. Statistics Section

**Component**: `Statistics.jsx`

**Section Header**:
```
Title: "Proven Operational Outcomes"
Description: "Real results from deployments across restaurants, retail, and food businesses."
```

**Stats Grid (6 items, 3 cols x 2 rows)**:

| Stat | Label |
|------|-------|
| 30% | Cost Reduction |
| 50% | Fewer Errors |
| 98% | Order Accuracy |
| 40% | Better Customer Ratings |
| 2 | Weeks to Launch |
| 99.5% | Inventory Accuracy |

**Animation**: Count-up animation on scroll into view

**CSS Details**:
- Background: var(--secondary-dark) #1A365D
- Text color: white
- Large numbers: 56px font size
- Subtle descriptions below each

---

### 7. Solutions Grid

**Component**: `Solutions.jsx` (part 2)

**Section Header**:
```
Title: "Other Management Solutions"
```

**Cards (4 items, 2x2 grid)**:

**1. Inventory Management System**:
- Icon: Box/Package icon
- Title: "Inventory Management System"
- Description: "Track stock levels across multiple locations with real-time updates and smart reorder alerts."
- Link: "#"

**2. Restaurant Management System**:
- Icon: Utensils icon
- Title: "Restaurant Management System"
- Description: "Complete kitchen operations, table management, and order tracking in one platform."
- Link: "#"

**3. Order Management System**:
- Icon: Clipboard icon
- Title: "Order Management System"
- Description: "End-to-end order processing, tracking, and fulfillment automation."
- Link: "#"

**4. Analytics Dashboard**:
- Icon: Chart icon
- Title: "Analytics Dashboard"
- Description: "Actionable insights, custom reports, and real-time business intelligence."
- Link: "#"

**CSS Details**:
- Hover effect: lift + shadow
- Icon circle background
- "Learn more →" link text

---

### 8. FAQ Section

**Component**: `FAQ.jsx`, `FAQItem.jsx`

**Section Header**:
```
Title: "Frequently Asked Questions"
```

**Layout**: Two columns, accordion style

**Questions (Left Column)**:

1. **What is the Difference Between Inventory Management and ERP?**
   - Answer: "ERP systems are comprehensive suites integrating finance, HR, and operations. Inventory Management specifically focuses on tracking stock levels, orders, and supply chain. StoreZen excels as a management platform that integrates with your existing ERP."

2. **What is an Inventory Management System?**
   - Answer: "An inventory management system tracks stock levels, orders, sales, and deliveries. It helps businesses optimize stock, reduce waste, and improve order accuracy. StoreZen offers cutting-edge inventory management for businesses of all sizes."

3. **How does StoreZen help restaurants?**
   - Answer: "StoreZen provides real-time ingredient tracking, automated reorder alerts, recipe costing, waste management, and integration with POS systems. It helps restaurants reduce food waste by up to 30%."

4. **How long does implementation take?**
   - Answer: "Most businesses go live within 2 weeks. Our API-first architecture and modular design enable rapid deployment with minimal disruption."

**Questions (Right Column)**:

5. **What integrations are supported?**
   - Answer: "We integrate with major POS systems (Square, Clover, Toast), accounting software (Tally, QuickBooks), delivery platforms (Zomato, Swiggy), and more. Custom integrations available via API."

6. **What are the key features?**
   - Answer: "Real-time tracking, multi-location support, automated alerts, demand forecasting, IoT sensor integration, analytics dashboard, and mobile app access."

7. **Is StoreZen suitable for multi-location businesses?**
   - Answer: "Yes! StoreZen is built for multi-location businesses with centralized dashboard, location-wise analytics, and unified inventory management."

8. **What support is available?**
   - Answer: "We offer 24/7 customer support, dedicated account managers, onboarding assistance, and comprehensive documentation."

**Accordion Behavior**:
- Click to expand/collapse
- Smooth height transition (0.3s)
- Plus/minus or arrow icon toggle
- Only one expanded at a time (optional)

---

### 9. CTA Section

**Component**: `CTA.jsx`

**Content**:
```
Title: "Ready to Transform Your Operations?"
Subtitle: "Join industry leaders who trust StoreZen for their business management"
Button: "Schedule a Demo"
```

**CSS Details**:
- Background: Light gradient or accent color tint
- Centered text
- Large CTA button

---

### 10. Footer

**Component**: `Footer.jsx`

**Layout**: 4 columns

**Column 1 - Brand**:
```
Logo: StoreZen
Description: "A comprehensive inventory and restaurant management platform for end-to-end operational excellence."
Certification badge: ISO 27001:2022 (or similar placeholder)
```

**Column 2 - Company**:
```
- About Us
- Blog
- Careers
- FAQs
- Privacy Policy
- Terms & Conditions
```

**Column 3 - Product**:
```
- Features
- Industries
- Integrations
- Pricing
- API Documentation
```

**Column 4 - Contact**:
```
Address: Your Business Address
Phone: +91-XXXX-XXX-XXX
Email: contact@storezen.app
```

**Bottom Bar**:
```
Copyright: © 2026 StoreZen. All rights reserved.
Social Icons: Facebook, LinkedIn, Twitter, YouTube
```

---

### 11. Floating Contact Sidebar

**Component**: `ContactSidebar.jsx`

**Design**:
- Vertical text: "CONTACT US"
- Position: Fixed right edge, vertically centered
- Background: var(--primary-accent)
- Text color: white
- Click: Opens inquiry modal
- Rotation: text-orientation vertical

---

### 12. Inquiry Modal

**Component**: `InquiryModal.jsx`

**Modal Design**:
- Centered overlay
- White card with shadow
- Close button (X) top right
- Title: "Book your Demo Now!"

**Form Fields**:

```javascript
{
  name: {
    type: "text",
    label: "Name *",
    required: true,
    placeholder: ""
  },
  companyName: {
    type: "text", 
    label: "Company name *",
    required: true,
    placeholder: ""
  },
  workEmail: {
    type: "email",
    label: "Work email id (optional)",
    required: false,
    placeholder: ""
  },
  phoneNumber: {
    type: "tel",
    label: "Phone Number *",
    required: true,
    placeholder: "",
    countryCode: "+91" // Dropdown with country codes
  },
  lookingForSolution: {
    type: "radio",
    label: "Are you currently looking for a management solution for your business?",
    options: ["Yes", "No"],
    required: true
  }
}
```

**Disclaimer Text**:
"Disclaimer: This form is only meant for business, do not apply for jobs."

**Submit Button**:
- Text: "Submit Enquiry"
- Background: var(--primary-accent)
- Full width

**Form Submission**:
```javascript
// src/config/api.config.js
export const API_CONFIG = {
  INQUIRY_ENDPOINT: "http://localhost:3000/inquiry"
};

// Submit handler
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const formData = {
    name,
    companyName,
    workEmail,
    phoneNumber: `${countryCode}${phoneNumber}`,
    lookingForSolution,
    submittedAt: new Date().toISOString()
  };
  
  try {
    const response = await fetch(API_CONFIG.INQUIRY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      // Show success message
      // Close modal
    } else {
      // Show error message
    }
  } catch (error) {
    // Handle network error
  }
};
```

---

## Animations

### 1. Hero Rotating Text
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
```

### 2. Hero Particles
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-20px) translateX(10px);
    opacity: 0.8;
  }
}

.particle {
  animation: float 4s ease-in-out infinite;
}
```

### 3. Scroll Reveal
```javascript
// Use Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

// Apply to elements with .animate-on-scroll class
```

### 4. Counter Animation
```javascript
const animateCounter = (element, target) => {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 30);
};
```

### 5. FAQ Accordion
```css
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-item.open .faq-answer {
  max-height: 500px;
}
```

---

## Responsive Design

### Breakpoints

```css
/* Mobile first approach */

/* Small devices (phones) */
@media (min-width: 576px) { }

/* Medium devices (tablets) */
@media (min-width: 768px) { }

/* Large devices (desktops) */
@media (min-width: 992px) { }

/* Extra large devices */
@media (min-width: 1200px) { }
```

### Mobile Adaptations

- Header: Hamburger menu
- Hero: Stack vertically, hide animated visual on small screens
- Feature cards: Single column
- Stats: 2 columns then 1 column
- FAQ: Single column
- Footer: Stacked columns

---

## SEO Requirements

```html
<head>
  <title>StoreZen - Smart Inventory & Restaurant Management Platform</title>
  <meta name="description" content="Transform your business operations with StoreZen. Real-time inventory tracking, restaurant management, and analytics for modern businesses.">
  <meta name="keywords" content="inventory management, restaurant management, stock control, order tracking, POS integration">
  <meta property="og:title" content="StoreZen - Smart Management Platform">
  <meta property="og:description" content="Real-time visibility and control across inventory, orders, and operations.">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://storezen.app">
</head>
```

---

## Development Steps

### Phase 1: Project Setup
1. Initialize Vite + React project
2. Set up folder structure as specified
3. Create CSS variables file
4. Create global styles
5. Add Google Fonts (Inter, Roboto Condensed)
6. Create API config file

### Phase 2: Header & Hero
1. Build Header component with logo
2. Create dropdown navigation
3. Implement sticky header behavior
4. Build Hero section with text
5. Add rotating text animation
6. Create animated particles background

### Phase 3: Content Sections
1. Build Features section with 3 cards
2. Build End-to-End section
3. Build Integrations grid
4. Build Statistics section with animations
5. Build Solutions grid

### Phase 4: FAQ & Footer
1. Build FAQ accordion component
2. Implement expand/collapse logic
3. Build Footer with all links
4. Add social icons

### Phase 5: Modal & Sidebar
1. Build InquiryModal component
2. Implement form with validation
3. Connect to API endpoint
4. Build ContactSidebar
5. Wire up modal triggers

### Phase 6: Polish
1. Add all scroll animations
2. Test responsive design
3. Add hover effects
4. Optimize performance
5. Add SEO meta tags

---

## API Configuration

**File**: `src/config/api.config.js`

```javascript
/**
 * API Configuration
 * Change the INQUIRY_ENDPOINT to point to your backend
 */
export const API_CONFIG = {
  // Default endpoint for inquiry form submissions
  INQUIRY_ENDPOINT: "http://localhost:3000/inquiry",
  
  // Request timeout in milliseconds
  TIMEOUT: 10000,
};
```

**To change the endpoint**: Edit the `INQUIRY_ENDPOINT` value in `api.config.js`.

---

## Important Notes

1. **No Backend Required**: This is a static website. Form submissions go to the configured endpoint.

2. **Configurable API**: The inquiry endpoint is configurable in `src/config/api.config.js`.

3. **Original Branding**: Use "StoreZen" branding, not ZenDMS, to avoid copyright issues.

4. **Original Colors**: Use our custom color palette, not ZenDMS's exact colors.

5. **Original Copy**: All text content should be original, focused on inventory & restaurant management.

6. **React Website**: Single page, no routing needed. Just scroll-based sections.

7. **Vanilla CSS**: No Tailwind or CSS frameworks. Use CSS custom properties.

---

## Reference Screenshots

The following screenshots from ZenDMS analysis are available for design reference:
- Hero section layout
- Dropdown menu structure  
- Request demo form modal
- FAQ accordion design
- Footer layout

Use these as visual guides while maintaining original branding and content.
