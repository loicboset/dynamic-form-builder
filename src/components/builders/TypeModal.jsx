import React, { useState } from 'react';

const TypeModal = ({ modalOpen, handleAddInput }) => {
  const [type, setType] = useState('short-text');

  const handleChangeInput = (value) => setType(value);

  console.log('type', type);
  return (
    <>
      {modalOpen && (
        <div
          name="typeModal"
          className='absolute w-6/12 p-4 text-center bg-white rounded'
          style={{left: '50%', top: '20%', transform: 'translate(-50%, 0)'}}
        >
          <div>
            <label>Choose an input type:</label>
            <select className='ml-2 border rounded' onChange={(e) => handleChangeInput(e.target.value)}>
              <option value='short-text' >Short text</option>
              <option value='long-text' >Long text</option>
              <option value='dropdown' >Dropdown</option>
              <option value='radio' >Radio</option>
              <option value='checkboxes' >Checkboxes</option>
              <option value='checkbox' >Checkbox</option>
              <option value='image-input' >Image input</option>
              <option value='file-inpt' >File input</option>
              <option value='map' >Map</option>
            </select>
          </div>

          <button
            className='px-2 py-1 mt-4 border border-blue-500 rounded'
            onClick={() => handleAddInput(type)}
          >Choose</button>
        </div>
      )}
    </>
  );
};

export default TypeModal;
