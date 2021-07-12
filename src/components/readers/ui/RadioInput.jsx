import React from 'react';

const RadioInput = ({ inputId, option, handleUpdateInputValue }) => {

  return (
    <div>
      <input
        type="radio"
        name={inputId}
        value={option.name}
        onChange={() => handleUpdateInputValue(inputId, option.name)}
      />
      <label htmlFor={option.name} className='ml-2'>{option.name}</label>
    </div>
  )
};

export default RadioInput;
