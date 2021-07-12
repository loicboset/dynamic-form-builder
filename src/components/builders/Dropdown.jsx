import React from 'react';

// HOC
import { withGrabHandle } from '../../hoc';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

// Components
import InputTypeName from './ui/InputTypeName';
import Title from './ui/Title';
import DropdownOption from './ui/DropdownOption';

const Dropdown= (props) => {
  const { input, handleChangeInput, handleChangeCheckbox, handleDeleteCheckbox, handleAddCheckbox } = props;

  return (
    <div className='flex-1'>
      <InputTypeName typeName="Dropdown" inputId={input.id}/>

      <div className='p-2 mt-4 bg-gray-100'>
        <Title input={input} handleChangeInput={handleChangeInput} />
        <div className='w-max'>
          <select name="pets" id="pet-select">
            {input.options.map((option) => (
              <DropdownOption
                key={`${input.id}-${option.id}`}
                option={option}
              />
            ))}
          </select>
          <div className='flex flex-col mt-2'>
            <span className='mb-1 italic'>Manage Options</span>
            {input.options.map((option) => (
              <div key={option.id}>
                <input
                  className='px-1 mb-1'
                  value={option.name}
                  onChange={(e) => handleChangeCheckbox(input.id, option.id, e.target.value)}
                />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className='ml-1 cursor-pointer hover:text-red-600'
                  onClick={() => handleDeleteCheckbox(input.id, option.id)}
                />
              </div>
            ))}
          </div>
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

export default withGrabHandle(Dropdown);
