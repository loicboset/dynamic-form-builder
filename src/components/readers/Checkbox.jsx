import React from 'react';

// components
import Title from './ui/Title';

const Checkbox = ({ input }) => {
  return (
    <div>
      <div className='mt-4'>
        <input type='checkbox' className='mr-2'/>
        <Title input={input} />
      </div>
    </div>
  )
};

export default Checkbox;
