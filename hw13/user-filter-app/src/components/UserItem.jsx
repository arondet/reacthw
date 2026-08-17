import styles from '../styles/UserItem.module.css';

function UserItem({ user }) {
  return <li className={styles.item}>{user.name}</li>;
}

export default UserItem;