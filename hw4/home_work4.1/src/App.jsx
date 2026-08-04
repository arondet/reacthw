import { useState } from 'react';
import CitySelector, { citiesData } from './CitySelector';
import CityCard from './CityCard';

function App() {
  const [selectedCity, setSelectedCity] = useState(citiesData[0]);

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#6b9e6b',
        margin: 0,
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          width: '100%',
          padding: '20px',
          background: '#8fbc8f',
          border: '3px solid #90ee90',
          borderRadius: '20px',
          fontFamily: '"Times New Roman", serif',
          textAlign: 'center',
        }}
      >
        <CitySelector onSelectCity={setSelectedCity} />
        <CityCard city={selectedCity} />
      </div>
    </div>
  );
}

export default App;