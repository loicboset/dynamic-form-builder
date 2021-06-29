import React from 'react';

const ShortText = ({ input, handleChangeInput }) => {
  console.log('input', input);
  return (
    <div className='border-l-2 pl-2'>
      <div>
        <div>
          <label htmlFor='maxLength'>Max length:</label>
          <input
            name='maxLength'
            value={input.maxLength}
            onChange={(e) => handleChangeInput(input.id, e.target.name, e.target.value)}
          />
        </div>
        <div className='select-none'>
          <span
            name='required'
            className={`cursor-pointer ${input.required ? '' : 'text-gray-300'}`}
            onClick={(e) => {
              handleChangeInput(
                input.id, e.target.getAttribute('name'), !input.required
              );
            }}
          >
            Required
          </span>
        </div>
        <div className='select-none'>
          <span
            name='private'
            className={`cursor-pointer ${input.private ? '' : 'text-gray-300'}`}
            onClick={(e) => {
              handleChangeInput(
                input.id, e.target.getAttribute('name'), !input.private
              );
            }}
          >
            Private
          </span>
        </div>
      </div>

      <div className='bg-gray-100 mt-4 p-2'>
        <div>
          <input
            name='name'
            className='bg-gray-100'
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
