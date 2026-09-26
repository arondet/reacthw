import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/authSlice';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="card">
      <h1>Profile</h1>
      <p>Вы успешно авторизованы.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
