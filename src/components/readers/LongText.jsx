import React from 'react';

// components
import Title from './ui/Title';
import TextAreaInput from './ui/TextAreaInput';
import CharsRemaining from './ui/CharsRemaining';

const LongText = ({ input, handleUpdateInputValue }) => {
  return (
    <div>
      <div className='mt-4'>
        <Title input={input} />
        <TextAreaInput input={input} handleUpdateInputValue={handleUpdateInputValue} />
        <CharsRemaining input={input} />
      </div>
    </div>
  )
};

export default LongText;
