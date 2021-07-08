import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const DragHandle = ({ attributes, listeners }) => {

  return (
    <button className='p-2 mr-2 border-r-2 focus:border-blue-300' {...attributes} {...listeners}>
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

export default DragHandle;
