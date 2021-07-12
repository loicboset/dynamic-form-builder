import React from 'react';

// HOC
import { withGrabHandle } from '../../hoc';

// Components
import InputTypeName from './ui/InputTypeName';
import Title from './ui/Title';
import FileInput from './ui/FileInput';

const ShortText= (props) => {
  const { input, handleChangeInput } = props;

  return (
    <div className='flex-1'>
      <InputTypeName typeName={input.type === 'image' ? 'Image' : 'File'} inputId={input.id}/>

      <div className='p-2 mt-4 bg-gray-100'>
        <Title input={input} handleChangeInput={handleChangeInput} />
        <FileInput input={input} />
      </div>
    </div>
  );
}

export default withGrabHandle(ShortText);
