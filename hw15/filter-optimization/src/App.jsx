import { useState, useCallback, useMemo } from 'react';
import UserList from './UserList';

const userList = [
  { id: 1, name: 'Иван Петров' },
  { id: 2, name: 'Мария Смирнова' },
  { id: 3, name: 'Алексей Кузнецов' },
  { id: 4, name: 'Дарья Иванова' },
  { id: 5, name: 'Сергей Волков' },
];

function App() {
  const [filter, setFilter] = useState('');

  const filterUsers = useCallback((text) => {
    return userList.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
  }, []);

  const filteredUsers = useMemo(() => {
    return filterUsers(filter);
  }, [filter, filterUsers]);

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Фильтр пользователей</h1>
      <input
        type="text"
        placeholder="Введите имя..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '20px' }}
      />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;