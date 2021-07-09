import React from 'react';

const Checkbox = ({ inputId, option }) => {

  return (
    <div>
      <input
        type="checkbox"
        id={`${inputId}-${option.id}`}
        name={option.name}
      />
      <label htmlFor={option.name} className='ml-2'>{option.name}</label>
    </div>
  )
};

export default Checkbox;
