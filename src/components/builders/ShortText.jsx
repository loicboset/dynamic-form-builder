import React from 'react';

const ShortText = ({ input, handleChangeInput }) => {

  return (
    <div>
      <div>
        <div>
          <label htmlFor='maxLength'>Max length:</label>
          <input
            name='maxLength'
            value={input.maxLength}
            onChange={(e) => handleChangeInput(input.id, e.target.name, e.target.value)}
          />
        </div>
        <div>
          <span className='text-gray-300'>Required</span>
        </div>
        <div>
          <span className='text-gray-300'>Private</span>
        </div>
      </div>

      <div className='mt-4'>
        <div>
          <input
            name='name'
            value={input.name}
            onChange={(e) => handleChangeInput(input.id, e.target.name, e.target.value)}
          />
        </div>
        <div>
          <input
            name='placeholder'
            className='border border-black rounded p-1 w-full text-gray-400'
            value={input.placeholder}
            onChange={(e) => handleChangeInput(input.id, e.target.name, e.target.value)}
          />
        </div>
        <div>
          {input.maxLength > 0 && <span>{input.maxLength} characters remaining</span>}
        </div>
      </div>
    </div>
  )
};

export default ShortText;
