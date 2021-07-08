import React from 'react';

const Title = ({ input }) => {

  return (
    <label>
      {input.name}
      {input.required && <abbr className='ml-1' title='required'>*</abbr>}
      {input.private && <span className={input.required ? 'ml-1' : ''}>(private field)</span>}
    </label>
  )
};

export default Title;
