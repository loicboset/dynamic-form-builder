import React from 'react';

const TypeModal = ({ modalOpen }) => {

  return (
    <>
      {modalOpen && (
        <div
          name="typeModal"
          className='absolute w-6/12 p-4 text-center bg-white'
          style={{left: '50%', top: '20%', transform: 'translate(-50%, 0)'}}
        >
          <label>Choose an input type:</label>
          <select className='ml-2 border rounded'>
            <option>Short text</option>
            <option>Long text</option>
            <option>Dropdown</option>
            <option>Radio</option>
            <option>checkboxes</option>
            <option>checkbox</option>
            <option>Image input</option>
            <option>File input</option>
            <option>Map</option>
          </select>
        </div>
      )}
    </>
  );
};

export default TypeModal;
