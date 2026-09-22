import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`container ${styles.inner}`}>
      <h2 className={styles.title}>Contact</h2>

      <div className={styles.grid}>
        <div className={styles.cell}>
          <span className={styles.label}>Phone</span>
          <a href="tel:+493091588492" className={styles.value}>
            +49 30 915-88492
          </a>
        </div>

        <div className={styles.cell}>
          <span className={styles.label}>Socials</span>
          <div className={styles.socials}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src="/images/ic-instagram.png" width={20} height={20} alt="" />
            </a>
            <a href="https://wa.me/493091588492" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <img src="/images/ic-whatsapp.png" width={20} height={20} alt="" />
            </a>
          </div>
        </div>

        <div className={styles.cell}>
          <span className={styles.label}>Address</span>
          <span className={styles.value}>Wallstraße 9-13, 10179 Berlin, Deutschland</span>
        </div>

        <div className={styles.cell}>
          <span className={styles.label}>Working Hours</span>
          <span className={styles.value}>24 hours a day</span>
        </div>
      </div>

      <div className={styles.mapWrap}>
        <iframe
          title="Магазин на карте"
          src="https://www.google.com/maps?q=Wallstra%C3%9Fe%209-13,%2010179%20Berlin&output=embed"
          width="100%"
          height="260"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className={styles.bottom}>
        <span className={styles.brand}>
          <img src="/images/logo.png" width={18} height={18} alt="" /> PetShop
        </span>
        <span>© {new Date().getFullYear()} PetShop. Учебный проект.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
