import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Order from '../Order/Order';

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handelerAddToCart = (product) => {
    const exit = cart.find(pd => pd._id === product._id)
    if (exit) {
      alert('alredy exit')
    }else{
      const newCart = [...cart, product]
      setCart(newCart)
    } 
  }

  const removedHandeler = (item) => {
    const deleteItem = cart.filter(del => del._id !== item._id)
    setCart(deleteItem)
  }

  return (
    <div className='main-grid'>
      <div className='product-container'>
        {
          tshirts.map(product => <Order key={product._id} product={product} handelerAddToCart={handelerAddToCart} />)
        }
      </div>
      <div className='Cart-container'>
        <p>Summery</p>
        <Cart cart={cart} removedHandeler={removedHandeler} />
      </div>
    </div>
  );
};

export default Home;