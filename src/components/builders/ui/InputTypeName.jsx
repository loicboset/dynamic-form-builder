import React from 'react';

import DeleteItem from './DeleteItem';

const InputTypeName = ({ typeName, inputId }) => {

  return (
    <div>
      <span>Type: {typeName}</span>
      <DeleteItem inputId={inputId} />
    </div>
  )
};

export default InputTypeName;
