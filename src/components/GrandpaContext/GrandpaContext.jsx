import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Mother from '../Mother/Mother';

export const RingContex = createContext()

const GrandpaContext = () => {

  const [count, setCount] = useState(1)

  return (
    <RingContex.Provider value={[count, setCount]}>
        <div className='parent'>
          <Father />
          <Mother />
        </div>
    </RingContex.Provider>
  );
};

export default GrandpaContext;