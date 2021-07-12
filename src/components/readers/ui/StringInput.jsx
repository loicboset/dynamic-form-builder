import React from 'react';

const StringInput = ({ input, handleUpdateInputValue }) => {

  return (
    <input
      className='w-full p-1 border border-black rounded'
      placeholder={input.placeholder}
      value={input.value}
      onChange={(e) => handleUpdateInputValue(input.id, e.target.value)}
    />
  )
};

export default StringInput;
