import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

// Components
import DragHandle from './ui/DragHandle';
import InputTypeName from './ui/InputTypeName';
import Title from './ui/Title';
import RadioInput from './ui/RadioInput';

const Checkboxes= (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});

  const { input, handleChangeInput, handleChangeCheckbox, handleDeleteCheckbox, handleAddCheckbox } = props;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className='flex mb-4' ref={setNodeRef} style={style}>
      <DragHandle atttributes={attributes} listeners={listeners} />

      <div className='flex-1'>
        <InputTypeName typeName="Checkboxes"/>

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
s              />
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
    </div>
  );
}

export default Checkboxes;
