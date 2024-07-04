import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import products from '../data/products.json';

/**
 * ProductList component that fetches and displays the list of products.
 */
const ProductList = ({ onAddToCart, onRateProduct, ratings }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="row">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.sku}
          product={product}
          onAddToCart={onAddToCart}
          onRateProduct={onRateProduct}
          rating={ratings[product.sku]}
        />
      ))}
    </div>
  );
};

export default ProductList;
