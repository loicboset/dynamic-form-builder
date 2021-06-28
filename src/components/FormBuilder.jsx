import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  return (
    <div>
      <div className="flex-1 p-4">This is the form builder in the admin interface</div>
      {inputs.map((input) => {
        return (
          <div>
            <span>{input.name}</span>
          </div>
        )
      })}
    </div>
  )
};

export default FormBuilder;
