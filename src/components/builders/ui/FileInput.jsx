import React from 'react';

const FileInput = ({ input }) => {

  return (
    <input
      type='file'
      className='mt-2'
      accept={input.type === 'image' ? 'image/*' : 'audio/*, video/*'}
    />
  )
};

export default FileInput;
