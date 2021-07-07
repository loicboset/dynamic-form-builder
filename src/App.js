import './App.css';
import { DndContext } from '@dnd-kit/core';

import FormBuilder from './components/FormBuilder';
import FormReader from './components/FormReader';

function App() {
  return (
    <div className="flex w-full h-screen">
      <DndContext>
        <FormBuilder />
        <FormReader />
      </DndContext>
    </div>
  );
}

export default App;
