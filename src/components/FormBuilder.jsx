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
import ToolBar from './ToolBar/ToolBar';
import ShortText from './builders/ShortText';
import LongText from './builders/LongText';
import Checkbox from './builders/Checkbox';
import Checkboxes from './builders/Checkboxes';
import Radio from './builders/Radio';
import Dropdown from './builders/Dropdown';
import File from './builders/File';
import Map from './builders/Map';

// Utils
import { getInputDetails } from './utils';

// Context
export const Context = React.createContext();

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

  const handleChangeInput = (inputId, name, value) => {
    const copyInputs = [...inputs];
    const updatedInput = copyInputs.find((input) => input.id === inputId);
    updatedInput[name] = value;
    setInputs(copyInputs);
  };

  const handleAddCheckbox = (inputId) => {
    const copyInputs = [...inputs];
    const updatedInput = copyInputs.find((input) => input.id === inputId);
    const IDs = updatedInput.options.map((option) => parseInt(option.id, 10));
    const nextId = IDs.sort((a, b) => a - b)[IDs.length - 1] + 1
    updatedInput.options.push({id: nextId, name: 'new checkbox'})
    setInputs(copyInputs);
  };

  const handleChangeCheckbox = (inputId, optionId, optionName) => {
    const copyInputs = [...inputs];
    const updatedInput = copyInputs.find((input) => input.id === inputId);
    const optionIndex = updatedInput.options.findIndex((option) => option.id === optionId);
    updatedInput.options[optionIndex].name = optionName;
    setInputs(copyInputs);
  };

  const handleDeleteCheckbox = (inputId, optionId) => {
    const copyInputs = [...inputs];
    const updatedInput = copyInputs.find((input) => input.id === inputId);
    const optionIndex = updatedInput.options.findIndex((option) => option.id === optionId);
    updatedInput.options.splice(optionIndex, 1);
    setInputs(copyInputs);
  };

  const renderInput = (input) => {
    const props = {...{input, handleChangeInput, handleDeleteItem}};
    let InputComp;

    switch (input.type) {
      case 'short-text':
        InputComp = <ShortText id={input.id} {...props}/>;
        break;
      case 'long-text':
        InputComp = <LongText id={input.id} {...props}/>;
        break;
      case 'checkbox':
        InputComp = <Checkbox id={input.id} {...props}/>;
        break;
      case 'checkboxes':
        InputComp = <Checkboxes
                id={input.id}
                key={input.id}
                handleDeleteCheckbox={handleDeleteCheckbox}
                handleChangeCheckbox={handleChangeCheckbox}
                handleAddCheckbox={handleAddCheckbox}
                {...props}
              />;
        break;
      case 'radio':
        InputComp = <Radio
                id={input.id}
                key={input.id}
                handleDeleteCheckbox={handleDeleteCheckbox}
                handleChangeCheckbox={handleChangeCheckbox}
                handleAddCheckbox={handleAddCheckbox}
                {...props}
              />;
        break;
      case 'dropdown':
        InputComp = <Dropdown
                id={input.id}
                key={input.id}
                handleDeleteCheckbox={handleDeleteCheckbox}
                handleChangeCheckbox={handleChangeCheckbox}
                handleAddCheckbox={handleAddCheckbox}
                {...props}
              />;
        break;
      case 'image':
        InputComp = <File id={input.id} {...props}/>;
        break;
      case 'file':
        InputComp = <File id={input.id} {...props}/>;
        break;
      case 'map':
        InputComp = <Map id={input.id} {...props}/>;
        break;
      default:
        break;
    };

    return (
      <Context.Provider key={input.id} value={{ handleDeleteItem  }}>
        {InputComp}
      </Context.Provider>
    )
  };

  const handleSubmitInputs = (data) => {
    localStorage.setItem('inputs', JSON.stringify(data));
  };

  const addInputField = (inputType) => {
    const copyInputs = [...inputs];
    const IDs = inputs.map((input) => parseInt(input.id, 10))
    const newInput = getInputDetails(inputType);
    const nextId = IDs.length === 0 ? 1 : IDs.sort((a, b) => a - b)[IDs.length - 1] + 1
    newInput.id = nextId.toString();
    setInputs([...copyInputs, newInput])
  };

  const handleDeleteItem = (inputId) => {
    const copyInputs = [...inputs];
    const index = copyInputs.findIndex((input) => input.id === inputId);
    copyInputs.splice(index, 1);
    setInputs(copyInputs);
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
