import { connect } from 'react-redux';

function User({ name, status }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.status}>
        Статус:{' '}
        <span style={status === 'online' ? styles.online : styles.offline}>
          {status}
        </span>
      </p>
    </div>
  );
}

const styles = {
  card: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    maxWidth: '350px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  name: {
    margin: 0,
    fontSize: '22px',
  },
  status: {
    fontSize: '15px',
    color: '#555',
  },
  online: {
    color: '#2e7d32',
    fontWeight: 700,
  },
  offline: {
    color: '#c62828',
    fontWeight: 700,
  },
};

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

export default connect(mapStateToProps)(User);