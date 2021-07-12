import React, { useState, useEffect } from 'react';

// components
import Title from './ui/Title';
import CheckboxInput from './ui/CheckboxInput';

const Checkboxes = ({ input, handleUpdateInputValue }) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const insertCheckbox = (array, checkboxId, checkboxValue) => array.push({ id: checkboxId, value: checkboxValue });

  const removeCheckbox = (array, checkboxId) => {
    const index = array.findIndex((el) => el.id === checkboxId);
    array.splice(index, 1);
  }

  const handleUpdateSelectedCheckboxes = (checkboxId, checkboxValue) => {
    const copySelectedCheckboxes = [...selectedCheckboxes];

    const isCheckboxSelected = copySelectedCheckboxes.some((checkbox) => checkbox.id === checkboxId);
    isCheckboxSelected
      ? removeCheckbox(copySelectedCheckboxes, checkboxId)
      : insertCheckbox(copySelectedCheckboxes, checkboxId, checkboxValue)

    setSelectedCheckboxes(copySelectedCheckboxes);
  };

  useEffect(() => {
    if (selectedCheckboxes.length === 0) return;
    const checkboxesValues = selectedCheckboxes.map((checkbox) => checkbox.value);
    handleUpdateInputValue(input.id, checkboxesValues);
  }, [selectedCheckboxes])

  return (
    <div>
      <div className='mt-4'>
        <Title input={input} />
        {input.options.map((option) => (
          <CheckboxInput
            key={`${input.id}-${option.id}`}
            inputId={input.id}
            option={option}
            selectedCheckboxes={selectedCheckboxes}
            handleUpdateSelectedCheckboxes={handleUpdateSelectedCheckboxes}
          />
        ))}
      </div>
    </div>
  )
};

export default Checkboxes;
