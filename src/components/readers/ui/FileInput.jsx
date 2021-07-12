import React from 'react';

const FileInput = ({ input, handleUpdateInputValue }) => {

  return (
    <input
      type='file'
      className='block mt-2'
      accept={input.type === 'image' ? 'image/*' : 'audio/*, video/*'}
      onChange={(e) => handleUpdateInputValue(input.id, e.target.files[0])}
    />
  )
};

export default FileInput;
