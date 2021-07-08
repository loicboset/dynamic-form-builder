import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCaretSquareDown, faImage, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faHeading, faAlignLeft, faCheckDouble, faListUl, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ToolBar = ({ addInputField }) => {
  const tools = [
    {
      type: 'short-text',
      name: 'Short Text',
      icon: faHeading,
    },
    {
      type: 'long-text',
      name: 'Long Text',
      icon: faAlignLeft,
    },
    {
      type: 'checkbox',
      name: 'Checkbox',
      icon: faCheckSquare,
    },
    {
      type: 'checkboxes',
      name: 'Checkboxes',
      icon: faCheckDouble,
    },
    {
      type: 'radio',
      name: 'Radio',
      icon: faListUl,
    },
    {
      type: 'dropdown',
      name: 'dropdown',
      icon: faCaretSquareDown,
    },
    {
      type: 'image',
      name: 'image',
      icon: faImage,
    },
    {
      type: 'file',
      name: 'file',
      icon: faFilePdf,
    },
    {
      type: 'map',
      name: 'map',
      icon: faMapMarkerAlt,
    }
  ];
  return (
    <div className='flex flex-col p-2 border-2'>
      {tools.map((tool) => (
        <div
          key={tool.type}
          className='flex flex-col items-center p-2 mx-2 mb-4 bg-white border rounded shadow cursor-pointer hover:bg-gray-100'
          onClick={() => addInputField(tool.type)}
        >
          <FontAwesomeIcon className='text-4xl' icon={tool.icon} />
          <span className='mt-2 text-xs'>{tool.name}</span>
        </div>
      ))}
    </div>
  )
};

export default ToolBar;
