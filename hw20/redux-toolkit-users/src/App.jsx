import UserList from './UserList';

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Список пользователей</h1>
      <UserList />
    </div>
  );
}

export default App;