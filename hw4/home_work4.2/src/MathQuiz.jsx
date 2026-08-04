import { useState } from 'react';
import Answer from './Answer';

function MathQuiz() {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);

  const [points, setPoints] = useState(0);

  function updatePoints(value) {
    setPoints((prevPoints) => prevPoints + value);
  }

  return (
    <div
      style={{
        background: 'lightblue',
        border: '1px solid purple',
        borderRadius: '10px',
        padding: '30px',
      }}
    >
      <h1>Ваши очки: {points}</h1>
      <h1>{`${a} + ${b} = ?`}</h1>
      <Answer a={a} b={b} updatePoints={updatePoints} />
    </div>
  );
}

export default MathQuiz;