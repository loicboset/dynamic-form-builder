import React from 'react';

const CharsRemaining = ({ input, handleChangeInput }) => {

  return (
    <div className='flex justify-end'>
      0/
      <input
      name='maxLength'
      className='bg-gray-100 focus-within:outline-none'
      size={8}
      value={input.maxLength}
      onChange={(e) => handleChangeInput(input.id, e.target.name, e.target.value)}
      />
    </div>
  );
};

export default CharsRemaining;
