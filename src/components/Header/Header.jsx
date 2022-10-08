import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='menu'>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/order'>Order</Link></li>
          <li><Link to='/grandpa'>Grandpa</Link></li>
        </ul>
    </div>
  );
};

export default Header;