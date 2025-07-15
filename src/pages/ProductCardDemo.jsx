import React from "react";
import { Navbar, Footer, ProductCard } from "../components";
import { testProducts } from "../data/testProducts";

const ProductCardDemo = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="display-4 fw-bold">Product Card Demo</h1>
            <p className="lead text-muted">
              Showcasing responsive product cards with modern UI/UX design
            </p>
            <hr className="w-25 mx-auto" />
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <h2 className="h3 mb-4">Features Demonstrated:</h2>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fas fa-mobile-alt text-primary me-2"></i>
                      Responsive Design
                    </h5>
                    <p className="card-text">
                      Cards adapt to different screen sizes: 4 columns on large screens, 
                      3 on medium, 2 on small, and 1 on mobile devices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fas fa-cogs text-success me-2"></i>
                      Variant Selection
                    </h5>
                    <p className="card-text">
                      Interactive dropdown for product variants with dynamic pricing 
                      and availability checks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fas fa-shopping-cart text-warning me-2"></i>
                      Smart Cart Integration
                    </h5>
                    <p className="card-text">
                      Add to cart functionality with stock validation and 
                      out-of-stock state management.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fas fa-paint-brush text-info me-2"></i>
                      Modern UI/UX
                    </h5>
                    <p className="card-text">
                      Clean design with hover effects, proper spacing, 
                      and accessibility considerations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mb-4">
            <h2 className="h3">Product Cards</h2>
            <p className="text-muted">
              Browse through our collection of products with different states 
              (in stock, out of stock, discounted, variants).
            </p>
          </div>
        </div>

        <div className="row">
          {testProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 bg-primary text-white">
              <div className="card-body text-center p-5">
                <h3 className="card-title">Technical Implementation</h3>
                <div className="row mt-4">
                  <div className="col-md-4">
                    <h5>Layout Approach</h5>
                    <p className="mb-0">
                      CSS Grid and Bootstrap for responsive layout with 
                      consistent card heights and proper spacing.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h5>Responsiveness</h5>
                    <p className="mb-0">
                      Mobile-first design with breakpoints at 576px, 768px, 
                      and 992px for optimal viewing on all devices.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h5>Performance</h5>
                    <p className="mb-0">
                      Lazy loading images, efficient state management, 
                      and optimized hover effects for smooth interactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductCardDemo;
