import Filter from './components/Filter';
import UserList from './components/UserList';

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Список пользователей</h1>
      <Filter />
      <UserList />
    </div>
  );
}

export default App;