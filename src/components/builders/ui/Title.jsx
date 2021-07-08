import React from 'react';

const Title = ({ input, handleChangeInput }) => {

  return (
    <div>
      <input
        name='name'
        className='bg-gray-100 focus-within:outline-none'
        size={input.name.length}
        value={input.name}
        onChange={(e) => handleChangeInput(input.id, e.target.name, e.target.value)}
      />
      <abbr
        title='required'
        name='required'
        className={`cursor-pointer ${input.required ? '' : 'text-gray-300'}`}
        onClick={(e) => {
          handleChangeInput(
            input.id, e.target.getAttribute('name'), !input.required
          );
        }}
      >*</abbr>
      <span
        name='private'
        className={`cursor-pointer ml-2 ${input.private ? '' : 'text-gray-300'}`}
        onClick={(e) => {
          handleChangeInput(
            input.id, e.target.getAttribute('name'), !input.private
          );
        }}
      >
        (private field)
      </span>
    </div>
  )
};

export default Title;
