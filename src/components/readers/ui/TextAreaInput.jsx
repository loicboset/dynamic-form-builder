import React from 'react';

const TextAreaInput = ({ input, handleUpdateInputValue }) => {

  return (
    <div>
      <textarea
        rows='5'
        className='w-full p-1 border border-black rounded'
        placeholder={input.placeholder}
        value={input.value}
        onChange={(e) => handleUpdateInputValue(input.id, e.target.value)}
      />
    </div>
  );
};

export default TextAreaInput;
