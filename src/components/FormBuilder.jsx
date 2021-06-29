import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShortText from './builders/ShortText';

const FormBuilder = () => {
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    axios.get('starter.json')
      .then(
        (response) => {
          console.log('response', response);
          setInputs(response.data.inputs);
        },
        (error) => {
          console.log('error', error);
        }
      )
  }, []);

  const handleChangeInput = (id, name, value) => {
    console.log('name, value', name, value)
    const copyInputs = [...inputs];
    const updatedInput = copyInputs.find((input) => input.id === id);
    updatedInput[name] = value;
    setInputs(copyInputs);
  };

  const renderInput = (input) => {
    const props = {...{input, handleChangeInput}};
    switch (input.type) {
      case 'short-text':
        return <ShortText key={input.id} {...props}/>
      default:
        break;
    }
  };

  const handleSubmitInputs = (data) => {
    localStorage.setItem('inputs', JSON.stringify(data));
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-4">
      <div>
        <p className="mb-10">This is the form builder in the admin interface</p>
        {inputs.map((input) => renderInput(input))}
      </div>
      <div>
        <button onClick={() => handleSubmitInputs(inputs)} className='border border-blue-500 rounded p-1'>Save</button>
      </div>
    </div>
  )
};

export default FormBuilder;
