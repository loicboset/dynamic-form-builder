import React from 'react';

const InputSkeleton = ({ setModalOpen }) => {

  return (
    <div
      className='p-2 my-4 text-3xl text-center text-blue-200 bg-gray-100 rounded shadow-md cursor-pointer hover:bg-blue-200 hover:text-white'
      onClick={() => setModalOpen(true)}
    >
      +
    </div>
  )
};

export default InputSkeleton;
