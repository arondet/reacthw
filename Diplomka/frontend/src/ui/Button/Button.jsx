import styles from './Button.module.css';

const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  disabled = false,
  onClick,
  className = '',
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`${styles.button} ${styles[variant]} ${className}`}
  >
    {children}
  </button>
);

export default Button;
