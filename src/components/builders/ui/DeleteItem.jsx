import React from 'react';

import { Context } from '../../FormBuilder';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const DeleteItem = ({ inputId }) => {
  let { handleDeleteItem } = React.useContext(Context);
  return (
    <FontAwesomeIcon
      className='ml-2 text-red-500 cursor-pointer'
      icon={faTrashAlt}
      onClick={() => handleDeleteItem(inputId)}
    />
  )
};

export default DeleteItem;
