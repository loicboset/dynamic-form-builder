import React from 'react';

// components
import Title from './ui/Title';
import FileInput from './ui/FileInput';

const ShortText = ({ input }) => {
  return (
    <div>
      <div className='mt-4'>
        <Title input={input} />
        <FileInput input={input} />
      </div>
    </div>
  )
};

export default ShortText;
