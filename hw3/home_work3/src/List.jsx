import { useState } from 'react';

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: 'Иван', age: 20 },
    { id: 2, name: 'Мария', age: 22 },
    { id: 3, name: 'Алексей', age: 21 },
    { id: 4, name: 'Марина', age: 19 },
    { id: 5, name: 'Даша', age: 23 },
    { id: 6, name: 'Глеб', age: 24 },
    { id: 7, name: 'Дима', age: 18 },
    { id: 8, name: 'Гриша', age: 20 },
    { id: 9, name: 'Серафим', age: 21 },
  ]);

  const handleRemove = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div className="list-block">
      <h2>Список приглашённых</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name}, {person.age} лет
            <button onClick={() => handleRemove(person.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;