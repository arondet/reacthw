import { Provider } from 'react-redux';
import store from './redux/store';
import User from './User';
import UserForm from './UserForm';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
          Управление пользователем
        </h1>
        <User />
        <UserForm />
      </div>
    </Provider>
  );
}

export default App;