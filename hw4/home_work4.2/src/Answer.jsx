import { useState } from 'react';

function Answer({ updatePoints, a, b }) {
  const [userInput, setUserInput] = useState(null);

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Number(userInput) === a + b ? updatePoints(+1) : updatePoints(-1);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Введите ответ" onChange={handleChange} />
        <button type="submit">Проверить</button>
      </form>
    </div>
  );
}

export default Answer;