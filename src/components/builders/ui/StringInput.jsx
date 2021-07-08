import React from 'react';

const StringInput = ({ input, handleChangeInput }) => {

  return (
    <div>
      <input
        name='placeholder'
        className='w-full p-1 text-gray-400 border border-black rounded'
        value={input.placeholder}
        onChange={(e) => handleChangeInput(input.id, e.target.name, e.target.value)}
      />
    </div>
  )
};

export default StringInput;
