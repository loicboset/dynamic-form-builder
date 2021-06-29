import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShortText from './builders/ShortText';
import InputSkeleton from './builders/InputSkeleton';
import TypeModal from './builders/TypeModal';
import Background from './builders/Background';

const FormBuilder = () => {
  const [inputs, setInputs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleAddInput = (type) => {
    setModalOpen(false);
    const copyInputs = [...inputs];
    const lastId = copyInputs[copyInputs.length - 1].id
    const newInput = {
      id: lastId + 1,
      type: 'short-text',
      name: 'Dummy title',
      placeholder: 'Dummy placeholder',
      maxLength: 150,
      required: true,
      private: false
    };
    setInputs([...copyInputs, newInput])
  };

  return (
    <div className="flex flex-col justify-between flex-1 p-4 overflow-scroll">
      <div>
        <p className="mb-10">This is the form builder in the admin interface</p>
        {inputs.map((input) => renderInput(input))}
        <InputSkeleton setModalOpen={setModalOpen} />
      </div>
      <div>
        <button onClick={() => handleSubmitInputs(inputs)} className='p-1 border border-blue-500 rounded'>Save</button>
      </div>

      <Background modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <TypeModal modalOpen={modalOpen} handleAddInput={handleAddInput} />
    </div>
  )
};

export default FormBuilder;
