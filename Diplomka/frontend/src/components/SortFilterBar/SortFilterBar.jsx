import styles from './SortFilterBar.module.css';

const SortFilterBar = ({
  priceFrom,
  setPriceFrom,
  priceTo,
  setPriceTo,
  discountedOnly,
  setDiscountedOnly,
  sortBy,
  setSortBy,
}) => (
  <div className={styles.bar}>
    <div className={styles.field}>
      <span className={styles.label}>Price</span>
      <input
        type="number"
        min="0"
        placeholder="from"
        value={priceFrom}
        onChange={(event) => setPriceFrom(event.target.value)}
        className={styles.numberInput}
      />
      <input
        type="number"
        min="0"
        placeholder="to"
        value={priceTo}
        onChange={(event) => setPriceTo(event.target.value)}
        className={styles.numberInput}
      />
    </div>

    <label className={styles.field}>
      <span className={styles.label}>Discounted items</span>
      <input
        type="checkbox"
        checked={discountedOnly}
        onChange={(event) => setDiscountedOnly(event.target.checked)}
      />
    </label>

    <label className={styles.field}>
      <span className={styles.label}>Sorted</span>
      <select
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
        className={styles.select}
      >
        <option value="default">by default</option>
        <option value="newest">newest</option>
        <option value="price-desc">price: high-low</option>
        <option value="price-asc">price: low-high</option>
      </select>
    </label>
  </div>
);

export default SortFilterBar;
