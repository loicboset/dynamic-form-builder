import React from 'react';

const DropdownOption = (props) => {
  const { option } = props;

  return (
    <option>{option.name}</option>
  )
};

export default DropdownOption;
