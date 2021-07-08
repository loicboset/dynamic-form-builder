import React from 'react';

const TextAreaInput = ({ input, handleChangeInput }) => {

  return (
    <div>
      <textarea
        rows='5'
        className='w-full p-1 border border-black rounded'
        placeholder={input.placeholder}
      />
    </div>
  );
};

export default TextAreaInput;
