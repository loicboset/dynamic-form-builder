import React from 'react';

// components
import Title from './ui/Title';
import CheckboxInput from './ui/CheckboxInput';

const Checkboxes = ({ input }) => {
  return (
    <div>
      <div className='mt-4'>
        <Title input={input} />
        {input.options.map((option) => (
          <CheckboxInput key={`${input.id}-${option.id}`} inputId={input.id} option={option} />
        ))}
      </div>
    </div>
  )
};

export default Checkboxes;
