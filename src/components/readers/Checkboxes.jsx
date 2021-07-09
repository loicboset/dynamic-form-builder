import React from 'react';

// components
import Title from './ui/Title';
import Checkbox from './ui/CheckboxInput';

const Checkboxes = ({ input }) => {
  return (
    <div>
      <div className='mt-4'>
        <Title input={input} />
        {input.options.map((option) => (
          <Checkbox key={`${input.id}-${option.name}`} inputId={input.id} option={option} />
        ))}
      </div>
    </div>
  )
};

export default Checkboxes;
