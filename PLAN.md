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
│   │   │   ├── Hero.css
│   │   │   └── InventoryAnimation.jsx
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
│   │   ├── ContactSidebar/
│   │   │   ├── ContactSidebar.jsx
│   │   │   └── ContactSidebar.css
│   │   └── Animations/
│   │       ├── KitchenFlowAnimation.jsx
│   │       ├── KitchenFlowAnimation.css
│   │       ├── StockLevelAnimation.jsx
│   │       ├── StockLevelAnimation.css
│   │       ├── FloatingIcons.jsx
│   │       └── FloatingIcons.css
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

**Animated Visual (Right Side)** - DETAILED CANVAS ANIMATION:

This is a **Canvas-based animated visualization** similar to ZenDMS's vehicle tracking globe, but adapted for **Inventory & Restaurant Management**.

**Component**: `src/components/Hero/InventoryAnimation.jsx`

**Visual Elements**:

1. **Dark Circular Globe** (Main Container):
   - Large dark navy circle (#1A365D)
   - Subtle grid pattern overlay (hexagonal or dotted)
   - Slight gradient from center to edge
   - Size: 450px x 450px

2. **Animated Inventory Items** (Moving Elements):
   Instead of vehicles, show moving inventory/food items:
   - 📦 **Package boxes** - Small orange squares moving along paths
   - 🍕 **Food items** - Small circles representing orders
   - 🏪 **Store icons** - Static location markers
   - 🍴 **Restaurant markers** - Fork/knife icons at fixed positions

3. **Connection Paths** (Animated Lines):
   - Curved paths connecting locations
   - Dashed lines with animated stroke-dashoffset
   - Lines pulse with color (orange glow)
   - Represent: Warehouse → Restaurant → Customer flow

4. **Location Nodes** (Static Points):
   - 4-6 glowing dots representing:
     - Central Warehouse (larger, pulsing)
     - Restaurant locations (medium, steady glow)
     - Delivery points (small, blinking)
   - Each node has a subtle glow effect

5. **Floating Particles** (Background Effect):
   - 20-30 small dots floating randomly
   - Represent inventory data points
   - Fade in/out with varying opacity
   - Move slowly in random directions

**Animation Specifications**:

```javascript
// InventoryAnimation.jsx - Canvas Animation Component

import React, { useRef, useEffect } from 'react';

const InventoryAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const size = 450;
    canvas.width = size;
    canvas.height = size;
    
    // Colors
    const colors = {
      background: '#1A365D',
      primary: '#E85D04',
      secondary: '#FF8C42',
      glow: 'rgba(232, 93, 4, 0.5)',
      particle: 'rgba(255, 255, 255, 0.3)',
      path: 'rgba(232, 93, 4, 0.4)',
      node: '#FFFFFF'
    };
    
    // Location nodes (fixed positions)
    const nodes = [
      { x: size/2, y: size/2, radius: 12, type: 'warehouse', label: 'HQ' },
      { x: size/2 - 120, y: size/2 - 80, radius: 8, type: 'restaurant' },
      { x: size/2 + 100, y: size/2 - 100, radius: 8, type: 'restaurant' },
      { x: size/2 + 130, y: size/2 + 60, radius: 8, type: 'store' },
      { x: size/2 - 80, y: size/2 + 110, radius: 8, type: 'store' },
      { x: size/2 - 150, y: size/2 + 30, radius: 6, type: 'delivery' }
    ];
    
    // Moving items (inventory boxes)
    const items = [];
    for (let i = 0; i < 8; i++) {
      items.push({
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.003,
        pathIndex: Math.floor(Math.random() * 5),
        size: 6 + Math.random() * 4
      });
    }
    
    // Floating particles
    const particles = [];
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * size,
        y: Math.random() * size,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random(),
        radius: 1 + Math.random() * 2
      });
    }
    
    // Path definitions (bezier curves between nodes)
    const paths = [
      { from: 0, to: 1 }, // Warehouse to Restaurant 1
      { from: 0, to: 2 }, // Warehouse to Restaurant 2
      { from: 0, to: 3 }, // Warehouse to Store 1
      { from: 0, to: 4 }, // Warehouse to Store 2
      { from: 1, to: 5 }  // Restaurant 1 to Delivery
    ];
    
    let dashOffset = 0;
    
    function animate() {
      // Clear canvas
      ctx.clearRect(0, 0, size, size);
      
      // Draw main circle background
      ctx.beginPath();
      ctx.arc(size/2, size/2, size/2 - 10, 0, Math.PI * 2);
      ctx.fillStyle = colors.background;
      ctx.fill();
      
      // Draw grid pattern (dots)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      for (let x = 30; x < size - 30; x += 20) {
        for (let y = 30; y < size - 30; y += 20) {
          const dist = Math.sqrt((x - size/2)**2 + (y - size/2)**2);
          if (dist < size/2 - 30) {
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      
      // Draw animated paths
      dashOffset -= 0.5;
      paths.forEach((path, index) => {
        const from = nodes[path.from];
        const to = nodes[path.to];
        
        // Calculate control point for curve
        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2;
        const cpX = midX + (Math.random() - 0.5) * 20;
        const cpY = midY - 30;
        
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.quadraticCurveTo(cpX, cpY, to.x, to.y);
        ctx.strokeStyle = colors.path;
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 10]);
        ctx.lineDashOffset = dashOffset;
        ctx.stroke();
        ctx.setLineDash([]);
      });
      
      // Draw and update particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += (Math.random() - 0.5) * 0.02;
        p.opacity = Math.max(0.1, Math.min(0.8, p.opacity));
        
        // Bounce off circular boundary
        const dist = Math.sqrt((p.x - size/2)**2 + (p.y - size/2)**2);
        if (dist > size/2 - 20) {
          p.vx *= -1;
          p.vy *= -1;
        }
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });
      
      // Draw moving inventory items along paths
      items.forEach(item => {
        item.progress += item.speed;
        if (item.progress > 1) {
          item.progress = 0;
          item.pathIndex = Math.floor(Math.random() * paths.length);
        }
        
        const path = paths[item.pathIndex];
        const from = nodes[path.from];
        const to = nodes[path.to];
        const t = item.progress;
        
        // Linear interpolation for position
        const x = from.x + (to.x - from.x) * t;
        const y = from.y + (to.y - from.y) * t - Math.sin(t * Math.PI) * 20;
        
        // Draw package box
        ctx.fillStyle = colors.primary;
        ctx.fillRect(x - item.size/2, y - item.size/2, item.size, item.size);
        
        // Glow effect
        ctx.shadowColor = colors.glow;
        ctx.shadowBlur = 10;
        ctx.fillRect(x - item.size/2, y - item.size/2, item.size, item.size);
        ctx.shadowBlur = 0;
      });
      
      // Draw location nodes
      nodes.forEach((node, index) => {
        // Glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 3
        );
        gradient.addColorStop(0, colors.glow);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = index === 0 ? colors.primary : colors.node;
        ctx.fill();
        
        // Pulsing effect for warehouse
        if (node.type === 'warehouse') {
          const pulseRadius = node.radius + 5 + Math.sin(Date.now() / 500) * 3;
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
          ctx.strokeStyle = colors.glow;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="inventory-animation">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default InventoryAnimation;
```

**CSS for Animation Container**:
```css
/* Hero.css */
.inventory-animation {
  position: relative;
  width: 450px;
  height: 450px;
}

.inventory-animation canvas {
  border-radius: 50%;
  box-shadow: 
    0 0 60px rgba(232, 93, 4, 0.2),
    0 0 100px rgba(26, 54, 93, 0.5);
}

/* Responsive */
@media (max-width: 992px) {
  .inventory-animation {
    width: 350px;
    height: 350px;
  }
}

@media (max-width: 768px) {
  .inventory-animation {
    display: none; /* Hide on mobile for performance */
  }
}
```

**Animation Features Summary**:
| Feature | Description |
|---------|-------------|
| Dark Globe | Navy circular background with dot grid |
| Location Nodes | 6 nodes: 1 warehouse (center), 2 restaurants, 2 stores, 1 delivery |
| Moving Items | 8 package boxes moving along curved paths |
| Path Lines | Dashed animated lines connecting locations |
| Particles | 25 floating dots for ambient effect |
| Glow Effects | Orange glow on nodes and moving items |
| Pulse Effect | Warehouse node pulses continuously |
| Performance | Canvas-based for smooth 60fps animation |

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

### 6. Restaurant Kitchen Flow Animation (Optional Secondary Animation)

**Component**: `src/components/Animations/KitchenFlowAnimation.jsx`

This can be used in the Features or Solutions section to show restaurant workflow.

```javascript
// KitchenFlowAnimation.jsx - Animated Restaurant Workflow

import React, { useRef, useEffect } from 'react';

const KitchenFlowAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = 600;
    canvas.height = 200;
    
    const colors = {
      bg: '#1A365D',
      primary: '#E85D04',
      secondary: '#FF8C42',
      white: '#FFFFFF',
      glow: 'rgba(232, 93, 4, 0.6)'
    };
    
    // Workflow stages
    const stages = [
      { x: 60, y: 100, label: 'Order', icon: '📋' },
      { x: 180, y: 100, label: 'Kitchen', icon: '👨‍🍳' },
      { x: 300, y: 100, label: 'Prep', icon: '🍳' },
      { x: 420, y: 100, label: 'Ready', icon: '✅' },
      { x: 540, y: 100, label: 'Serve', icon: '🍽️' }
    ];
    
    // Moving order indicators
    const orders = [
      { progress: 0, speed: 0.005, color: colors.primary },
      { progress: 0.3, speed: 0.004, color: colors.secondary },
      { progress: 0.6, speed: 0.006, color: colors.primary }
    ];
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connecting line
      ctx.beginPath();
      ctx.moveTo(stages[0].x, stages[0].y);
      stages.forEach(stage => {
        ctx.lineTo(stage.x, stage.y);
      });
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Draw stages
      stages.forEach((stage, i) => {
        // Glow
        ctx.beginPath();
        ctx.arc(stage.x, stage.y, 25, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(stage.x, stage.y, 0, stage.x, stage.y, 35);
        gradient.addColorStop(0, colors.glow);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Circle
        ctx.beginPath();
        ctx.arc(stage.x, stage.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = i === 0 || i === stages.length - 1 ? colors.primary : colors.white;
        ctx.fill();
        
        // Label
        ctx.fillStyle = colors.white;
        ctx.font = '12px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(stage.label, stage.x, stage.y + 45);
      });
      
      // Animate orders moving along path
      orders.forEach(order => {
        order.progress += order.speed;
        if (order.progress > 1) order.progress = 0;
        
        const pathLength = stages.length - 1;
        const segment = Math.floor(order.progress * pathLength);
        const t = (order.progress * pathLength) - segment;
        
        if (segment < stages.length - 1) {
          const from = stages[segment];
          const to = stages[segment + 1];
          const x = from.x + (to.x - from.x) * t;
          const y = from.y - Math.sin(t * Math.PI) * 15;
          
          // Draw order dot
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.fillStyle = order.color;
          ctx.shadowColor = colors.glow;
          ctx.shadowBlur = 15;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
  }, []);

  return <canvas ref={canvasRef} className="kitchen-flow-animation" />;
};

export default KitchenFlowAnimation;
```

### 7. Inventory Stock Level Animation

**Component**: `src/components/Animations/StockLevelAnimation.jsx`

Animated bar chart showing real-time stock levels.

```javascript
// StockLevelAnimation.jsx - Animated Stock Bars

import React, { useRef, useEffect, useState } from 'react';

const StockLevelAnimation = () => {
  const [levels, setLevels] = useState([
    { name: 'Tomatoes', level: 75, max: 100, color: '#E85D04' },
    { name: 'Cheese', level: 45, max: 100, color: '#FF8C42' },
    { name: 'Flour', level: 90, max: 100, color: '#E85D04' },
    { name: 'Chicken', level: 30, max: 100, color: '#DC2626' },
    { name: 'Olive Oil', level: 60, max: 100, color: '#FF8C42' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLevels(prev => prev.map(item => ({
        ...item,
        level: Math.max(10, Math.min(95, item.level + (Math.random() - 0.5) * 10))
      })));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stock-animation">
      {levels.map((item, i) => (
        <div key={i} className="stock-bar-container">
          <span className="stock-name">{item.name}</span>
          <div className="stock-bar-bg">
            <div 
              className="stock-bar-fill"
              style={{
                width: `${item.level}%`,
                backgroundColor: item.level < 40 ? '#DC2626' : item.color,
                transition: 'width 0.5s ease, background-color 0.3s'
              }}
            />
          </div>
          <span className="stock-value">{Math.round(item.level)}%</span>
        </div>
      ))}
    </div>
  );
};

export default StockLevelAnimation;
```

```css
/* StockLevelAnimation.css */
.stock-animation {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  background: #1A365D;
  border-radius: 12px;
}

.stock-bar-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.stock-name {
  width: 80px;
  color: #fff;
  font-size: 14px;
}

.stock-bar-bg {
  flex: 1;
  height: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  overflow: hidden;
}

.stock-bar-fill {
  height: 100%;
  border-radius: 6px;
  box-shadow: 0 0 10px currentColor;
}

.stock-value {
  width: 50px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-align: right;
}
```

### 8. Floating Icons Animation (CSS Only)

For lighter-weight decorative elements throughout the page.

```css
/* FloatingIcons.css */
.floating-icons-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.floating-icon {
  position: absolute;
  font-size: 24px;
  opacity: 0.15;
  animation: floatIcon 6s ease-in-out infinite;
}

.floating-icon:nth-child(1) { left: 10%; top: 20%; animation-delay: 0s; }
.floating-icon:nth-child(2) { left: 20%; top: 60%; animation-delay: 1s; }
.floating-icon:nth-child(3) { left: 70%; top: 30%; animation-delay: 2s; }
.floating-icon:nth-child(4) { left: 80%; top: 70%; animation-delay: 3s; }
.floating-icon:nth-child(5) { left: 50%; top: 85%; animation-delay: 4s; }

@keyframes floatIcon {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.1;
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
    opacity: 0.25;
  }
}
```

```jsx
// FloatingIcons.jsx
const FloatingIcons = () => (
  <div className="floating-icons-container">
    <span className="floating-icon">📦</span>
    <span className="floating-icon">🍴</span>
    <span className="floating-icon">📊</span>
    <span className="floating-icon">🏪</span>
    <span className="floating-icon">🛒</span>
  </div>
);
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

---

## Visual Animations Summary

This section provides a complete overview of all animated visual elements in the website.

### Primary Animation: Inventory Flow Globe (Hero Section)

| Aspect | Details |
|--------|---------|
| **Component** | `src/components/Hero/InventoryAnimation.jsx` |
| **Technology** | HTML5 Canvas + JavaScript |
| **Size** | 450x450px (responsive) |
| **Location** | Right side of Hero section |
| **Purpose** | Visual representation of inventory/order flow |

**Visual Elements**:
1. Dark navy circular globe with dot grid pattern
2. 6 location nodes (warehouse, restaurants, stores, delivery points)
3. 8 moving package boxes along curved paths
4. 25 floating ambient particles
5. Animated dashed connection lines
6. Pulsing glow effects on nodes

### Secondary Animations

| Animation | Component | Purpose | Location |
|-----------|-----------|---------|----------|
| Kitchen Flow | `KitchenFlowAnimation.jsx` | Restaurant order workflow | Features/Solutions |
| Stock Levels | `StockLevelAnimation.jsx` | Real-time inventory bars | Features section |
| Floating Icons | `FloatingIcons.jsx` | Decorative background | Throughout page |
| Rotating Text | CSS + JS | Hero headline effect | Hero section |
| Counter Animation | JavaScript | Stats count-up | Statistics section |

### Animation Performance Guidelines

1. **Canvas Animations**: Use `requestAnimationFrame` for smooth 60fps
2. **CSS Animations**: Prefer `transform` and `opacity` for GPU acceleration
3. **Mobile**: Hide heavy Canvas animations below 768px breakpoint
4. **Reduced Motion**: Respect `prefers-reduced-motion` media query

```css
@media (prefers-reduced-motion: reduce) {
  .inventory-animation,
  .kitchen-flow-animation,
  .floating-icon {
    animation: none !important;
  }
}
```

### Animation Timeline (On Page Load)

| Time | Animation | Effect |
|------|-----------|--------|
| 0ms | Page loads | Header visible |
| 100ms | Hero text | Fade in from bottom |
| 300ms | Canvas animation | Starts rendering |
| 500ms | CTA button | Fade in |
| 1000ms | Trust badges | Slide in |
| 3000ms | Rotating text | First word rotation |

### Key Animation Code Files

```
src/
├── components/
│   ├── Hero/
│   │   └── InventoryAnimation.jsx    # Main Canvas animation
│   └── Animations/
│       ├── KitchenFlowAnimation.jsx  # Restaurant workflow
│       ├── StockLevelAnimation.jsx   # Stock bar charts
│       └── FloatingIcons.jsx         # CSS floating icons
├── styles/
│   └── global.css                    # Global animation keyframes
└── utils/
    └── animations.js                 # Animation utilities
```

---

## Quick Reference: All Components

| Component | File | Description |
|-----------|------|-------------|
| Header | `Header.jsx` | Sticky nav with dropdowns |
| Hero | `Hero.jsx` | Main hero with rotating text |
| InventoryAnimation | `InventoryAnimation.jsx` | Canvas-based flow animation |
| Features | `Features.jsx` | 3-column feature cards |
| Solutions | `Solutions.jsx` | End-to-end + solutions grid |
| Integrations | `Integrations.jsx` | Integration partners grid |
| Statistics | `Statistics.jsx` | Animated counter stats |
| FAQ | `FAQ.jsx` | Accordion Q&A |
| CTA | `CTA.jsx` | Call-to-action banner |
| Footer | `Footer.jsx` | Multi-column footer |
| InquiryModal | `InquiryModal.jsx` | Demo request form |
| ContactSidebar | `ContactSidebar.jsx` | Fixed contact button |
| Animations/* | Various | Additional animations |

---

**END OF IMPLEMENTATION PLAN**
