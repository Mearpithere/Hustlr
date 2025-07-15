import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const handleAddToCart = () => {
    if (product.stock > 0) {
      toast.success("Added to cart");
      addProduct({
        ...product,
        selectedVariant: selectedVariant
      });
    }
  };

  const handleVariantChange = (event) => {
    const variantId = event.target.value;
    const variant = product.variants?.find(v => v.id === variantId);
    setSelectedVariant(variant);
  };

  const isOutOfStock = product.stock === 0;
  const displayPrice = selectedVariant ? selectedVariant.price : product.price;
  const originalPrice = selectedVariant ? selectedVariant.originalPrice : product.cuttedPrice;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
      <div className="card product-card h-100 shadow-sm">
        <div className="card-img-container position-relative">
          <img
            className="card-img-top product-image"
            src={product.image}
            alt={product.title}
            loading="lazy"
          />
          {product.discount && (
            <div className="discount-badge position-absolute">
              -{product.discount}%
            </div>
          )}
          {isOutOfStock && (
            <div className="out-of-stock-overlay position-absolute d-flex align-items-center justify-content-center">
              <span className="out-of-stock-text">Out of Stock</span>
            </div>
          )}
        </div>
        
        <div className="card-body d-flex flex-column">
          <h5 className="card-title product-title mb-2" title={product.title}>
            {product.title.length > 60 ? `${product.title.substring(0, 60)}...` : product.title}
          </h5>
          
          <p className="card-text product-description text-muted mb-3">
            {product.description.length > 100 
              ? `${product.description.substring(0, 100)}...` 
              : product.description}
          </p>
          
          <div className="product-price mb-3">
            <span className="current-price fw-bold fs-5">${displayPrice}</span>
            {originalPrice && originalPrice > displayPrice && (
              <span className="original-price text-muted ms-2">
                <del>${originalPrice}</del>
              </span>
            )}
          </div>
          
          {product.variants && product.variants.length > 0 && (
            <div className="variant-selector mb-3">
              <label className="form-label small text-muted">Variant:</label>
              <select 
                className="form-select form-select-sm"
                value={selectedVariant?.id || ''}
                onChange={handleVariantChange}
                disabled={isOutOfStock}
              >
                {product.variants.map(variant => (
                  <option key={variant.id} value={variant.id}>
                    {variant.name} {variant.price !== product.price && `(+$${variant.price - product.price})`}
                  </option>
                ))}
              </select>
            </div>
          )}
          
          <div className="card-actions mt-auto">
            <div className="d-grid gap-2">
              <button
                className={`btn ${isOutOfStock ? 'btn-secondary' : 'btn-primary'} btn-sm`}
                onClick={handleAddToCart}
                disabled={isOutOfStock}
              >
                {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
              </button>
              <Link
                to={`/product/${product.id}`}
                className="btn btn-outline-dark btn-sm"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
