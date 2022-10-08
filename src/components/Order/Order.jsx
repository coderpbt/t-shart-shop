import React from 'react';

const Order = ({product, handelerAddToCart}) => {
  const {picture, name, price} = product;
  return (
    <div className='single'>
        <img src={picture} alt="imm" />
        <h2>{name}</h2>
        <p>{price}</p>
        <button onClick={() => handelerAddToCart(product)}>Add To Cart</button>
    </div>
  );
};

export default Order;