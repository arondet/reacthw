import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './MainLayout.module.css';

const MainLayout = () => (
  <>
    <Header />
    <main className={styles.main}>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default MainLayout;
