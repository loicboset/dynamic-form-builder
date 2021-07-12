import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

import DragHandle from '../components/builders/ui/DragHandle';


const withGrabHandle = (WrappedComponent) => {
  return function (props) {

    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
    } = useSortable({id: props.id});

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <div className='flex mb-4' ref={setNodeRef} style={style}>
        <DragHandle atttributes={attributes} listeners={listeners} />
        <WrappedComponent {...props} />
      </div>
    )
  }
};

export { withGrabHandle };
