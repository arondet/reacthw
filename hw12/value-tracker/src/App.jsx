import { useState } from 'react';
import ValueDisplay from './ValueDisplay';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="container">
      <h1 className="title">Current and Previous Value</h1>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ValueDisplay value={value} />
    </div>
  );
}

export default App;