import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

// Components
import DragHandle from './ui/DragHandle';
import InputTypeName from './ui/InputTypeName';
import Title from './ui/Title';

const Checkbox = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});

  const { input, handleChangeInput } = props;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };


  return (
    <div className='flex mb-4' ref={setNodeRef} style={style}>
      <DragHandle atttributes={attributes} listeners={listeners} />

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
    </div>
  )
};

export default Checkbox;
