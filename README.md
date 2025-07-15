# E-commerce Product Card Implementation

A modern, responsive React e-commerce application featuring a comprehensive Product Card component built for optimal user experience across all devices.

## 🎯 Product Card Demo

**Live Demo**: [View Deployment](https://your-vercel-url.vercel.app/demo)

### Demo Pages
- **Home Page**: `/` - Product cards integrated into main page
- **Products Page**: `/product` - Full product listing with filtering
- **Product Card Demo**: `/demo` - Dedicated showcase of all features

## 🚀 Features

### ✅ Product Card Requirements Met
- **Product Image** - High-quality responsive images with lazy loading
- **Product Name** - Truncated titles with tooltip support
- **Product Price** - Dynamic pricing with discount display
- **Variant Selection** - Interactive dropdown for product options
- **Add to Cart Button** - Functional with stock validation
- **Out of Stock State** - Disabled button with visual overlay
- **Modern UI/UX** - Clean design with hover effects and animations

### 🎨 Layout Approach
The Product Card uses a **CSS Grid and Bootstrap-based responsive layout** with consistent card heights achieved through flexbox. Each card maintains uniform spacing and proper content alignment while adapting seamlessly to different screen sizes through Bootstrap's responsive grid system.

### 📱 Responsiveness Considerations
The design follows a **mobile-first approach with progressive enhancement**, implementing responsive breakpoints at 576px, 768px, and 992px. Cards automatically adjust from 4 columns on large screens to 3 on medium, 2 on small, and 1 on mobile devices, ensuring optimal viewing and interaction on all device types.

## 🛠️ Technical Implementation

### Component Structure
```
src/
├── components/
│   ├── ProductCard.jsx       # Main product card component
│   ├── Products.jsx          # Product listing with filtering
│   └── index.js              # Component exports
├── pages/
│   └── ProductCardDemo.jsx   # Demo showcase page
├── data/
│   └── testProducts.js       # Sample product data
└── public/
    └── product-card.css      # Styling for components
```

### Key Features
- **Responsive Design**: 4→3→2→1 column layout across breakpoints
- **Variant Management**: Dynamic pricing and option selection
- **Stock Validation**: Real-time availability checking
- **Modern Animations**: Smooth hover effects and transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation

### Sample Product Data
The implementation includes comprehensive test data with:
- Products with variants (size, color, etc.)
- Discount pricing scenarios
- Out-of-stock states
- Different product categories

## 📱 Responsive Breakpoints

| Screen Size | Columns | Breakpoint |
|-------------|---------|------------|
| Large (≥992px) | 4 | `col-lg-3` |
| Medium (768px-991px) | 3 | `col-md-4` |
| Small (576px-767px) | 2 | `col-sm-6` |
| Mobile (≤575px) | 1 | `col-12` |

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start
```bash
# Clone the repository
git clone https://github.com/Mearpithere/Hustlr.git
cd Hustlr

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run client` - Start React client only
- `npm run server` - Start API server only

The server should now be running. You can access the application by opening a web browser and entering a
