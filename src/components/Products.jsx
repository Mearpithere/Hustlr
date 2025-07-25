import React, { useState, useEffect, useRef } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import ProductCard from "./ProductCard";
import { fetchTestProducts, getProductsByCategory } from "../data/testProducts";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const componentMounted = useRef(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        // Use test data instead of fake store API
        const products = await fetchTestProducts();
        if (componentMounted.current) {
          setData(products);
          setFilter(products);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    getProducts();
    
    return () => {
      componentMounted.current = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <div className="product-card-skeleton">
              <div className="skeleton-img"></div>
              <div className="skeleton-text title"></div>
              <div className="skeleton-text description"></div>
              <div className="skeleton-text description"></div>
              <div className="skeleton-text price"></div>
              <div className="skeleton-text button"></div>
            </div>
          </div>
        ))}
      </>
    );
  };

  const filterProduct = (category) => {
    const filteredProducts = getProductsByCategory(category);
    setFilter(filteredProducts);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("accessories")}
          >
            Accessories
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("home")}
          >
            Home
          </button>
        </div>

        <div className="row">
          {filter.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
