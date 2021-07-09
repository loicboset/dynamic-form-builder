import React from 'react';

// components
import Title from './ui/Title';
import GoogleMap from './ui/GoogleMap';

const Map = ({ input }) => {
  return (
    <div>
      <div className='mt-4'>
        <Title input={input} />
        <GoogleMap input={input} />
      </div>
    </div>
  )
};

export default Map;
