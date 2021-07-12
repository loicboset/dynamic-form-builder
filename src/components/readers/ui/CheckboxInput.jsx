import React from 'react';

const Checkbox = ({ inputId, option, selectedCheckboxes, handleUpdateSelectedCheckboxes }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={`${inputId}-${option.id}`}
        name={option.name}
        value={selectedCheckboxes.some((checkbox) => checkbox.id === option.id)}
        onChange={() => handleUpdateSelectedCheckboxes(option.id, option.name)}
      />
      <label htmlFor={option.name} className='ml-2'>{option.name}</label>
    </div>
  )
};

export default Checkbox;
