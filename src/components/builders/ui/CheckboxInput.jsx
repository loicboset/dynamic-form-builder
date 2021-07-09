import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Checkbox = ({ input, handleChangeCheckbox, handleDeleteCheckbox, handleAddCheckbox }) => {

  return (
    <div className='w-max'>
      {input.options.map((option) => (
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
      ))}
      <span
        className='px-4 text-blue-300 bg-white border border-blue-300 rounded cursor-pointer hover:border-blue-500 hover:text-blue-500'
        onClick={() => handleAddCheckbox(input.id)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </span>
    </div>
  )
};

export default Checkbox;
