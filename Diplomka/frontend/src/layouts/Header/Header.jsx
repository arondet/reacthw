import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../../store/slices/cartSlice';
import styles from './Header.module.css';

const NAV_LINKS = [
  { to: '/', label: 'Main Page' },
  { to: '/categories', label: 'Categories' },
  { to: '/products', label: 'All products' },
  { to: '/sale', label: 'All sales' },
];

const Header = () => {
  const cartCount = useSelector(selectCartCount);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} aria-label="PetShop — на главную" onClick={closeMenu}>
          <img src="/images/logo.png" width={34} height={34} alt="" />
          <span>PetShop</span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              onClick={closeMenu}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link to="/cart" className={styles.cartLink} aria-label="Корзина" onClick={closeMenu}>
            <img src="/images/basket.png" width={20} height={20} alt="" />
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </Link>

          <button
            type="button"
            className={styles.burger}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.burgerLines} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
