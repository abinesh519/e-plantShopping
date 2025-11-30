import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
//   const calculateTotalAmount = (total) => {
 
//   };
  const calculateTotalAmount = (cart) => {
    // 1. Initialize a variable total to hold the cumulative sum
    let total = 0;

    // 2. Iterate over the cart array using cart.forEach()
    cart.forEach((item) => {
        // 3 & 4. Convert cost string to number and multiply by quantity
        // item.cost is "$10.00" -> substring(1) makes it "10.00" -> parseFloat makes it 10.00
        const itemPrice = parseFloat(item.cost.substring(1));
        const itemTotal = itemPrice * item.quantity;

        // 5. Add the resulting value to total
        total += itemTotal;
    });

    // 6. Return the final total sum
    return total;
};

const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };



  const handleIncrement = (item) => {
    const { name, quantity } = action.payload; // Destructure the product name and new quantity from the action payload
    // Find the item in the cart that matches the given name
    const itemToUpdate = state.items.find(item => item.name === name);
    if (itemToUpdate) {
      itemToUpdate.quantity = quantity; // If the item is found, update its quantity to the new value
    }
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    const { name, quantity } = action.payload; // Destructure the product name and new quantity from the action payload
    // Find the item in the cart that matches the given name
    const itemToUpdate = state.items.find(item => item.name === name);
    if (itemToUpdate) {
      itemToUpdate.quantity = quantity; // If the item is found, update its quantity to the new value
    }
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
   
  };

  const handleRemove = (item) => {
    state.items = state.items.filter(item => item.name !== action.payload);
    dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const itemPrice = parseFloat(item.cost.substring(1));
        const itemTotal = itemPrice * item.quantity;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


