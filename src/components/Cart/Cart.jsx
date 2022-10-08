import React from 'react';

const Cart = ({cart,removedHandeler}) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please Select less 1 item</p>
  }
  return (
    <div>
      {
        cart.map(item => <p key={item._id}>
          {item.name}
          <button onClick={() => removedHandeler(item)}>X</button>
        </p>)
      }
      {
        message
      }
      {
        cart.length === 2 ? <p>Hello React</p> : <p>Break UP</p>
      }
      {
        cart.length === 5 && <p>This is and Condition</p>
      }
      {
        cart.length === 1 || <p>This is OR Condition</p>
      }
    </div>
  );
};

export default Cart;