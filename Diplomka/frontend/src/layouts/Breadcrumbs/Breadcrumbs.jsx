import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ items }) => (
  <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
    {items.map((item, index) => {
      const isLast = index === items.length - 1;
      return (
        <span key={`${item.label}-${index}`} className={styles.crumb}>
          {item.to && !isLast ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
          {!isLast && <span className={styles.separator}>/</span>}
        </span>
      );
    })}
  </nav>
);

export default Breadcrumbs;
