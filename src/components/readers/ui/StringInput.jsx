import React from 'react';

const StringInput = ({ input }) => {

  return (
    <input className='w-full p-1 border border-black rounded' placeholder={input.placeholder} />
  )
};

export default StringInput;
