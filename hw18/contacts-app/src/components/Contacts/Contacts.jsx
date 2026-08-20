import snapchatLogo from '../../assets/snapchat.png';
import facebookLogo from '../../assets/facebook.png';
import xLogo from '../../assets/x.png';
import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.infoBlock}>
        <h1 className={styles.title}>Контакты</h1>

        <ul className={styles.contactList}>
          <li>Телефон: +7 (900) 123-45-67</li>
          <li>Email: info@example.com</li>
        </ul>

        <form className={styles.form}>
          <input type="email" placeholder="Ваш email" className={styles.input} />
          <input type="text" placeholder="Ваше имя" className={styles.input} />
          <input type="text" placeholder="Ваше сообщение" className={styles.input} />
          <button type="submit" className={styles.button}>
            Отправить
          </button>
        </form>
      </div>

      <div className={styles.socialBlock}>
        <p className={styles.socialText}>Найдите нас на:</p>
        <div className={styles.socialLinks}>
          <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
            <img src={snapchatLogo} alt="Snapchat" className={styles.icon} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" className={styles.icon} />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <img src={xLogo} alt="X" className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;