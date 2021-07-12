import React from 'react';

// HOC
import { withGrabHandle } from '../../hoc';

// Components
import InputTypeName from './ui/InputTypeName';
import Title from './ui/Title';
import StringInput from './ui/StringInput';
import CharsRemaining from './ui/CharsRemaining';

const ShortText= (props) => {
  const { input, handleChangeInput } = props;

  return (
    <div className='flex-1'>
      <InputTypeName typeName="Short Text" inputId={input.id}/>

      <div className='p-2 mt-4 bg-gray-100'>
        <Title input={input} handleChangeInput={handleChangeInput} />
        <StringInput input={input} handleChangeInput={handleChangeInput} />
        <CharsRemaining input={input} handleChangeInput={handleChangeInput} />
      </div>
    </div>
  );
}

export default withGrabHandle(ShortText);
