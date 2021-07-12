import React from 'react';

// components
import Title from './ui/Title';
import StringInput from './ui/StringInput';
import CharsRemaining from './ui/CharsRemaining';

const ShortText = ({ input, handleUpdateInputValue }) => {

  return (
    <div>
      <div className='mt-4'>
        <Title input={input} />
        <StringInput input={input} handleUpdateInputValue={handleUpdateInputValue} />
        <CharsRemaining input={input} />
      </div>
    </div>
  )
};

export default ShortText;
