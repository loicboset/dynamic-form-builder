// import React from 'react';
// import {useSortable} from '@dnd-kit/sortable';
// import {CSS} from '@dnd-kit/utilities';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

// export function TestSortableItem(props) {
//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//     transition,
//   } = useSortable({id: props.id});

//   const { input, handleChangeInput } = props;

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//   };

//   return (
//     <div className='flex mb-4' ref={setNodeRef} style={style}>
//       <button className='p-2 my-4 mr-2 border-r-2 focus:border-blue-300' {...attributes} {...listeners}>
//         <FontAwesomeIcon icon={faBars} />
//       </button>

//       <div className='flex-1'>
//         <div>
//           <span>Type: Short Text</span>
//           <div>
//             <label htmlFor='maxLength'className='mr-2'>Max length:</label>
//             <input
//               name='maxLength'
//               value={input.maxLength}
//               onChange={(e) => handleChangeInput(input.id, e.target.name, e.target.value)}
//             />
//           </div>
//           <div className='select-none'>
//             <span
//               name='required'
//               className={`cursor-pointer ${input.required ? '' : 'text-gray-300'}`}
//               onClick={(e) => {
//                 handleChangeInput(
//                   input.id, e.target.getAttribute('name'), !input.required
//                 );
//               }}
//             >
//               Required
//             </span>
//           </div>
//           <div className='select-none'>
//             <span
//               name='private'
//               className={`cursor-pointer ${input.private ? '' : 'text-gray-300'}`}
//               onClick={(e) => {
//                 handleChangeInput(
//                   input.id, e.target.getAttribute('name'), !input.private
//                 );
//               }}
//             >
//               Private
//             </span>
//           </div>
//         </div>

//         <div className='p-2 mt-4 bg-gray-100'>
//           <div>
//             <input
//               name='name'
//               className='bg-gray-100 focus-within:outline-none'
//               size={input.name.length}
//               value={input.name}
//               onChange={(e) => handleChangeInput(input.id, e.target.name, e.target.value)}
//             />
//             {input.required && <abbr title='required'>*</abbr>}
//             {input.private && <span className={input.required ? 'ml-2' : ''}>(private field)</span>}
//           </div>
//           <div>
//             <input
//               name='placeholder'
//               className='w-full p-1 text-gray-400 border border-black rounded'
//               value={input.placeholder}
//               onChange={(e) => handleChangeInput(input.id, e.target.name, e.target.value)}
//             />
//           </div>
//           <div>
//             {input.maxLength > 0 && <span>{input.maxLength} characters remaining</span>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
