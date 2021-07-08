import React from 'react';

const CharsRemaining = ({ input }) => {

  return (
    <div className='text-sm text-right'>
      0/{input.maxLength}
    </div>
  )
};

export default CharsRemaining;
