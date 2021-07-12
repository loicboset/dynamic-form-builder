import React, { useState } from 'react';
import ShortText from './readers/ShortText';
import LongText from './readers/LongText';
import Checkbox from './readers/Checkbox';
import Checkboxes from './readers/Checkboxes';
import Radio from './readers/Radio';
import Dropdown from './readers/Dropdown';
import File from './readers/File';
import Map from './readers/Map';

const FormReader = () => {
  const [inputs, setInputs] = useState([]);

  // Funcs
  const loadInputs = () => {
    const data = localStorage.getItem('inputs');
    setInputs(JSON.parse(data));
  };

  const handleUpdateInputValue = (inputId, inputValue) => {
    const copyInputs = [...inputs];
    const inputToUpdate = copyInputs.find((input) => input.id === inputId);
    inputToUpdate.value = inputValue;
    setInputs(copyInputs);
  };

  const renderInput = (input) => {
    const props = {...{input, handleUpdateInputValue}}
    switch (input.type) {
      case 'short-text':
        return <ShortText key={input.id} {...props} />
      case 'long-text':
        return <LongText key={input.id} {...props} />
      case 'checkbox':
        return <Checkbox key={input.id} {...props} />
      case 'checkboxes':
        return <Checkboxes key={input.id} {...props} />
      case 'radio':
        return <Radio key={input.id} {...props} />
      case 'dropdown':
        return <Dropdown key={input.id} {...props} />
      case 'image':
        return <File key={input.id} {...props} />
      case 'file':
        return <File key={input.id} {...props} />
      case 'map':
        return <Map key={input.id} {...props} />
      default:
        break;
    }
  };

  console.log('inputs', inputs);
  return (
    <div className="flex-1 p-4 border-l-2">
      <div className='flex justify-around'>
        <span>This is the form reader in the public pages</span>
        <button onClick={loadInputs} className='p-1 border border-blue-500 rounded'>Reload</button>
      </div>

      <div>
        {inputs.map((input) => renderInput(input))}
      </div>
    </div>
  )
};

export default FormReader;
