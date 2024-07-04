import React from 'react';

/**
 * ProductCard component that displays individual product information.
 */
const ProductCard = ({ product, onAddToCart, onRateProduct, rating }) => (
  <div className="col-md-4 product-item" data-sku={product.sku}>
    <div className="card">
      <div className="img-container">
        <img src={product.image_paths[0]} className="card-img-top" alt={product.product_name} />
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{product.product_name}</h5>
          <p className="card-text price">${product.price}</p>
          <p className="card-text">{product.description}</p>
        </div>
        <div>
          <button className="btn btn-success mb-2" onClick={() => onAddToCart(product)}>Add to Cart</button>
          {rating ? (
            <div className="badge text-bg-primary">Rated: {rating} stars</div>
          ) : (
            <button className="btn btn-primary" onClick={() => onRateProduct(product.sku)}>Rate</button>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
