import React from 'react';

// HOC
import { withGrabHandle } from '../../hoc';

// Components
import InputTypeName from './ui/InputTypeName';
import Title from './ui/Title';
import GoogleMap from './ui/GoogleMap';

const Map= (props) => {

  const { input, handleChangeInput } = props;

  return (
    <div className='flex-1'>
      <InputTypeName typeName={input.type === 'image' ? 'Image' : 'File'}/>

      <div className='p-2 mt-4 bg-gray-100'>
        <Title input={input} handleChangeInput={handleChangeInput} />
        <GoogleMap input={input} />
      </div>
    </div>
  );
}

export default withGrabHandle(Map);
