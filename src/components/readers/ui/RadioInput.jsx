import React from 'react';

const RadioInput = ({ inputId, option }) => {

  return (
    <div>
      <input
        type="radio"
        id={`${inputId}-${option.id}`}
        name={option.name}
      />
      <label htmlFor={option.name} className='ml-2'>{option.name}</label>
    </div>
  )
};

export default RadioInput;
