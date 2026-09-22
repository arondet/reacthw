import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  useDocumentTitle('Not found');

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.code}>
        <img src="/images/digit-4.png" alt="4" />
        <img src="/images/not-found-pet.png" alt="" className={styles.pet} />
        <img src="/images/digit-4.png" alt="4" />
      </div>
      <h1>Page Not Found</h1>
      <p>We&apos;re sorry, the page you requested could not be found.</p>
      <p>Please go back to the homepage.</p>
      <Link to="/" className={styles.button}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
