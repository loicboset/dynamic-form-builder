import React from 'react';

const ShortText = ({ input }) => {
  return (
    <div>
      <div className='mt-4'>
        <div>
          <label>{input.name}</label>
        </div>
        <div>
          <input className='border border-black rounded p-1 w-full' placeholder={input.placeholder} />
        </div>
        <div>
          {input.maxLength > 0 && <span>{input.maxLength} characters remaining</span>}
        </div>
      </div>
    </div>
  )
};

export default ShortText;
