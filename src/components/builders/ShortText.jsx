import React from 'react';

const ShortText = ({ input, handleChangeInput }) => {

  return (
    <div className='pl-2 my-4 border-l-2'>
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

      <div className='p-2 mt-4 bg-gray-100'>
        <div>
          <input
            name='name'
            className='bg-gray-100 focus-within:outline-none'
            size={input.name.length}
            value={input.name}
            onChange={(e) => handleChangeInput(input.id, e.target.name, e.target.value)}
          />
          {input.required && <abbr title='required'>*</abbr>}
          {input.private && <span className={input.required ? 'ml-2' : ''}>(private field)</span>}
        </div>
        <div>
          <input
            name='placeholder'
            className='w-full p-1 text-gray-400 border border-black rounded'
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
