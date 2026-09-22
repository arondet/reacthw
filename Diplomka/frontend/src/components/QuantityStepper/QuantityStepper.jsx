import styles from './QuantityStepper.module.css';

const QuantityStepper = ({ value, onChange, min = 1 }) => (
  <div className={styles.stepper}>
    <button
      type="button"
      onClick={() => onChange(Math.max(min, value - 1))}
      disabled={value <= min}
      aria-label="Уменьшить количество"
    >
      −
    </button>
    <span>{value}</span>
    <button type="button" onClick={() => onChange(value + 1)} aria-label="Увеличить количество">
      +
    </button>
  </div>
);

export default QuantityStepper;
