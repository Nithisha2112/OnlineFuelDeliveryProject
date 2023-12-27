import React, { useState } from 'react';

const Product = ({ name, quantity, amount, image, onAddToCart }) => (
  <div>
    <img src={image} alt={name} style={{ width: '100px', height: '100px' }} />
    <p>{name}</p>
    <p>Quantity: {quantity}</p>
    <p>Amount: {amount}</p>
    <button onClick={onAddToCart}>Add to Cart</button>
  </div>
);

const Cart = ({ cartItems }) => (
  <div>
    <h2>Shopping Cart</h2>
    <ul>
      {cartItems.map((item, index) => (
        <li key={index}>
          {item.name} - Quantity: {item.quantity} - Amount: {item.amount}
        </li>
      ))}
    </ul>
  </div>
);

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const newCartItems = [...cartItems, product];
    setCartItems(newCartItems);
  };

  const products = [
    { name: 'Product 1 (Petrol)', quantity: 1, amount: 10.99, image: 'path/to/petrol-image.jpg' },
    { name: 'Product 2 (Diesel)', quantity: 2, amount: 20.99, image: 'path/to/diesel-image.jpg' },
    // Add more products as needed
  ];

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          quantity={product.quantity}
          amount={product.amount}
          image={product.image}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;