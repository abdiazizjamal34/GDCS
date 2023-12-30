import React, { useState } from 'react';

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);

  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setItemQuantity(parseInt(e.target.value));
  };

  const handlePriceChange = (e) => {
    setItemPrice(parseFloat(e.target.value));
  };

  const handleAddToCart = () => {
    const newItem = {
      name: itemName,
      quantity: itemQuantity,
      price: itemPrice
    };
    setItems([...items, newItem]);
    setItemName('');
    setItemQuantity(0);
    setItemPrice(0);
  };

  const totalPrice = items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return (
    <div className='Shopping'>
      <h2>Shopping Cart</h2>

      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={itemName} onChange={handleNameChange} />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" value={itemQuantity} onChange={handleQuantityChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={itemPrice} onChange={handlePriceChange} />
        </div>
        <button type="button" onClick={handleAddToCart}>Add to Cart</button>
      </form>

      <h3>Cart</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total Price: {totalPrice}</h3>
    </div>
  );
}

export default ShoppingCart;