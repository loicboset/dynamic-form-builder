import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

const CheckboxInput = ({ input, option, handleChangeCheckbox, handleDeleteCheckbox }) => {

  return (
    <div key={option.id} className='mb-1'>
      <input
        type="checkbox"
        id="scales"
        name={option.name}
      />
      <input
        className='pl-1 ml-2 border'
        value={option.name}
        onChange={(e) => handleChangeCheckbox(input.id, option.id, e.target.value)}
      />
      <FontAwesomeIcon
        icon={faTrashAlt}
        className='ml-1 cursor-pointer hover:text-red-600'
        onClick={() => handleDeleteCheckbox(input.id, option.id)}
      />
    </div>
  )
};

export default CheckboxInput;
