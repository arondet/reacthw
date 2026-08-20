import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';

function Home() {
  return <h1 style={{ textAlign: 'center', marginTop: '60px' }}>Главная страница</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '15px 20px', background: '#1a1a2e' }}>
        <Link to="/" style={{ color: '#fff', marginRight: '20px' }}>
          Главная
        </Link>
        <Link to="/contacts" style={{ color: '#fff' }}>
          Контакты
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;