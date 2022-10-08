import React, { useContext } from 'react';
import { RingContex } from '../GrandpaContext/GrandpaContext';

const Brother = () => {
  const newCon = useContext(RingContex)
  return (
    <div>
      <h3>Brother</h3>
      <h2>{newCon}</h2>
    </div>
  );
};

export default Brother;