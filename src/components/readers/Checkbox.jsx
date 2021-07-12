import React from 'react';

// components
import Title from './ui/Title';

const Checkbox = ({ input, handleUpdateInputValue }) => {
  return (
    <div>
      <div className='mt-4'>
        <input
          type='checkbox'
          className='mr-2'
          checked={input.value}
          onChange={(e) => handleUpdateInputValue(input.id, e.target.checked)}
        />
        <Title input={input} />
      </div>
    </div>
  )
};

export default Checkbox;
