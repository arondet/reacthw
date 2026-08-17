import { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from './redux/actions';

function UserForm({ setUserInfo }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('online');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      setError('Имя не может быть пустым');
      return;
    }

    setError('');
    setUserInfo(name, status);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.field}>
        <label style={styles.label}>Имя</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          placeholder="Введите имя"
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Статус</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={styles.input}
        >
          <option value="online">online</option>
          <option value="offline">offline</option>
          <option value="busy">busy</option>
        </select>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      <button type="submit" style={styles.button}>
        Сохранить
      </button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: '350px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 600,
  },
  input: {
    padding: '8px 10px',
    fontSize: '14px',
    border: '1px solid #999',
    borderRadius: '6px',
  },
  error: {
    color: '#c62828',
    fontSize: '13px',
    margin: 0,
  },
  button: {
    padding: '10px',
    background: '#4361ee',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '15px',
    cursor: 'pointer',
  },
};

const mapDispatchToProps = {
  setUserInfo,
};

export default connect(null, mapDispatchToProps)(UserForm);