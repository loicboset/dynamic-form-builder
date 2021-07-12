import React from 'react';

// HOC
import { withGrabHandle } from '../../hoc';

// Components
import InputTypeName from './ui/InputTypeName';
import Title from './ui/Title';

const Checkbox = (props) => {
  const { input, handleChangeInput } = props;

  return (
    <div className='flex-1'>
      <InputTypeName typeName="Checkboxes"/>

      <div className='flex items-center p-2 mt-4 bg-gray-100'>
        <input
          className='mr-2 bg-gray-100 focus-within:outline-none'
          type="checkbox"
        />
        <Title input={input} handleChangeInput={handleChangeInput} />
      </div>
    </div>
  )
};

export default withGrabHandle(Checkbox);
