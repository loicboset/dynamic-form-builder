import React from 'react';

// components
import Title from './ui/Title';
import FileInput from './ui/FileInput';

const File = ({ input, handleUpdateInputValue }) => {
  return (
    <div>
      <div className='mt-4'>
        <Title input={input} />
        <FileInput input={input} handleUpdateInputValue={handleUpdateInputValue} />
      </div>
    </div>
  )
};

export default File;
