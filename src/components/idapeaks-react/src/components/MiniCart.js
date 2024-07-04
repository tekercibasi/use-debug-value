import React from 'react';

/**
 * MiniCart component that displays the shopping cart and its items.
 */
const MiniCart = ({ cartItems, onUpdateCartItem, onRemoveFromCart }) => {
  const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0).toFixed(2);

  return (
    <div id="mini-cart" className="mt-4 p-4 border">
      <h3>Cart</h3>
      <ul id="cart-items" className="list-unstyled">
        {cartItems.map((item) => (
          <li key={item.sku}>
            {item.name} - ${item.price}
            <input
              type="number"
              value={item.qty}
              min="1"
              onChange={(e) => onUpdateCartItem(item.sku, parseInt(e.target.value, 10))}
            />
            <button onClick={() => onRemoveFromCart(item.sku)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Items: <span id="total-items">{totalItems}</span></p>
      <p className="total-price">Total Price: $<span id="total-price">{totalPrice}</span></p>
    </div>
  );
};

export default MiniCart;
