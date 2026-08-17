import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import styles from '../styles/Filter.module.css';

function Filter({ filter, setFilter }) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="Поиск пользователя..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);