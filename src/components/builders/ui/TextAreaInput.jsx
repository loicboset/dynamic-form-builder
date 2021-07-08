import React from 'react';

const TextAreaInput = ({ input, handleChangeInput }) => {

  return (
    <div>
      <textarea
        rows='5'
        name='placeholder'
        className='w-full p-1 text-gray-400 border border-black rounded'
        value={input.placeholder}
        onChange={(e) => handleChangeInput(input.id, e.target.name, e.target.value)}
      />
    </div>
  );
};

export default TextAreaInput;
