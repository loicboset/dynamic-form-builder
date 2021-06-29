import React, { useState } from 'react';
import ShortText from './readers/ShortText';

const FormReader = () => {
  const [inputs, setInputs] = useState([]);

  const loadInputs = () => {
    const data = localStorage.getItem('inputs');
    setInputs(JSON.parse(data));
  };

  const renderInput = (input) => {
    const props = {...{input}}
    switch (input.type) {
      case 'short-text':
        return <ShortText key={input.id} {...props} />
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
        {inputs.map((input) => renderInput(input))}
      </div>
    </div>
  )
};

export default FormReader;
