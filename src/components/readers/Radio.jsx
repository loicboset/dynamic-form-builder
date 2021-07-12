import React from 'react';

// components
import Title from './ui/Title';
import RadioInput from './ui/RadioInput';

const Radio = ({ input, handleUpdateInputValue }) => {
  return (
    <div>
      <div className='mt-4'>
        <Title input={input} />
        {input.options.map((option) => (
          <RadioInput
            key={`${input.id}-${option.id}`}
            inputId={input.id}
            option={option}
            handleUpdateInputValue={handleUpdateInputValue}
          />
        ))}
      </div>
    </div>
  )
};

export default Radio;
