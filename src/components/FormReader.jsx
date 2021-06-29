import React, { useState } from 'react';
import ShortText from './readers/ShortText';

const FormReader = () => {
  const [inputs, setInputs] = useState([]);

  const loadInputs = () => {
    const data = localStorage.getItem('inputs');
    setInputs(JSON.parse(data));
  };

  const renderInput = (input, index) => {
    const props = {...{input}}
    switch (input.type) {
      case 'short-text':
        return <ShortText key={index} {...props} />
      default:
        break;
    }
  };

  return (
    <div className="flex-1 p-4 border-l-2">
      <div className='flex justify-around'>
        <span>This is the form reader in the public pages</span>
        <button onClick={loadInputs} className='p-1 border border-blue-500 rounded'>Reload</button>
      </div>

      <div>
        {inputs.map((input, index) => renderInput(input, index))}
      </div>
    </div>
  )
};

export default FormReader;
