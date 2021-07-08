import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

// Components
import ShortText from './builders/ShortText';
import ToolBar from './ToolBar/ToolBar';

const FormBuilder = () => {
  const [inputs, setInputs] = useState([]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    axios.get('starter.json')
      .then(
        (response) => {
          setInputs(response.data.inputs);
        },
        (error) => {
          console.log('error', error);
        }
      )
  }, []);

  const handleChangeInput = (id, name, value) => {
    console.log('id, name, value', id, name, value)
    const copyInputs = [...inputs];
    console.log('copyInputs', copyInputs);
    const updatedInput = copyInputs.find((input) => input.id === id);
    updatedInput[name] = value;
    setInputs(copyInputs);
  };

  const renderInput = (input) => {
    const props = {...{input, handleChangeInput}};
    switch (input.type) {
      case 'short-text':
        return <ShortText id={input.id} key={input.id} {...props}/>
      default:
        break;
    }
  };

  const handleSubmitInputs = (data) => {
    localStorage.setItem('inputs', JSON.stringify(data));
  };

  // const handleAddInput = (type) => {
  //   setModalOpen(false);
  //   const copyInputs = [...inputs];
  //   const lastId = copyInputs[copyInputs.length - 1].id
  //   const newInput = {
  //     id: lastId + 1,
  //     type: 'short-text',
  //     name: 'Dummy title',
  //     placeholder: 'Dummy placeholder',
  //     maxLength: 150,
  //     required: true,
  //     private: false
  //   };
  //   setInputs([...copyInputs, newInput])
  // };

  const getInputDetails = (inputType) => {
    switch (inputType) {
      case 'short-text':
        return {
          type: 'short-text',
          name: 'Dummy title',
          placeholder: 'Dummy placeholder',
          maxLength: 150,
          required: true,
          private: false
        }
      default:
        break;
    }
  };

  const addInputField = (inputType) => {
    const copyInputs = [...inputs];
    const IDs = inputs.map((input) => parseInt(input.id, 10))
    const newInput = getInputDetails(inputType);
    const nextId = IDs.sort((a, b) => a - b)[IDs.length - 1] + 1
    newInput.id = nextId.toString();
    setInputs([...copyInputs, newInput])
  };

  const handleDragEnd = (event) => {
    const {active, over} = event;

    if (active.id !== over.id) {
      setInputs((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      })
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col flex-1 p-4 overflow-scroll">
        <p className="mb-10">This is the form builder in the admin interface</p>
        <div>
          <div className='flex'>
            <ToolBar addInputField={addInputField} />
            <div className='flex-1'>
              <SortableContext
                items={inputs}
                strategy={verticalListSortingStrategy}
              >
                {inputs.map((item) => renderInput(item)) }
              </SortableContext>
            </div>
          </div>
          <div className='flex justify-end'>
            <button onClick={() => handleSubmitInputs(inputs)} className='p-1 border border-blue-500 rounded'>Save</button>
          </div>
        </div>
      </div>
    </DndContext>
  )
};

export default FormBuilder;
