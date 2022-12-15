import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import AnimalDisplay from './components/AnimalDisplay';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <AnimalDisplay />
    </div>
  );
}

export default App;
