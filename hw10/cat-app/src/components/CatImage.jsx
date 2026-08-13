import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CatImage.module.css';

function CatImage() {
  const [catUrl, setCatUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchCat = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://api.thecatapi.com/v1/images/search'
      );
      setCatUrl(response.data[0].url);
    } catch (error) {
      console.error('Ошибка при загрузке изображения кота:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Случайный котик</h1>

      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <img src={catUrl} alt="Случайный кот" className={styles.image} />
      )}

      <button className={styles.button} onClick={fetchCat}>
        Новый котик
      </button>
    </div>
  );
}

export default CatImage;