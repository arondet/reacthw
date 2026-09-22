import { Link } from 'react-router-dom';
import styles from './PromoBanner.module.css';

const PromoBanner = () => (
  <section className={styles.banner}>
    <h1 className={styles.title}>Amazing Discounts on Pets Products!</h1>
    <Link to="/sale" className={styles.button}>
      Check out
    </Link>
  </section>
);

export default PromoBanner;
