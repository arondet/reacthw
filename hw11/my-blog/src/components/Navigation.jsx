import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Статьи
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;