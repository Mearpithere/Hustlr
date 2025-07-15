// Sample test data for Product Card testing
export const testProducts = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality.",
    price: 199.99,
    cuttedPrice: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "electronics",
    stock: 15,
    discount: 20,
    rating: 4.5,
    variants: [
      { id: "v1", name: "Black", price: 199.99, originalPrice: 249.99 },
      { id: "v2", name: "White", price: 199.99, originalPrice: 249.99 },
      { id: "v3", name: "Red", price: 209.99, originalPrice: 259.99 }
    ]
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and waterproof design for all your activities.",
    price: 299.99,
    cuttedPrice: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "electronics",
    stock: 8,
    discount: 25,
    rating: 4.7,
    variants: [
      { id: "v1", name: "42mm Black", price: 299.99, originalPrice: 399.99 },
      { id: "v2", name: "42mm Silver", price: 299.99, originalPrice: 399.99 },
      { id: "v3", name: "46mm Black", price: 329.99, originalPrice: 429.99 }
    ]
  },
  {
    id: 3,
    title: "Organic Cotton T-Shirt",
    description: "Comfortable organic cotton t-shirt with a modern fit and sustainable materials.",
    price: 29.99,
    cuttedPrice: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "men's clothing",
    stock: 0,
    discount: 25,
    rating: 4.3,
    variants: [
      { id: "v1", name: "Small", price: 29.99, originalPrice: 39.99 },
      { id: "v2", name: "Medium", price: 29.99, originalPrice: 39.99 },
      { id: "v3", name: "Large", price: 29.99, originalPrice: 39.99 }
    ]
  },
  {
    id: 4,
    title: "Classic Leather Wallet",
    description: "Handcrafted genuine leather wallet with multiple card slots and a timeless design.",
    price: 79.99,
    cuttedPrice: 99.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "accessories",
    stock: 12,
    discount: 20,
    rating: 4.6,
    variants: [
      { id: "v1", name: "Brown", price: 79.99, originalPrice: 99.99 },
      { id: "v2", name: "Black", price: 79.99, originalPrice: 99.99 },
      { id: "v3", name: "Tan", price: 89.99, originalPrice: 109.99 }
    ]
  },
  {
    id: 5,
    title: "Minimalist Desk Lamp",
    description: "Modern LED desk lamp with adjustable brightness and sleek minimalist design.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    category: "home",
    stock: 20,
    rating: 4.4,
    variants: [
      { id: "v1", name: "White", price: 89.99 },
      { id: "v2", name: "Black", price: 89.99 },
      { id: "v3", name: "Silver", price: 99.99 }
    ]
  },
  {
    id: 6,
    title: "Wireless Bluetooth Speaker",
    description: "Portable Bluetooth speaker with 360-degree sound and 12-hour battery life.",
    price: 149.99,
    cuttedPrice: 199.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    category: "electronics",
    stock: 5,
    discount: 25,
    rating: 4.8,
    variants: [
      { id: "v1", name: "Black", price: 149.99, originalPrice: 199.99 },
      { id: "v2", name: "Blue", price: 149.99, originalPrice: 199.99 },
      { id: "v3", name: "Red", price: 159.99, originalPrice: 209.99 }
    ]
  }
];

// Function to simulate API response delay
export const fetchTestProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(testProducts);
    }, 1000);
  });
};

// Function to get products by category
export const getProductsByCategory = (category) => {
  if (category === 'all') {
    return testProducts;
  }
  return testProducts.filter(product => product.category === category);
};

// Function to simulate product stock check
export const checkProductStock = (productId) => {
  const product = testProducts.find(p => p.id === productId);
  return product ? product.stock : 0;
};
