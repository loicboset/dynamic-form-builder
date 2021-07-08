import './App.css';

import FormBuilder from './components/FormBuilder';
import FormReader from './components/FormReader';

function App() {
  return (
    <div className="flex w-full h-screen">
      <FormBuilder />
      <FormReader />
    </div>
  );
}

export default App;
