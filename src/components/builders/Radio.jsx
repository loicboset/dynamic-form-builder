import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

// HOC
import { withGrabHandle } from '../../hoc';

// Components
import InputTypeName from './ui/InputTypeName';
import Title from './ui/Title';
import RadioInput from './ui/RadioInput';

const Checkboxes= (props) => {

  const { input, handleChangeInput, handleChangeCheckbox, handleDeleteCheckbox, handleAddCheckbox } = props;

  return (
    <div className='flex-1'>
      <InputTypeName typeName="Radio"/>

      <div className='p-2 mt-4 bg-gray-100'>
        <Title input={input} handleChangeInput={handleChangeInput} />
        <div className='w-max'>
          {input.options.map((option) => (
            <RadioInput
              key={`${input.id}-${option.id}`}
              input={input}
              option={option}
              handleChangeCheckbox={handleChangeCheckbox}
              handleDeleteCheckbox={handleDeleteCheckbox}
            />
          ))}
          <span
            className='px-4 text-blue-300 bg-white border border-blue-300 rounded cursor-pointer hover:border-blue-500 hover:text-blue-500'
            onClick={() => handleAddCheckbox(input.id)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>

      </div>
    </div>
  );
}

export default withGrabHandle(Checkboxes);
