import React from 'react';

// components
import Title from './ui/Title';
import DropdownOption from './ui/DropdownOption';

const Dropdown = ({ input, handleUpdateInputValue }) => {
  return (
    <div>
      <div className='mt-4'>
        <Title input={input} />
        <select
          className='block p-1 mt-1 border border-black rounded'
          onChange={(e) => handleUpdateInputValue(input.id, e.target.value)}
        >
          {input.options.map((option) => (
            <DropdownOption key={`${input.id}-${option.id}`} inputId={input.id} option={option} />
          ))}
        </select>
      </div>
    </div>
  )
};

export default Dropdown;
