import React, { useContext } from 'react';
import { RingContex } from '../GrandpaContext/GrandpaContext';

const Sister = () => {
  const [count, setCount] = useContext(RingContex)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </div>
  );
};

export default Sister;